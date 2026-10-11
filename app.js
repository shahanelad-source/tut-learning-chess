let exercises = [];
let currentExerciseIndex = 0;
let board = null;

$(document).ready(function() {
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
    
    // Handle Dropdown Multiple-Choice Rows
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
                    select.disabled = true; // Lock the correct answer
                } else if (e.target.value !== '') {
                    rowFeedback.innerText = 'Incorrect';
                    rowFeedback.style.color = 'red';
                } else {
                    rowFeedback.innerText = '';
                }
                
                // Trigger global success if all dropdowns are locked (correct)
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
    // Handle Standard Multiple-Choice Buttons
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
        
        // Hide standard controls, but preserve dropdown selections so the user can review them
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
