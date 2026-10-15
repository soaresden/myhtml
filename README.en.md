# soaresden · the workshop

🇫🇷 [Version française](README.md)

The portfolio of my side projects: https://soaresden.github.io/myhtml/ (in French and English, 🇬🇧 EN / 🇫🇷 FR button).

Everything is generated from **`data.js`**. To add a project, just add an entry there (the fields are described at the top of the file):

- a main category (`cat`), and other ones where it also appears (`also`, e.g. an app in "Android apps");
- for a video game, its game (`game`, `GAMES` table): as soon as a game has several projects, a single tile groups them and a click opens the game's page (`#/jeu/<id>`);
- the English version in `en` (`title`, `kind`, `desc`) and in the `en` of each sub-link.

Files:

- `index.html`: page skeleton
- `styles.css`: light/dark theme, icon rail (desktop) / "Categories" button + grid (mobile), each category's colour and animation, tiles, project sheet
- `script.js`: language, navigation (`#/plongee`, `#/jeu/nfsmw`…), grouping by game, search, project sheet, and the grid sizing so that everything fits on screen without scrolling
- `art.js`: SVG illustrations (400×150) for projects without a screenshot
- `shots/`: 900×337 screenshots (8:3 ratio)

After a CSS/JS change, bump the `?v=` in `index.html`; after replacing a screenshot, bump `SHOTS_VERSION` in `script.js`. Otherwise browsers keep the old version in cache.
