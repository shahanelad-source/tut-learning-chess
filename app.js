let currentIndex = 0;
let chess = null;

function initApp() {
    chess = new Chess();
    const selectEl = document.getElementById('exercise-select');
    
    exerciseBank.forEach((ex, i) => {
        const option = document.createElement('option');
        option.value = i;
        option.innerText = `Frame ${ex.frame} - ${ex.chapter.split(':')[0]}`;
        selectEl.appendChild(option);
    });

    selectEl.onchange = (e) => {
        document.getElementById('nav-modal').classList.add('hidden');
        loadExercise(parseInt(e.target.value));
    };

    // Map Bottom Bar Buttons
    document.getElementById('btn-prev').onclick = () => loadExercise(Math.max(0, currentIndex - 1));
    document.getElementById('btn-next').onclick = () => loadExercise(Math.min(exerciseBank.length - 1, currentIndex + 1));
    document.getElementById('btn-hint').onclick = () => alert(exerciseBank[currentIndex].explanation || "No hint available.");

    loadExercise(0);
}

function loadExercise(index) {
    currentIndex = index;
    const data = exerciseBank[index];
    document.getElementById('exercise-select').value = index;

    // Load Speech Bubble
    let bubbleText = `<b>Frame ${data.frame}:</b><br/>${data.text}`;
    if (data.needs_manual_fix) {
        bubbleText += `<br/><span class="text-rose-500 text-[10px] uppercase font-bold mt-1 block">⚠️ FEN needs manual fix</span>`;
    }
    document.getElementById('frame-text').innerHTML = bubbleText;

    // Render Answers
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    
    data.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        // Styled like Chess.com action buttons
        btn.className = "w-full text-center px-4 py-3.5 bg-[#454341] hover:bg-[#52504d] text-[#c3c3c2] hover:text-white rounded-lg text-sm font-bold transition shadow-sm border-b-4 border-[#33312e] active:translate-y-1 active:border-b-0";
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(i, data.correct, btn);
        container.appendChild(btn);
    });

    // Render Board
    try {
        chess.load(data.fen);
    } catch (e) {
        chess.clear(); // Load empty board if FEN is broken
    }
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
            // Tournament Green Colors
            squareEl.className = `w-full h-full flex items-center justify-center text-3xl select-none ${isLight ? 'bg-[#ebecd0] text-[#302e2b]' : 'bg-[#779556] text-[#ebecd0]'}`;
            
            const piece = board[r][c];
            if (piece) squareEl.innerText = getPieceSymbol(piece);
            
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

function checkAnswer(selected, correct, btnEl) {
    const container = document.getElementById('options-container');
    const explanation = exerciseBank[currentIndex].explanation || "Review the board carefully.";
    
    // Disable all buttons
    Array.from(container.children).forEach(b => b.disabled = true);

    if (selected === correct) {
        btnEl.className = "w-full text-center px-4 py-3.5 bg-[#81b64c] text-white rounded-lg text-sm font-bold shadow-sm border-b-4 border-[#5b8532]";
        btnEl.innerText = "✓ Correct! " + explanation;
        setTimeout(() => document.getElementById('btn-next').click(), 2500);
    } else {
        btnEl.className = "w-full text-center px-4 py-3.5 bg-[#fa412d] text-white rounded-lg text-sm font-bold shadow-sm border-b-4 border-[#c22e1d]";
        btnEl.innerText = "✗ Incorrect. " + explanation;
        setTimeout(() => loadExercise(currentIndex), 3000); // Reset after 3 seconds
    }
}

window.addEventListener('DOMContentLoaded', initApp);
