# Sài Gòn Study

Personal study site for Southern (Hồ Chí Minh City) Vietnamese.

- **Tones**: five Southern tones with pitch drawings, Saigon sound rules, listening and reading drills
- **Words**: 344 core Southern words with Hanoi variants and spaced-repetition flashcards
- **Usage**: pronoun builder (anh / chị / cô / chú / em…) and Southern classifier drill
- **Kanji**: Sino-Vietnamese ↔ Japanese on'yomi bridge, sound rules and false friends

Progress is stored in the browser (`localStorage`, `vi_` prefix).

## Files

| File | Purpose |
|---|---|
| `index.html` | The built site (open this, or serve it with GitHub Pages) |
| `index.src.html` | Page source; data is inlined by `build.py` |
| `shared-data.js` | All vocabulary, tones, pronouns, classifiers and kanji data |
| `build.py` | Rebuilds `index.html` from the source and data |
| `make_audio.py` | Makes Southern recordings with FPT.AI (voices `lannhi`, `linhsan`) |
| `audio-list.json` | Every phrase the site can play |

## Southern audio

```
python3 make_audio.py --key YOUR_FPT_AI_KEY --sample    # compare the two Southern voices
python3 make_audio.py --key YOUR_FPT_AI_KEY --voice lannhi
```

Recordings are saved to `audio/<key>.mp3` with `audio/manifest.json`. Commit the `audio/` folder and the site
plays them automatically on GitHub Pages. Phrases without a recording fall back to the device voice.
Re-running the script only records new phrases.

## Hosting

Settings → Pages → Deploy from a branch → `main` / root.
