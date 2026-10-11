// A conceptual FEN approximating Frame 6: White Queen protected by a Bishop giving checkmate.
// FEN represents: King trapped, Queen checking, Bishop protecting the Queen.
const frame6FEN = '6k1/5p1Q/5P2/8/5B2/8/8/4K3 b - - 0 1';

// Initialize the logic and the board
const game = new Chess(frame6FEN);
const board = Chessboard('board', {
    position: frame6FEN,
    pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png',
    draggable: false // Set to true for later exercises where the user must make a move
});

// Handle the multiple-choice logic for the first exercise
function checkAnswer(userSaysCanCapture) {
    const feedbackEl = document.getElementById('feedback');
    
    if (userSaysCanCapture === false) {
        feedbackEl.style.color = 'green';
        feedbackEl.innerText = "Correct! The Queen is protected by the Bishop; therefore the King cannot capture. Black is checkmated.";
    } else {
        feedbackEl.style.color = 'red';
        feedbackEl.innerText = "Incorrect. Look closely at the White Bishop protecting the Queen.";
    }
}
