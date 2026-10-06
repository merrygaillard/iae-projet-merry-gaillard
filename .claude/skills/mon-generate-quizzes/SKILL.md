---
name: mon-generate-quizzes
description: Générer un quiz final de niveau (50 QCM) pour évaluer la maîtrise de tous les concepts et autoriser le passage au niveau suivant.
---

# Générer un quiz de niveau

## Ce que fait ce skill
Crée un **quiz final rigoureux** pour un niveau donné (débutant, intermédiaire, avancé, bonus). Le quiz contient **50 questions à choix multiples** qui couvrent **tous les concepts** enseignés dans ce niveau.

Les questions varient à chaque passage (randomisées) pour éviter la triche. Chacune vaut 2 points, total 100 points. L'apprenant doit marquer **au minimum 75/100 (15/20)** pour passer au niveau suivant.

**Livrable :** Un fichier JSON contenant 50 questions, options, bonnes réponses, formule de scoring, et logique de passage.

## Ce que je fournis en entrée
Vous me donnez dans la conversation :
- **Langage** : JavaScript, Python ou SQL
- **Niveau** : débutant, intermédiaire, avancé ou bonus

Exemple : « Génère un quiz final pour JavaScript niveau débutant. »

## Étapes
1. **Lister tous les concepts** — Je rassemble tous les concepts enseignés dans ce niveau (de toutes les leçons).
2. **Créer 50 questions variées** — Une question par concept majeur, plus des variations et combinaisons pour couvrir 50 questions.
3. **Une seule bonne réponse** — Chaque QCM a 4 options, une seule correcte, les autres sont des distracteurs plausibles.
4. **Couvrir tous les concepts** — S'assurer que chaque concept du niveau est testé au moins 1 fois.
5. **Varier la difficulté** — Questions faciles, moyennes et difficiles mélangées pour évaluer la vrai maîtrise.
6. **Rendre randomisable** — Les questions peuvent être mélangées et varient à chaque passage (seed aléatoire).
7. **Calculer le scoring** — 2 points par question, total 100. Seuil : 75/100 pour passer.

## Règles
- **50 questions QCM obligatoires** — Pas de texte à trou, pas de texte libre. Évaluation objective.
- **Une seule bonne réponse par question** — Les distracteurs sont plausibles mais clairement faux.
- **Couvrir tous les concepts** — Aucun concept du niveau ne doit être ignoré.
- **Pas de répétition** — Pas 5 questions sur le même concept mineur; distribution égale.
- **Randomisable** — Les questions peuvent être mélangées à chaque passage pour une évaluation juste.
- **Français pour énoncé, anglais pour code** — Consisistant avec la leçon.
- **Seuil strict : 15/20 (75%)** — Pour passer au niveau suivant, il faut 75/100 points.

## Quand s'arrêter et me demander
- Les 50 questions ne couvrent **pas tous les concepts** du niveau → Je vous le signale et je régénère.
- Les questions sont **trop faciles ou trop difficiles** → Je vous montre des exemples et vous demande d'ajuster la difficulté.
- Les distracteurs ne sont **pas plausibles** → Je vous les montre pour révision.
- Vous voulez un seuil de réussite différent → Je demande clarification (ex: 16/20 au lieu de 15/20 ?).
- Les questions ne peuvent pas être randomisées → Je vous le préviens et je reconsidère la structure.

## Format de la sortie
Un fichier JSON contenant la configuration du quiz et toutes les questions :

```json
{
  "quiz_metadata": {
    "langage": "JavaScript",
    "niveau": "débutant",
    "nombre_questions": 50,
    "points_par_question": 2,
    "total_points": 100,
    "seuil_reussite": 75,
    "seuil_note_sur_20": 15,
    "formule_scoring": "note /20 = (points_obtenus / 100) * 20"
  },
  "concepts_couverts": [
    "Variables et types",
    "Boucles (for, while, do-while)",
    "Conditions (if, else, switch)",
    "Fonctions et paramètres",
    ...
  ],
  "questions": [
    {
      "id": "js_deb_qcm_1",
      "numero": 1,
      "concept": "Variables et types",
      "difficulté": "facile",
      "énoncé": "Quelle est la différence entre let et var en JavaScript ?",
      "options": [
        "let a une portée de bloc, var a une portée de fonction",
        "Aucune différence",
        "var est plus moderne que let",
        "let ne peut pas être réutilisé"
      ],
      "bonne_réponse_index": 0,
      "explication": "let a une portée de bloc ({}), var a une portée de fonction. C'est une des principales différences."
    },
    {
      "id": "js_deb_qcm_2",
      "numero": 2,
      "concept": "Boucles (for, while, do-while)",
      "difficulté": "facile",
      "énoncé": "Qu'affiche cette boucle ? for (let i = 0; i < 3; i++) { console.log(i); }",
      "options": [
        "0 1 2",
        "1 2 3",
        "0 1 2 3",
        "Erreur"
      ],
      "bonne_réponse_index": 0,
      "explication": "La boucle commence à 0, s'incrémente et s'arrête avant 3, donc affiche 0, 1, 2."
    }
  ]
}
```

Sauvegardé dans : `outputs/academie-informatique/quizzes/quiz_<langage>_<niveau>.json`

**Logique de passage :**
- Quiz réussi (≥ 75/100) : Débloquer le niveau suivant
- Quiz échoué (< 75/100) : Rester au niveau actuel, possibilité de reprendre après révision
