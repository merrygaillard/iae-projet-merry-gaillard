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
  alert(`Les exercices pour "${lessonId}" s'ouvriront bientôt.`);
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