// Add this to the top of your app.js file
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
        fen: '6Rk/7p/8/5N2/8/8/8/5K2 b - - 0 1',
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
    }
];

let currentExerciseIndex = 0;
let board = null;

// Initialize the first exercise on load
$(document).ready(function() {
    board = Chessboard('board', {
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png',
        draggable: false
    });
    loadExercise(currentExerciseIndex);
});

function loadExercise(index) {
    const exercise = exercises[index];
    
    // Update text
    document.getElementById('exercise-title').innerText = `Exercise ${index + 1} (Frame ${exercise.id})`;
    document.getElementById('exercise-question').innerText = exercise.question;
    
    // Reset feedback and hide next button
    const feedbackEl = document.getElementById('feedback');
    feedbackEl.innerText = '';
    document.getElementById('next-btn').style.display = 'none';
    
    // Set the board position
    board.position(exercise.fen);
    
    // Generate multiple-choice buttons dynamically
    const controlsEl = document.getElementById('controls');
    controlsEl.innerHTML = ''; // Clear old buttons
    
    exercise.options.forEach(option => {
        const btn = document.createElement('button');
        btn.innerText = option.text;
        btn.onclick = () => checkAnswer(option.isCorrect, exercise.explanation);
        btn.style.marginRight = '10px';
        controlsEl.appendChild(btn);
    });
}

function checkAnswer(isCorrect, explanationText) {
    const feedbackEl = document.getElementById('feedback');
    if (isCorrect) {
        feedbackEl.style.color = 'green';
        feedbackEl.innerText = `Correct! ${explanationText}`;
        
        // Show the "Next Exercise" button if there are more exercises
        if (currentExerciseIndex < exercises.length - 1) {
            document.getElementById('next-btn').style.display = 'block';
        } else {
            document.getElementById('next-btn').style.display = 'none';
            feedbackEl.innerText += " You have completed all available exercises!";
        }
    } else {
        feedbackEl.style.color = 'red';
        feedbackEl.innerText = 'Incorrect. Try again.';
    }
}

function nextExercise() {
    currentExerciseIndex++;
    loadExercise(currentExerciseIndex);
}
