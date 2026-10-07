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
  {id:"sql_sel_qcm_9",type:"mcq",numero:9,difficulte:"difficile",enonce:"Pourquoi faut-il terminer par un point-virgule ? SELECT nom FROM clients",options:["A) C'est optionnel","B) Cela termine l'instruction SQL","C) Pour clarté seulement","D) Erreur obligatoire"],bonne_reponsa_index:1,explication:"Le point-virgule (;) termine une instruction SQL. C'est une bonne pratique, même si certains outils l'ajoutent automatiquement.",indices:["Indice 1 : Terminaison de l'instruction","Indice 2 : ; = fin de la commande."]},
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