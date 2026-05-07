/**
 * A módszer-választó rács megjelenítése
 */
function startMethods() {
    const container = document.getElementById('app-container');
    
    container.innerHTML = `
        <section class="methods-selection">
            <button class="back-btn" onclick="location.reload()">⬅ Főoldal</button>
            <h1 class="section-title">Válassz egy technikát!</h1>
            <p class="subtitle">Kattints az egyikre a kipróbáláshoz:</p>
            
            <div class="cards-grid">
                ${learningMethods.map(m => `
                    <div class="method-card" onclick="openDemo('${m.id}')">
                        <div class="method-card-content">
                            <h3>${m.title}</h3>
                            <p>${m.description}</p>
                        </div>
                        <span class="try-badge">Kipróbálom</span>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
}

/**
 * Egy konkrét módszer részletes nézete (Tananyag + Demó)
 */
function openDemo(methodId) {
    const method = learningMethods.find(m => m.id === methodId);
    const container = document.getElementById('app-container');

    container.innerHTML = `
        <div class="demo-layout">
            <header class="demo-header">
                <button class="back-btn" onclick="startMethods()">⬅ Vissza a listához</button>
                <h1>${method.title}</h1>
            </header>

            <div class="content-grid">
                <aside class="theory-section">
                    <div class="info-card">
                        <h3>Mi ez?</h3>
                        <p>${method.learningText}</p>
                    </div>
                    <div class="pros-cons">
                        <div class="p-box"><strong>✅ Előny:</strong> ${method.pros}</div>
                        <div class="c-box"><strong>❌ Hátrány:</strong> ${method.cons}</div>
                    </div>
                    <div class="app-suggestion">
                        <strong>Javasolt app:</strong> <span>${method.software}</span>
                    </div>
                </aside>

                <main class="interaction-section">
                    <div class="demo-box">
                        <h3>Interaktív Próba</h3>
                        <div id="demo-target">
                            ${renderInteractionTemplate(method)}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    `;
}

/**
 * Meghatározza, melyik demó HTML-jét generáljuk le
 */
function renderInteractionTemplate(method) {
    switch(method.id) {
        case 'active-recall':
            return `
                <div class="flashcard-container">
                    <div class="flashcard" onclick="this.classList.toggle('flipped')">
                        <div class="card-front"><p>${method.demoContent[0].q}</p><small>(Kattints a válaszért)</small></div>
                        <div class="card-back"><p>${method.demoContent[0].a}</p></div>
                    </div>
                </div>`;
        
        case 'pomodoro':
            return `
                <div class="pomodoro-demo">
                    <div class="timer-display" id="timer">25:00</div>
                    <div class="timer-controls">
                        <button class="action-btn" id="timerBtn" onclick="togglePomodoroDemo()">Indítás (10 mp)</button>
                    </div>
                </div>`;

        case 'feynman':
            return `
                <div class="feynman-demo">
                    <p><strong>Téma:</strong> ${method.demoContent.topic}</p>
                    <textarea id="feynman-input" placeholder="Magyarázd el egyszerűen..."></textarea>
                    <button class="action-btn" onclick="checkFeynman()">Ellenőrzés</button>
                    <div id="feynman-feedback" class="d-none"></div>
                </div>`;

        default:
            return `<p class="placeholder-text">Ez a demó hamarosan elérhető lesz!</p>`;
    }
}

// --- DEMÓ FUNKCIÓK ---

// Pomodoro időzítő logika
let timerInterval;
function togglePomodoroDemo() {
    let timeLeft = 10;
    const display = document.getElementById('timer');
    const btn = document.getElementById('timerBtn');
    btn.disabled = true;

    timerInterval = setInterval(() => {
        timeLeft--;
        display.innerText = `00:${timeLeft < 10 ? '0' : ''}${timeLeft}`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            display.innerText = "25:00";
            btn.disabled = false;
            alert("Szuper! Most jönne az 5 perc szünet.");
        }
    }, 1000);
}

// Feynman ellenőrzés logika
function checkFeynman() {
    const input = document.getElementById('feynman-input').value;
    const feedback = document.getElementById('feynman-feedback');
    const method = learningMethods.find(m => m.id === 'feynman');

    if (input.length < 10) {
        alert("Próbáld meg kicsit részletesebben kifejteni!");
        return;
    }

    feedback.classList.remove('d-none');
    feedback.innerHTML = `
        <div class="feedback-content">
            <h4>Ügyes!</h4>
            <p>Így magyarázta el Richard Feynman:</p>
            <blockquote style="font-style: italic">"${method.demoContent.simpleExplanation}"</blockquote>
        </div>
    `;
}