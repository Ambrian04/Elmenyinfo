// Pontszámok tárolása
let scores = {
    visual: 0,
    auditory: 0,
    readWrite: 0,
    kinesthetic: 0
};

let currentQuestionIndex = 0;

// Kvíz indítása
function startQuiz() {
    currentQuestionIndex = 0;
    scores = { visual: 0, auditory: 0, readWrite: 0, kinesthetic: 0 };
    renderQuestion();
}

// Kérdés megjelenítése
function renderQuestion() {
    const container = document.getElementById('app-container');
    const q = quizQuestions[currentQuestionIndex];

    // Progress bar kiszámítása
    const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

    container.innerHTML = `
        <section class="quiz-container">
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${progress}%"></div>
            </div>
            <p class="question-count">${currentQuestionIndex + 1} / ${quizQuestions.length}</p>
            <h2 class="quiz-question">${q.question}</h2>
            <div class="options-grid">
                ${q.options.map((opt, index) => `
                    <button class="option-btn" onclick="handleAnswer('${opt.type}')">
                        ${opt.text}
                    </button>
                `).join('')}
            </div>
        </section>
    `;
}

// Válasz lekezelése
function handleAnswer(type) {
    scores[type]++;
    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
        renderQuestion();
    } else {
        showResults();
    }
}

// Eredmények megjelenítése
function showResults() {
    const container = document.getElementById('app-container');
    
    // Megkeressük a legmagasabb pontszámú kategóriát
    const topType = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    
    const resultsData = {
        visual: { title: "Vizuális típus", desc: "Képekben gondolkodsz. Használj elmetérképeket, színes kiemelőket és videókat!", icon: "👁️" },
        auditory: { title: "Auditív típus", desc: "A hallás az erősséged. Hallgass podcastokat, és mondd fel hangosan a tananyagot!", icon: "🎧" },
        readWrite: { title: "Olvasás/Írás típus", desc: "A szavak embere vagy. Készíts részletes vázlatokat és olvass sokat a témában!", icon: "✍️" },
        kinesthetic: { title: "Mozgásos típus", desc: "Gyakorlatias vagy. Tanulj séta közben, vagy próbáld ki a dolgokat a valóságban!", icon: "🏃" }
    };

    const result = resultsData[topType];

    container.innerHTML = `
        <section class="results-view">
            <div class="result-card">
                <div class="result-icon">${result.icon}</div>
                <h1>A te típusod: ${result.title}</h1>
                <p>${result.desc}</p>
                <button class="action-btn" onclick="location.reload()">Vissza a főoldalra</button>
            </div>
        </section>
    `;
}