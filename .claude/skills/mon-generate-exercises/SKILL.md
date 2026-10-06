---
name: mon-generate-exercises
description: Générer 3 types d'exercices progressifs (QCM, texte à trou, texte libre) qui challengent vraiment la compréhension.
---

# Générer des exercices

## Ce que fait ce skill
Crée un **ensemble de 20 exercices variés et progressifs** basés sur une leçon. Les exercices testent vraie compréhension (pas juste de la mémorisation), incluent des indices pour aider, et des solutions complètes expliquées.

Vous recevez :
- 10 **QCM** (une seule bonne réponse, distracteurs pensés)
- 5 **Textes à trou** (remplir les mots manquants)
- 5 **Textes libres** (écrire du code ou une explication)

**Total : 20 points** (1 point par question). **Seuil de réussite : 15/20** pour valider le package leçon + exercices.

Chaque exercice a une **difficulté justifiée** et progresse dans la leçon.

**Livrable :** Un fichier avec tous les exercices, solutions et indices.

## Ce que je fournis en entrée
Vous me donnez dans la conversation :
- **Concept** : Le sujet (ex: « les boucles »)
- **Langage** : JavaScript, Python ou SQL
- **Niveau** : débutant, intermédiaire, avancé ou bonus

Exemple : « Génère 20 exercices sur les boucles en JavaScript niveau débutant. »

## Étapes
1. **Relire la leçon** — Je comprends les concepts clés couverts dans la leçon.
2. **Créer 10 QCM** — Questions à choix multiples, une seule bonne réponse, distracteurs pertinents (pas évidents).
3. **Créer 5 textes à trou** — Énoncés où il faut compléter des mots/code. Progressif : facile → moyen → dur.
4. **Créer 5 textes libres** — Exercices où l'apprenant écrit du code ou une explication. Teste la vraie compréhension.
5. **Ajouter indices** — Pour chaque exercice, 1–2 indices graduels (« Indice 1 : regarde... », « Indice 2 : essaie... »).
6. **Écrire solutions** — Solutions complètes et expliquées ligne par ligne (surtout pour les codes).
7. **Vérifier la progression** — S'assurer que d'abord facile, puis moyen, puis difficile. Total : 20 points (1 pt/question).

## Règles
- **3 types obligatoires** — Toujours QCM + texte à trou + texte libre dans chaque set.
- **Pas de répétition** — Chaque exercice teste quelque chose de nouveau, pas la même compétence 3 fois.
- **QCM : une seule bonne réponse** — Les distracteurs doivent être plausibles, mais clairement faux.
- **Texte à trou** — Trou sur les **mots clés** (pas juste adjectifs), niveau de difficulté croissant.
- **Texte libre** — Demander de coder ou d'expliquer, pas juste « décris ce concept ».
- **Challenger la compréhension** — Pas des questions qui se répondent en relisant la leçon word-for-word. Forcer l'apprenant à **appliquer** le concept.
- **Indices progressifs** — Indice 1 très basique, Indice 2 plus précis.

## Quand s'arrêter et me demander
- Les exercices que j'ai générés sont **trop faciles** → Je vous montre des exemples et vous demande de viser plus haut.
- Les exercices sont **trop difficiles** → Je vous préviens (ex: « niveau avancé détecté, mais vous aviez dit débutant »).
- Les solutions que j'ai écrites sont **fausses ou peu claires** → Je vous les montre pour validation avant de finaliser.
- Les exercices ne correspondent **pas à la leçon** → Je vous le signale et je régénère avec ajustements.
- Vous voulez un type d'exercice différent → Je vous demande clarification (ex: vrai/faux au lieu de QCM ?).

## Format de la sortie
Un fichier JSON ou Markdown avec structure claire :

```json
{
  "concept": "Les boucles",
  "langage": "JavaScript",
  "niveau": "débutant",
  "exercices": [
    {
      "id": "boucles_qcm_1",
      "type": "mcq",
      "difficulté": "facile",
      "énoncé": "Qu'affiche cette boucle ? for (let i = 0; i < 3; i++) { console.log(i); }",
      "options": ["0 1 2", "1 2 3", "0 1 2 3", "Erreur"],
      "bonne_réponse": "0 1 2",
      "explication": "La boucle commence à 0 et s'arrête avant 3, donc affiche 0, 1, 2.",
      "indices": [
        "Indice 1 : i commence à combien ?",
        "Indice 2 : i < 3 signifie que i s'arrête avant 3"
      ]
    },
    {
      "id": "boucles_trou_1",
      "type": "fill_blank",
      "difficulté": "facile",
      "énoncé": "Complète : for (let i = 0; i < 5; i++) { _____ }",
      "réponse": "console.log(i)",
      "explication": "Pour afficher chaque itération, on utilise console.log(i).",
      "indices": [
        "Indice 1 : afficher quelque chose en JavaScript",
        "Indice 2 : fonction console.log"
      ]
    },
    {
      "id": "boucles_libre_1",
      "type": "free_text",
      "difficulté": "moyen",
      "énoncé": "Écris une boucle while qui compte de 10 à 1 (en ordre décroissant).",
      "solution": "let i = 10; while (i >= 1) { console.log(i); i--; }",
      "explication": "while teste la condition à chaque itération. i-- décrémente i.",
      "indices": [
        "Indice 1 : while teste une condition",
        "Indice 2 : comment diminuer i ? (opérateur décrémentation)"
      ]
    }
  ]
}
```

Sauvegardé dans : `outputs/academie-informatique/exercises/<concept>_<langage>_<niveau>.json`

**Scoring :**
- Chaque question = 1 point
- Total = 20 points
- Seuil de réussite = 15/20 pour valider ce package leçon + exercices
- L'apprenant peut continuer au prochain package même sans réussir (s'il reste dans le même niveau et langage)
- Passage au niveau suivant = réussite du dernier package du niveau actuel
