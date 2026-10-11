const exercises = [
    {
        id: 6,
        fen: "7k/6pQ/8/5B2/8/8/8/4K3 b - - 0 1",
        question: "The White Queen is giving check. The Black King:",
        options: [
            { text: "can capture", isCorrect: false },
            { text: "cannot capture", isCorrect: true }
        ],
        explanation: "The Queen is protected by the Bishop; therefore the King cannot capture. In fact, the King has no safe place to move to. So Black is checkmated[cite: 35]."
    },
    {
        id: 7,
        fen: "1k6/1Q6/8/2B5/8/8/8/4K3 b - - 0 1",
        question: "The White Queen is giving check. The Black King:",
        options: [
            { text: "can capture", isCorrect: true },
            { text: "cannot capture", isCorrect: false }
        ],
        explanation: "The Bishop is not protecting the Queen[cite: 38]."
    },
    {
        id: 8,
        fen: "5R1k/7p/8/5N2/8/8/8/5K2 b - - 0 1",
        question: "Black King:",
        options: [
            { text: "can capture checking White Rook", isCorrect: true },
            { text: "cannot capture checking White Rook", isCorrect: false }
        ],
        explanation: "can capture checking White Rook[cite: 39]."
    },
    {
        id: 9,
        fen: "6Rk/4N2p/8/8/8/8/8/4K3 b - - 0 1",
        question: "Black King:",
        options: [
            { text: "can capture checking White Rook", isCorrect: false },
            { text: "cannot capture checking White Rook", isCorrect: true }
        ],
        explanation: "cannot capture checking White Rook. The Rook is protected by the Knight[cite: 40]."
    },
    {
        id: 10,
        fen: "1R6/kp6/p7/8/8/7p/1K6/8 b - - 0 1",
        question: "Black King:",
        options: [
            { text: "can capture checking White Rook", isCorrect: true },
            { text: "cannot capture checking White Rook", isCorrect: false }
        ],
        explanation: "can capture checking White Rook[cite: 41]."
    },
    {
        id: 11,
        fen: "k1R5/pp6/8/8/4K3/8/8/8 b - - 0 1",
        question: "Black King:",
        options: [
            { text: "can capture checking White Rook", isCorrect: false },
            { text: "cannot capture checking White Rook", isCorrect: true }
        ],
        explanation: "cannot capture checking White Rook. Black is \"mated\"—or checkmated. Remember, the King can only move one square, so the Rook is beyond the Black King's reach[cite: 42]."
    },
    {
        id: 13,
        fen: "7k/7p/8/3BB3/5K2/8/8/8 b - - 0 1",
        question: "Now you decide what Black can do in this position. Black King:",
        options: [
            { text: "can capture its attacker", isCorrect: false },
            { text: "can flee", isCorrect: false },
            { text: "can do neither", isCorrect: true }
        ],
        explanation: "can do neither. Black is mated. The Bishops team up powerfully here[cite: 45]."
    },
    {
        id: 14,
        fen: "4k2q/2pp1Q2/8/p3N3/8/3p1PP1/4K3/8 b - - 0 1",
        question: "Again, observe the position and decide what the Black King can do.",
        options: [
            { text: "can capture attacker", isCorrect: false },
            { text: "can flee", isCorrect: true },
            { text: "can do neither", isCorrect: false }
        ],
        explanation: "can flee. One square to your left. Work it out[cite: 46]."
    },
    {
        id: 15,
        fen: "3R2k1/5p1p/5P2/8/5K2/8/8/8 b - - 0 1",
        question: "Black King:",
        options: [
            { text: "can capture attacker", isCorrect: false },
            { text: "can flee", isCorrect: false },
            { text: "can do neither", isCorrect: true }
        ],
        explanation: "can do neither. White's Pawn stops Black's King from fleeing[cite: 47]."
    },
    {
        id: 16,
        fen: "7k/4N1pR/8/8/3K4/8/8/8 b - - 0 1",
        question: "Black King:",
        options: [
            { text: "can capture attacker", isCorrect: true },
            { text: "can flee", isCorrect: false },
            { text: "can do neither", isCorrect: false }
        ],
        explanation: "can capture attacker[cite: 48]."
    },
    {
        id: 17,
        fen: "1rk5/1ppP4/3Q4/8/8/8/7K/8 b - - 0 1",
        question: "Here the lowly Pawn is giving check. Black King:",
        options: [
            { text: "can capture attacker", isCorrect: false },
            { text: "can flee", isCorrect: false },
            { text: "can do neither", isCorrect: true }
        ],
        explanation: "can do neither. Black is mated[cite: 49]."
    },
    {
        id: 18,
        fen: "4R1k1/5ppp/2Q5/8/5K2/8/8/8 b - - 0 1",
        question: "Black King:",
        options: [
            { text: "can capture attacker", isCorrect: false },
            { text: "can flee", isCorrect: false },
            { text: "can do neither", isCorrect: true }
        ],
        explanation: "can do neither. Checking Rook is protected by Queen. Black is mated[cite: 50]."
    },
    {
        id: 19,
        fen: "8/8/2P5/2RK1k2/6p1/2q5/8/8 b - - 0 1",
        question: "Drag the Black Queen to the correct square to show how I (Black) mated Paul Keres in this position.",
        isInteractive: true,
        correctMove: { from: "c3", to: "d3" },
        explanation: "Queen moves to d3. This mate actually happened! The position is taken from our game in the 1959 Bled Tournament (Yugoslavia)[cite: 51]."
    },
    {
        id: 20,
        fen: "2R3k1/5p1p/6P1/5N2/6K1/8/8/8 w - - 0 1",
        question: "Note the lettered squares, then identify the White piece that guards each of them.",
        type: "dropdown-multi",
        rows: [
            { label: "guards square A", answer: "Rook" },
            { label: "guards square B", answer: "Pawn" },
            { label: "guards square C", answer: "Knight" },
            { label: "guards square D", answer: "Pawn" },
            { label: "guards square E", answer: "Rook" }
        ],
        explanation: "Pawn guards square B, Knight guards square C, Pawn guards square D, Rook guards square E[cite: 52]."
    },
    {
        id: 21,
        fen: "2B1k3/8/Q1N3K1/8/8/8/8/8 b - - 0 1",
        question: "Identify the White piece that guards each square:",
        type: "dropdown-multi",
        rows: [
            { label: "guards square A", answer: "Queen" },
            { label: "guards square B", answer: "Bishop" },
            { label: "guards square C", answer: "Knight" },
            { label: "guards square D", answer: "King" },
            { label: "guards square E", answer: "Pawn" },
            { label: "Which White piece is giving check?", answer: "None" }
        ],
        explanation: "Queen guards square A, Bishop guards square B, Knight guards square C, King guards square D, Pawn guards square E. No White piece is giving check (Black has no possible move; therefore, the game is a stalemate, or draw)[cite: 53]."
    },
    {
        id: 22,
        fen: "Q2k4/8/2P5/1KB5/8/8/8/8 w - - 0 1",
        question: "Observe this position; then drag the White Queen to show White's mating move[cite: 57, 58].",
        isInteractive: true,
        correctMove: { from: "a8", to: "c8" },
        explanation: "White plays Queen to c8, delivering checkmate[cite: 57, 58]."
    },
    {
        id: 23,
        fen: "7k/7P/4KN2/8/8/B7/8/8 b - - 0 1",
        question: "Black is in check again. Drag the Black King to the one square to which Black can flee[cite: 58].",
        isInteractive: true,
        correctMove: { from: "h8", to: "g7" },
        explanation: "Black King flees to g7[cite: 58, 59]."
    },
    {
        id: 24,
        fen: "6k1/6P1/4KN2/8/8/B7/8/8 b - - 0 1",
        question: "Again, drag the Black King to show his flight square[cite: 59].",
        isInteractive: true,
        correctMove: { from: "g7", to: "f8" },
        explanation: "Black King flees to f8[cite: 59, 60]."
    },
    {
        id: 25,
        fen: "7k/7R/8/8/8/8/8/4K3 b - - 0 1",
        question: "Drag the Black King to show how he gets out of check[cite: 60].",
        isInteractive: true,
        correctMove: { from: "h8", to: "h7" },
        explanation: "The King saves himself by capturing the Rook—so much the better[cite: 60, 61]."
    }
];

let currentExerciseIndex = 0;
let board = null;

// Inside your $(document).ready function:
$(document).ready(function() {
    initializePlatform();
});

function initializePlatform() {
    populateMenu();
    
    board = Chessboard('board', {
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png',
        draggable: true,
        onDragStart: onDragStart,
        onDrop: onDrop,
        orientation: 'white',
        width: '100%' // Makes chessboard responsive to its container
    });
    
    // Automatically resize the board if the screen rotates or changes size
    $(window).resize(function() {
        board.resize();
    });

    loadExercise(currentExerciseIndex);
}

function populateMenu() {
    const menu = document.getElementById('exercise-menu');
    menu.innerHTML = ''; 
    
    exercises.forEach((ex, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.innerText = `Exercise ${index + 1} (Frame ${ex.id})`;
        menu.appendChild(option);
    });
}

function jumpToExercise() {
    const menu = document.getElementById('exercise-menu');
    currentExerciseIndex = parseInt(menu.value, 10);
    loadExercise(currentExerciseIndex);
}

function onDragStart(source, piece, position, orientation) {
    const exercise = exercises[currentExerciseIndex];
    if (!exercise.isInteractive) return false; 
    
    const isBlackTurn = exercise.fen.includes(' b ');
    if (isBlackTurn && piece.search(/^w/) !== -1) return false; 
    if (!isBlackTurn && piece.search(/^b/) !== -1) return false;
}

function onDrop(source, target) {
    const exercise = exercises[currentExerciseIndex];
    if (exercise.isInteractive) {
        if (source === exercise.correctMove.from && target === exercise.correctMove.to) {
            checkAnswer(true, exercise.explanation);
        } else {
            checkAnswer(false, "Incorrect move. Try dragging the piece to a different square.");
            return 'snapback'; 
        }
    }
}

function loadExercise(index) {
    const exercise = exercises[index];
    
    document.getElementById('exercise-menu').value = index;
    document.getElementById('exercise-title').innerText = `Exercise ${index + 1} (Frame ${exercise.id})`;
    document.getElementById('exercise-question').innerText = exercise.question;
    
    const feedbackEl = document.getElementById('feedback');
    feedbackEl.innerText = '';
    document.getElementById('next-btn').style.display = 'none';
    
    board.position(exercise.fen);
    
    const controlsEl = document.getElementById('controls');
    controlsEl.innerHTML = ''; 
    
    if (exercise.type === 'dropdown-multi') {
        const container = document.createElement('div');
        
        exercise.rows.forEach(row => {
            const rowDiv = document.createElement('div');
            rowDiv.style.marginBottom = '8px';
            
            const label = document.createElement('span');
            label.innerText = row.label + ': ';
            
            const select = document.createElement('select');
            select.innerHTML = '<option value="">Select piece...</option>' + 
                ['Pawn', 'Knight', 'Bishop', 'Rook', 'Queen', 'King', 'None'].map(p => `<option value="${p}">${p}</option>`).join('');
            
            const rowFeedback = document.createElement('span');
            rowFeedback.style.marginLeft = '10px';
            rowFeedback.style.fontWeight = 'bold';
            
            select.onchange = (e) => {
                if (e.target.value === row.answer) {
                    rowFeedback.innerText = 'Correct';
                    rowFeedback.style.color = 'green';
                    select.disabled = true; 
                } else if (e.target.value !== '') {
                    rowFeedback.innerText = 'Incorrect';
                    rowFeedback.style.color = 'red';
                } else {
                    rowFeedback.innerText = '';
                }
                
                const allCorrect = Array.from(container.querySelectorAll('select')).every(s => s.disabled);
                if (allCorrect) {
                    checkAnswer(true, exercise.explanation);
                }
            };
            
            rowDiv.appendChild(label);
            rowDiv.appendChild(select);
            rowDiv.appendChild(rowFeedback);
            container.appendChild(rowDiv);
        });
        
        controlsEl.appendChild(container);
    } 
    else if (exercise.options) {
        exercise.options.forEach(option => {
            const btn = document.createElement('button');
            btn.innerText = option.text;
            btn.onclick = () => checkAnswer(option.isCorrect, exercise.explanation);
            btn.style.marginRight = '10px';
            btn.style.padding = '8px 16px';
            btn.style.cursor = 'pointer';
            controlsEl.appendChild(btn);
        });
    }
}

function checkAnswer(isCorrect, explanationText) {
    const feedbackEl = document.getElementById('feedback');
    if (isCorrect) {
        feedbackEl.style.color = 'green';
        feedbackEl.innerText = `Correct! ${explanationText}`;
        
        if (currentExerciseIndex < exercises.length - 1) {
            document.getElementById('next-btn').style.display = 'inline-block';
        } else {
            document.getElementById('next-btn').style.display = 'none';
            feedbackEl.innerText += " You have completed all available exercises!";
        }
        
        const controlsEl = document.getElementById('controls');
        if (exercises[currentExerciseIndex].type !== 'dropdown-multi') {
            controlsEl.innerHTML = ''; 
        }
    } else {
        feedbackEl.style.color = 'red';
        feedbackEl.innerText = explanationText || 'Incorrect. Try again.';
    }
}

function nextExercise() {
    currentExerciseIndex++;
    loadExercise(currentExerciseIndex);
}
