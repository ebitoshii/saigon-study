#!/usr/bin/env python3
"""Inline shared-data.js (and audio-data.js, if present) into index.html."""
import json, os
HERE = os.path.dirname(os.path.abspath(__file__))
rd = lambda f: open(os.path.join(HERE, f), encoding='utf-8').read()
src = rd('index.src.html')
data = rd('shared-data.js') + '\nconst AUDIO_LIST_SIZE = %d;\n' % len(json.loads(rd('audio-list.json')))
audio = rd('audio-data.js') if os.path.exists(os.path.join(HERE, 'audio-data.js')) else ''
out = src.replace('/*DATA*/', data).replace('/*AUDIO*/', audio)
open(os.path.join(HERE, 'index.html'), 'w', encoding='utf-8').write(out)
print('index.html: %.1f KB%s' % (len(out.encode()) / 1024, ' (with recordings)' if audio else ''))
