// Gestion du quiz final (50 questions, scoring 100 points)

const QUIZ_TOTAL_POINTS = 100;
const POINTS_PER_QUESTION = 2;
const PASSING_SCORE = 75;

function startQuiz() {
  // Réinitialiser le quiz
  const questions = document.querySelectorAll('.quiz-card');
  let answeredCount = 0;

  // Compter les réponses
  questions.forEach(q => {
    const feedback = q.querySelector('.feedback');
    if (feedback) {
      answeredCount++;
    }
  });

  // Si toutes les questions sont répondues, afficher le résultat
  if (answeredCount === questions.length) {
    calculateQuizScore();
  }
}

function selectQuizAnswer(questionId) {
  // Sélectionner une réponse du quiz
  const question = document.querySelector(`[data-quiz-question="${questionId}"]`);
  if (!question) return;

  const options = question.querySelectorAll('.quiz-option');
  options.forEach(opt => {
    opt.classList.remove('selected');
  });

  event.target.classList.add('selected');
}

function checkQuizAnswer(questionId) {
  const question = document.querySelector(`[data-quiz-question="${questionId}"]`);
  if (!question) return;

  const selectedOption = question.querySelector('.quiz-option.selected');
  if (!selectedOption) {
    alert('Veuillez sélectionner une réponse.');
    return;
  }

  const correctAnswerIndex = parseInt(question.dataset.correct);
  const allOptions = question.querySelectorAll('.quiz-option');
  const selectedIndex = Array.from(allOptions).indexOf(selectedOption);

  const isCorrect = selectedIndex === correctAnswerIndex;

  // Afficher le résultat
  allOptions.forEach((opt, idx) => {
    if (idx === correctAnswerIndex) {
      opt.classList.add('correct');
    } else if (idx === selectedIndex && !isCorrect) {
      opt.classList.add('incorrect');
    }
    opt.style.pointerEvents = 'none'; // Désactiver les clics
  });

  // Afficher le feedback
  const feedback = document.createElement('div');
  feedback.className = 'feedback ' + (isCorrect ? 'success' : 'error');
  feedback.textContent = isCorrect ? '✅ Correct!' : '❌ Incorrect.';

  const existingFeedback = question.querySelector('.feedback');
  if (existingFeedback) {
    existingFeedback.remove();
  }
  question.appendChild(feedback);

  return isCorrect;
}

function calculateQuizScore() {
  let correctAnswers = 0;
  const questions = document.querySelectorAll('[data-quiz-question]');

  questions.forEach(q => {
    const feedback = q.querySelector('.feedback');
    if (feedback && feedback.classList.contains('success')) {
      correctAnswers++;
    }
  });

  const totalPoints = Math.round((correctAnswers / questions.length) * QUIZ_TOTAL_POINTS);
  const passed = totalPoints >= PASSING_SCORE;
  const noteOnTwenty = Math.round((correctAnswers / questions.length) * 20);

  // Afficher les résultats
  const resultDiv = document.createElement('div');
  resultDiv.className = 'scoring ' + (passed ? 'passed' : 'failed');
  resultDiv.innerHTML = `
    <h2>${passed ? '✅ Réussi!' : '❌ Non réussi'}</h2>
    <p>Score: ${totalPoints}/${QUIZ_TOTAL_POINTS} points (${correctAnswers}/${questions.length} bonnes réponses)</p>
    <p>Note: ${noteOnTwenty}/20</p>
    ${passed ? '<p>Vous pouvez passer au niveau suivant! 🎉</p>' : '<p>Révisez et réessayez.</p>'}
  `;

  // Insérer le résultat au début du quiz
  const quizContainer = document.querySelector('.quiz-container');
  if (quizContainer) {
    quizContainer.insertBefore(resultDiv, quizContainer.firstChild);
  }

  // Sauvegarder si réussi
  if (passed) {
    completeLessonQuiz(currentLanguage, currentLevel);
  }

  // Désactiver tous les boutons
  const checkButtons = document.querySelectorAll('.btn-check-quiz');
  checkButtons.forEach(btn => btn.disabled = true);
}

function submitQuiz() {
  // Vérifier que toutes les questions sont répondues
  const questions = document.querySelectorAll('[data-quiz-question]');
  let answeredCount = 0;

  questions.forEach(q => {
    const feedback = q.querySelector('.feedback');
    if (feedback) {
      answeredCount++;
    }
  });

  if (answeredCount < questions.length) {
    alert(`Répondez à toutes les ${questions.length} questions avant de soumettre.`);
    return;
  }

  calculateQuizScore();
}

// Utilitaires de validation
function validateQuizInput(input) {
  // Prévenir XSS
  const text = input.textContent || input.innerText || '';
  return escapeHtml(text);
}

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return String(text).replace(/[&<>"']/g, m => map[m]);
}
