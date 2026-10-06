# Résultat A — mon-generate-lessons

**Concept :** Les boucles en JavaScript  
**Langage :** JavaScript  
**Niveau :** débutant  
**Date :** 2026-10-06

---

## Leçon générée

### Les boucles en JavaScript — Niveau débutant

#### Introduction

Une **boucle** est un outil programmation qui permet de **répéter un bloc de code plusieurs fois** sans avoir à le réécrire. Au lieu d'écrire le même code 100 fois, vous écrivez une seule fois et dites au programme « répète ça 100 fois ». C'est très utile pour traiter des listes, compter, ou faire des actions répétées.

Les boucles sont l'une des concepts fondamentaux de la programmation. Vous les rencontrerez partout.

---

#### Les trois types de boucles principales

##### 1. La boucle `for`

La boucle `for` est la plus classique. Elle répète un bloc de code un **nombre précis de fois**.

**Syntaxe :**
```javascript
for (let i = 0; i < 5; i++) {
  console.log("Répétition " + i);
}
```

**Ce qui se passe :**
- `let i = 0` : on crée une variable `i` qui commence à 0
- `i < 5` : la boucle continue **tant que** `i` est inférieur à 5
- `i++` : après chaque répétition, on augmente `i` de 1 (le `++` veut dire « ajoute 1 »)

**Résultat :** La boucle affiche « Répétition 0 », « Répétition 1 », « Répétition 2 », « Répétition 3 », « Répétition 4 ». Elle s'arrête quand `i` atteint 5 (car `5 < 5` est faux).

**Exemple pratique — afficher une table de multiplication :**
```javascript
for (let i = 1; i <= 10; i++) {
  console.log("3 × " + i + " = " + (3 * i));
}
```

Ceci affiche :
```
3 × 1 = 3
3 × 2 = 6
3 × 3 = 9
...
3 × 10 = 30
```

---

##### 2. La boucle `while`

La boucle `while` répète un bloc **tant qu'une condition est vraie**. Elle s'arrête quand la condition devient fausse.

**Syntaxe :**
```javascript
while (condition) {
  // code à répéter
}
```

**Exemple :**
```javascript
let compteur = 0;
while (compteur < 5) {
  console.log("Compteur : " + compteur);
  compteur = compteur + 1;  // augmente compteur
}
```

**Ce qui se passe :**
- On commence avec `compteur = 0`
- La condition `compteur < 5` est vraie → on exécute le code
- `compteur` augmente de 1 → devient 1
- On revient au début : `1 < 5` est vrai → on exécute encore
- On continue jusqu'à ce que `compteur = 5`
- `5 < 5` est faux → la boucle s'arrête

**Important :** Attention à ne pas créer une **boucle infinie** ! Si vous oubliez d'augmenter `compteur`, la condition reste toujours vraie et le programme ne s'arrêtera jamais.

```javascript
// ❌ DANGEREUX — boucle infinie !
while (true) {
  console.log("Ceci s'affiche pour toujours...");
}
```

---

##### 3. La boucle `for...of`

La boucle `for...of` est **moderne et facile** — elle parcourt chaque élément d'une liste une fois.

**Syntaxe :**
```javascript
for (let element of liste) {
  // code qui s'exécute pour chaque element
}
```

**Exemple :**
```javascript
let fruits = ["pomme", "banane", "orange"];

for (let fruit of fruits) {
  console.log("J'aime les " + fruit + "s");
}
```

**Résultat :**
```
J'aime les pommes
J'aime les bananes
J'aime les oranges
```

C'est plus simple que `for` classique quand vous voulez juste parcourir une liste sans vous soucier des numéros d'index.

---

#### Comparaison rapide

| Type | Utilité | Exemple |
|------|---------|---------|
| `for` | Répéter un nombre précis de fois | Compter de 1 à 100 |
| `while` | Répéter jusqu'à ce qu'une condition change | Attendre qu'un joueur entre une réponse valide |
| `for...of` | Parcourir chaque élément d'une liste | Afficher chaque nom d'une liste |

---

#### Cas d'usage réels

**Cas 1 — Valider l'entrée utilisateur**
```javascript
let reponse = "";
while (reponse !== "oui") {
  reponse = prompt("Êtes-vous sûr ? (oui/non)");
}
console.log("Vous avez confirmé !");
```

La boucle demande à l'utilisateur jusqu'à ce qu'il réponde « oui ».

**Cas 2 — Afficher une grille (comme un tableau)**
```javascript
for (let ligne = 1; ligne <= 3; ligne++) {
  for (let col = 1; col <= 3; col++) {
    console.log("(" + ligne + "," + col + ")");
  }
}
```

Ceci affiche une grille 3×3. C'est une **boucle imbriquée** (une boucle à l'intérieur d'une autre).

---

#### Règles à retenir

1. **Chaque boucle doit s'arrêter** — Assurez-vous que votre condition devient fausse à un moment.
2. **Pas de jargon** — `i++` veut dire « augmente `i` de 1 »; `let` veut dire « déclare une variable ».
3. **Les boucles fonctionnent par essais** — Si votre boucle ne fait pas ce que vous attendez, essayez d'afficher les valeurs avec `console.log()` pour voir ce qui se passe.

---

## Onglet Sources

Voici les sources utilisées pour cette leçon (toutes vérifiées et accessibles) :

1. **MDN Web Docs — JavaScript Loops**  
   URL : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration  
   Résumé : Documentation officielle complète sur for, while, for...of et autres boucles.

2. **W3Schools — JavaScript Loops**  
   URL : https://www.w3schools.com/js/js_loop_for.asp  
   Résumé : Tutoriels interactifs et exemples pour débutants sur toutes les boucles.

3. **Codecademy — Loops in JavaScript**  
   URL : https://www.codecademy.com/learn/introduction-to-javascript  
   Résumé : Cours pratique avec exercices pour maîtriser les boucles.

---

## Métadonnées

```json
{
  "titre": "Les boucles en JavaScript",
  "concept": "Les boucles",
  "langage": "JavaScript",
  "niveau": "débutant",
  "durée_minutes": 15,
  "concepts_clés": [
    "boucle for",
    "boucle while",
    "boucle for...of",
    "condition",
    "itération",
    "boucle infinie (à éviter)"
  ],
  "sources_count": 3,
  "date_création": "2026-10-06",
  "version": "A — mon-generate-lessons"
}
```

---

**Status :** ✅ Leçon générée et testée  
**Format :** Markdown avec HTML intégré  
**Prête pour :** Comparaison avec version B (build-generate-lessons)
