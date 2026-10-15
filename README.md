# soaresden · l'atelier

🇬🇧 [English version](README.en.md)

Le portfolio de mes side projects : https://soaresden.github.io/myhtml/ (en français et en anglais, bouton 🇬🇧 EN / 🇫🇷 FR).

Tout est généré depuis **`data.js`**. Pour ajouter un projet, il suffit d'y ajouter une entrée (les champs sont décrits en tête du fichier) :

- une catégorie principale (`cat`), et d'autres où il apparaît aussi (`also`, ex. une appli dans « Applis Android ») ;
- pour un jeu vidéo, son jeu (`game`, table `GAMES`) : dès qu'un jeu a plusieurs projets, une seule vignette les regroupe et un clic ouvre la page du jeu (`#/jeu/<id>`) ;
- la version anglaise dans `en` (`title`, `kind`, `desc`) et dans `en` de chaque sous-lien.

Fichiers :

- `index.html` : squelette de la page
- `styles.css` : thème clair/sombre, colonne d'icônes (ordinateur) / bouton « Catégories » + grille (mobile), couleur et animation de chaque catégorie, vignettes, fiche
- `script.js` : langue, navigation (`#/plongee`, `#/jeu/nfsmw`…), regroupement par jeu, recherche, fiche projet, et calcul de la grille pour que tout tienne dans l'écran sans défiler
- `art.js` : illustrations SVG (400×150) pour les projets sans capture
- `shots/` : captures 900×337 (ratio 8:3)

Après une modif de CSS/JS, monter le `?v=` dans `index.html` ; après avoir remplacé une capture, monter `SHOTS_VERSION` dans `script.js`. Sinon les navigateurs gardent l'ancienne version en cache.
