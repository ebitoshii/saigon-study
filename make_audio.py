#!/usr/bin/env python3
"""
Sài Gòn Study — make Southern Vietnamese recordings with FPT.AI text-to-speech.

One-time setup:
  1. Make a free account at https://console.fpt.ai and copy your API key.
  2. Put this script next to audio-list.json and run:

       python3 make_audio.py --key YOUR_KEY --sample      # 5 words in both Southern voices, to compare
       python3 make_audio.py --key YOUR_KEY --voice lannhi
       python3 make_audio.py --bundle                       # pack everything into audio-data.js

Southern voices: lannhi, linhsan (both female).
Files are saved as audio/<key>.mp3. Re-running skips files you already have,
so you can stop and resume at any time. Only the Python standard library is used.
"""
import argparse, json, os, sys, time, unicodedata, base64, urllib.request, urllib.error

API = 'https://api.fpt.ai/hmi/tts/v5'
HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, 'audio')


def norm(text):
    return unicodedata.normalize('NFC', text).replace('…', '').strip()


def audio_key(text):
    """FNV-1a 32-bit over UTF-8 bytes; must match viAudioKey() in shared-data.js."""
    h = 0x811c9dc5
    for b in norm(text).encode('utf-8'):
        h ^= b
        h = (h * 0x01000193) & 0xFFFFFFFF
    return '%08x' % h


def request_tts(text, key, voice, speed):
    body = norm(text)
    while len(body) < 3:          # API minimum is 3 characters
        body += '.'
    req = urllib.request.Request(API, data=body.encode('utf-8'), method='POST', headers={
        'api_key': key, 'voice': voice, 'speed': str(speed), 'format': 'mp3',
        'Content-Type': 'text/plain; charset=utf-8'})
    with urllib.request.urlopen(req, timeout=30) as r:
        data = json.loads(r.read().decode('utf-8'))
    if data.get('error') != 0 or not data.get('async'):
        raise RuntimeError('FPT.AI said: %s' % data.get('message', data))
    return data['async']


def fetch_when_ready(url, tries=40, wait=1.5):
    for _ in range(tries):
        try:
            with urllib.request.urlopen(url, timeout=30) as r:
                blob = r.read()
                if len(blob) > 500:
                    return blob
        except urllib.error.HTTPError as e:
            if e.code not in (403, 404):
                raise
        time.sleep(wait)
    raise TimeoutError('audio was not ready after %d tries' % tries)


def make(texts, key, voice, speed, out_dir, pause):
    os.makedirs(out_dir, exist_ok=True)
    todo = [t for t in texts if not os.path.exists(os.path.join(out_dir, audio_key(t) + '.mp3'))]
    print('%d phrases, %d already done, %d to make (voice: %s)' % (len(texts), len(texts) - len(todo), len(todo), voice))
    failed = []
    for i, t in enumerate(todo, 1):
        try:
            blob = fetch_when_ready(request_tts(t, key, voice, speed))
            with open(os.path.join(out_dir, audio_key(t) + '.mp3'), 'wb') as f:
                f.write(blob)
            print('[%d/%d] %s' % (i, len(todo), t))
        except Exception as e:  # keep going; re-run to retry failures
            failed.append(t)
            print('[%d/%d] FAILED %s — %s' % (i, len(todo), t, e))
            if 'api_key' in str(e).lower() or 'unauthor' in str(e).lower():
                sys.exit('Check your API key, then run again.')
        time.sleep(pause)
    return failed


def write_manifest():
    keys = sorted(f[:-4] for f in os.listdir(OUT) if f.endswith('.mp3'))
    with open(os.path.join(OUT, 'manifest.json'), 'w') as f:
        json.dump(keys, f)
    print('manifest.json lists %d recordings' % len(keys))


def bundle():
    keys = sorted(f[:-4] for f in os.listdir(OUT) if f.endswith('.mp3'))
    parts = []
    for k in keys:
        with open(os.path.join(OUT, k + '.mp3'), 'rb') as f:
            parts.append('"%s":"data:audio/mpeg;base64,%s"' % (k, base64.b64encode(f.read()).decode()))
    path = os.path.join(HERE, 'audio-data.js')
    with open(path, 'w') as f:
        f.write('const VI_AUDIO_DATA={' + ',\n'.join(parts) + '};\n')
    print('Wrote audio-data.js with %d recordings (%.1f MB). Send this one file to Claude.' % (len(keys), os.path.getsize(path) / 1e6))


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('--key', help='FPT.AI API key')
    ap.add_argument('--voice', default='lannhi', choices=['lannhi', 'linhsan'])
    ap.add_argument('--speed', type=int, default=0, help='-3 (slow) to 3 (fast); the site can also slow playback')
    ap.add_argument('--sample', action='store_true', help='make 5 test words in both Southern voices')
    ap.add_argument('--bundle', action='store_true', help='pack audio/*.mp3 into audio-data.js')
    ap.add_argument('--pause', type=float, default=0.4, help='seconds between requests')
    a = ap.parse_args()

    if a.bundle:
        return bundle()
    if not a.key:
        sys.exit('Add --key YOUR_FPT_AI_KEY (get one free at https://console.fpt.ai)')
    with open(os.path.join(HERE, 'audio-list.json'), encoding='utf-8') as f:
        texts = json.load(f)

    if a.sample:
        words = ['xin chào', 'dạ', 'về nhà', 'bạn', 'cám ơn anh nhiều']
        for v in ('lannhi', 'linhsan'):
            make(words, a.key, v, a.speed, os.path.join(HERE, 'sample-' + v), a.pause)
        print('Listen to sample-lannhi/ and sample-linhsan/, then run again with --voice of your choice.')
        return

    failed = make(texts, a.key, a.voice, a.speed, OUT, a.pause)
    write_manifest()
    if failed:
        print('%d failed. Run the same command again to retry just those.' % len(failed))
    else:
        print('All done. Next: python3 make_audio.py --bundle')


if __name__ == '__main__':
    main()
