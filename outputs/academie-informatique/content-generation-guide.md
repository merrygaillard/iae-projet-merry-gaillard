# Académie Informatique — Guide de Génération de Contenu

**Objectif :** Vous permettre de générer autonomement des leçons, exercices et quiz pour tous les niveaux (intermédiaire, avancé, bonus) et langages (JavaScript, Python, SQL).

## Vue d'ensemble du processus

Pour chaque leçon, suivez ce cycle en trois étapes :

1. **Générer la leçon** → Skill `mon-generate-lessons`
2. **Générer 20 exercices** → Skill `mon-generate-exercises`
3. **Générer 50 quiz** → Skill `mon-generate-quizzes` (une fois par niveau/langage)

**Temps estimé par leçon :** 15–20 minutes (incluant l'intégration dans le site)

---

## Étape 1 : Générer une leçon

### Commande à utiliser
```
/mon-generate-lessons
```

### Paramètres à fournir dans la conversation
- **Concept** : Le sujet de la leçon (ex: « les boucles », « les fonctions », « les jointures SQL »)
- **Langage** : JavaScript, Python ou SQL
- **Niveau** : débutant, intermédiaire, avancé ou bonus
- **Optionnel** : Vos notes spéciales (« Important : expliquer bien la récursion »)

### Exemple
```
/mon-generate-lessons

Concept : les boucles
Langage : JavaScript
Niveau : intermédiaire
Notes : Expliquer bien for...in vs for...of
```

### Livrable attendu
- Un fichier HTML de la leçon
- Un fichier Markdown (pour révision)
- Métadonnées : titre, durée, concepts clés, sources

### Où l'enregistrer
- **Dossier** : `outputs/academie-informatique/lessons/<concept>_<langage>_<niveau>/`
- **Exemple** : `outputs/academie-informatique/lessons/les-boucles_javascript_intermediaire/`

---

## Étape 2 : Générer 20 exercices

### Commande à utiliser
```
/mon-generate-exercises
```

### Paramètres à fournir
- **Concept** : Le même concept que la leçon
- **Langage** : JavaScript, Python ou SQL
- **Niveau** : débutant, intermédiaire, avancé ou bonus

### Exemple
```
/mon-generate-exercises

Concept : les boucles
Langage : JavaScript
Niveau : intermédiaire
```

### Livrable attendu
- Fichier JSON avec 20 exercices (10 QCM + 5 texte à trou + 5 texte libre)
- Chaque exercice inclut : énoncé, options, bonne réponse, explication, indices progressifs

### Où l'enregistrer
- **Fichier** : `outputs/academie-informatique/exercises/<concept>_<langage>_<niveau>.json`
- **Exemple** : `outputs/academie-informatique/exercises/les-boucles_javascript_intermediaire.json`

---

## Étape 3 : Générer un quiz (1 fois par niveau/langage)

### Commande à utiliser
```
/mon-generate-quizzes
```

### Paramètres à fournir
- **Langage** : JavaScript, Python ou SQL
- **Niveau** : débutant, intermédiaire, avancé ou bonus

### Exemple
```
/mon-generate-quizzes

Langage : JavaScript
Niveau : intermédiaire
```

### Livrable attendu
- Fichier JSON avec 50 questions QCM couvrant tous les concepts du niveau
- Scoring automatique : 2 points/question, seuil 75/100 (15/20) pour passer

### Où l'enregistrer
- **Fichier** : `outputs/academie-informatique/quizzes/quiz_<langage>_<niveau>.json`
- **Exemple** : `outputs/academie-informatique/quizzes/quiz_javascript_intermediaire.json`

**Important :** Un seul quiz par niveau/langage (réutilisé pour toutes les leçons du niveau).

---

## Intégration dans le site

Après générer une leçon et ses exercices, intégrez-les dans `/docs/js/navigation.js` :

### Structure pour une nouvelle leçon

```javascript
{
  id: 'les-boucles_javascript_intermediaire',
  title: 'Les boucles',
  language: 'javascript',
  level: 'intermediaire',
  description: 'Découvrez for...in, for...of et les méthodes de tableau.',
  duration: '15 min',
  concepts: ['for...in', 'for...of', 'forEach', 'map', 'filter'],
  content: `
    <h2>Les boucles avancées</h2>
    <p>...</p>
    <!-- Contenu HTML de la leçon -->
  `,
  sources: [
    { url: 'https://...', title: 'MDN — for...of' },
    { url: 'https://...', title: 'MDN — Array.prototype.forEach' }
  ]
}
```

### Structure pour les exercices

```javascript
{
  lessonId: 'les-boucles_javascript_intermediaire',
  exercises: [
    {
      id: 'boucles_intermediaire_qcm_1',
      type: 'mcq',
      difficulty: 'facile',
      question: 'Quelle est la différence entre for...in et for...of ?',
      options: [/* ... */],
      correctAnswer: 0,
      explanation: '...',
      hints: ['Indice 1: ...', 'Indice 2: ...']
    },
    // ... 19 autres exercices
  ]
}
```

### Fichier à modifier
- **Fichier** : `/docs/js/navigation.js`
- **Action** : Ajouter la leçon à `lessonsData` et les exercices à `exercisesData_<Langage>_<Niveau>`

---

## Roadmap complète pour votre présentation

### Niveau Débutant ✅ (TERMINÉ)
- [x] JavaScript : Les variables (leçon + 20 exercices)
- [x] JavaScript : Les types de données (leçon + 20 exercices)
- [x] JavaScript : Les opérateurs (leçon + 20 exercices)
- [x] Python : Les variables (leçon + 20 exercices)
- [x] Python : Les types de données (leçon + 20 exercices)
- [x] Python : Les opérateurs (leçon + 20 exercices)
- [x] SQL : Le SELECT (leçon + 20 exercices)
- [x] SQL : La clause WHERE (leçon + 20 exercices)
- [x] SQL : Les jointures (leçon + 20 exercices)
- [x] Quiz débutant : JavaScript, Python, SQL

### Niveau Intermédiaire (À FAIRE)
#### JavaScript
- [ ] Les boucles (for, while, for...in, for...of)
- [ ] Les fonctions (déclaration, paramètres, retour, fonction fléchée)
- [ ] Les objets (création, propriétés, méthodes)
- [ ] Les tableaux avancés (map, filter, reduce)
- [ ] La manipulation du DOM (querySelector, addEventListener)

#### Python
- [ ] Les listes et compréhensions
- [ ] Les dictionnaires
- [ ] Les fonctions (def, paramètres, retour)
- [ ] Les modules courants (datetime, random, math)
- [ ] La lecture/écriture de fichiers

#### SQL
- [ ] Les jointures INNER, LEFT, RIGHT, FULL
- [ ] Le GROUP BY et les agrégats (COUNT, SUM, AVG)
- [ ] Les sous-requêtes
- [ ] Les vues
- [ ] L'optimisation (indexes, EXPLAIN)

**Temps estimé pour intermédiaire :** 2–3 heures (15 leçons × 12–15 min)

### Niveau Avancé (À FAIRE)
#### JavaScript
- [ ] Les closures et la portée lexicale
- [ ] Les Promises et async/await
- [ ] Les destructurations
- [ ] Les classes ES6
- [ ] La programmation fonctionnelle

#### Python
- [ ] Les décorateurs
- [ ] Les générateurs
- [ ] La programmation orientée objet
- [ ] Les tests unitaires (unittest)
- [ ] Les environnements virtuels

#### SQL
- [ ] Les transactions et ACID
- [ ] Les triggers
- [ ] Les procédures stockées
- [ ] La sécurité (SQL injection, permissions)
- [ ] La réplication et la sauvegarde

**Temps estimé pour avancé :** 2–3 heures

### Bonus (Optionnel)
- [ ] Projets intégrés (ex: une petite API avec JavaScript et SQL)
- [ ] Cas d'usage réels (ex: data cleaning avec Python)

---

## Checklist pour chaque nouvelle leçon

Avant de considérer une leçon comme terminée :

- [ ] Leçon générée (HTML + métadonnées)
- [ ] 20 exercices générés (JSON avec 10 QCM + 5 texte à trou + 5 texte libre)
- [ ] Contenu intégré dans `/docs/js/navigation.js`
- [ ] Site testé localement (leçon affichée, exercices cliquables)
- [ ] Scoring fonctionne (15/20 = succès)
- [ ] Commit GitHub (« Ajouter leçon : <titre> »)

---

## Automatisation rapide

### Générer un niveau complet en une session

Pour générer un niveau entier (ex: intermédiaire en JS) :

1. **Générer toutes les leçons** :
   - Lancez `/mon-generate-lessons` 5 fois (une par concept)
   - Attendez les 5 fichiers HTML

2. **Générer tous les exercices** :
   - Lancez `/mon-generate-exercises` 5 fois
   - Attendez les 5 fichiers JSON

3. **Générer le quiz du niveau** :
   - Lancez `/mon-generate-quizzes` une fois (couvre tous les concepts)

4. **Intégrer en bloc** :
   - Modifiez `/docs/js/navigation.js` une seule fois avec toutes les leçons et exercices

**Temps total :** 1.5–2 heures pour un niveau (3 langages × 5 concepts)

---

## Dépannage courant

### La leçon générée ne s'affiche pas
- Vérifiez que le HTML est valide (pas de balises manquantes)
- Vérifiez que `lessonsData` contient la leçon
- Ouvrez les DevTools du navigateur (F12) et regardez la console

### Les exercices ne comptent pas
- Vérifiez que les 20 exercices sont dans `exercisesData_<Langage>_<Niveau>`
- Vérifiez que le format JSON est correct (indices valides, options comptent au moins 2)
- Vérifiez que le `lessonId` correspond à l'ID de la leçon

### Le quiz ne s'affiche pas
- Vérifiez que le fichier `quiz_<langage>_<niveau>.json` existe
- Vérifiez que les 50 questions sont présentes et bien formatées
- Vérifiez que le score minimum (75/100) est atteint pour débloquer le niveau suivant

---

## Conseils pour la qualité

### Avant de soumettre une leçon
- Relisez l'HTML généré pour les erreurs d'orthographe ou de format
- Vérifiez que tous les exemples de code sont corrects
- Testez que les sources cliquent bien (URLs valides)

### Avant de soumettre les exercices
- Vérifiez que les 10 QCM ont une seule bonne réponse évidente
- Vérifiez que les 5 textes à trou ont des réponses courtes et claires
- Vérifiez que les 5 textes libres demandent une compréhension vraie, pas juste une mémorisation

### Avant de soumettre un quiz
- Vérifiez que toutes les 50 questions couvrent le niveau (pas seulement débutant)
- Vérifiez que les distracteurs ne sont pas évidentes
- Faites un test : vous pouvez compléter 75/100 ? Si non, le quiz est trop difficile

---

## Contact et révisions

**Prochaine revue :** 2026-10-21 (2 semaines)

Si vous avez des questions ou rencontrez des problèmes :
1. Relisez ce guide (section Dépannage)
2. Laissez un message dans la conversation avec : concept, langage, niveau, et détails du problème
3. Je vous aiderai à corriger et continuer

**Bon courage pour votre présentation ! 🚀**
