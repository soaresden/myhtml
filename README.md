# Portfolio Modulaire - soaresden

Une structure de portfolio **modulaire et maintenable** où ajouter de nouveaux projets est ultra simple ! 

## 📁 Structure des fichiers

```
myhtml/
├── index.html          # HTML principal (très léger!)
├── styles.css          # Tous les styles
├── projects.js         # 📦 DONNÉES DES PROJETS (facile à modifier)
├── main.js             # Logique JavaScript
└── README.md           # Ce fichier
```

## 🚀 Comment ça marche ?

1. **index.html** charge les modules CSS et JavaScript
2. **projects.js** contient toutes les données de vos projets
3. **main.js** génère dynamiquement les sections et cartes à partir des données
4. Les animations et styles viennent de **styles.css**

## ➕ Ajouter un nouveau projet

### Méthode 1: Directement dans `projects.js`

Ouvrez `projects.js` et ajoutez votre projet dans la section appropriée:

```javascript
PROJECTS.games.items.push({
  title: 'Mon Nouveau Jeu',
  type: 'Games · Category',
  desc: 'Description du projet',
  link: 'github.io',
  url: 'https://soaresden.github.io/mon-jeu/',
  art: 'svg',
  isNew: true
});
```

### Méthode 2: Via la console JavaScript

```javascript
ProjectManager.addProject('games', {
  title: 'Titre du projet',
  type: 'Games · Type',
  desc: 'Description courte',
  link: 'github.io',
  url: 'https://...',
  art: 'svg'
});
```

## 🎨 Sections disponibles

- **games** - Assistants de jeu de société
- **music** - Projets musicaux & audio ✨ (WeMeetMusik ajouté!)
- **plongee** - Plongée sous-marine
- **securite** - Sécurité & Outils HSE
- **quizz** - Quiz & Outils d'apprentissage
- **tools** - Outils métier & productivité

## 🎯 Propriétés d'un projet

```javascript
{
  title: 'Titre visible',           // Affiché sur la carte
  type: 'Category · Subcategory',   // Étiquette en haut
  desc: 'Description courte...',    // Texte sur la carte
  url: 'https://...',               // Lien au clic
  link: 'github.io',                // Texte du lien en bas
  art: 'svg' ou 'image',            // Type d'illustration
  isNew: true                        // Optionnel - badge NEW
}
```

## 🎨 Couleurs par catégorie

Modifiez dans `styles.css`:

```css
--c-games:    #ff6b35;    /* Orange */
--c-music:    #c77dff;    /* Violet */
--c-plongee:  #00b4d8;    /* Bleu */
--c-securite: #06d6a0;    /* Vert */
--c-quizz:    #ffd60a;    /* Jaune */
--c-tools:    #ff4d6d;    /* Rose */
```

## 📊 Avant / Après

- **Avant**: index.html = ~1500 lignes (monolithique)
- **Après**: 4 fichiers modulaires (maintenable!)
- **Résultat**: Ajouter un projet = 1 objet JavaScript simple

## ✨ Caractéristiques

- ✅ Structure modulaire et DRY
- ✅ Zéro dépendances
- ✅ Vanilla JavaScript + CSS animé
- ✅ Responsive design
- ✅ Navigation sticky
- ✅ Animations fadeUp
- ✅ Couleurs cohérentes par catégorie

## 🔧 Développement

Ajouter/modifier un projet = éditer un objet JavaScript simple dans `projects.js`. C'est tout!