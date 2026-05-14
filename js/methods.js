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

        case 'mindmap':
            return `
                <div class="mindmap-demo">
                    <p><strong>Téma:</strong> ${method.demoContent[0]}</p>
                    <div id="mindmap-visual" class="mindmap-visual">
                        <div class="mindmap-center">Biológia</div>
                        <div class="mindmap-branch" style="top: 20%; left: 10%;">
                            <div class="branch-label">Állatok <button class="branch-remove" onclick="removeMindmapBranch(this)">×</button></div>
                        </div>
                        <div class="mindmap-branch" style="top: 50%; left: 5%;">
                            <div class="branch-label">Növények <button class="branch-remove" onclick="removeMindmapBranch(this)">×</button></div>
                        </div>
                        <div class="mindmap-branch" style="top: 80%; left: 10%;">
                            <div class="branch-label">Gombák <button class="branch-remove" onclick="removeMindmapBranch(this)">×</button></div>
                        </div>
                        <div class="mindmap-branch" style="top: 30%; right: 5%;">
                            <div class="branch-label">Sejtek <button class="branch-remove" onclick="removeMindmapBranch(this)">×</button></div>
                        </div>
                    </div>
                    <div class="mindmap-controls">
                        <input type="text" id="new-branch-input" placeholder="Új ág neve..." maxlength="20">
                        <button class="action-btn" onclick="addMindmapBranch()">+ Ág hozzáadása</button>
                    </div>
                    <p class="demo-hint">💡 Írj be egy új ágat és kattints a gombra! Az ágakat az × gombbal törölheted.</p>
                </div>`;

        case 'sq3r':
            return `
                <div class="sq3r-demo">
                    <div class="sq3r-steps">
                        <button class="sq3r-btn active" onclick="setSQ3RStep(1)">1️⃣ Survey (Áttekintés)</button>
                        <button class="sq3r-btn" onclick="setSQ3RStep(2)">2️⃣ Question (Kérdések)</button>
                        <button class="sq3r-btn" onclick="setSQ3RStep(3)">3️⃣ Read (Olvasás)</button>
                        <button class="sq3r-btn" onclick="setSQ3RStep(4)">4️⃣ Recite (Felmondás)</button>
                        <button class="sq3r-btn" onclick="setSQ3RStep(5)">5️⃣ Review (Ellenőrzés)</button>
                    </div>
                    <div id="sq3r-content" class="sq3r-content">
                        <h4>1. Survey - Tananyag áttekintése</h4>
                        <p>Először nézd meg a címeket, képeket és összefoglalásokat! Ez ad egy gyors áttekintést az anyagról.</p>
                        <div class="sq3r-preview">
                            <strong>Címek:</strong> Fotoszintézis, a fotoszintézis folyamata, sötét és világos szakasz<br>
                            <strong>Képek:</strong> Kloroplasztisz, zöld levelek, napfény
                        </div>
                    </div>
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

// SQ3R lépések kezelése
const sq3rSteps = [
    {
        title: "1. Survey - Tananyag áttekintése",
        description: "Először nézd meg a címeket, képeket és összefoglalásokat! Ez ad egy gyors áttekintést az anyagról.",
        content: "<strong>Címek:</strong> Fotoszintézis, a fotoszintézis folyamata, sötét és világos szakasz<br><strong>Képek:</strong> Kloroplasztisz, zöld levelek, napfény"
    },
    {
        title: "2. Question - Kérdések felvetése",
        description: "Milyen kérdéseket fog felvetni az anyag? Mire kell majd tudnod a választ?",
        content: "<strong>Kérdések:</strong> Mi az a fotoszintézis? Miért zöldek a levelek? Hogyan történik az energiaátadás?"
    },
    {
        title: "3. Read - Gondos olvasás",
        description: "Most olvasd el figyelmesen az anyagot, az előzőleg felvetett kérdésekre keresve válaszokat.",
        content: "<strong>Szöveg:</strong> A fotoszintézis egy biokémiai folyamat, amelyben a zöld növények napfény segítségével szén-dioxidot és vizet alakítanak cukorra..."
    },
    {
        title: "4. Recite - Saját szavakkal felmondás",
        description: "Zárd be a könyvet, és próbáld meg saját szavakkal elmondani, amit olvastál!",
        content: "<strong>Feladat:</strong> Mondd el, mit tanultál a fotoszintézisről úgy, hogy egy barátod megértse."
    },
    {
        title: "5. Review - Végig átnézés",
        description: "Végig nézd az anyagot még egyszer, hogy biztosítsd, hogy megértetted és megjegyezted.",
        content: "<strong>Ellenőrzés:</strong> Válaszoltad-e meg az összes kérdést? Hol van még zavar? Milyen részeket kell újraolvasni?"
    }
];

function setSQ3RStep(stepNum) {
    const contentDiv = document.getElementById('sq3r-content');
    const buttons = document.querySelectorAll('.sq3r-btn');
    
    // Aktív gomb megjelölése
    buttons.forEach((btn, idx) => {
        btn.classList.toggle('active', idx === stepNum - 1);
    });
    
    // Tartalom frissítése
    const step = sq3rSteps[stepNum - 1];
    contentDiv.innerHTML = `
        <h4>${step.title}</h4>
        <p>${step.description}</p>
        <div class="sq3r-preview">
            ${step.content}
        </div>
    `;
}

// Mind Map interaktív funkciók
let branchCounter = 4; // Létezik már 4 ág

function addMindmapBranch() {
    const input = document.getElementById('new-branch-input');
    const branchName = input.value.trim();
    
    if (!branchName) {
        alert('Kérlek, írj be egy ág nevet!');
        return;
    }
    
    if (branchName.length < 2) {
        alert('A név legalább 2 karakter hosszú legyen!');
        return;
    }
    
    const visual = document.getElementById('mindmap-visual');
    
    // Véletlenszerű pozíció (0-360 fok körül)
    const angle = (branchCounter * 72) % 360;
    const distance = 140;
    const rad = (angle * Math.PI) / 180;
    const top = 50 + Math.sin(rad) * 30;
    const left = 50 + Math.cos(rad) * 35;
    
    const newBranch = document.createElement('div');
    newBranch.className = 'mindmap-branch';
    newBranch.style.top = top + '%';
    newBranch.style.left = left + '%';
    newBranch.innerHTML = `<div class="branch-label">${branchName} <button class="branch-remove" onclick="removeMindmapBranch(this)">×</button></div>`;
    
    visual.appendChild(newBranch);
    
    input.value = '';
    input.focus();
    branchCounter++;
}

function removeMindmapBranch(btn) {
    const branch = btn.closest('.mindmap-branch');
    branch.style.animation = 'fadeOut 0.3s ease';
    setTimeout(() => branch.remove(), 300);
}

// Enter billentyű támogatása az input mezőben
document.addEventListener('keypress', function(e) {
    const input = document.getElementById('new-branch-input');
    if (e.key === 'Enter' && input && document.activeElement === input) {
        addMindmapBranch();
    }
});