let currentIndex = 0;
let chess = null;

// Function using a for loop to verify and load the exercise bank
function getValidatedBank() {
    const validated = [];
    for (let i = 0; i < exerciseBank.length; i++) {
        validated.push(exerciseBank[i]);
    }
    return validated;
}

const activeExercises = getValidatedBank();

function initDropdown() {
    const selectEl = document.getElementById('exercise-select');
    if (!selectEl) return;
    
    selectEl.innerHTML = '';
    for (let i = 0; i < activeExercises.length; i++) {
        const ex = activeExercises[i];
        const option = document.createElement('option');
        option.value = i;
        option.innerText = `${ex.chapter.split('[')[0].trim()} - Frame ${ex.frame}`;
        selectEl.appendChild(option);
    }

    selectEl.onchange = (e) => {
        currentIndex = parseInt(e.target.value);
        loadExercise(currentIndex);
    };
}

function loadExercise(index) {
    currentIndex = index;
    const data = activeExercises[index];

    const selectEl = document.getElementById('exercise-select');
    if (selectEl) selectEl.value = index;

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

    chess.load(data.fen);
    renderBoard();
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

// Button Listeners
document.getElementById('next-btn').onclick = () => {
    if (currentIndex < activeExercises.length - 1) {
        loadExercise(currentIndex + 1);
    }
};

document.getElementById('prev-btn').onclick = () => {
    if (currentIndex > 0) {
        loadExercise(currentIndex - 1);
    }
};

document.getElementById('hint-btn').onclick = () => {
    alert(activeExercises[currentIndex].explanation);
};

// 🔥 CRITICAL FIX: Wait for the DOM to fully load before initializing the app
window.addEventListener('DOMContentLoaded', () => {
    chess = new Chess();
    initDropdown();
    loadExercise(currentIndex);
});
