# Les variables en JavaScript

## Le problème

Imaginez que vous voulez stocker le prénom d'une personne pour l'utiliser plus tard dans votre programme. Vous avez besoin d'un **conteneur** pour garder cette information. Ce conteneur s'appelle une **variable**.

Une variable est simplement une **boîte** qui contient une valeur. Cette valeur peut être un nombre, du texte, ou même autre chose. Vous pouvez donner un nom à cette boîte et la réutiliser partout dans votre code.

---

## Qu'est-ce qu'une variable ?

Une variable est une **zone de mémoire** qui stocke une valeur et qui est **identifiée par un nom**.

**Pourquoi c'est utile ?**
- Stocker des données pour les réutiliser
- Éviter de répéter la même valeur plusieurs fois
- Modifier une valeur en un seul endroit et que tout le code soit mis à jour

---

## Comment créer une variable

### Étape 1 : Déclarer une variable

**Déclarer** veut dire dire à JavaScript : « Je vais créer une variable avec ce nom ».

Il y a **trois façons** de déclarer une variable en JavaScript : `var`, `let`, et `const`.

#### Avec `let` (recommandé pour les débutants)

```javascript
let nom;
```

Ici, vous déclarez une variable appelée `nom`. Elle existe maintenant, mais elle ne contient rien (elle est vide, c'est `undefined`).

#### Avec `var` (ancien style, à éviter)

```javascript
var nom;
```

C'est la façon ancienne. Elle fonctionne, mais elle a des comportements étranges (qu'on appelle "hoisting"). Mieux vaut utiliser `let` ou `const`.

#### Avec `const` (pour les valeurs fixes)

```javascript
const pi = 3.14159;
```

Utilisez `const` quand vous êtes sûr que la valeur ne va pas changer. `const` signifie "constant" — une fois qu'elle est définie, on ne peut pas la changer.

---

### Étape 2 : Assigner une valeur

**Assigner** veut dire donner une valeur à la variable.

```javascript
let nom;
nom = "Marie";
```

Ou, plus court, déclarez et assignez en même temps :

```javascript
let nom = "Marie";
```

---

## Exemples progressifs

### Exemple 1 : Stocker un prénom

```javascript
let prenom = "Jean";
console.log(prenom);  // Affiche : Jean
```

Ici, `prenom` est une variable qui contient le texte `"Jean"`. Quand vous utilisez `console.log(prenom)`, JavaScript affiche la valeur contenue dans la variable.

### Exemple 2 : Stocker un nombre

```javascript
let age = 25;
console.log(age);     // Affiche : 25

age = 26;             // On change la valeur
console.log(age);     // Affiche : 26
```

Vous pouvez changer la valeur d'une variable autant de fois que vous voulez (sauf si c'est une `const`).

### Exemple 3 : Utiliser plusieurs variables

```javascript
let prenom = "Sophie";
let nom = "Dubois";
let age = 30;

console.log(prenom + " " + nom + " a " + age + " ans");
// Affiche : Sophie Dubois a 30 ans
```

Vous pouvez **combiner** des variables en les collant ensemble (on appelle ça la "concaténation").

### Exemple 4 : Variables constantes

```javascript
const PI = 3.14159;
const RAYON = 5;

let surface = PI * RAYON * RAYON;
console.log(surface);  // Affiche : 78.53975
```

Utilisez `const` pour les valeurs qui ne changent jamais, comme des constantes mathématiques.

---

## Les trois façons de déclarer : `var`, `let`, `const`

| Mot-clé | Peut être changée ? | Portée | Quand l'utiliser ? |
|---------|-------------------|--------|------------------|
| **let** | ✅ Oui | Bloc ({ }) | **Défaut** — pour presque toutes les variables |
| **const** | ❌ Non | Bloc ({ }) | Valeurs qui ne changent pas (constantes) |
| **var** | ✅ Oui | Fonction | ⚠️ Ancien style, à éviter |

**En résumé :**
- **`let`** → Pour les variables qui changent. C'est le choix par défaut.
- **`const`** → Pour les valeurs fixes. Si vous n'êtes pas sûr, commencez avec `const`.
- **`var`** → Ne l'utilisez pas. C'est du code ancien.

---

## Les règles de nommage

Le nom d'une variable doit respecter des règles :

✅ **Autorisé :**
```javascript
let prenom = "Tom";           // lettres minuscules
let soyezPrenom = "Tom";      // camelCase (recommandé)
let _age = 25;                // underscore au début
let $prix = 19.99;            // dollar au début (rare)
let variable123 = "ok";       // nombres (mais pas au début)
```

❌ **Pas autorisé :**
```javascript
let mon prenom = "Tom";       // Erreur : espace
let 123nom = "Tom";           // Erreur : nombre au début
let mon-nom = "Tom";          // Erreur : tiret
```

**Convention recommandée (camelCase) :**
```javascript
let nomUtilisateur = "Alice";       // ✅ Bon
let ageUtilisateur = 28;            // ✅ Bon
let nom_utilisateur = "Bob";        // ❌ Style Python, pas JavaScript
let NomUtilisateur = "Charlie";     // ❌ Style pour les classes, pas les variables
```

---

## La portée (scope)

La **portée** d'une variable détermine **où** on peut l'utiliser dans votre code.

### Portée globale

```javascript
let message = "Bonjour";  // Variable globale

function direBonjour() {
  console.log(message);   // Fonctionne ! message existe ici
}

direBonjour();            // Affiche : Bonjour
```

### Portée locale (dans un bloc)

```javascript
function direBonjour() {
  let message = "Salut";  // Variable locale à la fonction
  console.log(message);   // Fonctionne
}

direBonjour();            // Affiche : Salut
console.log(message);     // Erreur ! message n'existe que dans la fonction
```

**Règle simple :** Une variable créée avec `let` ou `const` n'existe que **dans son bloc** (entre `{` et `}`).

---

## Un cas d'usage concret

Imaginez un **panier d'achat** dans une boutique en ligne :

```javascript
let nomProduit = "Livre JavaScript";
let prixUnitaire = 29.99;
let quantite = 2;

// Calculer le total
let total = prixUnitaire * quantite;

console.log("Produit : " + nomProduit);
console.log("Prix unitaire : " + prixUnitaire + " €");
console.log("Quantité : " + quantite);
console.log("Total : " + total + " €");
```

**Résultat :**
```
Produit : Livre JavaScript
Prix unitaire : 29.99 €
Quantité : 2
Total : 59.98 €
```

Sans les variables, vous deviez écrire les nombres partout. Avec les variables, le code est plus lisible et facile à modifier.

---

## Les pièges courants

### Piège 1 : Oublier de déclarer

```javascript
nom = "Tom";  // ❌ Mauvais : pas de let, const ou var
```

Toujours déclarer avec `let`, `const` ou `var`.

```javascript
let nom = "Tom";  // ✅ Bon
```

### Piège 2 : Utiliser une variable avant sa déclaration

```javascript
console.log(age);  // Erreur : age n'existe pas encore
let age = 25;
```

### Piège 3 : Essayer de changer une `const`

```javascript
const PI = 3.14;
PI = 3.14159;  // ❌ Erreur : on ne peut pas changer une const
```

---

## Résumé

| Concept | Explication | Exemple |
|---------|-------------|---------|
| **Variable** | Un conteneur pour stocker une valeur | `let prenom = "Alice"` |
| **Déclaration** | Créer une variable | `let age;` |
| **Assignation** | Donner une valeur | `age = 25;` |
| **let** | Variable qui peut changer | `let temperature = 20;` |
| **const** | Variable qui ne change pas | `const PI = 3.14;` |
| **Nommage** | Utiliser camelCase | `let nomUtilisateur` |
| **Portée** | Où la variable existe | Bloc `{ }` pour `let`/`const` |

---

## Prochaines étapes

Maintenant que vous comprenez les variables, vous pouvez :
1. **Pratiquer** sur Codecademy avec des exercices interactifs
2. **Lire** les sources pour plus de détails
3. **Explorer** comment les variables s'utilisent avec les boucles et les fonctions

