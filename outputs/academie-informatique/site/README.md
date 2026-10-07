# 🎓 Académie Informatique - Site Web

Site d'apprentissage interactif pour JavaScript, Python et SQL avec leçons, exercices et quiz.

## 📋 Contenu

- **Leçons** : Explications progressives avec sources académiques
- **Exercices** : 20 questions (QCM + texte + libre) par leçon
- **Quiz** : 50 questions finales par niveau (50/100 points de réussite)
- **Progression** : Suivi des niveaux et déverrouillage automatique

## 🗂️ Structure du site

```
site/
├── index.html                # Page principale
├── css/
│   ├── main.css             # Styles + palette de couleurs modifiable
│   └── responsive.css       # Design responsive (mobile, tablette, desktop)
├── js/
│   ├── navigation.js        # Navigation entre leçons/niveaux
│   ├── progress.js          # Suivi progression
│   ├── exercises.js         # Correction exercices
│   └── quiz.js              # Scoring quiz
└── README.md                # Ce fichier
```

## 🎨 Palette de couleurs

Modifiez les couleurs en haut de `css/main.css` dans `:root` :

```css
:root {
  --color-primary: #1a3a52;        /* Bleu foncé */
  --color-secondary: #c4a574;      /* Camel */
  --color-accent: #f5e6d3;         /* Beige */
  --color-bg: #ffffff;             /* Blanc */
  --color-success: #27ae60;         /* Vert (succès) */
  --color-error: #e74c3c;          /* Rouge (échec) */
  --color-text: #2c3e50;           /* Gris foncé */
  --color-border: #bdc3c7;         /* Gris clair */
}
```

## 🚀 Démarrage

1. Ouvrez `index.html` dans votre navigateur
2. Sélectionnez un langage (JavaScript, Python, SQL)
3. Choisissez votre niveau (Débutant → Intermédiaire → Avancé)
4. Lisez les leçons, faites les exercices, passez le quiz

## ✅ Critères de réussite

- **Exercices** : 15/20 points (75%)
- **Quiz** : 75/100 points (15/20)

Réussissez le quiz pour déverrouiller le niveau suivant.

## 🔒 Sécurité

- Protection contre XSS (échappement HTML)
- Validation côté client des inputs
- Pas de données sensibles stockées localement

## 📱 Responsive

- ✅ Mobile (320px+)
- ✅ Tablette (768px+)
- ✅ Desktop (1024px+)

## 💾 Progression

Les progrès sont sauvegardés dans `localStorage` (navigateur).

## 🎯 État du contenu

### JavaScript
- ✅ **Débutant** : Leçon "Les variables" + 20 exercices + 50 quiz
- 🟡 **Intermédiaire** : À venir
- 🟡 **Avancé** : À venir

### Python
- 🟡 **Débutant** : À venir
- 🟡 **Intermédiaire** : À venir
- 🟡 **Avancé** : À venir

### SQL
- 🟡 **Débutant** : À venir
- 🟡 **Intermédiaire** : À venir
- 🟡 **Avancé** : À venir

## 🔧 Développement futur

- [ ] Ajouter d'autres leçons (boucles, conditions, fonctions, etc.)
- [ ] Implémenter les exercices interactifs
- [ ] Ajouter le quiz fonctionnel
- [ ] Ajouter d'autres langages (Python, SQL)
- [ ] Certificats de réussite
- [ ] Export des progrès en PDF

## 📝 Notes

- Tout le contenu est stocké localement
- Aucun serveur n'est nécessaire pour le fonctionnement de base
- Le site est responsive et fonctionne sur tous les appareils

---

**Créé avec** ❤️ **par Claude Code**
