const exercises = [
    {
        id: 6,
        fen: '7k/6pQ/8/5B2/8/8/8/4K3 b - - 0 1',
        question: 'The White Queen is giving check. The Black King:',
        options: [
            { text: 'can capture', isCorrect: false },
            { text: 'cannot capture', isCorrect: true }
        ],
        explanation: 'The Queen is protected by the Bishop; therefore the King cannot capture. In fact, the King has no safe place to move to. So Black is checkmated[cite: 35].'
    },
    {
        id: 7,
        fen: '1k6/1Q6/8/2B5/8/8/8/4K3 b - - 0 1',
        question: 'The White Queen is giving check. The Black King:',
        options: [
            { text: 'can capture', isCorrect: true },
            { text: 'cannot capture', isCorrect: false }
        ],
        explanation: 'The Bishop is not protecting the Queen[cite: 38].'
    },
    {
        id: 8,
        fen: '5R1k/7p/8/5N2/8/8/8/5K2 b - - 0 1',
        question: 'Black King:',
        options: [
            { text: 'can capture checking White Rook', isCorrect: true },
            { text: 'cannot capture checking White Rook', isCorrect: false }
        ],
        explanation: 'can capture checking White Rook[cite: 39].'
    },
    {
        id: 9,
        fen: '6Rk/4N2p/8/8/8/8/8/4K3 b - - 0 1',
        question: 'Black King:',
        options: [
            { text: 'can capture checking White Rook', isCorrect: false },
            { text: 'cannot capture checking White Rook', isCorrect: true }
        ],
        explanation: 'cannot capture checking White Rook. The Rook is protected by the Knight[cite: 40].'
    },
    {
        id: 10,
        fen: '1R6/kp6/p7/8/8/7p/1K6/8 b - - 0 1',
        question: 'Black King:',
        options: [
            { text: 'can capture checking White Rook', isCorrect: true },
            { text: 'cannot capture checking White Rook', isCorrect: false }
        ],
        explanation: 'can capture checking White Rook[cite: 41].'
    },
    {
        id: 11,
        fen: 'k1R5/pp6/8/8/4K3/8/8/8 b - - 0 1',
        question: 'Black King:',
        options: [
            { text: 'can capture checking White Rook', isCorrect: false },
            { text: 'cannot capture checking White Rook', isCorrect: true }
        ],
        explanation: 'cannot capture checking White Rook. Black is "mated"-or checkmated. Remember, the King can only move one square, so the Rook is beyond the Black King\'s reach[cite: 42].'
    },
    {
        id: 13,
        fen: '7k/7p/8/3BB3/5K2/8/8/8 b - - 0 1',
        question: 'Now you decide what Black can do in this position. Black King:',
        options: [
            { text: 'can capture its attacker', isCorrect: false },
            { text: 'can flee', isCorrect: false },
            { text: 'can do neither', isCorrect: true }
        ],
        explanation: 'can do neither. Black is mated. The Bishops team up powerfully here[cite: 45].'
    },
    {
        id: 14,
        fen: '4k2q/2pp1Q2/8/p3N3/8/3p1PP1/4K3/8 b - - 0 1',
        question: 'Again, observe the position and decide what the Black King can do.',
        options: [
            { text: 'can capture attacker', isCorrect: false },
            { text: 'can flee', isCorrect: true },
            { text: 'can do neither', isCorrect: false }
        ],
        explanation: 'can flee. One square to your left. Work it out[cite: 46].'
    },
    {
        id: 15,
        fen: '3R2k1/5p1p/5P2/8/5K2/8/8/8 b - - 0 1',
        question: 'Black King:',
        options: [
            { text: 'can capture attacker', isCorrect: false },
            { text: 'can flee', isCorrect: false },
            { text: 'can do neither', isCorrect: true }
        ],
        explanation: 'can do neither. White\'s Pawn stops Black\'s King from fleeing[cite: 47].'
    },
    {
        id: 16,
        fen: '7k/4N1pR/8/8/3K4/8/8/8 b - - 0 1',
        question: 'Black King:',
        options: [
            { text: 'can capture attacker', isCorrect: true },
            { text: 'can flee', isCorrect: false },
            { text: 'can do neither', isCorrect: false }
        ],
        explanation: 'can capture attacker[cite: 48].'
    },
    {
        id: 17,
        fen: '1rk5/1ppP4/3Q4/8/8/8/7K/8 b - - 0 1',
        question: 'Here the lowly Pawn is giving check. Black King:',
        options: [
            { text: 'can capture attacker', isCorrect: false },
            { text: 'can flee', isCorrect: false },
            { text: 'can do neither', isCorrect: true }
        ],
        explanation: 'can do neither. Black is mated[cite: 49].'
    },
    {
        id: 18,
        fen: '4R1k1/5ppp/2Q5/8/5K2/8/8/8 b - - 0 1',
        question: 'Black King:',
        options: [
            { text: 'can capture attacker', isCorrect: false },
            { text: 'can flee', isCorrect: false },
            { text: 'can do neither', isCorrect: true }
        ],
        explanation: 'can do neither. Checking Rook is protected by Queen. Black is mated[cite: 50].'
    },
    {
        id: 19,
        fen: '8/8/2P5/2RK1k2/6p1/2q5/8/8 b - - 0 1',
        question: 'Drag the piece to show how I (Black) mated Paul Keres in this position.',
        isInteractive: true,
        correctMove: { from: 'c3', to: 'd3' },
        explanation: 'Queen moves to d3. This mate actually happened! The position is taken from our game in the 1959 Bled Tournament (Yugoslavia)[cite: 51].'
    }
];

let currentExerciseIndex = 0;
let board = null;

$(document).ready(function() {
    board = Chessboard('board', {
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png',
        draggable: true,
        onDragStart: onDragStart,
        onDrop: onDrop
    });
    loadExercise(currentExerciseIndex);
});

// Prevent dragging on multiple-choice exercises
function onDragStart(source, piece, position, orientation) {
    const exercise = exercises[currentExerciseIndex];
    if (!exercise.isInteractive) {
        return false; 
    }
}

// Validate the move when the piece is dropped
function onDrop(source, target) {
    const exercise = exercises[currentExerciseIndex];
    
    if (exercise.isInteractive) {
        if (source === exercise.correctMove.from && target === exercise.correctMove.to) {
            checkAnswer(true, exercise.explanation);
        } else {
            checkAnswer(false, "Incorrect move. Try again.");
            return 'snapback'; // Snaps the piece back to its original square
        }
    }
}

function loadExercise(index) {
    const exercise = exercises[index];
    
    document.getElementById('exercise-title').innerText = `Exercise ${index + 1} (Frame ${exercise.id})`;
    document.getElementById('exercise-question').innerText = exercise.question;
    
    const feedbackEl = document.getElementById('feedback');
    feedbackEl.innerText = '';
    document.getElementById('next-btn').style.display = 'none';
    
    board.position(exercise.fen);
    
    const controlsEl = document.getElementById('controls');
    controlsEl.innerHTML = ''; 
    
    // Only generate buttons if the exercise has options
    if (exercise.options) {
        exercise.options.forEach(option => {
            const btn = document.createElement('button');
            btn.innerText = option.text;
            btn.onclick = () => checkAnswer(option.isCorrect, exercise.explanation);
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
        
        // Hide multiple choice controls upon correct answer
        document.getElementById('controls').innerHTML = ''; 
    } else {
        feedbackEl.style.color = 'red';
        feedbackEl.innerText = explanationText || 'Incorrect. Try again.';
    }
}

function nextExercise() {
    currentExerciseIndex++;
    loadExercise(currentExerciseIndex);
}
