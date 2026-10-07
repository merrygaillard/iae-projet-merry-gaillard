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
    debutant: [],
    intermediaire: [],
    avance: []
  },
  sql: {
    debutant: [],
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