---
name: mon-build-learning-site
description: Assembler toutes les leçons, exercices et quiz en un site web complet, responsive, avec navigation fluide et suivi de progression.
---

# Construire le site d'apprentissage

## Ce que fait ce skill
Prend **toutes vos leçons, exercices et quiz** et les transforme en un **site web professionnel, responsive** (web, tablette, mobile). Le site inclut :
- Navigation fluide entre les langages (JavaScript, Python, SQL) et niveaux (débutant → intermédiaire → avancé → bonus)
- Barre de progression par langage
- Leçons cliquables avec onglet Sources intégré
- Exercices (20 questions) interactifs avec correction immédiate
- Quiz final du niveau (50 questions) avec scoring automatique
- Feedback widgets (avis) à la fin de chaque leçon/exercice
- Sécurité (protection contre XSS, SQL injection)
- **Palette de couleurs modifiable** (sobres : bleu foncé, camel, beige, blanc, vert succès, rouge échec)

**Livrable :** Dossier complet avec fichiers HTML, CSS, JavaScript prêts à afficher.

## Ce que je fournis en entrée
Vous me donnez dans la conversation :
- **Langages** : JS, Python, SQL (ou sous-ensemble)
- **Niveaux** : débutant, intermédiaire, avancé, bonus (ou sous-ensemble)

Exemple : « Assemble le site pour JavaScript, Python et SQL, tous les niveaux. »

**Optionnel :** Ajustements de couleurs (ex: « utilise plus de bleu foncé, moins de camel »)

## Étapes
1. **Créer la structure HTML** — Page d'accueil, sélecteur de langage, navigateur par niveau.
2. **Intégrer les leçons** — Chaque leçon comme page à part, avec onglet Sources cliquable.
3. **Intégrer les exercices** — 20 questions interactives, correction immédiate (affiche réponse correcte si raté), comptage des points.
4. **Intégrer les quiz** — 50 questions finales, scoring automatique, affiche si réussi (vert) ou échoué (rouge).
5. **Implémenter la progression** — Barre visuelle par langage, déverrouille niveau suivant si quiz réussi (≥15/20).
6. **Créer les styles CSS** — Palette de couleurs modifiable en haut du fichier CSS (variables CSS).
7. **Ajouter JavaScript** — Navigation fluide, suivi progression, feedback widget, validation sécurisée des inputs.
8. **Tester responsive** — Vérifier que tout fonctionne sur mobile, tablette, desktop.

## Règles
- **Français pour contenu, anglais pour code** — Consisistant avec leçons.
- **Navigation fluide** — Un clic pour changer de leçon, pas d'attente.
- **Aucune documentation externe** — Le site est self-contained; tout expliqué dans le site.
- **Feedback immédiat** — L'apprenant voit si sa réponse est correcte en temps réel.
- **Sécurité** — Validation des inputs côté client et serveur (si backend), protection XSS.
- **Responsive** — Mobile (320px+), tablette (768px+), desktop (1024px+).
- **Couleurs faciles à modifier** — Variables CSS en haut de main.css, commentées clairement.
- **Vert = Succès, Rouge = Échec** — Codes de couleur visuels clairs pour quiz.
- **Progression indépendante par langage** — Réussite en JS n'affecte pas Python.

## Quand s'arrêter et me demander
- Les couleurs **ne vous conviennent pas** → Je vous montre un aperçu et vous demandez les ajustements.
- Le site ne s'affiche **pas correctement sur mobile** → Je vous le signale et je corrige CSS.
- Les performances sont **lentes** → Je vous préviens et j'optimise.
- Vous voulez ajouter un élément (ex: section ressources externes, certificat) → Je demande clarification avant de reconstruire.
- Des bugs dans la navigation ou scoring → Je vous les montre, on les corrige ensemble.

## Format de la sortie
Un dossier site complet :

```
outputs/academie-informatique/site/
├── index.html                    (page d'accueil)
├── lesson.html                   (template leçon avec onglet Sources)
├── exercises.html                (template exercices 20Q)
├── quiz.html                     (template quiz final 50Q)
├── css/
│   ├── main.css                  (styles + palette couleurs modifiable)
│   └── responsive.css            (media queries mobile/tablette/desktop)
├── js/
│   ├── navigation.js             (changement de leçon/niveau)
│   ├── progress.js               (suivi progression, déverrouillage)
│   ├── exercises.js              (correction immédiate 20Q)
│   ├── quiz.js                   (scoring automatique 50Q)
│   ├── feedback.js               (widget avis)
│   └── validation.js             (sécurité inputs)
└── data/
    ├── lessons.json              (tous les contenus leçons)
    ├── exercises.json            (tous les exercices)
    └── quizzes.json              (tous les quiz)
```

**Palette de couleurs (modifiable en haut de css/main.css) :**
```css
:root {
  /* Couleurs sobres */
  --color-primary: #1a3a52;        /* Bleu foncé (majorité) */
  --color-secondary: #c4a574;      /* Camel */
  --color-accent: #f5e6d3;         /* Beige */
  --color-bg: #ffffff;             /* Blanc */
  --color-success: #27ae60;         /* Vert (succès) */
  --color-error: #e74c3c;          /* Rouge (échec) */
  --color-text: #2c3e50;           /* Gris foncé (texte) */
  --color-border: #bdc3c7;         /* Gris clair (bordures) */
}
```

**Vous pouvez les changer à tout moment** — pas besoin de toucher au JavaScript, juste modifier les valeurs hex dans `:root`.

## Règles de couleurs
- **Bleu foncé (#1a3a52)** — Headers, barres de navigation, boutons primaires
- **Camel (#c4a574)** — Accents, bordures, certains boutons
- **Beige (#f5e6d3)** — Arrière-plans légers, sections
- **Blanc (#ffffff)** — Arrière-plan principal, cards
- **Vert (#27ae60)** — Réussite QCM/Quiz, messages de succès
- **Rouge (#e74c3c)** — Échec QCM/Quiz, messages d'erreur
