// Correct FEN for Frame 6
const frame6FEN = '7k/6pQ/8/5B2/8/8/8/4K3 b - - 0 1';

// Initialize the logic and the board
const game = new Chess(frame6FEN);
const board = Chessboard('board', {
    position: frame6FEN,
    pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png',
    draggable: false 
});

// Handle the multiple-choice logic for the first exercise
function checkAnswer(userSaysCanCapture) {
    const feedbackEl = document.getElementById('feedback');
    
    if (userSaysCanCapture === false) {
        feedbackEl.style.color = 'green';
        feedbackEl.innerText = "Correct! The Queen is protected by the Bishop; therefore the King cannot capture. Black is checkmated.";
    } else {
        feedbackEl.style.color = 'red';
        feedbackEl.innerText = "Incorrect. Look closely at the White Bishop on f5 protecting the Queen on h7.";
    }
}
