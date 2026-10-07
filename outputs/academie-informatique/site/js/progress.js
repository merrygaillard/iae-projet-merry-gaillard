// Suivi progression et gestion niveaux

function showProgress() {
  document.getElementById('home-section').style.display = 'none';
  document.getElementById('lessons-section').style.display = 'none';
  document.getElementById('progress-section').style.display = 'block';

  renderProgress();
}

function renderProgress() {
  const container = document.querySelector('.progress-grid');
  container.innerHTML = '';

  const languages = ['javascript', 'python', 'sql'];
  const levels = ['debutant', 'intermediaire', 'avance'];

  languages.forEach(lang => {
    levels.forEach(level => {
      const langName = lang.charAt(0).toUpperCase() + lang.slice(1);
      const levelName = level === 'debutant' ? 'Débutant' :
                       level === 'intermediaire' ? 'Intermédiaire' : 'Avancé';

      const isLocked = level !== 'debutant' && !isLevelUnlocked(lang, levels[levels.indexOf(level) - 1]);
      const isCompleted = isLevelCompleted(lang, level);

      const item = document.createElement('div');
      item.className = 'progress-item';

      item.innerHTML = `
        <h3>${langName}</h3>
        <div class="level">${levelName}</div>
        <div class="${isCompleted ? 'completed' : isLocked ? 'locked' : 'active'}">
          ${isCompleted ? '✅ Complété' : isLocked ? '🔒 Verrouillé' : '📖 Disponible'}
        </div>
        ${!isLocked ? `
          <div style="margin-top: 12px;">
            <button class="btn btn-primary" onclick="selectLanguageAndLevel('${lang}', '${level}')">
              ${isCompleted ? 'Revoir' : 'Commencer'}
            </button>
          </div>
        ` : ''}
      `;

      container.appendChild(item);
    });
  });
}

function selectLanguageAndLevel(lang, level) {
  currentLanguage = lang;
  currentLevel = level;
  showLessons();
}

function isLevelUnlocked(lang, level) {
  const key = `completed_${lang}_${level}`;
  return localStorage.getItem(key) === 'true';
}

function isLevelCompleted(lang, level) {
  const key = `completed_${lang}_${level}`;
  return localStorage.getItem(key) === 'true';
}

function completeLessonQuiz(lang, level) {
  const key = `completed_${lang}_${level}`;
  localStorage.setItem(key, 'true');
  updateProgressBars();
}

function updateProgressBars() {
  const languages = document.querySelectorAll('.language-card');
  languages.forEach(card => {
    const lang = card.dataset.lang;
    const levels = ['debutant', 'intermediaire', 'avance'];
    const completed = levels.filter(l => isLevelCompleted(lang, l)).length;
    const percentage = (completed / levels.length) * 100;

    const progressFill = card.querySelector('.progress-fill');
    const progressText = card.querySelector('.progress-text');

    if (progressFill) progressFill.style.width = percentage + '%';
    if (progressText) progressText.textContent = `${completed}/3 niveaux complétés`;
  });
}

// Initialiser la progression au chargement
document.addEventListener('DOMContentLoaded', updateProgressBars);
