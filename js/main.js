document.addEventListener('DOMContentLoaded', () => {
    const quizBtn = document.getElementById('start-quiz-btn');
    
    if (quizBtn) {
        quizBtn.addEventListener('click', () => {
            startQuiz(); // Meghívja a quiz.js-ben lévő függvényt
        });
    }
});

document.getElementById('start-methods-btn').addEventListener('click', () => {
    startMethods();
});