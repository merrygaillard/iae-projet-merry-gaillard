// Navigation entre sections et leçons

let currentLanguage = null;
let currentLevel = null;

// Initialiser les données des leçons
const lessonsData = {
  javascript: {
    debutant: [
      {
        id: 'variables',
        title: 'Les variables',
        description: 'Déclarer, assigner et utiliser les variables',
        duration: 18,
        concepts: 'Déclaration, assignation, let/var/const, portée, nommage',
        content: `
          <h1>Les variables en JavaScript</h1>
          <h2>Le problème</h2>
          <p>Imaginez que vous voulez stocker le prénom d'une personne pour l'utiliser plus tard dans votre programme. Vous avez besoin d'un <strong>conteneur</strong> pour garder cette information. Ce conteneur s'appelle une <strong>variable</strong>.</p>
          <p>Une variable est simplement une <strong>boîte</strong> qui contient une valeur. Cette valeur peut être un nombre, du texte, ou même autre chose. Vous pouvez donner un nom à cette boîte et la réutiliser partout dans votre code.</p>

          <h2>Qu'est-ce qu'une variable ?</h2>
          <p>Une variable est une <strong>zone de mémoire</strong> qui stocke une valeur et qui est <strong>identifiée par un nom</strong>.</p>
          <p><strong>Pourquoi c'est utile ?</strong></p>
          <ul>
            <li>Stocker des données pour les réutiliser</li>
            <li>Éviter de répéter la même valeur plusieurs fois</li>
            <li>Modifier une valeur en un seul endroit et que tout le code soit mis à jour</li>
          </ul>

          <h2>Comment créer une variable</h2>
          <h3>Étape 1 : Déclarer une variable</h3>
          <p><strong>Déclarer</strong> veut dire dire à JavaScript : « Je vais créer une variable avec ce nom ».</p>
          <p>Il y a <strong>trois façons</strong> de déclarer une variable en JavaScript : var, let, et const.</p>

          <h4>Avec let (recommandé pour les débutants)</h4>
          <pre><code>let nom;</code></pre>
          <p>Ici, vous déclarez une variable appelée nom. Elle existe maintenant, mais elle ne contient rien (elle est vide, c'est undefined).</p>

          <h4>Avec const (pour les valeurs fixes)</h4>
          <pre><code>const pi = 3.14159;</code></pre>
          <p>Utilisez const quand vous êtes sûr que la valeur ne va pas changer. const signifie "constant" — une fois qu'elle est définie, on ne peut pas la changer.</p>

          <h3>Étape 2 : Assigner une valeur</h3>
          <p><strong>Assigner</strong> veut dire donner une valeur à la variable.</p>
          <pre><code>let nom;
nom = "Marie";</code></pre>
          <p>Ou, plus court, déclarez et assignez en même temps :</p>
          <pre><code>let nom = "Marie";</code></pre>

          <h2>Exemples progressifs</h2>
          <h3>Exemple 1 : Stocker un prénom</h3>
          <pre><code>let prenom = "Jean";
console.log(prenom);  // Affiche : Jean</code></pre>

          <h3>Exemple 2 : Stocker un nombre</h3>
          <pre><code>let age = 25;
console.log(age);     // Affiche : 25

age = 26;             // On change la valeur
console.log(age);     // Affiche : 26</code></pre>

          <h3>Exemple 3 : Utiliser plusieurs variables</h3>
          <pre><code>let prenom = "Sophie";
let nom = "Dubois";
let age = 30;

console.log(prenom + " " + nom + " a " + age + " ans");
// Affiche : Sophie Dubois a 30 ans</code></pre>

          <h2>Résumé</h2>
          <table>
            <tr><th>Mot-clé</th><th>Peut être changée ?</th><th>Portée</th><th>Quand l'utiliser ?</th></tr>
            <tr><td><strong>let</strong></td><td>✅ Oui</td><td>Bloc { }</td><td><strong>Défaut</strong> — pour presque toutes les variables</td></tr>
            <tr><td><strong>const</strong></td><td>❌ Non</td><td>Bloc { }</td><td>Valeurs qui ne changent pas (constantes)</td></tr>
            <tr><td><strong>var</strong></td><td>✅ Oui</td><td>Fonction</td><td>⚠️ Ancien style, à éviter</td></tr>
          </table>
        `,
        sources: [
          {
            url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables',
            title: 'MDN - JavaScript First Steps: Variables',
            type: 'Documentation officielle'
          },
          {
            url: 'https://www.w3schools.com/js/js_variables.asp',
            title: 'W3Schools - JavaScript Variables',
            type: 'Tutoriel interactif'
          },
          {
            url: 'https://javascript.info/variables',
            title: 'JavaScript.info - Variables, Naming, Constants',
            type: 'Tutoriel pédagogique'
          },
          {
            url: 'https://www.codecademy.com/learn/introduction-to-javascript',
            title: 'Codecademy - Introduction to JavaScript',
            type: 'Plateforme interactive'
          },
          {
            url: 'https://stackoverflow.com/questions/tagged/javascript+variables',
            title: 'Stack Overflow - Questions tagées [javascript] [variables]',
            type: 'Communauté Q&R'
          }
        ]
      },
      {
        id: 'les-types-de-donnees',
        title: 'Les types de données',
        description: 'Comprendre les types : nombres, texte, booléens, tableaux, objets',
        duration: 12,
        concepts: 'Number, String, Boolean, Array, Object, Null, Undefined, typeof',
        content: `
        <h1>Les types de données en JavaScript</h1>

        <p><strong>Durée estimée :</strong> 12 minutes | <strong>Niveau :</strong> Débutant</p>

        <h2>Introduction</h2>
        <p>Votre variable peut stocker différents types d'informations : un nombre, du texte, vrai ou faux, etc. JavaScript accepte automatiquement différents types de données. Comprenez les types principaux pour écrire du code robuste.</p>

        <h2>1. Les nombres (Number)</h2>
        <p>Les nombres en JavaScript incluent les entiers et les décimaux.</p>

        <h3>Exemples</h3>
        <pre><code>let age = 25;              // Nombre entier
let prix = 19.99;          // Nombre décimal
let negatif = -5;          // Nombre négatif
let temperature = 36.6;    // Température en degrés

console.log(age);          // Affiche : 25
console.log(prix);         // Affiche : 19.99</code></pre>

        <h3>Opérations sur les nombres</h3>
        <pre><code>let x = 10;
let y = 3;

console.log(x + y);        // Affiche : 13 (addition)
console.log(x - y);        // Affiche : 7 (soustraction)
console.log(x * y);        // Affiche : 30 (multiplication)
console.log(x / y);        // Affiche : 3.333... (division)
console.log(x % y);        // Affiche : 1 (reste de division)</code></pre>

        <h2>2. Le texte (String)</h2>
        <p>Une chaîne de caractères (string) est du texte. Elle doit être entourée de guillemets simples ou doubles.</p>

        <h3>Déclarer une chaîne</h3>
        <pre><code>let nom = "Alice";         // Guillemets doubles
let ville = 'Paris';       // Guillemets simples
let message = "Bonjour";   // Les deux fonctionnent</code></pre>

        <p><strong>Important :</strong> Les guillemets font partie de la syntaxe, pas de la valeur. La valeur de <code>nom</code> est <code>Alice</code>, pas <code>"Alice"</code>.</p>

        <h3>Chaînes multi-lignes</h3>
        <pre><code>let poeme = \`Ligne 1
Ligne 2
Ligne 3\`;

console.log(poeme);
// Affiche :
// Ligne 1
// Ligne 2
// Ligne 3</code></pre>

        <h3>Concaténation (joindre des chaînes)</h3>
        <pre><code>let prenom = "Tom";
let nom = "Dubois";

// Avec le signe +
let nomComplet = prenom + " " + nom;
console.log(nomComplet);   // Affiche : Tom Dubois

// Avec les backticks (template literals)
let message = \`Bonjour \${prenom} \${nom}\`;
console.log(message);      // Affiche : Bonjour Tom Dubois</code></pre>

        <h2>3. Le booléen (Boolean)</h2>
        <p>Un booléen ne peut avoir que deux valeurs : <code>true</code> (vrai) ou <code>false</code> (faux). Utile pour les conditions.</p>

        <h3>Exemples</h3>
        <pre><code>let estEtudiant = true;
let estProfesseur = false;
let estValide = true;

console.log(estEtudiant);  // Affiche : true
console.log(estProfesseur);// Affiche : false</code></pre>

        <h3>Résultats de comparaisons</h3>
        <pre><code>let x = 5;
let y = 3;

console.log(x > y);        // Affiche : true (5 est plus grand que 3)
console.log(x === y);      // Affiche : false (5 n'égale pas 3)
console.log(x !== y);      // Affiche : true (5 n'égale pas 3)</code></pre>

        <h2>4. Undefined et Null</h2>
        <p>Deux valeurs spéciales pour « rien ».</p>

        <h3>Undefined</h3>
        <p><code>undefined</code> signifie « pas encore défini ». C'est la valeur par défaut d'une variable déclarée mais non assignée.</p>
        <pre><code>let variable;
console.log(variable);     // Affiche : undefined</code></pre>

        <h3>Null</h3>
        <p><code>null</code> signifie « aucune valeur » (volontairement vide).</p>
        <pre><code>let valeur = null;
console.log(valeur);       // Affiche : null</code></pre>

        <h2>5. Les objets (Object) — Introduction</h2>
        <p>Un objet regroupe plusieurs valeurs sous des noms.</p>

        <h3>Exemple simple</h3>
        <pre><code>let personne = {
  nom: "Alice",
  age: 28,
  ville: "Paris"
};

console.log(personne.nom);   // Affiche : Alice
console.log(personne.age);   // Affiche : 28
console.log(personne.ville); // Affiche : Paris</code></pre>

        <h2>6. Les tableaux (Array) — Introduction</h2>
        <p>Un tableau stocke plusieurs valeurs dans une liste.</p>

        <h3>Créer un tableau</h3>
        <pre><code>let couleurs = ["rouge", "vert", "bleu"];
let nombres = [1, 2, 3, 4, 5];
let mixte = [1, "texte", true];  // Un tableau peut contenir différents types</code></pre>

        <h3>Accéder aux éléments</h3>
        <pre><code>let fruits = ["pomme", "banane", "orange"];

console.log(fruits[0]);    // Affiche : pomme (premier élément, indice 0)
console.log(fruits[1]);    // Affiche : banane (deuxième élément, indice 1)
console.log(fruits[2]);    // Affiche : orange (troisième élément, indice 2)</code></pre>

        <p><strong>Important :</strong> En programmation, on compte à partir de 0 ! Le premier élément est à l'indice 0.</p>

        <h3>Longueur d'un tableau</h3>
        <pre><code>let couleurs = ["rouge", "vert", "bleu"];
console.log(couleurs.length); // Affiche : 3</code></pre>

        <h2>Tableau comparatif des types</h2>
        <table style="width:100%; border-collapse: collapse;">
            <tr style="background: #f0f0f0;">
                <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Type</th>
                <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Exemple</th>
                <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Description</th>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 8px;"><strong>Number</strong></td>
                <td style="border: 1px solid #ddd; padding: 8px;">42, 3.14, -5</td>
                <td style="border: 1px solid #ddd; padding: 8px;">Nombres entiers et décimaux</td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 8px;"><strong>String</strong></td>
                <td style="border: 1px solid #ddd; padding: 8px;">"Bonjour", 'texte'</td>
                <td style="border: 1px solid #ddd; padding: 8px;">Texte (entre guillemets)</td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 8px;"><strong>Boolean</strong></td>
                <td style="border: 1px solid #ddd; padding: 8px;">true, false</td>
                <td style="border: 1px solid #ddd; padding: 8px;">Vrai ou Faux</td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 8px;"><strong>Array</strong></td>
                <td style="border: 1px solid #ddd; padding: 8px;">[1, 2, 3]</td>
                <td style="border: 1px solid #ddd; padding: 8px;">Liste de valeurs</td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 8px;"><strong>Object</strong></td>
                <td style="border: 1px solid #ddd; padding: 8px;">{nom: "Tom"}</td>
                <td style="border: 1px solid #ddd; padding: 8px;">Groupement de propriétés</td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 8px;"><strong>Null</strong></td>
                <td style="border: 1px solid #ddd; padding: 8px;">null</td>
                <td style="border: 1px solid #ddd; padding: 8px;">Aucune valeur (intentionnel)</td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 8px;"><strong>Undefined</strong></td>
                <td style="border: 1px solid #ddd; padding: 8px;">undefined</td>
                <td style="border: 1px solid #ddd; padding: 8px;">Pas de valeur (par défaut)</td>
            </tr>
        </table>

        <h2>Vérifier le type d'une variable</h2>
        <p>Utilisez l'opérateur <code>typeof</code> pour vérifier le type.</p>

        <h3>Exemples</h3>
        <pre><code>console.log(typeof 42);           // Affiche : "number"
console.log(typeof "Bonjour");    // Affiche : "string"
console.log(typeof true);         // Affiche : "boolean"
console.log(typeof [1, 2, 3]);    // Affiche : "object"
console.log(typeof {nom: "Tom"}); // Affiche : "object"
console.log(typeof undefined);    // Affiche : "undefined"
console.log(typeof null);         // Affiche : "object" (anomalie en JS!)</code></pre>

        <h2>Conversion de types</h2>
        <p>Parfois vous devez convertir un type en un autre.</p>

        <h3>Convertir en nombre</h3>
        <pre><code>let texte = "25";
let nombre = Number(texte);
console.log(nombre);              // Affiche : 25 (maintenant un nombre)</code></pre>

        <h3>Convertir en texte</h3>
        <pre><code>let nombre = 42;
let texte = String(nombre);
console.log(texte);               // Affiche : "42" (maintenant du texte)</code></pre>

        <h3>Convertir en booléen</h3>
        <pre><code>let nombre = 1;
let bool = Boolean(nombre);
console.log(bool);                // Affiche : true</code></pre>

        <h2>Piège courant : Mélanger les types</h2>
        <p>Attention quand vous mélangez les types avec <code>+</code> :</p>

        <pre><code>console.log(5 + 3);           // Affiche : 8 (addition)
console.log("5" + 3);         // Affiche : 53 (concaténation!)
console.log(5 + "3");         // Affiche : 53 (concaténation!)
console.log("5" + "3");       // Affiche : 53 (concaténation!)</code></pre>

        <p><strong>Explication :</strong> Quand <code>+</code> voit une chaîne, il joint les valeurs au lieu de les ajouter.</p>

        <h2>Points clés à retenir</h2>
        <ul>
            <li>JavaScript a 7 types de base : Number, String, Boolean, Object, Array, Null, Undefined</li>
            <li>Utilisez <code>typeof</code> pour vérifier le type</li>
            <li>Attention à ne pas mélanger les types, surtout avec <code>+</code></li>
            <li>Les tableaux et objets contiennent plusieurs valeurs</li>
            <li>Comptez toujours à partir de 0 pour les indices</li>
        </ul>

        <h2>Sources</h2>
        <ul>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures" target="_blank">MDN — JavaScript Data Types</a></li>
            <li><a href="https://www.w3schools.com/js/js_datatypes.asp" target="_blank">W3Schools — JavaScript Data Types</a></li>
            <li><a href="https://javascript.info/types" target="_blank">JavaScript.info — Data Types</a></li>
            <li><a href="https://www.codecademy.com/learn/introduction-to-javascript" target="_blank">Codecademy — Introduction to JavaScript</a></li>
        </ul>
        `,
        sources: [
          {
            url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures',
            title: 'MDN — JavaScript Data Types',
            type: 'Documentation officielle'
          },
          {
            url: 'https://www.w3schools.com/js/js_datatypes.asp',
            title: 'W3Schools — JavaScript Data Types',
            type: 'Tutoriel interactif'
          },
          {
            url: 'https://javascript.info/types',
            title: 'JavaScript.info — Data Types',
            type: 'Tutoriel pédagogique'
          },
          {
            url: 'https://www.codecademy.com/learn/introduction-to-javascript',
            title: 'Codecademy — Introduction to JavaScript',
            type: 'Plateforme interactive'
          }
        ]
      },
      {
        id: 'les-operateurs',
        title: 'Les opérateurs',
        description: 'Arithmétique, comparaison, logique, assignation, chaînes',
        duration: 15,
        concepts: 'Opérateurs arithmétiques, comparaison, logiques, assignation, ternaire',
        content: `
        <h1>Les opérateurs en JavaScript</h1>

        <p><strong>Durée estimée :</strong> 15 minutes | <strong>Niveau :</strong> Débutant</p>

        <h2>Introduction</h2>
        <p>Les opérateurs sont des symboles qui permettent de faire des actions : ajouter deux nombres, comparer des valeurs, assigner une variable. Maîtriser les opérateurs est essentiel pour écrire du code JavaScript.</p>

        <h2>1. Les opérateurs arithmétiques</h2>
        <p>Ils servent à faire des calculs mathématiques.</p>

        <h3>Les quatre opérations de base</h3>
        <pre><code>let a = 10;
let b = 3;

console.log(a + b);        // Affiche : 13 (addition)
console.log(a - b);        // Affiche : 7 (soustraction)
console.log(a * b);        // Affiche : 30 (multiplication)
console.log(a / b);        // Affiche : 3.333... (division)</code></pre>

        <h3>Modulo (reste de division)</h3>
        <pre><code>let a = 10;
let b = 3;

console.log(a % b);        // Affiche : 1 (reste de 10 / 3)

// Utile pour vérifier si un nombre est pair
console.log(10 % 2);       // Affiche : 0 (10 est pair)
console.log(11 % 2);       // Affiche : 1 (11 est impair)</code></pre>

        <h3>Puissance</h3>
        <pre><code>console.log(2 ** 3);       // Affiche : 8 (2 à la puissance 3)
console.log(5 ** 2);       // Affiche : 25 (5 au carré)</code></pre>

        <h2>2. L'opérateur d'assignation</h2>
        <p><code>=</code> sert à donner une valeur à une variable.</p>

        <h3>Assignation simple</h3>
        <pre><code>let nom = "Alice";
let age = 25;
let actif = true;</code></pre>

        <h3>Opérateurs d'assignation raccourcis</h3>
        <pre><code>let x = 10;

x += 5;    // Équivalent à : x = x + 5;  Résultat : 15
x -= 3;    // Équivalent à : x = x - 3;  Résultat : 12
x *= 2;    // Équivalent à : x = x * 2;  Résultat : 24
x /= 4;    // Équivalent à : x = x / 4;  Résultat : 6</code></pre>

        <h2>3. Les opérateurs de comparaison</h2>
        <p>Ils comparent deux valeurs et retournent <code>true</code> ou <code>false</code>.</p>

        <h3>Les comparaisons de base</h3>
        <pre><code>console.log(5 > 3);        // Affiche : true (5 est supérieur à 3)
console.log(5 < 3);        // Affiche : false (5 n'est pas inférieur à 3)
console.log(5 >= 5);       // Affiche : true (5 est supérieur ou égal à 5)
console.log(5 <= 3);       // Affiche : false (5 n'est pas inférieur ou égal à 3)</code></pre>

        <h3>L'égalité</h3>
        <pre><code>console.log(5 == "5");     // Affiche : true (valeur égale, type ignoré)
console.log(5 === "5");    // Affiche : false (type et valeur doivent être identiques)

console.log(5 != "5");     // Affiche : false (pas différent en valeur)
console.log(5 !== "5");    // Affiche : true (pas égal en type ET valeur)</code></pre>

        <p><strong>⚠️ Important :</strong> Préférez toujours <code>===</code> à <code>==</code> en JavaScript. C'est plus sûr.</p>

        <h2>4. Les opérateurs logiques</h2>
        <p>Ils combinent ou modifient des conditions booléennes.</p>

        <h3>ET logique (&&)</h3>
        <pre><code>console.log(true && true);   // Affiche : true
console.log(true && false);  // Affiche : false
console.log(false && false); // Affiche : false

// Exemple pratique
let age = 20;
let permis = true;

let peutConduire = (age >= 18) && permis;
console.log(peutConduire);   // Affiche : true</code></pre>

        <h3>OU logique (||)</h3>
        <pre><code>console.log(true || false);  // Affiche : true
console.log(false || false); // Affiche : false

// Exemple pratique
let estEtudiant = false;
let estRetraite = true;

let obtientReduction = estEtudiant || estRetraite;
console.log(obtientReduction); // Affiche : true</code></pre>

        <h3>NON logique (!)</h3>
        <pre><code>console.log(!true);          // Affiche : false
console.log(!false);         // Affiche : true

// Exemple pratique
let estConnecte = false;
console.log(!estConnecte);   // Affiche : true (NOT connected = connected)</code></pre>

        <h2>5. Les opérateurs d'incrémentation et décrémentation</h2>
        <p>Raccourcis pour ajouter ou soustraire 1.</p>

        <h3>Incrémentation (ajouter 1)</h3>
        <pre><code>let x = 5;
x++;          // x devient 6
console.log(x); // Affiche : 6

// Équivalent à
let y = 5;
y += 1;       // y devient 6</code></pre>

        <h3>Décrémentation (soustraire 1)</h3>
        <pre><code>let x = 5;
x--;          // x devient 4
console.log(x); // Affiche : 4

// Équivalent à
let y = 5;
y -= 1;       // y devient 4</code></pre>

        <h2>6. L'opérateur conditionnel (ternaire)</h2>
        <p>Un raccourci pour une condition simple.</p>

        <h3>Syntaxe</h3>
        <pre><code>condition ? valeur_si_vraie : valeur_si_fausse</code></pre>

        <h3>Exemple</h3>
        <pre><code>let age = 20;
let statut = (age >= 18) ? "Adulte" : "Enfant";
console.log(statut);       // Affiche : Adulte

// Équivalent à
let statut2;
if (age >= 18) {
  statut2 = "Adulte";
} else {
  statut2 = "Enfant";
}</code></pre>

        <h2>7. L'opérateur de chaîne</h2>
        <p><code>+</code> sert aussi à joindre des chaînes de caractères.</p>

        <h3>Concaténation</h3>
        <pre><code>let prenom = "Tom";
let nom = "Dubois";

let nomComplet = prenom + " " + nom;
console.log(nomComplet);   // Affiche : Tom Dubois

// Avec template literals
let age = 25;
let message = \`\${prenom} a \${age} ans\`;
console.log(message);      // Affiche : Tom a 25 ans</code></pre>

        <h2>Tableau récapitulatif</h2>
        <table style="width:100%; border-collapse: collapse;">
            <tr style="background: #f0f0f0;">
                <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Type</th>
                <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Symbole</th>
                <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Exemple</th>
                <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Résultat</th>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 8px;"><strong>Arithmétique</strong></td>
                <td style="border: 1px solid #ddd; padding: 8px;">+ - * / %</td>
                <td style="border: 1px solid #ddd; padding: 8px;">10 + 3</td>
                <td style="border: 1px solid #ddd; padding: 8px;">13</td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 8px;"><strong>Assignation</strong></td>
                <td style="border: 1px solid #ddd; padding: 8px;">= += -= *= /=</td>
                <td style="border: 1px solid #ddd; padding: 8px;">x += 5</td>
                <td style="border: 1px solid #ddd; padding: 8px;">x augmente de 5</td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 8px;"><strong>Comparaison</strong></td>
                <td style="border: 1px solid #ddd; padding: 8px;">== === != !== > < >= <=</td>
                <td style="border: 1px solid #ddd; padding: 8px;">5 === 5</td>
                <td style="border: 1px solid #ddd; padding: 8px;">true</td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 8px;"><strong>Logique</strong></td>
                <td style="border: 1px solid #ddd; padding: 8px;">&& || !</td>
                <td style="border: 1px solid #ddd; padding: 8px;">true && false</td>
                <td style="border: 1px solid #ddd; padding: 8px;">false</td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 8px;"><strong>Chaîne</strong></td>
                <td style="border: 1px solid #ddd; padding: 8px;">+</td>
                <td style="border: 1px solid #ddd; padding: 8px;">"Bonjour " + "monde"</td>
                <td style="border: 1px solid #ddd; padding: 8px;">"Bonjour monde"</td>
            </tr>
        </table>

        <h2>Ordre de priorité des opérateurs</h2>
        <p>Comme en mathématiques, certains opérateurs sont évalués avant d'autres.</p>

        <pre><code>console.log(2 + 3 * 4);    // Affiche : 14 (pas 20)
// Multiplication d'abord : 3 * 4 = 12, puis 2 + 12 = 14

console.log((2 + 3) * 4);  // Affiche : 20 (parenthèses d'abord)
// 2 + 3 = 5, puis 5 * 4 = 20</code></pre>

        <p><strong>Ordre (du plus prioritaire au moins):</strong></p>
        <ol>
            <li>Parenthèses <code>()</code></li>
            <li>Puissance <code>**</code></li>
            <li>Multiplication, Division, Modulo <code>* / %</code></li>
            <li>Addition, Soustraction <code>+ -</code></li>
            <li>Comparaison <code>&lt; &gt; &lt;= &gt;= === !==</code></li>
            <li>Logique ET <code>&&</code></li>
            <li>Logique OU <code>||</code></li>
            <li>Assignation <code>=</code></li>
        </ol>

        <h2>Exemples pratiques</h2>

        <h3>Exemple 1 : Calculer le prix TTC</h3>
        <pre><code>let prixHT = 100;
let tauxTVA = 0.20;  // 20% de TVA

let prixTTC = prixHT * (1 + tauxTVA);
console.log(prixTTC);  // Affiche : 120</code></pre>

        <h3>Exemple 2 : Vérifier si un utilisateur peut voter</h3>
        <pre><code>let age = 18;
let estCitoyen = true;

let peutVoter = (age >= 18) && estCitoyen;
console.log(peutVoter);  // Affiche : true</code></pre>

        <h3>Exemple 3 : Vérifier si un nombre est pair</h3>
        <pre><code>let nombre = 7;
let estPair = (nombre % 2 === 0);
console.log(estPair);  // Affiche : false (7 est impair)</code></pre>

        <h2>Points clés à retenir</h2>
        <ul>
            <li>Les opérateurs arithmétiques : <code>+ - * / % **</code></li>
            <li>Assignation : <code>=</code>, raccourcis : <code>+= -= *= /=</code></li>
            <li>Comparaison : <code>== === != !== > < >= <=</code></li>
            <li>Logique : <code>&& || !</code></li>
            <li>Toujours préférer <code>===</code> à <code>==</code></li>
            <li>Utilisez les parenthèses <code>()</code> pour clarifier</li>
            <li>L'ordre de priorité change le résultat</li>
        </ul>

        <h2>Sources</h2>
        <ul>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators" target="_blank">MDN — Expressions and Operators</a></li>
            <li><a href="https://www.w3schools.com/js/js_operators.asp" target="_blank">W3Schools — JavaScript Operators</a></li>
            <li><a href="https://javascript.info/operators" target="_blank">JavaScript.info — Operators</a></li>
            <li><a href="https://www.codecademy.com/learn/introduction-to-javascript" target="_blank">Codecademy — Introduction to JavaScript</a></li>
        </ul>
        `,
        sources: [
          {
            url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators',
            title: 'MDN — Expressions and Operators',
            type: 'Documentation officielle'
          },
          {
            url: 'https://www.w3schools.com/js/js_operators.asp',
            title: 'W3Schools — JavaScript Operators',
            type: 'Tutoriel interactif'
          },
          {
            url: 'https://javascript.info/operators',
            title: 'JavaScript.info — Operators',
            type: 'Tutoriel pédagogique'
          },
          {
            url: 'https://www.codecademy.com/learn/introduction-to-javascript',
            title: 'Codecademy — Introduction to JavaScript',
            type: 'Plateforme interactive'
          }
        ]
      }
    ],
    intermediaire: [
      {
        id: 'les-boucles-avancees',
        title: 'Les boucles avancées',
        description: 'Maîtrisez for...in, for...of, et les méthodes de tableau (map, filter, reduce)',
        duration: 18,
        concepts: 'for...in, for...of, forEach, map, filter, reduce, chaînage de méthodes',
        content: `
          <h1>Les boucles avancées en JavaScript</h1>
          <h2>Introduction</h2>
          <p>Découvrez les boucles modernes et les méthodes de tableau qui rendent le code plus lisible et expressif.</p>

          <h2>1. for...in : itérer sur les propriétés d'un objet</h2>
          <p><code>for...in</code> parcourt toutes les propriétés énumérables d'un objet.</p>
          <pre><code>const obj = { nom: 'Alice', âge: 28 };
for (let clé in obj) {
  console.log(clé + ': ' + obj[clé]);
}</code></pre>

          <h2>2. for...of : itérer sur les valeurs</h2>
          <p><code>for...of</code> itère sur les <strong>valeurs</strong> d'un tableau ou chaîne.</p>
          <pre><code>const couleurs = ['rouge', 'vert', 'bleu'];
for (let couleur of couleurs) {
  console.log(couleur);
}</code></pre>

          <h2>3. forEach() : exécuter une fonction</h2>
          <p><code>forEach()</code> applique une fonction à chaque élément.</p>
          <pre><code>const fruits = ['pomme', 'banane'];
fruits.forEach((fruit, index) => {
  console.log(index + ': ' + fruit);
});</code></pre>

          <h2>4. map() : transformer les éléments</h2>
          <p><code>map()</code> crée un nouveau tableau transformé.</p>
          <pre><code>const nombres = [1, 2, 3];
const doublés = nombres.map(n => n * 2);
// [2, 4, 6]</code></pre>

          <h2>5. filter() : sélectionner les éléments</h2>
          <p><code>filter()</code> crée un nouveau tableau filtré.</p>
          <pre><code>const nombres = [1, 2, 3, 4, 5];
const pairs = nombres.filter(n => n % 2 === 0);
// [2, 4]</code></pre>

          <h2>6. reduce() : accumuler une valeur</h2>
          <p><code>reduce()</code> combine tous les éléments en une seule valeur.</p>
          <pre><code>const nombres = [1, 2, 3, 4];
const somme = nombres.reduce((acc, n) => acc + n, 0);
// 10</code></pre>
        `,
        sources: [
          {
            url: 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/for...in',
            title: 'MDN — for...in',
            type: 'Documentation officielle'
          },
          {
            url: 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/for...of',
            title: 'MDN — for...of',
            type: 'Documentation officielle'
          },
          {
            url: 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map',
            title: 'MDN — Array.map()',
            type: 'Documentation officielle'
          },
          {
            url: 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter',
            title: 'MDN — Array.filter()',
            type: 'Documentation officielle'
          },
          {
            url: 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce',
            title: 'MDN — Array.reduce()',
            type: 'Documentation officielle'
          }
        ]
      }
    ],
    avance: []
  },
  python: {
    debutant: [
      {
        id: 'variables',
        title: 'Les variables',
        description: 'Déclarer, assigner et utiliser les variables en Python',
        duration: 15,
        concepts: 'Déclaration, types (int, float, str, bool), snake_case, conversion',
        content: `
          <h1>Les variables en Python</h1>
          <h2>Le problème</h2>
          <p>Imaginez que vous voulez stocker le prénom d'une personne pour l'utiliser plusieurs fois dans votre programme. En Python, vous avez besoin d'un <strong>conteneur</strong> pour garder cette information. Ce conteneur s'appelle une <strong>variable</strong>.</p>
          <p>Une variable est simplement une <strong>boîte nommée</strong> qui contient une valeur.</p>

          <h2>Qu'est-ce qu'une variable ?</h2>
          <p>Une variable est une <strong>zone de mémoire</strong> qui stocke une valeur et qui est <strong>identifiée par un nom</strong>.</p>
          <p><strong>Pourquoi c'est utile ?</strong></p>
          <ul>
            <li>Stocker des données pour les réutiliser</li>
            <li>Éviter de répéter la même valeur plusieurs fois</li>
            <li>Modifier une valeur en un seul endroit et que tout le code soit mis à jour</li>
            <li>Rendre le code plus lisible et maintenable</li>
          </ul>

          <h2>Comment créer une variable</h2>
          <h3>Étape 1 : Déclarer et assigner en même temps</h3>
          <p>En Python, c'est très simple. Vous écrivez le nom de la variable, puis le signe égal (=), puis la valeur :</p>
          <pre><code>prenom = "Marie"</code></pre>
          <p>Voilà ! La variable <code>prenom</code> contient maintenant la valeur "Marie".</p>

          <h3>Étape 2 : Utiliser la variable</h3>
          <pre><code>prenom = "Marie"
print(prenom)  # Affiche : Marie</code></pre>

          <h2>Les types de données</h2>
          <p>En Python, une variable peut contenir différents types de données. Python détecte automatiquement le type en fonction de la valeur assignée :</p>

          <h3>Nombres entiers (int)</h3>
          <pre><code>age = 25
nombre_de_cours = 5</code></pre>

          <h3>Nombres décimaux (float)</h3>
          <pre><code>prix = 19.99
hauteur = 1.75</code></pre>

          <h3>Texte (str)</h3>
          <pre><code>nom = "Dubois"
ville = "Paris"</code></pre>

          <h3>Booléen (bool)</h3>
          <pre><code>est_etudiant = True
a_passe_examen = False</code></pre>

          <h2>Convention de nommage : snake_case</h2>
          <p>Python utilise la convention <strong>snake_case</strong> pour les noms de variables. Cela signifie :</p>
          <ul>
            <li>Utiliser des lettres minuscules</li>
            <li>Séparer les mots avec un tiret bas (_)</li>
            <li>Pas d'espaces ni de caractères spéciaux</li>
          </ul>

          <p><strong>Exemples corrects :</strong></p>
          <pre><code>prenom_utilisateur = "Tom"
nombre_total_points = 150
est_valide = True</code></pre>

          <h2>Exemples progressifs</h2>
          <h3>Exemple 1 : Stocker un prénom</h3>
          <pre><code>prenom = "Jean"
print(prenom)  # Affiche : Jean</code></pre>

          <h3>Exemple 2 : Stocker un nombre et le modifier</h3>
          <pre><code>age = 25
print(age)     # Affiche : 25

age = 26       # On change la valeur
print(age)     # Affiche : 26</code></pre>

          <h3>Exemple 3 : Utiliser plusieurs variables</h3>
          <pre><code>prenom = "Sophie"
nom = "Dubois"
age = 30

message = prenom + " " + nom + " a " + str(age) + " ans"
print(message)
# Affiche : Sophie Dubois a 30 ans</code></pre>

          <h2>Résumé : Les types principaux</h2>
          <table>
            <tr><th>Type</th><th>Exemple</th><th>Description</th></tr>
            <tr><td><strong>int</strong></td><td>25</td><td>Nombre entier (sans décimales)</td></tr>
            <tr><td><strong>float</strong></td><td>19.99</td><td>Nombre avec décimales</td></tr>
            <tr><td><strong>str</strong></td><td>"Bonjour"</td><td>Texte (chaîne de caractères)</td></tr>
            <tr><td><strong>bool</strong></td><td>True / False</td><td>Vrai ou Faux</td></tr>
          </table>

          <h2>Piège courant : Convertir les types</h2>
          <p>Attention ! Si vous mélangez types différents, Python peut se plaindre :</p>
          <pre><code>age = 25
message = "J'ai " + age + " ans"  # ❌ Erreur !</code></pre>
          <p>Vous devez convertir <code>age</code> en texte :</p>
          <pre><code>age = 25
message = "J'ai " + str(age) + " ans"  # ✅ Correct
print(message)  # Affiche : J'ai 25 ans</code></pre>
        `,
        sources: [
          {
            url: 'https://docs.python.org/3/tutorial/introduction.html',
            title: 'Python.org - Introduction to Python',
            type: 'Documentation officielle'
          },
          {
            url: 'https://www.w3schools.com/python/python_variables.asp',
            title: 'W3Schools - Python Variables',
            type: 'Tutoriel interactif'
          },
          {
            url: 'https://realpython.com/python-variables/',
            title: 'Real Python - Variables and Data Types',
            type: 'Tutoriel pédagogique'
          },
          {
            url: 'https://www.codecademy.com/learn/learn-python-3',
            title: 'Codecademy - Learn Python 3',
            type: 'Plateforme interactive'
          }
        ]
      }
    ],
    intermediaire: [],
    avance: []
  },
  sql: {
    debutant: [
      {
        id: 'select',
        title: 'Le SELECT',
        description: 'Récupérer des données d\'une base de données avec SELECT',
        duration: 12,
        concepts: 'SELECT, FROM, colonnes, *, syntaxe de base',
        content: `
          <h1>Le SELECT en SQL</h1>
          <h2>Le problème</h2>
          <p>Vous avez une base de données remplie d'informations : des noms, des adresses, des commandes. Comment récupérer ces données ? Comment poser une question à la base de données et obtenir une réponse ?</p>
          <p>La réponse est l'instruction <strong>SELECT</strong>. C'est la façon la plus courante de lire les données d'une base de données.</p>

          <h2>Qu'est-ce que SELECT ?</h2>
          <p><strong>SELECT</strong> est une instruction SQL qui vous permet de :</p>
          <ul>
            <li>Récupérer des colonnes spécifiques d'une table</li>
            <li>Afficher tous les enregistrements ou certains seulement</li>
            <li>Lire les données sans les modifier</li>
          </ul>

          <h2>Syntaxe de base</h2>
          <p>La syntaxe la plus simple est :</p>
          <pre><code>SELECT colonne1, colonne2 FROM nom_table;</code></pre>
          <p>Ou pour sélectionner TOUTES les colonnes :</p>
          <pre><code>SELECT * FROM nom_table;</code></pre>

          <p><strong>Explication :</strong></p>
          <ul>
            <li><code>SELECT</code> : le mot-clé pour dire « je veux récupérer »</li>
            <li><code>colonne1, colonne2</code> : les colonnes que vous voulez (séparées par des virgules)</li>
            <li><code>*</code> : signifie « TOUTES les colonnes »</li>
            <li><code>FROM</code> : le mot-clé pour dire « d'où viennent les données »</li>
            <li><code>nom_table</code> : le nom de la table</li>
            <li><code>;</code> : point-virgule pour terminer l'instruction</li>
          </ul>

          <h2>Exemples progressifs</h2>
          <h3>Exemple 1 : Récupérer tous les enregistrements, toutes les colonnes</h3>
          <pre><code>SELECT * FROM clients;</code></pre>
          <p>Cela affiche <strong>tous les enregistrements</strong> et <strong>toutes les colonnes</strong> de la table <code>clients</code>.</p>

          <h3>Exemple 2 : Récupérer seulement certaines colonnes</h3>
          <p>Supposons que la table <code>clients</code> a les colonnes : id, nom, email, ville.</p>
          <pre><code>SELECT nom, email FROM clients;</code></pre>
          <p>Cela affiche seulement les colonnes <code>nom</code> et <code>email</code> de tous les enregistrements.</p>

          <h3>Exemple 3 : Table de produits</h3>
          <p>Supposons une table <code>produits</code> avec : id, nom, prix, stock.</p>
          <pre><code>SELECT nom, prix FROM produits;</code></pre>
          <p>Cela affiche le nom et le prix de tous les produits.</p>

          <h2>Règles importantes</h2>
          <h3>1. Ordre des colonnes</h3>
          <p>Les colonnes s'affichent dans l'ordre où vous les écrivez :</p>
          <pre><code>SELECT nom, email FROM clients;
-- Affiche : nom | email

SELECT email, nom FROM clients;
-- Affiche : email | nom (ordre inversé)</code></pre>

          <h3>2. Noms des colonnes</h3>
          <p>Les noms des colonnes doivent exactement correspondre aux colonnes de la table. Si la table a une colonne <code>nom_client</code>, vous devez écrire <code>nom_client</code>, pas <code>nom</code>.</p>

          <h3>3. Point-virgule</h3>
          <p>L'instruction SQL doit se terminer par un <strong>point-virgule (;)</strong>. C'est une bonne pratique.</p>

          <h2>Résumé : Syntaxe SELECT</h2>
          <table>
            <tr><th>Instruction</th><th>Exemple</th><th>Résultat</th></tr>
            <tr><td><code>SELECT *</code></td><td>SELECT * FROM clients;</td><td>Toutes les colonnes, tous les enregistrements</td></tr>
            <tr><td><code>SELECT col1</code></td><td>SELECT nom FROM clients;</td><td>Colonne spécifique, tous les enregistrements</td></tr>
            <tr><td><code>SELECT col1, col2</code></td><td>SELECT nom, email FROM clients;</td><td>Plusieurs colonnes spécifiques</td></tr>
          </table>

          <h2>Piège courant : Oublier FROM</h2>
          <pre><code>SELECT nom, email;  # ❌ Erreur ! D'où vient les données ?</code></pre>
          <p>Vous DEVEZ toujours spécifier la table avec <code>FROM</code> :</p>
          <pre><code>SELECT nom, email FROM clients;  # ✅ Correct</code></pre>

          <h2>Ce qui vient après</h2>
          <p>SELECT est la base. Une fois que vous maîtrisez SELECT, vous pouvez ajouter :</p>
          <ul>
            <li><code>WHERE</code> : pour filtrer (« affiche seulement les clients de Paris »)</li>
            <li><code>ORDER BY</code> : pour trier (« affiche par ordre alphabétique »)</li>
            <li><code>LIMIT</code> : pour limiter (« affiche seulement les 10 premiers »)</li>
          </ul>
        `,
        sources: [
          {
            url: 'https://www.w3schools.com/sql/sql_select.asp',
            title: 'W3Schools - SQL SELECT',
            type: 'Tutoriel interactif'
          },
          {
            url: 'https://www.tutorialspoint.com/sql/sql-select-statement.htm',
            title: 'TutorialsPoint - SQL SELECT Statement',
            type: 'Tutoriel pédagogique'
          },
          {
            url: 'https://www.postgresql.org/docs/current/sql-select.html',
            title: 'PostgreSQL Documentation - SELECT',
            type: 'Documentation officielle'
          },
          {
            url: 'https://mode.com/sql-tutorial/introduction-to-sql/',
            title: 'Mode Analytics SQL Tutorial',
            type: 'Tutoriel interactif'
          }
        ]
      },
      {
        id: 'where',
        title: 'Le WHERE',
        description: 'Filtrer les données selon des conditions',
        duration: 12,
        concepts: 'WHERE, filtrage, opérateurs de comparaison, AND, OR, NOT, BETWEEN, IN, LIKE, IS NULL',
        content: `
          <h1>Le WHERE en SQL</h1>

          <p><strong>Durée estimée :</strong> 12 minutes | <strong>Niveau :</strong> Débutant</p>

          <h2>Introduction</h2>
          <p>Imaginez une base de données avec 1 million de clients. Vous voulez afficher seulement les clients qui habitent à Paris. Comment faire sans télécharger 1 million d'enregistrements inutiles ?</p>
          <p>La réponse est <strong>WHERE</strong>. C'est l'instruction SQL qui vous permet de <strong>filtrer les données</strong> selon des conditions que vous définissez.</p>

          <h2>Qu'est-ce que WHERE ?</h2>
          <p><strong>WHERE</strong> est une clause SQL qui :</p>
          <ul>
            <li>Filtre les enregistrements selon une condition</li>
            <li>Retourne seulement les lignes qui satisfont cette condition</li>
            <li>Réduit drastiquement la quantité de données retournées</li>
          </ul>

          <h2>Syntaxe de base</h2>
          <p>La syntaxe est simple :</p>
          <pre><code>SELECT colonnes FROM table WHERE condition;</code></pre>

          <p><strong>Explication :</strong></p>
          <ul>
            <li><code>SELECT colonnes</code> : les colonnes à afficher</li>
            <li><code>FROM table</code> : la table source</li>
            <li><code>WHERE condition</code> : la condition à remplir</li>
          </ul>

          <h2>Les opérateurs de comparaison</h2>
          <p>Voici les opérateurs les plus courants pour les conditions :</p>

          <table style="width:100%; border-collapse: collapse;">
            <tr style="background: #f0f0f0;">
              <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Opérateur</th>
              <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Signification</th>
              <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Exemple</th>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px;"><code>=</code></td>
              <td style="border: 1px solid #ddd; padding: 8px;">Égal à</td>
              <td style="border: 1px solid #ddd; padding: 8px;"><code>WHERE ville = 'Paris'</code></td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px;"><code>!=</code> ou <code><></code></td>
              <td style="border: 1px solid #ddd; padding: 8px;">Différent de</td>
              <td style="border: 1px solid #ddd; padding: 8px;"><code>WHERE ville != 'Lyon'</code></td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px;"><code>></code></td>
              <td style="border: 1px solid #ddd; padding: 8px;">Supérieur à</td>
              <td style="border: 1px solid #ddd; padding: 8px;"><code>WHERE age > 18</code></td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px;"><code><</code></td>
              <td style="border: 1px solid #ddd; padding: 8px;">Inférieur à</td>
              <td style="border: 1px solid #ddd; padding: 8px;"><code>WHERE prix < 100</code></td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px;"><code>>=</code></td>
              <td style="border: 1px solid #ddd; padding: 8px;">Supérieur ou égal</td>
              <td style="border: 1px solid #ddd; padding: 8px;"><code>WHERE age >= 18</code></td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px;"><code><=</code></td>
              <td style="border: 1px solid #ddd; padding: 8px;">Inférieur ou égal</td>
              <td style="border: 1px solid #ddd; padding: 8px;"><code>WHERE prix <= 50</code></td>
            </tr>
          </table>

          <h2>Exemples progressifs</h2>

          <h3>Exemple 1 : Filtrer par texte exact</h3>
          <p>Affichons tous les clients qui habitent à Paris :</p>
          <pre><code>SELECT * FROM clients WHERE ville = 'Paris';</code></pre>
          <p>Cela retourne seulement les enregistrements où <code>ville</code> égale exactement <code>'Paris'</code>.</p>

          <h3>Exemple 2 : Filtrer par nombre</h3>
          <p>Affichons tous les produits qui coûtent plus de 50 euros :</p>
          <pre><code>SELECT nom, prix FROM produits WHERE prix > 50;</code></pre>
          <p>Cela affiche le nom et le prix de tous les produits avec un prix supérieur à 50.</p>

          <h3>Exemple 3 : Filtrer avec inégalité</h3>
          <p>Affichons tous les clients sauf ceux de Lyon :</p>
          <pre><code>SELECT nom, ville FROM clients WHERE ville != 'Lyon';</code></pre>
          <p>Cela retourne tous les clients dont la ville est différente de Lyon.</p>

          <h3>Exemple 4 : Filtrer une plage de nombres</h3>
          <p>Affichons tous les produits avec un prix entre 20 et 100 euros :</p>
          <pre><code>SELECT * FROM produits WHERE prix >= 20 AND prix <= 100;</code></pre>
          <p>L'opérateur <code>AND</code> combine deux conditions : le prix doit être >= 20 ET <= 100.</p>

          <h2>Les opérateurs logiques</h2>
          <p>Vous pouvez combiner plusieurs conditions avec <code>AND</code> et <code>OR</code> :</p>

          <h3>AND : Les deux conditions doivent être vraies</h3>
          <pre><code>SELECT * FROM clients WHERE ville = 'Paris' AND age > 18;</code></pre>
          <p>Affiche les clients qui habitent à Paris ET qui ont plus de 18 ans.</p>

          <h3>OR : Au moins une condition doit être vraie</h3>
          <pre><code>SELECT * FROM clients WHERE ville = 'Paris' OR ville = 'Lyon';</code></pre>
          <p>Affiche les clients qui habitent à Paris OU à Lyon.</p>

          <h3>NOT : Inverse une condition</h3>
          <pre><code>SELECT * FROM clients WHERE NOT ville = 'Paris';</code></pre>
          <p>Équivalent à <code>WHERE ville != 'Paris'</code>.</p>

          <h2>Opérateurs spécialisés</h2>

          <h3>BETWEEN : Entre deux valeurs</h3>
          <pre><code>SELECT * FROM produits WHERE prix BETWEEN 20 AND 100;</code></pre>
          <p>Plus lisible que <code>WHERE prix >= 20 AND prix <= 100;</code></p>

          <h3>IN : Parmi une liste</h3>
          <pre><code>SELECT * FROM clients WHERE ville IN ('Paris', 'Lyon', 'Marseille');</code></pre>
          <p>Affiche les clients de Paris, Lyon OU Marseille.</p>

          <h3>LIKE : Recherche textuelle avec jokers</h3>
          <pre><code>SELECT * FROM clients WHERE nom LIKE 'A%';</code></pre>
          <p>Affiche les clients dont le nom commence par 'A'. Le <code>%</code> est un joker (0 ou plusieurs caractères).</p>

          <pre><code>SELECT * FROM clients WHERE nom LIKE '%son';</code></pre>
          <p>Affiche les clients dont le nom finit par 'son' (ex: Dupont, Samson).</p>

          <pre><code>SELECT * FROM clients WHERE nom LIKE '%ar%';</code></pre>
          <p>Affiche les clients dont le nom contient 'ar' (ex: Martin, Dupont-Arcy).</p>

          <h3>IS NULL : Valeurs manquantes</h3>
          <pre><code>SELECT * FROM clients WHERE telephone IS NULL;</code></pre>
          <p>Affiche les clients qui n'ont pas de numéro de téléphone (valeur NULL).</p>

          <pre><code>SELECT * FROM clients WHERE telephone IS NOT NULL;</code></pre>
          <p>Affiche les clients qui ont un numéro de téléphone.</p>

          <h2>Tableau récapitulatif</h2>
          <table style="width:100%; border-collapse: collapse;">
            <tr style="background: #f0f0f0;">
              <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Opérateur</th>
              <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Description</th>
              <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Exemple</th>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px;"><code>=</code></td>
              <td style="border: 1px solid #ddd; padding: 8px;">Égal</td>
              <td style="border: 1px solid #ddd; padding: 8px;"><code>WHERE ville = 'Paris'</code></td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px;"><code>!=</code></td>
              <td style="border: 1px solid #ddd; padding: 8px;">Différent</td>
              <td style="border: 1px solid #ddd; padding: 8px;"><code>WHERE age != 0</code></td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px;"><code>></code></td>
              <td style="border: 1px solid #ddd; padding: 8px;">Supérieur</td>
              <td style="border: 1px solid #ddd; padding: 8px;"><code>WHERE prix > 100</code></td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px;"><code>AND</code></td>
              <td style="border: 1px solid #ddd; padding: 8px;">Les deux vraies</td>
              <td style="border: 1px solid #ddd; padding: 8px;"><code>WHERE age > 18 AND ville = 'Paris'</code></td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px;"><code>OR</code></td>
              <td style="border: 1px solid #ddd; padding: 8px;">Au moins une vraie</td>
              <td style="border: 1px solid #ddd; padding: 8px;"><code>WHERE ville = 'Paris' OR ville = 'Lyon'</code></td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px;"><code>BETWEEN</code></td>
              <td style="border: 1px solid #ddd; padding: 8px;">Entre deux valeurs</td>
              <td style="border: 1px solid #ddd; padding: 8px;"><code>WHERE age BETWEEN 18 AND 65</code></td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px;"><code>IN</code></td>
              <td style="border: 1px solid #ddd; padding: 8px;">Parmi une liste</td>
              <td style="border: 1px solid #ddd; padding: 8px;"><code>WHERE ville IN ('Paris', 'Lyon')</code></td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px;"><code>LIKE</code></td>
              <td style="border: 1px solid #ddd; padding: 8px;">Recherche texte</td>
              <td style="border: 1px solid #ddd; padding: 8px;"><code>WHERE nom LIKE 'A%'</code></td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px;"><code>IS NULL</code></td>
              <td style="border: 1px solid #ddd; padding: 8px;">Valeur manquante</td>
              <td style="border: 1px solid #ddd; padding: 8px;"><code>WHERE email IS NULL</code></td>
            </tr>
          </table>

          <h2>Exemples pratiques</h2>

          <h3>Exemple 1 : Boutique en ligne</h3>
          <p>Affiche tous les produits en stock avec un prix inférieur à 50 euros :</p>
          <pre><code>SELECT nom, prix, stock FROM produits WHERE stock > 0 AND prix < 50;</code></pre>

          <h3>Exemple 2 : Gestion de clients</h3>
          <p>Affiche les clients Premium qui habitent en Île-de-France :</p>
          <pre><code>SELECT nom, email FROM clients WHERE statut = 'Premium' AND region = 'Île-de-France';</code></pre>

          <h3>Exemple 3 : Recherche par pattern</h3>
          <p>Affiche tous les produits dont le nom contient 'laptop' :</p>
          <pre><code>SELECT * FROM produits WHERE nom LIKE '%laptop%';</code></pre>

          <h2>Points clés à retenir</h2>
          <ul>
            <li>WHERE filtre les enregistrements selon une condition</li>
            <li>Les opérateurs de comparaison : <code>=, !=, >, <, >=, <=</code></li>
            <li><code>AND</code> : les deux conditions doivent être vraies</li>
            <li><code>OR</code> : au moins une condition doit être vraie</li>
            <li><code>LIKE</code> avec <code>%</code> pour rechercher du texte</li>
            <li><code>BETWEEN</code> pour une plage de valeurs</li>
            <li><code>IN</code> pour une liste de valeurs</li>
            <li><code>IS NULL</code> pour les valeurs manquantes</li>
          </ul>

          <h2>Sources</h2>
          <ul>
            <li><a href="https://www.w3schools.com/sql/sql_where.asp" target="_blank">W3Schools — SQL WHERE</a></li>
            <li><a href="https://www.tutorialspoint.com/sql/sql-where-clause.htm" target="_blank">TutorialsPoint — SQL WHERE Clause</a></li>
            <li><a href="https://www.postgresql.org/docs/current/sql-select.html" target="_blank">PostgreSQL — SELECT Documentation</a></li>
            <li><a href="https://mode.com/sql-tutorial/sql-where/" target="_blank">Mode Analytics — SQL WHERE Tutorial</a></li>
          </ul>
        `,
        sources: [
          {
            url: 'https://www.w3schools.com/sql/sql_where.asp',
            title: 'W3Schools - SQL WHERE',
            type: 'Tutoriel interactif'
          },
          {
            url: 'https://www.tutorialspoint.com/sql/sql-where-clause.htm',
            title: 'TutorialsPoint - SQL WHERE Clause',
            type: 'Tutoriel pédagogique'
          },
          {
            url: 'https://www.postgresql.org/docs/current/sql-select.html',
            title: 'PostgreSQL Documentation - SELECT',
            type: 'Documentation officielle'
          },
          {
            url: 'https://mode.com/sql-tutorial/sql-where/',
            title: 'Mode Analytics - SQL WHERE Tutorial',
            type: 'Tutoriel interactif'
          }
        ]
      },
      {
        id: 'orderby',
        title: 'Le ORDER BY',
        description: 'Trier les résultats selon une ou plusieurs colonnes',
        duration: 11,
        concepts: 'ORDER BY, tri, ASC, DESC, ordre croissant, ordre décroissant, tri multiple',
        content: `
          <h1>Le ORDER BY en SQL</h1>

          <p><strong>Durée estimée :</strong> 11 minutes | <strong>Niveau :</strong> Débutant</p>

          <h2>Introduction</h2>
          <p>Imaginez une liste de 1 000 clients. Les résultats apparaissent dans n'importe quel ordre. Comment afficher les clients triés par nom, ou par date d'inscription, ou par prix décroissant ?</p>
          <p>La réponse est <strong>ORDER BY</strong>. C'est l'instruction SQL qui vous permet de <strong>trier les résultats</strong> dans l'ordre que vous choisissez : alphabétique, numérique, croissant ou décroissant.</p>

          <h2>Qu'est-ce que ORDER BY ?</h2>
          <p><strong>ORDER BY</strong> est une clause SQL qui :</p>
          <ul>
            <li>Trie les résultats selon une ou plusieurs colonnes</li>
            <li>Affiche les données dans l'ordre choisi (croissant ou décroissant)</li>
            <li>Améliore la lisibilité et l'organisation des données</li>
          </ul>

          <h2>Syntaxe de base</h2>
          <p>La syntaxe est simple :</p>
          <pre><code>SELECT colonnes FROM table ORDER BY colonne;</code></pre>

          <p><strong>Explication :</strong></p>
          <ul>
            <li><code>SELECT colonnes</code> : les colonnes à afficher</li>
            <li><code>FROM table</code> : la table source</li>
            <li><code>ORDER BY colonne</code> : la colonne par laquelle trier (par défaut : croissant)</li>
          </ul>

          <h2>Ordre croissant vs décroissant</h2>
          <p>Par défaut, ORDER BY trie en ordre <strong>croissant</strong> (ASC : 0→9, A→Z). Vous pouvez explicitement spécifier :</p>

          <table style="width:100%; border-collapse: collapse;">
            <tr style="background: #f0f0f0;">
              <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Mot-clé</th>
              <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Signification</th>
              <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Exemple</th>
              <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Résultat</th>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px;"><code>ASC</code></td>
              <td style="border: 1px solid #ddd; padding: 8px;">Ordre croissant (défaut)</td>
              <td style="border: 1px solid #ddd; padding: 8px;"><code>ORDER BY age ASC</code></td>
              <td style="border: 1px solid #ddd; padding: 8px;">18, 25, 30, 45, 60</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px;"><code>DESC</code></td>
              <td style="border: 1px solid #ddd; padding: 8px;">Ordre décroissant</td>
              <td style="border: 1px solid #ddd; padding: 8px;"><code>ORDER BY age DESC</code></td>
              <td style="border: 1px solid #ddd; padding: 8px;">60, 45, 30, 25, 18</td>
            </tr>
          </table>

          <h2>Exemples progressifs</h2>

          <h3>Exemple 1 : Trier par texte (ordre alphabétique)</h3>
          <p>Affichons tous les clients triés par nom alphabétique :</p>
          <pre><code>SELECT nom, email FROM clients ORDER BY nom;</code></pre>
          <p>Résultat : Les noms apparaissent en ordre A→Z (Alice, Bob, Charles, David...).</p>

          <h3>Exemple 2 : Trier par nombre (ordre croissant)</h3>
          <p>Affichons tous les produits triés par prix du moins cher au plus cher :</p>
          <pre><code>SELECT nom, prix FROM produits ORDER BY prix ASC;</code></pre>
          <p>Résultat : Les produits apparaissent du moins cher (5€) au plus cher (500€).</p>

          <h3>Exemple 3 : Trier en ordre décroissant</h3>
          <p>Affichons les clients du plus jeun au plus âgé :</p>
          <pre><code>SELECT nom, age FROM clients ORDER BY age DESC;</code></pre>
          <p>Résultat : Les clients apparaissent de l'âge le plus élevé (80 ans) au plus bas (18 ans).</p>

          <h3>Exemple 4 : Trier par plusieurs colonnes</h3>
          <p>Affichons les clients triés d'abord par région, puis par nom à l'intérieur de chaque région :</p>
          <pre><code>SELECT nom, region FROM clients ORDER BY region, nom;</code></pre>
          <p>Résultat : Les régions sont triées alphabétiquement, et à l'intérieur de chaque région, les noms sont aussi triés alphabétiquement.</p>

          <h3>Exemple 5 : Combiner WHERE et ORDER BY</h3>
          <p>Affichons les produits en stock avec prix < 100, triés par prix décroissant :</p>
          <pre><code>SELECT nom, prix, stock FROM produits WHERE stock > 0 AND prix < 100 ORDER BY prix DESC;</code></pre>
          <p>L'ordre d'exécution : d'abord <code>WHERE</code> (filtre), ensuite <code>ORDER BY</code> (trie les résultats filtrés).</p>

          <h2>Points clés à retenir</h2>
          <ul>
            <li>ORDER BY trie les résultats selon une ou plusieurs colonnes</li>
            <li>ASC = ordre croissant (défaut) ; DESC = ordre décroissant</li>
            <li>Le tri s'applique APRÈS le filtrage WHERE</li>
            <li>Vous pouvez trier par plusieurs colonnes : <code>ORDER BY col1, col2</code></li>
            <li>ORDER BY de colonne en texte suit l'ordre alphabétique</li>
            <li>ORDER BY de colonne numérique suit l'ordre numérique</li>
            <li>Les NULL s'affichent généralement à part (avant ou après)</li>
          </ul>

          <h2>Sources</h2>
          <ul>
            <li><a href="https://www.w3schools.com/sql/sql_orderby.asp" target="_blank">W3Schools — SQL ORDER BY</a></li>
            <li><a href="https://www.tutorialspoint.com/sql/sql-order-by.htm" target="_blank">TutorialsPoint — SQL ORDER BY</a></li>
            <li><a href="https://www.postgresql.org/docs/current/queries-order.html" target="_blank">PostgreSQL — ORDER BY Clause</a></li>
            <li><a href="https://mode.com/sql-tutorial/sql-order-by/" target="_blank">Mode Analytics — SQL ORDER BY Tutorial</a></li>
          </ul>
        `,
        sources: [
          {
            url: 'https://www.w3schools.com/sql/sql_orderby.asp',
            title: 'W3Schools - SQL ORDER BY',
            type: 'Tutoriel interactif'
          },
          {
            url: 'https://www.tutorialspoint.com/sql/sql-order-by.htm',
            title: 'TutorialsPoint - SQL ORDER BY',
            type: 'Tutoriel pédagogique'
          },
          {
            url: 'https://www.postgresql.org/docs/current/queries-order.html',
            title: 'PostgreSQL - ORDER BY Clause',
            type: 'Documentation officielle'
          },
          {
            url: 'https://mode.com/sql-tutorial/sql-order-by/',
            title: 'Mode Analytics - SQL ORDER BY Tutorial',
            type: 'Tutoriel interactif'
          }
        ]
      }
    ],
    intermediaire: [],
    avance: []
  }
};

// Exercices pour JavaScript Débutant
const exercisesData_JS_Debutant = [
  {
    id: "var_qcm_1",
    type: "mcq",
    numero: 1,
    difficulte: "facile",
    enonce: "Qu'est-ce qu'une variable en JavaScript ?",
    options: ["A) Un conteneur qui stocke une valeur", "B) Une fonction qui affiche du texte", "C) Une boucle qui répète du code", "D) Un mot réservé du langage"],
    bonne_reponse_index: 0,
    explication: "Une variable est simplement une boîte (une zone de mémoire) qui stocke une valeur.",
    indices: ["Indice 1 : Qu'avez-vous appris dans la première section de la leçon ?", "Indice 2 : Une variable stocke quelque chose pour la réutiliser."]
  },
  {
    id: "var_qcm_2",
    type: "mcq",
    numero: 2,
    difficulte: "facile",
    enonce: "Comment déclarez-vous une variable appelée 'nom' en JavaScript ?",
    options: ["A) var nom;", "B) let nom;", "C) const nom;", "D) Toutes les réponses sont correctes"],
    bonne_reponse_index: 3,
    explication: "Vous pouvez utiliser var, let, ou const. Cependant, let est recommandé pour les débutants.",
    indices: ["Indice 1 : Il y a trois façons de déclarer une variable.", "Indice 2 : La leçon recommande laquelle pour les débutants ?"]
  },
  {
    id: "var_qcm_3",
    type: "mcq",
    numero: 3,
    difficulte: "facile",
    enonce: "Quel sera le résultat de ce code ? let age = 25; console.log(age);",
    options: ["A) age", "B) 25", "C) undefined", "D) Erreur"],
    bonne_reponse_index: 1,
    explication: "console.log affiche la VALEUR contenue dans la variable, pas le nom.",
    indices: ["Indice 1 : Que stocke la variable age ?", "Indice 2 : console.log affiche la VALEUR, pas le nom de la variable."]
  },
  {
    id: "var_qcm_4",
    type: "mcq",
    numero: 4,
    difficulte: "facile",
    enonce: "Que signifie 'assigner une valeur' à une variable ?",
    options: ["A) Donner un nom à la variable", "B) Donner une valeur à la variable", "C) Afficher la variable", "D) Supprimer la variable"],
    bonne_reponse_index: 1,
    explication: "Assigner veut dire donner une valeur. Par exemple, age = 25 assigne 25 à age.",
    indices: ["Indice 1 : Relisez la section 'Étape 2 : Assigner une valeur'.", "Indice 2 : L'assignation utilise le signe = (égal)."]
  },
  {
    id: "var_qcm_5",
    type: "mcq",
    numero: 5,
    difficulte: "moyen",
    enonce: "Quelle est la principale différence entre 'let' et 'const' ?",
    options: ["A) let est plus rapide que const", "B) const ne peut pas être changée après sa déclaration", "C) let fonctionne seulement dans les fonctions", "D) Aucune différence"],
    bonne_reponse_index: 1,
    explication: "const = constant. Une fois définie, on ne peut pas changer sa valeur. let peut être changée.",
    indices: ["Indice 1 : Relisez le tableau comparatif.", "Indice 2 : 'const' signifie 'constant'."]
  },
  {
    id: "var_qcm_6",
    type: "mcq",
    numero: 6,
    difficulte: "moyen",
    enonce: "Quel nom de variable respecte la convention de nommage JavaScript recommandée ?",
    options: ["A) let mon_nom = 'Tom';", "B) let MontNom = 'Tom';", "C) let monNom = 'Tom';", "D) let monnom = 'Tom';"],
    bonne_reponse_index: 2,
    explication: "JavaScript utilise camelCase : première lettre minuscule, puis majuscule à chaque nouveau mot.",
    indices: ["Indice 1 : La convention s'appelle 'camelCase'.", "Indice 2 : Regardez la section 'Convention recommandée'."]
  },
  {
    id: "var_qcm_7",
    type: "mcq",
    numero: 7,
    difficulte: "moyen",
    enonce: "Qu'affiche ce code ? let x = 10; if (true) { let x = 20; console.log(x); } console.log(x);",
    options: ["A) 10 puis 10", "B) 20 puis 10", "C) 20 puis 20", "D) Erreur"],
    bonne_reponse_index: 1,
    explication: "À cause de la portée : le x dans le bloc {} est différent du x global.",
    indices: ["Indice 1 : Relisez la section 'La portée (scope)'.", "Indice 2 : Une variable let n'existe que dans son bloc."]
  },
  {
    id: "var_qcm_8",
    type: "mcq",
    numero: 8,
    difficulte: "difficile",
    enonce: "Pourquoi devez-vous toujours déclarer une variable avec let, const, ou var ?",
    options: ["A) C'est juste une convention", "B) JavaScript l'exige pour éviter les erreurs", "C) Pour rendre le code lisible", "D) Parce que c'est plus rapide"],
    bonne_reponse_index: 1,
    explication: "Sinon, vous créez une variable globale par accident, ce qui est dangereux.",
    indices: ["Indice 1 : Relisez le piège 1 dans la leçon.", "Indice 2 : Qu'arrive-t-il si vous oubliez de déclarer ?"]
  },
  {
    id: "var_qcm_9",
    type: "mcq",
    numero: 9,
    difficulte: "difficile",
    enonce: "Que ferait ce code ? const PI = 3.14; PI = 3.14159;",
    options: ["A) Affiche 3.14159", "B) Affiche 3.14", "C) Produit une erreur", "D) Declare PI deux fois"],
    bonne_reponse_index: 2,
    explication: "Vous ne pouvez pas changer une variable déclarée avec const.",
    indices: ["Indice 1 : Relisez le piège 3 dans la leçon.", "Indice 2 : 'const' = la valeur ne peut pas être modifiée."]
  },
  {
    id: "var_qcm_10",
    type: "mcq",
    numero: 10,
    difficulte: "difficile",
    enonce: "Quel ensemble suit les bonnes pratiques pour une boutique en ligne ?",
    options: ["A) let prix = 29.99; let quantite = 2;", "B) const prix = 29.99; const quantite = 2;", "C) var prix = 29.99; var quantite = 2;", "D) prix = 29.99; quantite = 2;"],
    bonne_reponse_index: 1,
    explication: "const pour les valeurs fixes, let pour celles qui changent.",
    indices: ["Indice 1 : Quelles valeurs ne changent pas ?", "Indice 2 : const pour constantes, let pour variables."]
  },
  {
    id: "var_trou_1",
    type: "fill_blank",
    numero: 11,
    difficulte: "facile",
    enonce: "Complétez : _____ nom = 'Alice';",
    reponse_attendue: "let",
    reponses_acceptees: ["let", "var", "const"],
    explication: "Vous devez déclarer avec let, var, ou const.",
    indices: ["Indice 1 : C'est un mot-clé pour déclarer une variable.", "Indice 2 : Pour débutants, on recommande _____."]
  },
  {
    id: "var_trou_2",
    type: "fill_blank",
    numero: 12,
    difficulte: "facile",
    enonce: "Complétez : let age; age = ____",
    reponse_attendue: "25",
    reponses_acceptees: ["25", "30", "20", "un nombre"],
    explication: "Assignez une valeur numérique.",
    indices: ["Indice 1 : age est pour stocker un âge.", "Indice 2 : Mettez un nombre."]
  },
  {
    id: "var_trou_3",
    type: "fill_blank",
    numero: 13,
    difficulte: "moyen",
    enonce: "Complétez : Valeurs fixes → _____ ; Valeurs changeantes → _____",
    reponse_attendue: "const",
    reponses_acceptees: ["const", "const et let"],
    explication: "const pour constantes, let pour variables.",
    indices: ["Indice 1 : Relisez le tableau comparatif.", "Indice 2 : Quel mot-clé empêche la modification ?"]
  },
  {
    id: "var_trou_4",
    type: "fill_blank",
    numero: 14,
    difficulte: "moyen",
    enonce: "La convention JavaScript s'appelle _____",
    reponse_attendue: "camelCase",
    reponses_acceptees: ["camelCase", "camel case"],
    explication: "Première lettre minuscule, puis majuscule à chaque nouveau mot.",
    indices: ["Indice 1 : Relisez 'Convention recommandée'.", "Indice 2 : Ça s'appelle 'camel' car c'est comme une bosse."]
  },
  {
    id: "var_trou_5",
    type: "fill_blank",
    numero: 15,
    difficulte: "difficile",
    enonce: "Une variable let/const n'existe que dans son _____ { }",
    reponse_attendue: "bloc",
    reponses_acceptees: ["bloc", "scope", "portée"],
    explication: "La portée détermine où la variable existe.",
    indices: ["Indice 1 : Relisez 'La portée (scope)'.", "Indice 2 : Le mot français est '_____'."]
  },
  {
    id: "var_libre_1",
    type: "free_text",
    numero: 16,
    difficulte: "facile",
    enonce: "Écrivez du code qui déclare 'prenom' = 'Bob' et l'affiche",
    solution: "let prenom = 'Bob';\\nconsole.log(prenom);",
    explication: "Déclarez avec let, assignez entre guillemets, puis console.log().",
    indices: ["Indice 1 : Déclarez avec let, puis assignez avec =", "Indice 2 : Pour du texte, utilisez des guillemets."]
  },
  {
    id: "var_libre_2",
    type: "free_text",
    numero: 17,
    difficulte: "moyen",
    enonce: "Créez un panier : produit 'Livre' (19.99€), quantité 3, calculez le total",
    solution: "let produit = 'Livre';\\nlet prix = 19.99;\\nlet quantite = 3;\\nlet total = prix * quantite;\\nconsole.log('Total: ' + total);",
    explication: "Créez variables, calculez total avec multiplication.",
    indices: ["Indice 1 : Créez 4 variables.", "Indice 2 : total = prix * quantite"]
  },
  {
    id: "var_libre_3",
    type: "free_text",
    numero: 18,
    difficulte: "moyen",
    enonce: "Déclarez constantes : rayon = 5, PI = 3.14159, calculez l'aire d'un cercle",
    solution: "const rayon = 5;\\nconst PI = 3.14159;\\nlet aire = PI * rayon * rayon;\\nconsole.log('Aire: ' + aire);",
    explication: "PI et rayon → const. Aire calculée → let. Formule : PI × rayon²",
    indices: ["Indice 1 : Valeurs fixes → const", "Indice 2 : aire = PI * rayon * rayon"]
  },
  {
    id: "var_libre_4",
    type: "free_text",
    numero: 19,
    difficulte: "difficile",
    enonce: "Montrez la différence entre portée globale et locale avec une fonction",
    solution: "let message = 'Global';\\nfunction test() {\\n  let message = 'Local';\\n  console.log(message);\\n}\\ntest();\\nconsole.log(message);",
    explication: "Variables locales et globales même nom → scopes différentes.",
    indices: ["Indice 1 : Créez une fonction", "Indice 2 : Déclarez message deux fois avec let"]
  },
  {
    id: "var_libre_5",
    type: "free_text",
    numero: 20,
    difficulte: "difficile",
    enonce: "Appliquez les bonnes pratiques : camelCase, const/let, 3+ variables, calcul final",
    solution: "const tauxTVA = 0.20;\\nlet prixHT = 100;\\nlet prixTTC = prixHT * (1 + tauxTVA);\\nconsole.log('TTC: ' + prixTTC);",
    explication: "camelCase, const/let, calculs, affichage.",
    indices: ["Indice 1 : Noms en camelCase", "Indice 2 : const pour fixes, let pour calculs"]
  }
];

// Exercices pour Python Débutant
const exercisesData_Python_Debutant = [
  {id:"py_var_qcm_1",type:"mcq",numero:1,difficulte:"facile",enonce:"Quelle est la bonne façon de créer une variable en Python ?",options:["A) var prenom = 'Alice'","B) prenom = 'Alice'","C) let prenom = 'Alice'","D) const prenom = 'Alice'"],bonne_reponse_index:1,explication:"En Python, on n'utilise pas var, let, ou const. On écrit simplement : nom = valeur",indices:["Indice 1 : Python est très simple pour les variables.","Indice 2 : Pas de mot-clé spécial, juste = pour assigner."]},
  {id:"py_var_qcm_2",type:"mcq",numero:2,difficulte:"facile",enonce:"Quel est le type de cette variable ? nombre = 25",options:["A) str","B) float","C) int","D) bool"],bonne_reponse_index:2,explication:"25 est un nombre entier (integer), donc le type est int. Si c'était 25.0, ce serait float.",indices:["Indice 1 : Quel type pour un nombre sans décimales ?","Indice 2 : int = integer (entier)"]},
  {id:"py_var_qcm_3",type:"mcq",numero:3,difficulte:"facile",enonce:"Qu'affiche ce code ? prenom = 'Tom'; print(prenom)",options:["A) prenom","B) 'Tom'","C) Tom","D) Erreur"],bonne_reponse_index:2,explication:"print() affiche la VALEUR de la variable, pas son nom ni les guillemets.",indices:["Indice 1 : print() affiche quoi ?","Indice 2 : La valeur est 'Tom', print affiche Tom sans guillemets."]},
  {id:"py_var_qcm_4",type:"mcq",numero:4,difficulte:"facile",enonce:"Quel est le type de cette variable ? prix = 19.99",options:["A) int","B) str","C) float","D) bool"],bonne_reponse_index:2,explication:"19.99 a une décimale, donc c'est un float (nombre décimal).",indices:["Indice 1 : C'est un nombre avec point décimal.","Indice 2 : float = floating point number."]},
  {id:"py_var_qcm_5",type:"mcq",numero:5,difficulte:"moyen",enonce:"Quel est le type de cette variable ? est_actif = True",options:["A) str","B) int","C) float","D) bool"],bonne_reponse_index:3,explication:"True et False sont des booléens (bool). C'est un type qui dit Vrai ou Faux.",indices:["Indice 1 : True/False sont des booléens.","Indice 2 : bool = boolean (vrai/faux)."]},
  {id:"py_var_qcm_6",type:"mcq",numero:6,difficulte:"moyen",enonce:"Comment nommer correctement une variable en Python ?",options:["A) monNom","B) monnom","C) mon_nom","D) mon-nom"],bonne_reponse_index:2,explication:"Python utilise snake_case : minuscules et tiret bas (_) pour séparer les mots.",indices:["Indice 1 : La convention Python s'appelle snake_case.","Indice 2 : Utilisez _ pour séparer les mots."]},
  {id:"py_var_qcm_7",type:"mcq",numero:7,difficulte:"moyen",enonce:"Qu'affiche ce code ? age = 25; age = 26; print(age)",options:["A) 25","B) 26","C) 25 26","D) Erreur"],bonne_reponse_index:1,explication:"La deuxième assignation remplace la première. age vaut maintenant 26.",indices:["Indice 1 : On change la valeur de age.","Indice 2 : print() affiche la dernière valeur."]},
  {id:"py_var_qcm_8",type:"mcq",numero:8,difficulte:"difficile",enonce:"Qu'affiche ce code ? x = 10; y = x; x = 20; print(y)",options:["A) 10","B) 20","C) Erreur","D) undefined"],bonne_reponse_index:0,explication:"y reçoit la valeur de x au moment de l'assignation (10). Changer x après n'affecte pas y.",indices:["Indice 1 : y = x copie la VALEUR, pas le lien.","Indice 2 : y garde la valeur 10."]},
  {id:"py_var_qcm_9",type:"mcq",numero:9,difficulte:"difficile",enonce:"Pourquoi ce code produit une erreur ? message = 'J\\'ai ' + age + ' ans'",options:["A) On ne peut pas utiliser +","B) On mélange str et int sans conversion","C) Les guillements","D) Pas d'erreur"],bonne_reponse_index:1,explication:"On ne peut pas ajouter du texte (str) et un nombre (int) directement. Il faut convertir : str(age).",indices:["Indice 1 : On mélange quels types ?","Indice 2 : Il faut convertir age en texte."]},
  {id:"py_var_qcm_10",type:"mcq",numero:10,difficulte:"difficile",enonce:"Quelle bonne pratique respecte ce code ?",options:["A) nom = 'Jean'","B) nom_utilisateur = 'Jean'","C) NOM = 'Jean'","D) n = 'Jean'"],bonne_reponse_index:1,explication:"nom_utilisateur suit snake_case et est descriptif. Les autres ne respectent pas la convention ou sont trop courts.",indices:["Indice 1 : Nom clair et en snake_case.","Indice 2 : Évitez des noms trop courts ou camelCase."]},
  {id:"py_var_trou_1",type:"fill_blank",numero:11,difficulte:"facile",enonce:"Complétez : _____ = 'Sophie'",reponse_attendue:"prenom",reponses_acceptees:["prenom","nom","nom_utilisateur","x","y"],explication:"Vous assignez une valeur à une variable. Le nom de la variable peut être n'importe lequel.",indices:["Indice 1 : C'est le nom de la variable.","Indice 2 : On assigne 'Sophie' à _____."]},
  {id:"py_var_trou_2",type:"fill_blank",numero:12,difficulte:"facile",enonce:"Complétez : age = _____",reponse_attendue:"25",reponses_acceptees:["25","30","20","un nombre entier"],explication:"Assignez une valeur numérique à la variable age.",indices:["Indice 1 : age doit contenir un nombre.","Indice 2 : Un entier (int)."]},
  {id:"py_var_trou_3",type:"fill_blank",numero:13,difficulte:"moyen",enonce:"Complétez : prix = 19.99; type = _____",reponse_attendue:"float",reponses_acceptees:["float","nombre"],explication:"19.99 est un nombre avec décimal, donc type float.",indices:["Indice 1 : Quel type pour les nombres avec décimales ?","Indice 2 : float = floating point."]},
  {id:"py_var_trou_4",type:"fill_blank",numero:14,difficulte:"moyen",enonce:"Complétez : La convention Python utilise _____",reponse_attendue:"snake_case",reponses_acceptees:["snake_case","snake case"],explication:"Python utilise snake_case pour les noms (lettres minuscules + tiret bas).",indices:["Indice 1 : Comment nommer les variables en Python ?","Indice 2 : snake_case = minuscules + _."]},
  {id:"py_var_trou_5",type:"fill_blank",numero:15,difficulte:"difficile",enonce:"Complétez : message = 'J\\'ai ' + str(age) + ' _____'",reponse_attendue:"ans",reponses_acceptees:["ans","années","an"],explication:"Pour concaténer des strings correctement, vous devez convertir age en str().",indices:["Indice 1 : Complétez la phrase.","Indice 2 : 'ans' complète 'J\\'ai 25 _____'."]},
  {id:"py_var_libre_1",type:"free_text",numero:16,difficulte:"facile",enonce:"Écrivez du code qui crée une variable 'ville' avec 'Paris' et l'affiche",solution:"ville = 'Paris'\\nprint(ville)",explication:"Assignez la valeur 'Paris' à la variable ville, puis utilisez print() pour l'afficher.",indices:["Indice 1 : Assignez avec =","Indice 2 : Utilisez print() pour afficher."]},
  {id:"py_var_libre_2",type:"free_text",numero:17,difficulte:"moyen",enonce:"Créez 3 variables : nom = 'Alice', age = 28, ville = 'Lyon'. Affichez : 'Alice a 28 ans et habite Lyon'",solution:"nom = 'Alice'\\nage = 28\\nville = 'Lyon'\\nprint(nom + ' a ' + str(age) + ' ans et habite ' + ville)",explication:"Créez les variables, puis concaténez-les avec + et str() pour convertir le nombre.",indices:["Indice 1 : Créez 3 variables.","Indice 2 : Utilisez str(age) pour convertir le nombre."]},
  {id:"py_var_libre_3",type:"free_text",numero:18,difficulte:"moyen",enonce:"Écrivez du code qui crée une variable 'total' avec 50, l'augmente de 10, puis l'affiche",solution:"total = 50\\ntotal = total + 10\\nprint(total)",explication:"Assignez 50, puis augmentez avec = total + 10 (ou total += 10), puis affichez.",indices:["Indice 1 : Assignez 50 d'abord.","Indice 2 : Modifiez avec total = total + 10."]},
  {id:"py_var_libre_4",type:"free_text",numero:19,difficulte:"difficile",enonce:"Écrivez du code qui crée 2 variables (x=10, y=5), les échange, puis affiche les nouvelles valeurs",solution:"x = 10\\ny = 5\\ntemp = x\\nx = y\\ny = temp\\nprint('x = ' + str(x))\\nprint('y = ' + str(y))",explication:"Pour échanger, utilisez une variable temporaire (temp). Ou en Python : x, y = y, x",indices:["Indice 1 : Créez une variable temporaire.","Indice 2 : temp = x; x = y; y = temp"]},
  {id:"py_var_libre_5",type:"free_text",numero:20,difficulte:"difficile",enonce:"Appliquez les bonnes pratiques : créez 4 variables en snake_case, utilisez types variés, affiche un message final",solution:"nom_utilisateur = 'Tom'\\nage_utilisateur = 25\\nprix_produit = 19.99\\nest_premium = True\\nprint(nom_utilisateur + ' a ' + str(age_utilisateur) + ' ans')",explication:"Respectez snake_case, utilisez int, float, bool, str, et créez un message final avec concaténation.",indices:["Indice 1 : Noms en snake_case.","Indice 2 : Types variés : int, float, str, bool."]}
];

// Exercices pour SQL Débutant
const exercisesData_SQL_Debutant = [
  {id:"sql_sel_qcm_1",type:"mcq",numero:1,difficulte:"facile",enonce:"Quelle instruction SQL récupère les données d'une table ?",options:["A) INSERT","B) DELETE","C) SELECT","D) UPDATE"],bonne_reponse_index:2,explication:"SELECT est l'instruction pour lire/récupérer des données. Les autres modifient les données.",indices:["Indice 1 : Lire les données","Indice 2 : Le premier mot-clé à apprendre en SQL."]},
  {id:"sql_sel_qcm_2",type:"mcq",numero:2,difficulte:"facile",enonce:"Qu'affiche : SELECT * FROM clients;",options:["A) Seulement les noms","B) Toutes les colonnes, tous les enregistrements","C) Une seule colonne","D) Le nombre d'enregistrements"],bonne_reponse_index:1,explication:"* signifie TOUTES les colonnes. FROM clients spécifie la table. Le résultat = tous les enregistrements et toutes les colonnes.",indices:["Indice 1 : * signifie quoi ?","Indice 2 : Toutes les colonnes et tous les enregistrements."]},
  {id:"sql_sel_qcm_3",type:"mcq",numero:3,difficulte:"facile",enonce:"Que fait FROM dans : SELECT nom FROM clients;",options:["A) Affiche FROM","B) Spécifie la table","C) Crée une table","D) Supprime des données"],bonne_reponse_index:1,explication:"FROM dit « d'où viennent les données ». Elle spécifie la table.",indices:["Indice 1 : D'où viennent les données ?","Indice 2 : FROM = nom de la table."]},
  {id:"sql_sel_qcm_4",type:"mcq",numero:4,difficulte:"facile",enonce:"Qu'affiche : SELECT nom, email FROM clients;",options:["A) Seulement nom","B) Seulement email","C) Les colonnes nom et email","D) Toutes les colonnes"],bonne_reponse_index:2,explication:"Les colonnes séparées par des virgules (nom, email) sont affichées. Toutes les lignes s'affichent.",indices:["Indice 1 : Quelles colonnes ?","Indice 2 : nom, email = deux colonnes spécifiques."]},
  {id:"sql_sel_qcm_5",type:"mcq",numero:5,difficulte:"moyen",enonce:"Quelle est la différence entre SELECT * et SELECT nom, email ?",options:["A) Pas de différence","B) * = une colonne; nom, email = trois colonnes","C) * = toutes les colonnes; nom, email = deux colonnes spécifiques","D) SELECT * est plus lent"],bonne_reponse_index:2,explication:"* affiche tout. Lister les colonnes (nom, email) affiche seulement celles-ci.",indices:["Indice 1 : * = ?","Indice 2 : nom, email = colonnes nommées explicitement."]},
  {id:"sql_sel_qcm_6",type:"mcq",numero:6,difficulte:"moyen",enonce:"Si la table 'produits' a les colonnes : id, nom, prix, stock. Que ferait : SELECT stock, nom FROM produits;",options:["A) Affiche id, nom, prix","B) Affiche stock et nom (dans cet ordre)","C) Affiche uniquement stock","D) Erreur"],bonne_reponse_index:1,explication:"Les colonnes s'affichent dans l'ordre nommé. Donc : stock, puis nom (pas l'ordre de la table).",indices:["Indice 1 : Ordre des colonnes","Indice 2 : stock, nom = cet ordre exact."]},
  {id:"sql_sel_qcm_7",type:"mcq",numero:7,difficulte:"moyen",enonce:"Pourquoi ce code produit une erreur ? SELECT nom, invalid FROM clients;",options:["A) nom n'existe pas","B) invalid n'existe pas dans la table","C) FROM oubliée","D) Pas d'erreur"],bonne_reponse_index:1,explication:"Si la colonne 'invalid' n'existe pas dans la table, SQL produit une erreur.",indices:["Indice 1 : Vérifiez les noms des colonnes.","Indice 2 : invalid = colonne inexistante."]},
  {id:"sql_sel_qcm_8",type:"mcq",numero:8,difficulte:"difficile",enonce:"Qu'affiche : SELECT email, nom FROM clients; vs SELECT nom, email FROM clients;",options:["A) Même résultat","B) Différent ordre des colonnes","C) Erreur sur le second","D) Erreur sur le premier"],bonne_reponse_index:1,explication:"Même données, mais ordre des colonnes différent. Première : email puis nom. Deuxième : nom puis email.",indices:["Indice 1 : L'ordre des colonnes","Indice 2 : Les deux affichent les mêmes données mais dans un ordre différent."]},
  {id:"sql_sel_qcm_9",type:"mcq",numero:9,difficulte:"difficile",enonce:"Pourquoi faut-il terminer par un point-virgule ? SELECT nom FROM clients",options:["A) C'est optionnel","B) Cela termine l'instruction SQL","C) Pour clarté seulement","D) Erreur obligatoire"],bonne_reponse_index:1,explication:"Le point-virgule (;) termine une instruction SQL. C'est une bonne pratique, même si certains outils l'ajoutent automatiquement.",indices:["Indice 1 : Terminaison de l'instruction","Indice 2 : ; = fin de la commande."]},
  {id:"sql_sel_qcm_10",type:"mcq",numero:10,difficulte:"difficile",enonce:"Quelle affirmation est vraie sur SELECT ?",options:["A) SELECT modifie les données","B) SELECT récupère les données sans les modifier","C) SELECT supprime les enregistrements","D) SELECT crée une nouvelle table"],bonne_reponse_index:1,explication:"SELECT est une lecture seulement (READ). Elle n'affecte jamais les données.",indices:["Indice 1 : SELECT modifie-t-il les données ?","Indice 2 : Non, SELECT ne fait que lire."]},
  {id:"sql_sel_trou_1",type:"fill_blank",numero:11,difficulte:"facile",enonce:"Complétez : _____ * FROM clients;",reponse_attendue:"SELECT",reponses_acceptees:["SELECT"],explication:"SELECT est le mot-clé pour récupérer les données.",indices:["Indice 1 : Le premier mot-clé.","Indice 2 : Pour lire les données."]},
  {id:"sql_sel_trou_2",type:"fill_blank",numero:12,difficulte:"facile",enonce:"Complétez : SELECT * _____ clients;",reponse_attendue:"FROM",reponses_acceptees:["FROM"],explication:"FROM spécifie la table d'où viennent les données.",indices:["Indice 1 : D'où viennent les données ?","Indice 2 : _____ clients."]},
  {id:"sql_sel_trou_3",type:"fill_blank",numero:13,difficulte:"moyen",enonce:"Complétez : SELECT nom, _____ FROM produits;",reponse_attendue:"prix",reponses_acceptees:["prix","stock","id"],explication:"Choisissez une colonne qui existe dans la table produits.",indices:["Indice 1 : Une autre colonne du produit.","Indice 2 : Exemple : prix, stock."]},
  {id:"sql_sel_trou_4",type:"fill_blank",numero:14,difficulte:"moyen",enonce:"Complétez : SELECT * FROM clients _____",reponse_attendue:";",reponses_acceptees:[";"],explication:"Terminez toujours une instruction SQL par un point-virgule.",indices:["Indice 1 : Comment terminer ?","Indice 2 : Point-virgule."]},
  {id:"sql_sel_trou_5",type:"fill_blank",numero:15,difficulte:"difficile",enonce:"Complétez : SELECT _____, email FROM clients;",reponse_attendue:"nom",reponses_acceptees:["nom","id","prenom"],explication:"Choisissez une colonne valide avant email.",indices:["Indice 1 : Première colonne.","Indice 2 : Quelque chose d'un client (ex: nom)."]},
  {id:"sql_sel_libre_1",type:"free_text",numero:16,difficulte:"facile",enonce:"Écrivez la requête SQL pour afficher TOUTES les colonnes et TOUS les enregistrements de la table 'clients'",solution:"SELECT * FROM clients;",explication:"* = toutes les colonnes. FROM clients = table. ; = terminaison.",indices:["Indice 1 : * pour toutes les colonnes.","Indice 2 : FROM clients; avec point-virgule."]},
  {id:"sql_sel_libre_2",type:"free_text",numero:17,difficulte:"moyen",enonce:"Écrivez la requête pour afficher seulement nom et email de la table 'clients'",solution:"SELECT nom, email FROM clients;",explication:"Listez les colonnes spécifiques séparées par une virgule.",indices:["Indice 1 : Deux colonnes : nom et email.","Indice 2 : SELECT nom, email FROM clients;"]},
  {id:"sql_sel_libre_3",type:"free_text",numero:18,difficulte:"moyen",enonce:"Écrivez la requête pour afficher prix et stock (dans cet ordre) de la table 'produits'",solution:"SELECT prix, stock FROM produits;",explication:"L'ordre des colonnes est celui que vous écrivez : prix d'abord, puis stock.",indices:["Indice 1 : prix, puis stock.","Indice 2 : SELECT prix, stock FROM produits;"]},
  {id:"sql_sel_libre_4",type:"free_text",numero:19,difficulte:"difficile",enonce:"Écrivez une requête pour afficher email, nom, id de la table 'utilisateurs' (dans cet ordre exact)",solution:"SELECT email, nom, id FROM utilisateurs;",explication:"L'ordre est email, nom, id. Même si id est normalement en premier, vous l'affichez en dernier ici.",indices:["Indice 1 : L'ordre exact : email, nom, id.","Indice 2 : SELECT email, nom, id FROM utilisateurs;"]},
  {id:"sql_sel_libre_5",type:"free_text",numero:20,difficulte:"difficile",enonce:"Appliquez les bonnes pratiques : écrivez une requête SELECT avec colonnes spécifiques, point-virgule, et noms exacts",solution:"SELECT id, nom, prix, stock FROM produits;",explication:"Colonnes nommées explicitement, pas *, point-virgule, noms de colonnes corrects.",indices:["Indice 1 : Pas de * ; noms explicites.","Indice 2 : Point-virgule obligatoire."]}
];

// Exercices pour JavaScript Débutant - Les types de données
const exercisesData_Types_JS_Debutant = [
  {id:"types_qcm_1",type:"mcq",numero:1,difficulte:"facile",enonce:"Quel est le type de la valeur 42 en JavaScript ?",options:["String","Number","Boolean","Object"],bonne_reponse_index:1,explication:"42 est un nombre entier, donc son type est Number.",indices:["Indice 1 : Quelle catégorie pour un nombre ?","Indice 2 : Number est le type pour les nombres."]},
  {id:"types_qcm_2",type:"mcq",numero:2,difficulte:"facile",enonce:"Quel opérateur permet de vérifier le type d'une variable ?",options:["checkType()","type()","typeof","getType()"],bonne_reponse_index:2,explication:"L'opérateur typeof permet de vérifier le type d'une valeur.",indices:["Indice 1 : C'est un opérateur, pas une fonction.","Indice 2 : typeof 5 retourne 'number'."]},
  {id:"types_qcm_3",type:"mcq",numero:3,difficulte:"facile",enonce:"Qu'affiche console.log(typeof 'Bonjour') ?",options:["'string'","'String'","'text'","Erreur"],bonne_reponse_index:0,explication:"typeof retourne toujours une chaîne en minuscules. Pour du texte, il retourne 'string'.",indices:["Indice 1 : typeof retourne un type en minuscules.","Indice 2 : Le type du texte est 'string'."]},
  {id:"types_qcm_4",type:"mcq",numero:4,difficulte:"facile",enonce:"Quelle est la différence entre null et undefined ?",options:["Aucune différence","undefined est une erreur, null non","null = intentionnellement vide, undefined = pas défini","undefined n'existe pas"],bonne_reponse_index:2,explication:"null représente une absence intentionnelle, undefined signifie qu'une variable n'a pas reçu de valeur.",indices:["Indice 1 : null est volontaire, undefined non.","Indice 2 : Relisez la leçon sur null et undefined."]},
  {id:"types_qcm_5",type:"mcq",numero:5,difficulte:"moyen",enonce:"Qu'affiche console.log(5 + '3') ?",options:["8","'53'","Erreur","undefined"],bonne_reponse_index:1,explication:"Quand + voit une chaîne, il concatène : 5 + '3' = '53'.",indices:["Indice 1 : C'est le piège courant de la leçon.","Indice 2 : + avec une chaîne concatène."]},
  {id:"types_qcm_6",type:"mcq",numero:6,difficulte:"moyen",enonce:"Quel est le type de [1, 2, 3] selon typeof ?",options:["'array'","'object'","'list'","'Array'"],bonne_reponse_index:1,explication:"typeof [] retourne 'object' car les tableaux sont des objets spécialisés.",indices:["Indice 1 : Les tableaux sont des objets.","Indice 2 : typeof d'un tableau retourne 'object'."]},
  {id:"types_qcm_7",type:"mcq",numero:7,difficulte:"moyen",enonce:"Qu'affiche console.log(Number('25')) ?",options:["'25'","25","Erreur","NaN"],bonne_reponse_index:1,explication:"Number() convertit une chaîne en nombre. '25' devient 25.",indices:["Indice 1 : Number() convertit.","Indice 2 : Le type change de String à Number."]},
  {id:"types_qcm_8",type:"mcq",numero:8,difficulte:"moyen",enonce:"Comment accéder au premier élément d'un tableau ?",options:["tableau[1]","tableau[0]","tableau.first","tableau.get(0)"],bonne_reponse_index:1,explication:"Les indices commencent à 0 en programmation.",indices:["Indice 1 : Le premier indice est 0.","Indice 2 : On compte à partir de 0, pas 1."]},
  {id:"types_qcm_9",type:"mcq",numero:9,difficulte:"difficile",enonce:"Qu'affiche console.log(typeof null) ?",options:["'null'","'object'","'undefined'","Erreur"],bonne_reponse_index:1,explication:"C'est une anomalie en JavaScript : typeof null retourne 'object'.",indices:["Indice 1 : C'est un bug historique en JavaScript.","Indice 2 : typeof null retourne 'object'."]},
  {id:"types_qcm_10",type:"mcq",numero:10,difficulte:"difficile",enonce:"Quelle conversion est possible sans perte ?",options:["String → Number","Number → String","Boolean → Number","Object → Array"],bonne_reponse_index:1,explication:"Convertir un nombre en chaîne est sûr : 5 → '5'.",indices:["Indice 1 : Quelle conversion ne risque pas de perdre l'info ?","Indice 2 : Number to String est toujours possible."]},
  {id:"types_trou_1",type:"fill_blank",numero:11,difficulte:"facile",enonce:"Complète : let age = _____ ; // Assigner le nombre 25",reponse_attendue:"25",reponses_acceptees:["25","30","20"],explication:"On assigne simplement le nombre 25 à la variable age.",indices:["Indice 1 : Un nombre.","Indice 2 : 25 ans."]},
  {id:"types_trou_2",type:"fill_blank",numero:12,difficulte:"facile",enonce:"Complète : let fruits = ['pomme', 'banane', 'orange']; console.log(fruits[_____]); // Affiche 'banane'",reponse_attendue:"1",reponses_acceptees:["1"],explication:"Le deuxième élément est à l'indice 1 (on compte à partir de 0).",indices:["Indice 1 : On compte à partir de 0.","Indice 2 : Le deuxième élément est à l'indice 1."]},
  {id:"types_trou_3",type:"fill_blank",numero:13,difficulte:"moyen",enonce:"Complète : console.log(typeof _____); // Affiche 'boolean'",reponse_attendue:"true",reponses_acceptees:["true","false"],explication:"typeof true retourne 'boolean'.",indices:["Indice 1 : Une valeur booléenne.","Indice 2 : true ou false."]},
  {id:"types_trou_4",type:"fill_blank",numero:14,difficulte:"moyen",enonce:"Complète : let nombre = String(_____); // Convertir 42 en chaîne",reponse_attendue:"42",reponses_acceptees:["42"],explication:"String(42) convertit le nombre 42 en chaîne '42'.",indices:["Indice 1 : Un nombre à convertir.","Indice 2 : 42 devient '42'."]},
  {id:"types_trou_5",type:"fill_blank",numero:15,difficulte:"difficile",enonce:"Complète : let personne = {nom: 'Alice', age: _____}; // Ajouter l'âge 28",reponse_attendue:"28",reponses_acceptees:["28"],explication:"On assigne une valeur Number comme propriété d'un objet.",indices:["Indice 1 : Un nombre pour l'âge.","Indice 2 : 28."]},
  {id:"types_libre_1",type:"free_text",numero:16,difficulte:"moyen",enonce:"Écris du code qui affiche le résultat de 10 + '5' et explique pourquoi tu obtiens ce résultat.",solution:"console.log(10 + '5'); // Affiche '105'\\nExplication : Quand + rencontre une chaîne, il concatène.",explication:"Cet exercice teste la compréhension du piège courant.",indices:["Indice 1 : C'est le piège + avec une chaîne.","Indice 2 : + concatène au lieu d'ajouter."]},
  {id:"types_libre_2",type:"free_text",numero:17,difficulte:"moyen",enonce:"Crée un tableau contenant 3 types différents et accède au deuxième.",solution:"let mixte = [42, 'texte', true];\\nconsole.log(mixte[1]); // Affiche : 'texte'",explication:"Les tableaux peuvent contenir n'importe quel type.",indices:["Indice 1 : Un tableau avec nombres, texte, booléen.","Indice 2 : L'indice 1 donne le deuxième élément."]},
  {id:"types_libre_3",type:"free_text",numero:18,difficulte:"moyen",enonce:"Écris du code qui convertit la chaîne '100' en nombre, puis affiche son type.",solution:"let nombre = Number('100');\\nconsole.log(typeof nombre); // Affiche : 'number'",explication:"Number() convertit une chaîne numérique.",indices:["Indice 1 : Utilisez Number().","Indice 2 : Puis affiche le type avec typeof."]},
  {id:"types_libre_4",type:"free_text",numero:19,difficulte:"difficile",enonce:"Crée un objet 'voiture' avec marque (String), année (Number), électrique (Boolean). Accède à marque.",solution:"let voiture = {marque: 'Tesla', année: 2023, électrique: true};\\nconsole.log(voiture.marque); // Affiche : 'Tesla'",explication:"Les objets groupent plusieurs propriétés de types différents.",indices:["Indice 1 : Créez un objet avec 3 propriétés.","Indice 2 : Accédez avec obj.propriété."]},
  {id:"types_libre_5",type:"free_text",numero:20,difficulte:"difficile",enonce:"Explique pourquoi typeof [1, 2, 3] retourne 'object'. Comment vérifier qu'une valeur est un tableau ?",solution:"typeof [] retourne 'object' car les tableaux sont des objets.\\nPour vérifier : Array.isArray([1, 2, 3]) // retourne true",explication:"C'est une subtilité en JavaScript : les tableaux sont des objets.",indices:["Indice 1 : Les tableaux sont des objets spécialisés.","Indice 2 : Utilisez Array.isArray() pour vérifier."]},
];

// Exercices pour JavaScript Débutant - Les opérateurs
const exercisesData_Operateurs_JS_Debutant = [
  {id:"operateurs_qcm_1",type:"mcq",numero:1,difficulte:"facile",enonce:"Quel est le résultat de 10 + 5 ?",options:["5","15","105","Erreur"],bonne_reponse_index:1,explication:"L'opérateur + avec deux nombres fait l'addition : 10 + 5 = 15.",indices:["Indice 1 : Addition simple.","Indice 2 : 10 + 5 = ?"]},
  {id:"operateurs_qcm_2",type:"mcq",numero:2,difficulte:"facile",enonce:"Qu'affiche console.log(10 > 5) ?",options:["10","false","true","Erreur"],bonne_reponse_index:2,explication:"10 est supérieur à 5, donc la comparaison retourne true.",indices:["Indice 1 : Comparaison de nombres.","Indice 2 : 10 > 5 est vrai."]},
  {id:"operateurs_qcm_3",type:"mcq",numero:3,difficulte:"facile",enonce:"Quel opérateur donne une valeur à une variable ?",options:["+","==","=","!"],bonne_reponse_index:2,explication:"= est l'opérateur d'assignation.",indices:["Indice 1 : Pour assigner une valeur.","Indice 2 : Le signe égal seul."]},
  {id:"operateurs_qcm_4",type:"mcq",numero:4,difficulte:"facile",enonce:"Qu'affiche console.log(5 % 2) ?",options:["2.5","2","1","0"],bonne_reponse_index:2,explication:"Le modulo (%) retourne le reste : 5 divisé par 2 = reste 1.",indices:["Indice 1 : Le reste de la division.","Indice 2 : 5 ÷ 2 = 2 reste 1."]},
  {id:"operateurs_qcm_5",type:"mcq",numero:5,difficulte:"moyen",enonce:"Quelle est la différence entre == et === ?",options:["Aucune","== compare valeur, === compare valeur et type","== est plus rapide","=== n'existe pas"],bonne_reponse_index:1,explication:"== ignore le type (5 == '5' est true), === compare strictement.",indices:["Indice 1 : Portée de la comparaison.","Indice 2 : === est plus strict."]},
  {id:"operateurs_qcm_6",type:"mcq",numero:6,difficulte:"moyen",enonce:"Qu'affiche console.log(true && false) ?",options:["true","false","Erreur","undefined"],bonne_reponse_index:1,explication:"Le ET logique (&&) retourne true seulement si les deux sont true.",indices:["Indice 1 : Opérateur ET logique.","Indice 2 : Les deux doivent être vrais."]},
  {id:"operateurs_qcm_7",type:"mcq",numero:7,difficulte:"moyen",enonce:"Qu'affiche console.log(!true) ?",options:["true","false","1","Erreur"],bonne_reponse_index:1,explication:"L'opérateur NON (!) inverse : !true = false.",indices:["Indice 1 : L'inverse d'une valeur.","Indice 2 : Le contraire de true."]},
  {id:"operateurs_qcm_8",type:"mcq",numero:8,difficulte:"moyen",enonce:"Qu'affiche console.log(2 + 3 * 4) ?",options:["20","14","24","Erreur"],bonne_reponse_index:1,explication:"La multiplication a priorité : 3 * 4 = 12, puis 2 + 12 = 14.",indices:["Indice 1 : Priorité des opérateurs.","Indice 2 : Multiplication avant addition."]},
  {id:"operateurs_qcm_9",type:"mcq",numero:9,difficulte:"difficile",enonce:"Qu'affiche console.log(5 !== 5) ?",options:["true","false","0","Erreur"],bonne_reponse_index:1,explication:"!== signifie 'pas identique'. 5 !== 5 est false.",indices:["Indice 1 : 5 est égal à 5.","Indice 2 : !== = pas égal en type et valeur."]},
  {id:"operateurs_qcm_10",type:"mcq",numero:10,difficulte:"difficile",enonce:"Qu'affiche (age >= 18) ? 'Adulte' : 'Enfant' si age = 20 ?",options:["Adulte","Enfant","20","Erreur"],bonne_reponse_index:0,explication:"L'opérateur ternaire retourne la première valeur si la condition est vraie.",indices:["Indice 1 : Opérateur ternaire.","Indice 2 : condition ? valeur_si_vrai : valeur_si_faux."]},
  {id:"operateurs_trou_1",type:"fill_blank",numero:11,difficulte:"facile",enonce:"Complète : 10 _____ 5 = 15",reponse_attendue:"+",reponses_acceptees:["+"],explication:"L'addition est 10 + 5 = 15.",indices:["Indice 1 : Opérateur d'addition.","Indice 2 : Le signe plus."]},
  {id:"operateurs_trou_2",type:"fill_blank",numero:12,difficulte:"facile",enonce:"Complète : 10 _____ 3 = 1",reponse_attendue:"%",reponses_acceptees:["%"],explication:"Le modulo : 10 % 3 = 1.",indices:["Indice 1 : Reste de division.","Indice 2 : Le signe pourcent."]},
  {id:"operateurs_trou_3",type:"fill_blank",numero:13,difficulte:"moyen",enonce:"Complète : let x = 10; x _____ 5; // x vaut 15 maintenant",reponse_attendue:"+=",reponses_acceptees:["+="],explication:"L'opérateur += additionne et assigne.",indices:["Indice 1 : Assignation + opération.","Indice 2 : + suivi de =."]},
  {id:"operateurs_trou_4",type:"fill_blank",numero:14,difficulte:"moyen",enonce:"Complète : console.log(5 _____ '5'); // true (valeur)",reponse_attendue:"==",reponses_acceptees:["=="],explication:"== compare les valeurs sans type.",indices:["Indice 1 : Deux signes égal.","Indice 2 : Comparaison loose."]},
  {id:"operateurs_trou_5",type:"fill_blank",numero:15,difficulte:"difficile",enonce:"Complète : console.log(true _____ false); // true (OU logique)",reponse_attendue:"||",reponses_acceptees:["||"],explication:"L'opérateur OU (||) retourne true si un côté est true.",indices:["Indice 1 : Deux traits verticaux.","Indice 2 : Opérateur OU logique."]},
  {id:"operateurs_libre_1",type:"free_text",numero:16,difficulte:"moyen",enonce:"Écris du code pour vérifier si un nombre est pair (utilise %).",solution:"let nombre = 10;\\nlet estPair = (nombre % 2 === 0);\\nconsole.log(estPair); // true",explication:"Si le reste est 0, le nombre est pair.",indices:["Indice 1 : Nombre % 2 === 0.","Indice 2 : Divisibilité par 2."]},
  {id:"operateurs_libre_2",type:"free_text",numero:17,difficulte:"moyen",enonce:"Utilise l'opérateur ternaire pour affecter 'Majeur' ou 'Mineur' selon age >= 18.",solution:"let age = 20;\\nlet statut = (age >= 18) ? 'Majeur' : 'Mineur';\\nconsole.log(statut); // Majeur",explication:"Opérateur ternaire pour cas simples.",indices:["Indice 1 : condition ? valeur1 : valeur2.","Indice 2 : age >= 18 est-il vrai ?"]},
  {id:"operateurs_libre_3",type:"free_text",numero:18,difficulte:"moyen",enonce:"Écris du code : affiche vrai si age >= 18 ET permis === true (&&).",solution:"let age = 20;\\nlet permis = true;\\nlet peutConduire = (age >= 18) && (permis === true);\\nconsole.log(peutConduire); // true",explication:"Le ET logique exige que les deux soient vraies.",indices:["Indice 1 : Deux conditions avec &&.","Indice 2 : Les deux doivent être vraies."]},
  {id:"operateurs_libre_4",type:"free_text",numero:19,difficulte:"difficile",enonce:"Écris : obtientReduction si estEtudiant OU estRetraite (||).",solution:"let estEtudiant = false;\\nlet estRetraite = true;\\nlet obtientReduction = (estEtudiant || estRetraite);\\nconsole.log(obtientReduction); // true",explication:"L'OU logique est vrai si une condition est vraie.",indices:["Indice 1 : Deux conditions avec ||.","Indice 2 : Au moins une doit être vraie."]},
  {id:"operateurs_libre_5",type:"free_text",numero:20,difficulte:"difficile",enonce:"Écris le résultat de (2 + 3) * 4 et explique la priorité des opérateurs.",solution:"console.log((2 + 3) * 4); // 20\\nExplication : Les parenthèses forcent l'addition avant la multiplication.",explication:"Cet exercice montre l'importance de la priorité.",indices:["Indice 1 : Parenthèses d'abord.","Indice 2 : (2+3) = 5, puis 5*4 = 20."]},
];

// Exercices pour JavaScript Intermédiaire
const exercisesData_JS_Intermediaire = [
  {id:"loop_adv_qcm_1",type:"mcq",numero:1,difficulte:"facile",enonce:"Quelle boucle utiliser pour parcourir les propriétés d'un objet ?",options:["A) for...in","B) for...of","C) forEach","D) map"],bonne_reponse_index:0,explication:"for...in itère sur les propriétés d'un objet.",indices:["Indice 1 : 'in' signifie 'à l'intérieur'","Indice 2 : Pensez aux objets"]},
  {id:"loop_adv_qcm_2",type:"mcq",numero:2,difficulte:"facile",enonce:"Que retourne [1, 2, 3].map(x => x * 2) ?",options:["A) [2, 4, 6]","B) [1, 2, 3]","C) 6","D) undefined"],bonne_reponse_index:0,explication:"map transforme chaque élément : [1*2, 2*2, 3*2] = [2, 4, 6].",indices:["Indice 1 : map = transformation","Indice 2 : Multipliez chaque élément par 2"]},
  {id:"loop_adv_qcm_3",type:"mcq",numero:3,difficulte:"facile",enonce:"Que retourne [1, 2, 3, 4, 5].filter(x => x > 2) ?",options:["A) [3, 4, 5]","B) [1, 2]","C) true","D) [1, 2, 3, 4, 5]"],bonne_reponse_index:0,explication:"filter sélectionne les éléments > 2, soit 3, 4, et 5.",indices:["Indice 1 : filter = sélection","Indice 2 : Quels nombres sont > 2 ?"]},
  {id:"loop_adv_qcm_4",type:"mcq",numero:4,difficulte:"moyen",enonce:"Que retourne [1, 2, 3, 4].reduce((acc, x) => acc + x, 0) ?",options:["A) 10","B) 4","C) [1, 2, 3, 4]","D) undefined"],bonne_reponse_index:0,explication:"reduce accumule : 0+1+2+3+4 = 10.",indices:["Indice 1 : reduce = accumulation","Indice 2 : Sommez tous les éléments"]},
  {id:"loop_adv_qcm_5",type:"mcq",numero:5,difficulte:"moyen",enonce:"Quel est le résultat de [1, 2, 3].map(x => x * 2).filter(x => x > 3) ?",options:["A) [4, 6]","B) [2, 4, 6]","C) [3]","D) undefined"],bonne_reponse_index:0,explication:"D'abord map : [2, 4, 6]. Puis filter > 3 : [4, 6].",indices:["Indice 1 : Appliquez map puis filter","Indice 2 : Quels éléments > 3 ?"]},
  {id:"loop_adv_qcm_6",type:"mcq",numero:6,difficulte:"moyen",enonce:"Quel est le retour de forEach() ?",options:["A) undefined","B) Le tableau original","C) Un nouveau tableau","D) Un nombre"],bonne_reponse_index:0,explication:"forEach n'a pas de valeur de retour. Elle effectue juste une action.",indices:["Indice 1 : forEach pour les effets secondaires","Indice 2 : Pas de tableau retourné"]},
  {id:"loop_adv_qcm_7",type:"mcq",numero:7,difficulte:"moyen",enonce:"Quelle boucle accepte break et continue ?",options:["A) for...of","B) forEach","C) map","D) filter"],bonne_reponse_index:0,explication:"for...of accepte break et continue. Les autres méthodes ne les acceptent pas.",indices:["Indice 1 : C'est une vraie boucle","Indice 2 : Laquelle a le contrôle du flux ?"]},
  {id:"loop_adv_qcm_8",type:"mcq",numero:8,difficulte:"difficile",enonce:"Quel est le résultat de ['a', 'b', 'c'].reduce((acc, letter) => acc + letter, '') ?",options:["A) 'abc'","B) ['a', 'b', 'c']","C) 3","D) undefined"],bonne_reponse_index:0,explication:"reduce accumule les lettres : ''+a+'b'+'c' = 'abc'.",indices:["Indice 1 : reduce avec une chaîne vide","Indice 2 : On concatène les lettres"]},
  {id:"loop_adv_qcm_9",type:"mcq",numero:9,difficulte:"difficile",enonce:"Comment parcourir les caractères d'une chaîne ?",options:["A) for (let char of 'hello') { }","B) for (let char in 'hello') { }","C) 'hello'.forEach(char => { })","D) Impossible"],bonne_reponse_index:0,explication:"for...of parcourt les caractères d'une chaîne.",indices:["Indice 1 : Les chaînes sont itérables","Indice 2 : for...of = valeurs"]},
  {id:"loop_adv_qcm_10",type:"mcq",numero:10,difficulte:"difficile",enonce:"Que retourne [1, 2, 3].reduce((acc, x) => acc * x, 1) ?",options:["A) 6","B) 123","C) 1","D) undefined"],bonne_reponse_index:0,explication:"reduce multiplie : 1*1*2*3 = 6.",indices:["Indice 1 : reduce avec multiplication","Indice 2 : Multipliez tous les éléments"]},
  {id:"loop_adv_trou_1",type:"fill_blank",numero:11,difficulte:"facile",enonce:"Complétez : for (let key _____ objet) { }",reponse_attendue:"in",reponses_acceptees:["in"],explication:"for...in itère sur les propriétés.",indices:["Indice 1 : 'in' = à l'intérieur de","Indice 2 : for...__ objet"]},
  {id:"loop_adv_trou_2",type:"fill_blank",numero:12,difficulte:"facile",enonce:"Complétez : for (let val _____ [1, 2, 3]) { }",reponse_attendue:"of",reponses_acceptees:["of"],explication:"for...of itère sur les valeurs.",indices:["Indice 1 : 'of' = des valeurs de","Indice 2 : for...___ tableau"]},
  {id:"loop_adv_trou_3",type:"fill_blank",numero:13,difficulte:"moyen",enonce:"Complétez : [1, 2, 3]._____((x) => x * 2) retourne [2, 4, 6]",reponse_attendue:"map",reponses_acceptees:["map"],explication:"map transforme chaque élément.",indices:["Indice 1 : Transformation","Indice 2 : m___ crée un nouveau tableau"]},
  {id:"loop_adv_trou_4",type:"fill_blank",numero:14,difficulte:"moyen",enonce:"Complétez : [1, 2, 3, 4, 5]._____((x) => x > 2) retourne [3, 4, 5]",reponse_attendue:"filter",reponses_acceptees:["filter"],explication:"filter sélectionne les éléments.",indices:["Indice 1 : Sélection","Indice 2 : f______ garde les éléments"]},
  {id:"loop_adv_trou_5",type:"fill_blank",numero:15,difficulte:"difficile",enonce:"Complétez : [1, 2, 3, 4]._____((acc, x) => acc + x, 0) retourne 10",reponse_attendue:"reduce",reponses_acceptees:["reduce"],explication:"reduce accumule une seule valeur.",indices:["Indice 1 : Accumulation","Indice 2 : red_____ accumule"]},
  {id:"loop_adv_libre_1",type:"free_text",numero:16,difficulte:"moyen",enonce:"Écrivez une fonction qui retourne la somme de tous les nombres avec reduce().",solution:"function sum(arr) {\\n  return arr.reduce((acc, num) => acc + num, 0);\\n}",explication:"reduce accumule en commençant par 0.",indices:["Indice 1 : Utilisez reduce","Indice 2 : Valeur initiale = 0"]},
  {id:"loop_adv_libre_2",type:"free_text",numero:17,difficulte:"moyen",enonce:"Écrivez une fonction qui filtre les nombres pairs et les double.",solution:"function doubleEven(arr) {\\n  return arr.filter(n => n % 2 === 0).map(n => n * 2);\\n}",explication:"Chaînez filter et map.",indices:["Indice 1 : filter d'abord","Indice 2 : Puis map pour doubler"]},
  {id:"loop_adv_libre_3",type:"free_text",numero:18,difficulte:"difficile",enonce:"Écrivez une fonction qui compte les occurrences de chaque valeur dans un tableau.",solution:"function countOccurrences(arr) {\\n  return arr.reduce((acc, val) => {\\n    acc[val] = (acc[val] || 0) + 1;\\n    return acc;\\n  }, {});\\n}",explication:"reduce accumule dans un objet avec compteurs.",indices:["Indice 1 : reduce avec un objet","Indice 2 : acc[val] || 0 initialise à 0"]},
  {id:"loop_adv_libre_4",type:"free_text",numero:19,difficulte:"difficile",enonce:"Écrivez une fonction qui retourne les utilisateurs avec score > 80, triés.",solution:"function topScores(users) {\\n  return users.filter(u => u.score > 80).sort((a, b) => b.score - a.score);\\n}",explication:"Chaînez filter et sort en ordre descendant.",indices:["Indice 1 : filter pour score > 80","Indice 2 : sort avec b - a pour descendant"]},
  {id:"loop_adv_libre_5",type:"free_text",numero:20,difficulte:"difficile",enonce:"Écrivez une fonction qui parcourt les propriétés d'un objet et retourne un tableau [clé, valeur].",solution:"function entries(obj) {\\n  const result = [];\\n  for (let key in obj) {\\n    result.push([key, obj[key]]);\\n  }\\n  return result;\\n}",explication:"Utilisez for...in pour parcourir les propriétés.",indices:["Indice 1 : for...in pour les propriétés","Indice 2 : Poussez [key, obj[key]]"]}
];

function selectLanguage(lang) {
  currentLanguage = lang;
  currentLevel = 'debutant';
  showLessons();
}

function goToLessons() {
  selectLanguage('javascript');
}

function showLessons() {
  document.getElementById('home-section').style.display = 'none';
  document.getElementById('progress-section').style.display = 'none';
  document.getElementById('lessons-section').style.display = 'block';

  const langName = currentLanguage.charAt(0).toUpperCase() + currentLanguage.slice(1);
  const levelName = currentLevel.charAt(0).toUpperCase() + currentLevel.slice(1);
  document.getElementById('lessons-title').textContent = `${langName} - ${levelName}`;

  renderLessons();
}

function renderLessons() {
  const container = document.querySelector('.lessons-container');
  container.innerHTML = '';

  const lessons = lessonsData[currentLanguage][currentLevel] || [];

  if (lessons.length === 0) {
    container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px;">Contenu à venir 🚀</p>';
    return;
  }

  lessons.forEach(lesson => {
    const isCompleted = isLessonCompleted(currentLanguage, currentLevel, lesson.id);
    const card = document.createElement('div');
    card.className = 'lesson-card';
    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 12px;">
        <h3>${lesson.title}</h3>
        ${isCompleted ? '<span class="lesson-badge completed">✅ Completée</span>' : ''}
      </div>
      <p style="color: #666; margin-bottom: 12px;">${lesson.description}</p>
      <div class="lesson-meta">
        <span>⏱️ ${lesson.duration} min</span>
        <span>📚 ${lesson.concepts}</span>
      </div>
      <div style="margin-top: 16px; display: flex; gap: 8px;">
        <button class="btn btn-primary" onclick="openLesson('${lesson.id}')">Lire</button>
        <button class="btn btn-secondary" onclick="openExercises('${lesson.id}')">Exercices</button>
      </div>
    `;
    container.appendChild(card);
  });
}

function openLesson(lessonId) {
  const lessons = lessonsData[currentLanguage][currentLevel] || [];
  const lesson = lessons.find(l => l.id === lessonId);

  if (!lesson) return;

  const content = `
    <div class="lesson-content">
      ${lesson.content}

      <div class="tabs">
        <div class="tab-buttons">
          <button class="tab-button active" onclick="switchTab(event, 'content')">Leçon</button>
          <button class="tab-button" onclick="switchTab(event, 'sources')">📚 Sources</button>
        </div>

        <div id="content" class="tab-content active"></div>

        <div id="sources" class="tab-content">
          <h2>Sources académiques</h2>
          <ul class="sources-list">
            ${lesson.sources.map(s => `
              <li>
                <a href="${escapeHtml(s.url)}" target="_blank">${escapeHtml(s.title)}</a>
                <span class="source-type">${escapeHtml(s.type)}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>

      <div style="margin-top: 32px; display: flex; gap: 12px;">
        <button class="btn btn-primary" onclick="openExercises('${lesson.id}')">Passer aux exercices →</button>
        <button class="btn btn-secondary" onclick="backToLessons()">← Retour aux leçons</button>
      </div>
    </div>
  `;

  showLessonModal(lesson.title, content);
}

function openExercises(lessonId) {
  const exercises = getExercisesForLesson(currentLanguage, currentLevel, lessonId);

  if (!exercises || exercises.length === 0) {
    alert(`Exercices à venir pour "${lessonId}".`);
    return;
  }

  let exerciseHTML = '<div class="exercises-container">';
  exerciseHTML += `<h2>20 exercices - ${lessonId}</h2>`;
  exerciseHTML += '<form id="exercisesForm">';

  exercises.forEach((ex, index) => {
    if (ex.type === 'mcq') {
      exerciseHTML += `
        <div class="exercise-card">
          <h4>${ex.numero}. ${ex.enonce}</h4>
          <div class="exercise-options">
            ${ex.options.map((opt, i) => `
              <label>
                <input type="radio" name="exercise_${ex.id}" value="${i}" required>
                ${opt}
              </label>
            `).join('')}
          </div>
          <button type="button" class="btn-hint" onclick="showHint('${ex.id}')">💡 Indice</button>
          <div id="hint_${ex.id}" class="hint-box" style="display:none;">
            <p><strong>Indice 1:</strong> ${ex.indices[0]}</p>
            <p><strong>Indice 2:</strong> ${ex.indices[1]}</p>
          </div>
        </div>
      `;
    } else if (ex.type === 'fill_blank') {
      exerciseHTML += `
        <div class="exercise-card">
          <h4>${ex.numero}. ${ex.enonce}</h4>
          <input type="text" name="exercise_${ex.id}" placeholder="Tapez votre réponse" required>
          <button type="button" class="btn-hint" onclick="showHint('${ex.id}')">💡 Indice</button>
          <div id="hint_${ex.id}" class="hint-box" style="display:none;">
            <p><strong>Indice 1:</strong> ${ex.indices[0]}</p>
            <p><strong>Indice 2:</strong> ${ex.indices[1]}</p>
          </div>
        </div>
      `;
    } else if (ex.type === 'free_text') {
      exerciseHTML += `
        <div class="exercise-card">
          <h4>${ex.numero}. ${ex.enonce}</h4>
          <textarea name="exercise_${ex.id}" placeholder="Écrivez votre réponse (code ou explication)" rows="6" required></textarea>
          <button type="button" class="btn-hint" onclick="showHint('${ex.id}')">💡 Indice</button>
          <div id="hint_${ex.id}" class="hint-box" style="display:none;">
            <p><strong>Indice 1:</strong> ${ex.indices[0]}</p>
            <p><strong>Indice 2:</strong> ${ex.indices[1]}</p>
          </div>
          <details>
            <summary>📌 Solution proposée</summary>
            <pre><code>${escapeHtml(ex.solution)}</code></pre>
            <p>${ex.explication}</p>
          </details>
        </div>
      `;
    }
  });

  exerciseHTML += `
    <div style="margin-top: 24px; display: flex; gap: 12px;">
      <button type="submit" class="btn btn-primary">Soumettre les exercices</button>
      <button type="button" class="btn btn-secondary" onclick="closeModal()">← Retour</button>
    </div>
  </form>
  </div>`;

  showExercisesModal(lessonId, exerciseHTML, exercises);
}

function getExercisesForLesson(lang, level, lessonId) {
  if (lang === 'javascript' && level === 'debutant' && lessonId === 'variables') {
    return exercisesData_JS_Debutant;
  }
  if (lang === 'javascript' && level === 'debutant' && lessonId === 'les-types-de-donnees') {
    return exercisesData_Types_JS_Debutant;
  }
  if (lang === 'javascript' && level === 'debutant' && lessonId === 'les-operateurs') {
    return exercisesData_Operateurs_JS_Debutant;
  }
  if (lang === 'javascript' && level === 'intermediaire' && lessonId === 'les-boucles-avancees') {
    return exercisesData_JS_Intermediaire;
  }
  if (lang === 'python' && level === 'debutant' && lessonId === 'variables') {
    return exercisesData_Python_Debutant;
  }
  if (lang === 'sql' && level === 'debutant' && lessonId === 'select') {
    return exercisesData_SQL_Debutant;
  }
  return null;
}

function showExercisesModal(title, content, exercises) {
  const modal = document.createElement('div');
  modal.id = 'exercises-modal';
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
    overflow-y: auto;
    z-index: 1000;
  `;

  modal.innerHTML = `
    <div style="max-width: 900px; margin: 0 auto; padding: 32px 16px;">
      <button class="btn-back" onclick="closeModal()">← Retour</button>
      ${content}
    </div>
  `;

  document.body.appendChild(modal);
  window.scrollTo(0, 0);

  document.getElementById('exercisesForm').addEventListener('submit', (e) => {
    e.preventDefault();
    submitExercises(exercises);
  });
}

function showHint(exerciseId) {
  const hintBox = document.getElementById(`hint_${exerciseId}`);
  if (hintBox) {
    hintBox.style.display = hintBox.style.display === 'none' ? 'block' : 'none';
  }
}

function submitExercises(exercises) {
  const form = document.getElementById('exercisesForm');
  let score = 0;
  let feedback = [];

  exercises.forEach(ex => {
    const input = form.elements[`exercise_${ex.id}`];
    if (input.type === 'radio') {
      const selectedIndex = Array.from(form.elements[`exercise_${ex.id}`]).findIndex(r => r.checked);
      if (selectedIndex === ex.bonne_reponse_index || selectedIndex.toString() === ex.bonne_reponse) {
        score++;
        feedback.push(`✅ ${ex.numero}. Correct!`);
      } else {
        feedback.push(`❌ ${ex.numero}. Incorrect. ${ex.explication}`);
      }
    } else {
      const answer = input.value.trim().toLowerCase();
      let isCorrect = false;

      if (ex.reponses_acceptees && Array.isArray(ex.reponses_acceptees)) {
        isCorrect = ex.reponses_acceptees.some(r => answer.includes(r.toLowerCase()));
      } else if (ex.reponse_attendue) {
        isCorrect = answer === ex.reponse_attendue.toLowerCase();
      }

      if (isCorrect) {
        score++;
        feedback.push(`✅ ${ex.numero}. Correct!`);
      } else {
        feedback.push(`❌ ${ex.numero}. Réponse attendue: ${ex.reponse_attendue || ex.solution}. ${ex.explication}`);
      }
    }
  });

  const message = `Votre score: ${score}/${exercises.length}\n${score >= 15 ? '✅ RÉUSSI' : '❌ À revoir'}\n\n${feedback.join('\n')}`;
  alert(message);

  if (score >= 15) {
    markExercisesCompleted(currentLanguage, currentLevel, 'variables');
    closeModal();
  }
}

function backToLessons() {
  closeModal();
}

function backToHome() {
  document.getElementById('home-section').style.display = 'block';
  document.getElementById('lessons-section').style.display = 'none';
  document.getElementById('progress-section').style.display = 'none';
}

function showLessonModal(title, content) {
  const modal = document.createElement('div');
  modal.id = 'lesson-modal';
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
    overflow-y: auto;
    z-index: 1000;
  `;

  modal.innerHTML = `
    <div style="max-width: 900px; margin: 0 auto; padding: 32px 16px;">
      <button class="btn-back" onclick="closeModal()">← Retour</button>
      ${content}
    </div>
  `;

  document.body.appendChild(modal);
  window.scrollTo(0, 0);
}

function closeModal() {
  const modal = document.getElementById('lesson-modal');
  if (modal) {
    modal.remove();
  }
}

function switchTab(e, tabName) {
  const tabs = document.querySelectorAll('.tab-button');
  tabs.forEach(t => t.classList.remove('active'));
  e.target.classList.add('active');

  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(c => c.classList.remove('active'));
  document.getElementById(tabName).classList.add('active');
}

function isLessonCompleted(lang, level, lessonId) {
  const key = `completed_${lang}_${level}_${lessonId}`;
  return localStorage.getItem(key) === 'true';
}

function markExercisesCompleted(lang, level, lessonId) {
  const key = `exercises_completed_${lang}_${level}_${lessonId}`;
  localStorage.setItem(key, 'true');
  const progressKey = `progress_${lang}_${level}`;
  const current = parseInt(localStorage.getItem(progressKey) || '0');
  localStorage.setItem(progressKey, Math.min(current + 1, 3));
}

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

document.addEventListener('DOMContentLoaded', function() {
  const navHome = document.querySelector('.nav-home');
  const navLessons = document.querySelector('.nav-lessons');
  const navProgress = document.querySelector('.nav-progress');

  if (navHome) navHome.addEventListener('click', (e) => {
    e.preventDefault();
    backToHome();
  });

  if (navLessons) navLessons.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentLanguage) {
      showLessons();
    } else {
      selectLanguage('javascript');
    }
  });

  if (navProgress) navProgress.addEventListener('click', (e) => {
    e.preventDefault();
    showProgress();
  });
});