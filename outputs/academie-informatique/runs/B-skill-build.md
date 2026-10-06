# Résultat B — build-generate-lessons

**Concept :** Les boucles en JavaScript  
**Langage :** JavaScript  
**Niveau :** débutant  
**Date :** 2026-10-06

---

## Leçon générée

### Les boucles en JavaScript pour débutants

#### Qu'est-ce qu'une boucle ?

Imaginez que vous devez afficher les nombres de 1 à 10. Sans boucles, vous écriviriez :

```javascript
console.log(1);
console.log(2);
console.log(3);
// ... etc, jusqu'à console.log(10);
```

Avec une boucle, vous écrivez une fois ce que vous voulez faire, et le programme le répète automatiquement :

```javascript
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

**Une boucle** permet donc de **répéter des actions** sans dupliquer le code. C'est un concept fondamental en programmation.

---

#### La boucle `for` — le classique

**Syntaxe complète :**
```javascript
for (initialisation; condition; incrémentation) {
  // bloc de code à répéter
}
```

**Exemple simple :**
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Affiche : 0, 1, 2, 3, 4
```

**Décorticage :**
- `let i = 0` — on crée une variable `i` qui commence à 0
- `i < 5` — on continue **tant que** i est inférieur à 5
- `i++` — après chaque tour, on ajoute 1 à i (c'est la même chose que `i = i + 1`)
- Le bloc entre `{ }` s'exécute à chaque tour

**Cas d'usage :** Boucles déterministes (vous savez exactement combien de fois répéter).

---

#### La boucle `while` — la flexible

**Syntaxe :**
```javascript
while (condition) {
  // code à répéter tant que condition est vrai
}
```

**Exemple :**
```javascript
let x = 10;
while (x > 0) {
  console.log(x);
  x = x - 1;
}
// Affiche : 10, 9, 8, 7, ..., 1
```

**Différence avec `for` :** Vous ne savez pas d'avance combien de fois la boucle s'exécutera — cela dépend de quand la condition devient fausse.

**Cas d'usage pratique — validation :**
```javascript
let reponse = "";
while (reponse.toLowerCase() !== "oui") {
  reponse = prompt("Continuez ? (tapez 'oui')");
}
console.log("C'est parti !");
```

**⚠️ Attention à la boucle infinie :**
```javascript
while (true) {
  console.log("Ceci s'exécute pour toujours !");
  // Il n'y a rien qui arrête la boucle
}
```

Assurez-vous toujours que votre condition devient fausse à un moment.

---

#### La boucle `for...of` — parcourir une liste

**Syntaxe :**
```javascript
for (let element of liste) {
  // element = chaque élément de la liste, un par un
}
```

**Exemple :**
```javascript
let couleurs = ["rouge", "vert", "bleu"];

for (let couleur of couleurs) {
  console.log("Je vois du " + couleur);
}
// Affiche :
// Je vois du rouge
// Je vois du vert
// Je vois du bleu
```

**Quand l'utiliser :** Quand vous voulez examiner chaque élément d'une liste sans vous soucier des index.

---

#### Résumé — Quel type de boucle choisir ?

| Situation | Type | Exemple |
|-----------|------|---------|
| Répéter X fois un nombre connu | `for` | Afficher une table de multiplication |
| Répéter jusqu'à une condition | `while` | Demander confirmation jusqu'à validité |
| Parcourir une liste | `for...of` | Traiter chaque élément d'un tableau |

---

#### Exemple complet — Additionner une liste de nombres

```javascript
let nombres = [5, 10, 15, 20];
let total = 0;

for (let nombre of nombres) {
  total = total + nombre;
}

console.log("Total : " + total);  // Affiche : Total : 50
```

**Étape par étape :**
1. On crée une liste `[5, 10, 15, 20]`
2. On initialise `total` à 0
3. La boucle prend chaque nombre, l'un après l'autre
4. À chaque tour, on ajoute ce nombre au `total`
5. À la fin, `total` vaut 50

---

#### Points clés à retenir

✅ Les boucles **réduisent la duplication** de code  
✅ `for` = répéter un nombre précis de fois  
✅ `while` = répéter jusqu'à ce qu'une condition change  
✅ `for...of` = parcourir chaque élément d'une liste  
✅ **Assurez-vous que votre boucle s'arrête** — évitez les boucles infinies

---

## Onglet Sources

Toutes les sources sont vérifiées et accessibles :

1. **MDN Web Docs — JavaScript Loops and Iteration**  
   URL : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration  
   Résumé : Documentation complète et officielle des boucles JavaScript (for, while, for...of, etc.)

2. **W3Schools — JavaScript for Loop**  
   URL : https://www.w3schools.com/js/js_loop_for.asp  
   Résumé : Tutoriels progressifs avec exemples interactifs pour tous les types de boucles.

3. **Codecademy — Loops in JavaScript**  
   URL : https://www.codecademy.com/learn/introduction-to-javascript  
   Résumé : Cours pratique interactif avec exercices directement exécutables pour maîtriser les boucles.

---

## Métadonnées

```json
{
  "titre": "Les boucles en JavaScript",
  "concept": "Les boucles",
  "langage": "JavaScript",
  "niveau": "débutant",
  "durée_minutes": 13,
  "concepts_clés": [
    "boucle for",
    "boucle while",
    "boucle for...of",
    "itération",
    "condition de sortie",
    "boucle infinie (à éviter)"
  ],
  "sources_count": 3,
  "date_création": "2026-10-06",
  "version": "B — build-generate-lessons",
  "approche": "structurée avec résumé comparatif"
}
```

---

**Status :** ✅ Leçon générée et structurée  
**Format :** Markdown avec HTML intégré  
**Prête pour :** Comparaison avec version A (mon-generate-lessons)
