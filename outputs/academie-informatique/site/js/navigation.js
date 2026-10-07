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
    intermediaire: [],
    avance: []
  },
  python: {
    debutant: [
      {
        id: 'variables',
        title: 'Les variables',
        description: 'Stocker et utiliser des données en Python',
        duration: 15,
        concepts: 'Déclaration, assignation, types, nommage, print()',
        content: `
          <h1>Les variables en Python</h1>
          <h2>Le problème</h2>
          <p>Imaginez que vous voulez stocker l'âge d'une personne pour l'afficher plus tard. Vous avez besoin d'une <strong>boîte</strong> pour garder cette information. En Python, cette boîte s'appelle une <strong>variable</strong>.</p>

          <h2>Qu'est-ce qu'une variable ?</h2>
          <p>Une variable est un <strong>nom</strong> qui pointe vers une valeur stockée en mémoire. Contrairement à JavaScript, Python n'a pas besoin de mot-clé comme <code>let</code> ou <code>const</code> — vous déclarez simplement !</p>

          <h2>Comment créer une variable en Python</h2>
          <h3>Étape 1 : Assigner une valeur</h3>
          <p>En Python, déclarer et assigner se font <strong>en même temps</strong> :</p>
          <pre><code>nom = "Alice"
age = 25
prix = 19.99</code></pre>
          <p>Voilà ! Vous avez 3 variables. Python détecte automatiquement le type.</p>

          <h2>Les types en Python</h2>
          <table>
            <tr><th>Type</th><th>Exemple</th><th>Description</th></tr>
            <tr><td><strong>str</strong> (texte)</td><td><code>"Hello"</code></td><td>Chaîne de caractères</td></tr>
            <tr><td><strong>int</strong> (entier)</td><td><code>42</code></td><td>Nombre sans décimale</td></tr>
            <tr><td><strong>float</strong> (décimal)</td><td><code>3.14</code></td><td>Nombre avec décimale</td></tr>
            <tr><td><strong>bool</strong> (booléen)</td><td><code>True</code></td><td>Vrai ou Faux</td></tr>
          </table>

          <h2>Afficher une variable avec print()</h2>
          <pre><code>prenom = "Jean"
print(prenom)  # Affiche : Jean</code></pre>

          <h2>Exemples progressifs</h2>
          <h3>Exemple 1 : Stocker un prénom</h3>
          <pre><code>prenom = "Sophie"
print(prenom)</code></pre>

          <h3>Exemple 2 : Faire du calcul</h3>
          <pre><code>age = 30
age_dans_5_ans = age + 5
print(age_dans_5_ans)  # Affiche : 35</code></pre>

          <h3>Exemple 3 : Combiner du texte et des nombres</h3>
          <pre><code>nom = "Dubois"
age = 28
print("Je m'appelle " + nom + " et j'ai " + str(age) + " ans")</code></pre>

          <h2>Règles pour nommer une variable</h2>
          <ul>
            <li>✅ <strong>Commence par une lettre ou _</strong> : <code>ma_variable</code>, <code>_secret</code></li>
            <li>✅ <strong>Contient des lettres, chiffres, _</strong> : <code>var2</code>, <code>mon_age_2025</code></li>
            <li>❌ <strong>Ne commence pas par un chiffre</strong> : <code>2ma_var</code> ← ERREUR</li>
            <li>❌ <strong>Pas d'espaces ni caractères spéciaux</strong> : <code>ma var</code> ← ERREUR</li>
            <li>💡 <strong>Préfère snake_case</strong> : <code>ma_variable</code> plutôt que <code>maVariable</code></li>
          </ul>

          <h2>Résumé</h2>
          <p>En Python, les variables sont simples : vous dites le nom, vous assignez une valeur, et c'est tout. Python gère les types automatiquement, ce qui rend Python très accessible pour les débutants !</p>
        `,
        sources: [
          {
            url: 'https://docs.python.org/3/tutorial/introduction.html',
            title: 'Python Docs — Introduction',
            type: 'Documentation officielle'
          },
          {
            url: 'https://www.w3schools.com/python/python_variables.asp',
            title: 'W3Schools — Python Variables',
            type: 'Tutoriel interactif'
          },
          {
            url: 'https://www.codecademy.com/learn/learn-python-3',
            title: 'Codecademy — Learn Python 3',
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
        description: 'Récupérer des données dans une base de données',
        duration: 18,
        concepts: 'SELECT, FROM, colonnes, lignes, base de données, table',
        content: `
          <h1>Le SELECT en SQL</h1>
          <h2>Le problème</h2>
          <p>Vous avez une base de données avec des milliers de clients. Comment récupérer les informations que vous cherchez ? Vous avez besoin d'une <strong>requête</strong> pour dire : « Donne-moi les noms et les âges ». Cette requête s'appelle un <strong>SELECT</strong>.</p>

          <h2>Qu'est-ce qu'une base de données ?</h2>
          <p>Une base de données est une <strong>collection organisée</strong> de données, structurée en <strong>tables</strong>. Chaque table ressemble à une feuille Excel :</p>
          <ul>
            <li><strong>Colonnes</strong> = champs (ex: id, nom, email, âge)</li>
            <li><strong>Lignes</strong> = enregistrements (chaque personne)</li>
          </ul>

          <h2>Syntaxe basique du SELECT</h2>
          <pre><code>SELECT nom, email FROM clients;</code></pre>
          <p>Cela veut dire : « Récupère les colonnes nom et email de la table clients »</p>

          <h2>Sélectionner toutes les colonnes</h2>
          <pre><code>SELECT * FROM clients;</code></pre>
          <p>L'astérisque <code>*</code> signifie « toutes les colonnes »</p>

          <h2>Sélectionner avec une condition (WHERE)</h2>
          <pre><code>SELECT nom, email FROM clients WHERE age > 18;</code></pre>
          <p>Cela récupère seulement les clients de plus de 18 ans.</p>

          <h2>Exemples progressifs</h2>
          <h3>Exemple 1 : Tous les produits</h3>
          <pre><code>SELECT * FROM produits;</code></pre>

          <h3>Exemple 2 : Seulement le nom des produits</h3>
          <pre><code>SELECT nom FROM produits;</code></pre>

          <h3>Exemple 3 : Produits qui coûtent moins de 50 €</h3>
          <pre><code>SELECT nom, prix FROM produits WHERE prix < 50;</code></pre>

          <h3>Exemple 4 : Clients d'une ville spécifique</h3>
          <pre><code>SELECT nom, email FROM clients WHERE ville = 'Paris';</code></pre>

          <h2>Structure d'une requête SELECT</h2>
          <table>
            <tr><th>Partie</th><th>Signification</th><th>Obligatoire ?</th></tr>
            <tr><td><code>SELECT colonnes</code></td><td>Quelles données récupérer</td><td>✅ Oui</td></tr>
            <tr><td><code>FROM table</code></td><td>Dans quelle table chercher</td><td>✅ Oui</td></tr>
            <tr><td><code>WHERE condition</code></td><td>Filtrer les résultats</td><td>❌ Non</td></tr>
          </table>

          <h2>Cas d'usage courants</h2>
          <p><strong>Trouver tous les clients :</strong></p>
          <pre><code>SELECT * FROM clients;</code></pre>

          <p><strong>Chercher par id :</strong></p>
          <pre><code>SELECT * FROM clients WHERE id = 5;</code></pre>

          <p><strong>Récupérer les noms seulement :</strong></p>
          <pre><code>SELECT nom FROM clients;</code></pre>

          <h2>Résumé</h2>
          <p>Le SELECT est le cœur de SQL. Il vous permet de poser des questions à votre base de données et de récupérer les réponses. Maîtriser le SELECT, c'est maîtriser SQL !</p>
        `,
        sources: [
          {
            url: 'https://dev.mysql.com/doc/refman/8.0/en/select.html',
            title: 'MySQL — SELECT Statement',
            type: 'Documentation officielle'
          },
          {
            url: 'https://www.w3schools.com/sql/sql_select.asp',
            title: 'W3Schools — SQL SELECT',
            type: 'Tutoriel interactif'
          },
          {
            url: 'https://sqlzoo.net/',
            title: 'SQL Zoo — Interactive SQL Tutorial',
            type: 'Plateforme interactive'
          }
        ]
      }
    ],
    intermediaire: [],
    avance: []
  }
};

const exercisesData = {
  javascript: {
    debutant: {
      variables: [
        { type: 'mcq', question: 'Quelle est la différence entre let et var ?', options: ['let a une portée de bloc, var a une portée de fonction', 'Aucune différence', 'var est plus moderne', 'let ne peut pas être réutilisé'], answer: 0 },
        { type: 'mcq', question: 'Qu\'affiche console.log(x) si x n\'a pas été défini ?', options: ['undefined', 'null', 'Erreur ReferenceError', 'vide'], answer: 2 },
        { type: 'mcq', question: 'Quel mot-clé déclare une variable que l\'on ne peut pas modifier ?', options: ['let', 'const', 'var', 'static'], answer: 1 },
        { type: 'mcq', question: 'Quelle est la portée d\'une variable déclarée avec const ?', options: ['Globale', 'De fonction', 'De bloc { }', 'Locale au fichier'], answer: 2 },
        { type: 'mcq', question: 'Quel est le type de la variable : let x = "5" + 3 ?', options: ['number', 'string', 'undefined', 'NaN'], answer: 1 },
        { type: 'mcq', question: 'Que retourne typeof undefined ?', options: ['"undefined"', '"null"', '"object"', 'undefined'], answer: 0 },
        { type: 'mcq', question: 'Peut-on redéclarer une variable avec let dans le même bloc ?', options: ['Oui', 'Non, erreur SyntaxError', 'Seulement si on la réassigne', 'Oui, mais avec const seulement'], answer: 1 },
        { type: 'mcq', question: 'Quel mot-clé est recommandé pour les débutants ?', options: ['var', 'let', 'const', 'function'], answer: 1 },
        { type: 'mcq', question: 'Qu\'affiche : let x = 5; let x = 10; ?', options: ['10', '5', 'Erreur', 'undefined'], answer: 2 },
        { type: 'mcq', question: 'Une const peut-elle être modifiée après sa création ?', options: ['Oui, toujours', 'Non, jamais', 'Oui, si c\'est un objet', 'Seulement si globale'], answer: 1 },
        { type: 'fill', question: 'Complète : _____ nom = "Marie";', answer: 'let' },
        { type: 'fill', question: 'Complète : _____ PI = 3.14159;', answer: 'const' },
        { type: 'fill', question: 'Complète : let x; x = _____; console.log(x); // Affiche : 25', answer: '25' },
        { type: 'fill', question: 'Complète : let age; age = 30; console.log(_____); // Affiche : 30', answer: 'age' },
        { type: 'fill', question: 'Complète : let firstName = "Jean"; let lastName = "_____"; // le nom de famille', answer: 'lastName' },
        { type: 'free', question: 'Écris une variable qui stocke ton prénom.', solution: 'let prenom = "Jean";' },
        { type: 'free', question: 'Déclare trois variables : age, ville, et pays.', solution: 'let age = 25;\nlet ville = "Paris";\nlet pays = "France";' },
        { type: 'free', question: 'Crée une variable avec const et essaie de la changer. Qu\'se passe-t-il ?', solution: 'const x = 5;\nx = 10; // Erreur : Assignment to constant variable' },
        { type: 'free', question: 'Écris une variable qui contient le nombre de personnes dans un groupe.', solution: 'let nombrePersonnes = 5;' },
        { type: 'free', question: 'Crée une variable qui combine un prénom et un nom.', solution: 'let nom = "Jean Dubois"; ou let prenom = "Jean"; let nom = "Dubois";' }
      ]
    },
    intermediaire: {},
    avance: {}
  },
  python: { debutant: {}, intermediaire: {}, avance: {} },
  sql: { debutant: {}, intermediaire: {}, avance: {} }
};

const quizData = {
  javascript: {
    debutant: {
      questions: [
        { id: 'q1', question: 'Qu\'est-ce qu\'une variable en JavaScript ?', options: ['Une boîte qui stocke une valeur', 'Une fonction', 'Un type de données', 'Un objet'], correct: 0 },
        { id: 'q2', question: 'Quel mot-clé est recommandé pour les débutants ?', options: ['var', 'let', 'const', 'function'], correct: 1 },
        { id: 'q3', question: 'La portée d\'une variable let est :', options: ['Globale', 'De bloc { }', 'De fonction', 'Locale au fichier'], correct: 1 },
        { id: 'q4', question: 'Peut-on modifier une variable déclarée avec const ?', options: ['Oui, toujours', 'Non, jamais', 'Oui, seulement si c\'est un objet', 'Seulement avec let'], correct: 1 },
        { id: 'q5', question: 'Qu\'affiche : let x = "5" + 3 ?', options: ['8', '"53"', '"8"', 'Erreur'], correct: 1 },
        { id: 'q6', question: 'Que retourne typeof undefined ?', options: ['"undefined"', '"null"', '"object"', 'undefined'], correct: 0 },
        { id: 'q7', question: 'Quel est le type de 42 en JavaScript ?', options: ['int', 'integer', 'number', 'float'], correct: 2 },
        { id: 'q8', question: 'Peut-on redéclarer une variable avec let ?', options: ['Oui, dans le même bloc', 'Non, erreur SyntaxError', 'Oui, avec var seulement', 'Non, avec const seulement'], correct: 1 },
        { id: 'q9', question: 'Quel est le type de null en JavaScript ?', options: ['"null"', '"undefined"', '"object"', '"none"'], correct: 2 },
        { id: 'q10', question: 'La portée d\'une variable var est :', options: ['Globale', 'De bloc { }', 'De fonction', 'Locale'], correct: 2 },
        { id: 'q11', question: 'Qu\'affiche : console.log(typeof [1,2,3]) ?', options: ['"array"', '"object"', '"list"', '"undefined"'], correct: 1 },
        { id: 'q12', question: 'Comment assigner une valeur à une variable ?', options: ['let x == 5', 'let x = 5', 'let x : 5', 'let x > 5'], correct: 1 },
        { id: 'q13', question: 'Qu\'affiche : let x; console.log(x) ?', options: ['null', 'undefined', '0', 'Erreur'], correct: 1 },
        { id: 'q14', question: 'Quel est le type d\'une fonction en JavaScript ?', options: ['"function"', '"object"', '"method"', '"callable"'], correct: 0 },
        { id: 'q15', question: 'Que signifie le "hoisting" en JavaScript ?', options: ['Déplacer le code', 'Hisser les déclarations en haut', 'Rien, c\'est pas important', 'Créer une copie'], correct: 1 },
        { id: 'q16', question: 'Comment convertir "42" en nombre ?', options: ['parseInt("42")', 'Number("42")', 'int("42")', 'Les deux premiers'], correct: 2 },
        { id: 'q17', question: 'Que retourne Boolean(0) ?', options: ['true', 'false', '"0"', 'Erreur'], correct: 1 },
        { id: 'q18', question: 'Qu\'affiche : let x = false; x = true; console.log(x) ?', options: ['false', 'true', '"true"', 'Erreur'], correct: 1 },
        { id: 'q19', question: 'Quel symbole utilise-t-on pour commenter en JavaScript ?', options: ['//', '/*', '#', '--'], correct: 0 },
        { id: 'q20', question: 'Qu\'est-ce que NaN ?', options: ['Not A Name', 'Not A Number', 'Null And Number', 'Not An Integer'], correct: 1 },
        { id: 'q21', question: 'Peut-on assigner undefined à une variable ?', options: ['Oui', 'Non', 'Seulement avec let', 'Seulement avec const'], correct: 0 },
        { id: 'q22', question: 'Comment tester si x est égal à 5 ?', options: ['if (x = 5)', 'if (x == 5)', 'if (x : 5)', 'if x == 5'], correct: 1 },
        { id: 'q23', question: 'Le nom d\'une variable peut-il commencer par un chiffre ?', options: ['Oui', 'Non', 'Oui, si on utilise const', 'Seulement avec let'], correct: 1 },
        { id: 'q24', question: 'Quel est le bon nommage pour une variable ?', options: ['nomVariable', 'nom_variable', 'NomVariable', 'nom-variable'], correct: 0 },
        { id: 'q25', question: 'Qu\'affiche : "5" + 5 ?', options: ['10', '"10"', '"55"', 'Erreur'], correct: 2 },
        { id: 'q26', question: 'Qu\'affiche : 5 - "2" ?', options: ['3', '"3"', '"52"', '"5-2"'], correct: 0 },
        { id: 'q27', question: 'La variable var a un comportement spécial appelé :', options: ['scoping', 'hoisting', 'binding', 'looping'], correct: 1 },
        { id: 'q28', question: 'Qu\'est-ce que la portée d\'une variable ?', options: ['Où elle est visible', 'Sa valeur', 'Son type', 'Son nom'], correct: 0 },
        { id: 'q29', question: 'Combien de points par question au quiz final ?', options: ['1 point', '2 points', '5 points', '10 points'], correct: 1 },
        { id: 'q30', question: 'Quel est le score minimum pour réussir le quiz ?', options: ['50 points', '60 points', '75 points', '100 points'], correct: 2 },
        { id: 'q31', question: 'Peut-on utiliser const pour un objet et le modifier ?', options: ['Oui, on peut modifier ses propriétés', 'Non, jamais', 'Oui, mais seulement le nom', 'Non, const est immuable'], correct: 0 },
        { id: 'q32', question: 'Qu\'affiche : typeof "hello" ?', options: ['"string"', '"text"', '"hello"', '"char"'], correct: 0 },
        { id: 'q33', question: 'Comment afficher quelque chose dans la console ?', options: ['print(x)', 'output(x)', 'console.log(x)', 'show(x)'], correct: 2 },
        { id: 'q34', question: 'Qu\'est-ce qu\'undefined ?', options: ['Pas de valeur assignée', 'Égal à null', 'Une variable globale', 'Une erreur'], correct: 0 },
        { id: 'q35', question: 'Peut-on déclarer deux fois const x ?', options: ['Oui, en différents blocs', 'Non, jamais', 'Oui, si on la modifie', 'Seulement avec var'], correct: 1 },
        { id: 'q36', question: 'Quel opérateur utilise-t-on pour assigner une valeur ?', options: ['==', '===', '=', '!=='], correct: 2 },
        { id: 'q37', question: 'Que signifie "immutable" pour une variable ?', options: ['Elle ne peut pas être modifiée', 'Elle ne peut pas être déclarée', 'Elle est globale', 'Elle est locale'], correct: 0 },
        { id: 'q38', question: 'Qu\'est-ce qu\'une variable globale ?', options: ['Visible partout', 'Visible nulle part', 'Visible dans une fonction', 'Visible dans un bloc'], correct: 0 },
        { id: 'q39', question: 'Comment déclarer plusieurs variables à la fois ?', options: ['let x, y, z;', 'let x y z;', 'let x let y let z;', 'let (x, y, z)'], correct: 0 },
        { id: 'q40', question: 'Qu\'affiche : "hello".length ?', options: ['5', '"5"', '"hello"', 'Erreur'], correct: 0 },
        { id: 'q41', question: 'Quel est le type d\'un booléen ?', options: ['"bool"', '"boolean"', '"boolean"', '"true/false"'], correct: 1 },
        { id: 'q42', question: 'Peut-on assigner null à une variable ?', options: ['Oui', 'Non', 'Seulement avec let', 'Seulement avec const'], correct: 0 },
        { id: 'q43', question: 'Qu\'affiche : typeof {} ?', options: ['"object"', '"dict"', '"hash"', '"map"'], correct: 0 },
        { id: 'q44', question: 'Comment créer une variable avec const ?', options: ['const x;', 'const x = 5;', 'const x : 5;', 'const x :  5;'], correct: 1 },
        { id: 'q45', question: 'Qu\'est-ce que l\'opérateur typeof ?', options: ['Compare deux valeurs', 'Retourne le type', 'Assigne une valeur', 'Crée un type'], correct: 1 },
        { id: 'q46', question: 'Les noms de variables sont :', options: ['Sensibles à la casse', 'Insensibles à la casse', 'Toujours en minuscule', 'Toujours en majuscule'], correct: 0 },
        { id: 'q47', question: 'Quel mot-clé est recommandé pour les variables réassignables ?', options: ['const', 'let', 'var', 'static'], correct: 1 },
        { id: 'q48', question: 'Qu\'affiche : let x = 5; x = x + 3; console.log(x) ?', options: ['5', '8', '"8"', 'Erreur'], correct: 1 },
        { id: 'q49', question: 'Peut-on réassigner une variable let ?', options: ['Oui', 'Non', 'Seulement dans une fonction', 'Seulement dans un bloc'], correct: 0 },
        { id: 'q50', question: 'Quel est le but principal d\'une variable ?', options: ['Stocker une valeur', 'Afficher du texte', 'Créer une fonction', 'Importer un module'], correct: 0 }
      ]
    },
    intermediaire: { questions: [] },
    avance: { questions: [] }
  },
  python: { debutant: { questions: [] }, intermediaire: { questions: [] }, avance: { questions: [] } },
  sql: { debutant: { questions: [] }, intermediaire: { questions: [] }, avance: { questions: [] } }
};

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
        ${isCompleted ? '<span class="lesson-badge completed">✅ Complétée</span>' : ''}
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

      <div style="margin-top: 32px; display: flex; gap: 12px; flex-wrap: wrap;">
        <button class="btn btn-primary" onclick="openExercises('${lesson.id}')">Exercices (20 Q) →</button>
        <button class="btn btn-primary" onclick="openQuiz()" style="background: #27ae60;">Quiz Final (50 Q) →</button>
        <button class="btn btn-secondary" onclick="backToLessons()">← Retour aux leçons</button>
      </div>
    </div>
  `;

  showLessonModal(lesson.title, content);
}

function openExercises(lessonId) {
  const lessons = lessonsData[currentLanguage][currentLevel] || [];
  const lesson = lessons.find(l => l.id === lessonId);
  if (!lesson) return;

  const exercises = exercisesData[currentLanguage][currentLevel][lessonId] || [];
  if (exercises.length === 0) {
    alert('Les exercices pour cette leçon ne sont pas encore disponibles.');
    return;
  }

  let exerciseHtml = '<div class="exercises-container">';
  exerciseHtml += `<h2>Exercices : ${lesson.title}</h2>`;
  exerciseHtml += '<p style="color: #666; margin-bottom: 16px;">20 questions • Seuil de réussite : 15/20</p>';

  exercises.forEach((ex, idx) => {
    exerciseHtml += `
      <div class="exercise-card" style="margin-bottom: 20px; padding: 16px; border: 1px solid #ddd; border-radius: 8px;">
        <p style="font-weight: bold; margin-bottom: 8px;">Q${idx + 1}. ${ex.question}</p>
    `;

    if (ex.type === 'mcq') {
      ex.options.forEach((opt, optIdx) => {
        exerciseHtml += `
          <label style="display: block; margin: 8px 0; cursor: pointer;">
            <input type="radio" name="q${idx}" value="${optIdx}" style="margin-right: 8px;">
            ${opt}
          </label>
        `;
      });
    } else if (ex.type === 'fill') {
      exerciseHtml += `
        <input type="text" class="exercise-input" data-q="${idx}" placeholder="Complète..." style="width: 100%; padding: 8px; margin: 8px 0; border: 1px solid #ccc; border-radius: 4px;">
        <p style="font-size: 12px; color: #999; margin-top: 4px;"><strong>Réponse:</strong> ${ex.answer}</p>
      `;
    } else if (ex.type === 'free') {
      exerciseHtml += `
        <textarea class="exercise-input" data-q="${idx}" placeholder="Écris ta réponse..." style="width: 100%; padding: 8px; margin: 8px 0; border: 1px solid #ccc; border-radius: 4px; min-height: 80px;"></textarea>
        <p style="font-size: 12px; color: #999; margin-top: 4px;"><strong>Solution proposée:</strong> ${ex.solution}</p>
      `;
    }

    exerciseHtml += `</div>`;
  });

  exerciseHtml += `
    <div style="margin-top: 24px; display: flex; gap: 12px;">
      <button class="btn btn-primary" onclick="submitExercises()">Soumettre les exercices</button>
      <button class="btn btn-secondary" onclick="backToLessons()">← Retour aux leçons</button>
    </div>
  </div>`;

  showLessonModal(`Exercices : ${lesson.title}`, exerciseHtml);
}

function openQuiz() {
  const quizzes = quizData[currentLanguage][currentLevel];
  if (!quizzes) {
    alert('Le quiz pour ce niveau n\'est pas encore disponible.');
    return;
  }

  let quizHtml = '<div class="quiz-container">';
  quizHtml += `<h2>Quiz Final : ${currentLanguage.charAt(0).toUpperCase() + currentLanguage.slice(1)} - ${currentLevel.charAt(0).toUpperCase() + currentLevel.slice(1)}</h2>`;
  quizHtml += `<p style="color: #666; margin-bottom: 16px;">50 questions • 2 points par question • Total : 100 points • Seuil : 75 points (15/20)</p>`;

  quizzes.questions.forEach((q, idx) => {
    quizHtml += `
      <div class="quiz-card" data-quiz-question="${q.id}" data-correct="${q.correct}" style="margin-bottom: 20px; padding: 16px; border: 1px solid #ddd; border-radius: 8px;">
        <p style="font-weight: bold; margin-bottom: 8px;">Q${idx + 1}. ${q.question}</p>
    `;

    q.options.forEach((opt, optIdx) => {
      quizHtml += `
        <label class="quiz-option" style="display: block; margin: 8px 0; padding: 8px; cursor: pointer; border: 1px solid #ccc; border-radius: 4px; transition: all 0.2s;">
          <input type="radio" name="quiz_q${idx}" value="${optIdx}" onclick="selectQuizAnswer('${q.id}')" style="margin-right: 8px;">
          ${opt}
        </label>
      `;
    });

    quizHtml += `
        <button class="btn-check-quiz" onclick="checkQuizAnswer('${q.id}')" style="margin-top: 8px; padding: 8px 16px; background: #1a3a52; color: white; border: none; border-radius: 4px; cursor: pointer;">Vérifier</button>
      </div>
    `;
  });

  quizHtml += `
    <div style="margin-top: 24px; display: flex; gap: 12px;">
      <button class="btn btn-primary" onclick="submitQuiz()">Soumettre le quiz complet</button>
      <button class="btn btn-secondary" onclick="backToLessons()">← Retour aux leçons</button>
    </div>
  </div>`;

  showLessonModal('Quiz Final', quizHtml);
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
  // Créer une modale simple ou afficher en fullscreen
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

// Initialiser les event listeners
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
