# soaresden · l'atelier

Le portfolio de mes side projects : https://soaresden.github.io/myhtml/

Tout est généré depuis **`data.js`**. Pour ajouter un projet, il suffit d'y ajouter une entrée (les champs sont décrits en tête du fichier). Un projet a une catégorie principale (`cat`) et peut apparaître dans d'autres avec `also` (ex. une appli dans « Applis Android »).

- `index.html` : squelette de la page
- `styles.css` : thème clair/sombre, colonne d'icônes (ordinateur) / bouton « Catégories » + grille (mobile), vignettes, fiche
- `script.js` : navigation par catégorie (`#/plongee`…), recherche, fiche projet, et calcul de la grille pour que tout tienne dans l'écran sans défiler (liste ou 2 colonnes sur mobile)
- `art.js` : illustrations SVG (400×150) pour les projets sans capture
- `shots/` : captures 900×337 (ratio 8:3)

Après une modif de CSS/JS, monter le `?v=` dans `index.html` ; après avoir remplacé une capture, monter `SHOTS_VERSION` dans `script.js`. Sinon les navigateurs gardent l'ancienne version en cache.
