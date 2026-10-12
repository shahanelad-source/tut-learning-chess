let currentIndex = 0;
const chess = new Chess();

function loadExercise(index) {
    const data = exerciseBank[index];
    document.getElementById('progress-indicator').innerText = `Exercise ${index + 1} of ${exerciseBank.length} (Frame ${data.frame})`;
    document.getElementById('chapter-tag').innerText = data.chapter;
    document.getElementById('frame-title').innerText = data.title;
    document.getElementById('frame-text').innerText = data.text;

    const container = document.getElementById('options-container');
    container.innerHTML = '';
    data.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = "w-full text-left px-4 py-3 bg-slate-900 hover:bg-slate-700 border border-slate-700 rounded text-xs text-slate-200 transition font-medium";
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(idx, data.correct, data.explanation);
        container.appendChild(btn);
    });

    chess.load(data.fen);
    renderBoard();
}

function renderBoard() {
    const boardEl = document.getElementById('board');
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

document.getElementById('next-btn').onclick = () => {
    if (currentIndex < exerciseBank.length - 1) {
        currentIndex++;
        loadExercise(currentIndex);
    }
};

document.getElementById('prev-btn').onclick = () => {
    if (currentIndex > 0) {
        currentIndex--;
        loadExercise(currentIndex);
    }
};

document.getElementById('hint-btn').onclick = () => {
    alert(exerciseBank[currentIndex].explanation);
};

// Initialize app with the first exercise
loadExercise(currentIndex);
