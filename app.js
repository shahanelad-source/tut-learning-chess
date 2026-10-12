let currentIndex = 0;
let chess = null;
let currentMode = 'trainer'; // 'trainer' or 'builder'

function initDropdown() {
    const selectEl = document.getElementById('exercise-select');
    if (!selectEl) return;
    
    selectEl.innerHTML = '';
    for (let i = 0; i < exerciseBank.length; i++) {
        const ex = exerciseBank[i];
        const option = document.createElement('option');
        option.value = i;
        option.innerText = `Frame ${ex.frame} (${ex.chapter.split(':')[0]})`;
        selectEl.appendChild(option);
    }

    selectEl.onchange = (e) => {
        currentIndex = parseInt(e.target.value);
        loadExercise(currentIndex);
    };
}

function switchMode(mode) {
    currentMode = mode;
    const trainerBtn = document.getElementById('mode-trainer');
    const builderBtn = document.getElementById('mode-builder');
    const trainerPanel = document.getElementById('trainer-panel');
    const builderPanel = document.getElementById('builder-panel');

    if (mode === 'trainer') {
        trainerBtn.className = "px-3 py-1.5 rounded bg-amber-500 text-slate-950 font-bold transition cursor-pointer";
        builderBtn.className = "px-3 py-1.5 rounded text-slate-300 hover:text-white transition cursor-pointer";
        trainerPanel.classList.remove('hidden');
        builderPanel.classList.add('hidden');
    } else {
        builderBtn.className = "px-3 py-1.5 rounded bg-emerald-500 text-slate-950 font-bold transition cursor-pointer";
        trainerBtn.className = "px-3 py-1.5 rounded text-slate-300 hover:text-white transition cursor-pointer";
        builderPanel.classList.remove('hidden');
        trainerPanel.classList.add('hidden');
    }
    loadExercise(currentIndex);
}

function loadExercise(index) {
    currentIndex = index;
    const data = exerciseBank[index];

    const selectEl = document.getElementById('exercise-select');
    if (selectEl) selectEl.value = index;

    // Trainer View Data
    document.getElementById('chapter-tag').innerText = data.chapter;
    document.getElementById('frame-title').innerText = data.title;
    document.getElementById('frame-text').innerText = data.text;

    const container = document.getElementById('options-container');
    container.innerHTML = '';
    for (let i = 0; i < data.options.length; i++) {
        const opt = data.options[i];
        const btn = document.createElement('button');
        btn.className = "w-full text-left px-4 py-3 bg-slate-900 hover:bg-slate-700 border border-slate-700 rounded text-xs text-slate-200 transition font-medium cursor-pointer";
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(i, data.correct, data.explanation);
        container.appendChild(btn);
    }

    // Builder View Data
    document.getElementById('builder-title').innerText = `Frame ${data.frame} Builder`;
    document.getElementById('builder-text').innerText = data.text;
    document.getElementById('fen-input').value = data.fen;

    chess.load(data.fen);
    renderBoard();
}

function previewFen(fenStr) {
    try {
        chess.load(fenStr);
        renderBoard();
    } catch (e) {
        // Invalid FEN while typing, ignore temporarily
    }
}

function saveCurrentFen() {
    const fenVal = document.getElementById('fen-input').value;
    exerciseBank[currentIndex].fen = fenVal;
    alert(`Saved FEN for Frame ${exerciseBank[currentIndex].frame}! Moving to next frame.`);
    
    if (currentIndex < exerciseBank.length - 1) {
        loadExercise(currentIndex + 1);
    }
}

function exportBankJson() {
    const outputText = "const exerciseBank = " + JSON.stringify(exerciseBank, null, 4) + ";";
    navigator.clipboard.writeText(outputText).then(() => {
        alert("Copied complete updated exerciseBank.js to your clipboard! Paste it into your exerciseBank.js file.");
    });
}

function renderBoard() {
    const boardEl = document.getElementById('board');
    if (!boardEl) return;
    boardEl.innerHTML = '';
    const board = chess.board();

    for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            const squareEl = document.createElement('div');
            const isLight = (r + c) % 2 === 0;
            squareEl.className = `w-full h-full flex items-center justify-center text-4xl select-none ${isLight ? 'bg-amber-100 text-slate-900' : 'bg-amber-800 text-slate-100'}`;
            
            const piece = board[r][c];
            if (piece) {
                squareEl.innerText = getPieceSymbol(piece);
            }
            boardEl.appendChild(squareEl);
        }
    }
}

function getPieceSymbol(piece) {
    const symbols = {
        p: '♟', r: '♜', n: '♞', b: '♝', q: '♛', k: '♚',
        P: '♙', R: '♖', N: '♘', B: '♗', Q: '♕', K: '♔'
    };
    return symbols[piece.color === 'w' ? piece.type.toUpperCase() : piece.type.toLowerCase()];
}

function checkAnswer(selected, correct, explanation) {
    const container = document.getElementById('options-container');
    if (selected === correct) {
        container.innerHTML = `<div class="p-3 bg-emerald-950 border border-emerald-600 rounded text-emerald-300 text-xs">✅ Correct! ${explanation}</div>`;
    } else {
        container.innerHTML = `<div class="p-3 bg-rose-950 border border-rose-600 rounded text-rose-300 text-xs">❌ Not quite. ${explanation}</div>`;
    }
}

// Navigation Listeners
document.getElementById('next-btn').onclick = () => {
    if (currentIndex < exerciseBank.length - 1) {
        loadExercise(currentIndex + 1);
    }
};

document.getElementById('prev-btn').onclick = () => {
    if (currentIndex > 0) {
        loadExercise(currentIndex - 1);
    }
};

document.getElementById('hint-btn').onclick = () => {
    alert(exerciseBank[currentIndex].explanation);
};

// DOM Content Loaded Handler
window.addEventListener('DOMContentLoaded', () => {
    chess = new Chess();
    initDropdown();
    loadExercise(currentIndex);
});
