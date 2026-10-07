// Gestion des exercices (20 questions)

function loadExercises(lessonId) {
  // Charger les exercices pour cette leçon
  // Pour l'instant, affichage statique
  alert('Les exercices pour ' + lessonId + ' seront disponibles bientôt.');
}

function checkExerciseAnswer(questionId) {
  // Validation des réponses aux exercices
  const options = document.querySelectorAll(`[data-question="${questionId}"] .option`);
  let selectedAnswer = null;

  options.forEach(opt => {
    if (opt.classList.contains('selected')) {
      selectedAnswer = opt.dataset.answer;
    }
  });

  if (!selectedAnswer) {
    alert('Veuillez sélectionner une réponse.');
    return;
  }

  const correctAnswer = document.querySelector(`[data-question="${questionId}"]`).dataset.correct;
  const isCorrect = selectedAnswer === correctAnswer;

  // Afficher les résultats
  options.forEach(opt => {
    if (opt.dataset.answer === correctAnswer) {
      opt.classList.add('correct');
    } else if (opt.classList.contains('selected') && !isCorrect) {
      opt.classList.add('incorrect');
    }
  });

  // Afficher le feedback
  const feedback = document.createElement('div');
  feedback.className = 'feedback ' + (isCorrect ? 'success' : 'error');
  feedback.textContent = isCorrect ? '✅ Correct!' : '❌ Incorrect. Voir la solution.';
  document.querySelector(`[data-question="${questionId}"]`).appendChild(feedback);
}

function submitExercises() {
  // Calculer le score
  let score = 0;
  let total = 0;

  document.querySelectorAll('.exercise-card').forEach(card => {
    total++;
    const feedback = card.querySelector('.feedback');
    if (feedback && feedback.classList.contains('success')) {
      score++;
    }
  });

  // Afficher les résultats
  const percentage = Math.round((score / total) * 100);
  const passed = score >= Math.ceil(total * 0.75);

  alert(`Résultat: ${score}/${total} (${percentage}%)\n${passed ? '✅ Réussi!' : '❌ À revoir.'}`);

  if (passed) {
    // Marquer comme complété
    const key = `exercises_${currentLanguage}_${currentLevel}_completed`;
    localStorage.setItem(key, 'true');
  }
}
