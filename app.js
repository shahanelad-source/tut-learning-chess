let exercises = [];
let currentExerciseIndex = 0;
let board = null;

$(document).ready(function() {
    // Fetch the exercise data from the JSON file
    fetch('exercises.json')
        .then(response => response.json())
        .then(data => {
            exercises = data;
            initializePlatform();
        })
        .catch(error => {
            document.getElementById('exercise-title').innerText = "Error loading exercises.";
            console.error('Error fetching exercises:', error);
        });
});

function initializePlatform() {
    populateMenu();
    
    board = Chessboard('board', {
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png',
        draggable: true,
        onDragStart: onDragStart,
        onDrop: onDrop,
        orientation: 'white' 
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
    
    // Determine whose turn it is based on the FEN string
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
    
    if (exercise.options) {
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
