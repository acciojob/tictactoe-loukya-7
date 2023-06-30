window.addEventListener('DOMContentLoaded', function() {
  const submitButton = document.getElementById('submit');
  const player1Input = document.getElementById('player-1');
  const player2Input = document.getElementById('player-2');
  const messageDiv = document.querySelector('.message');
  const cells = document.querySelectorAll('.cell');

  let currentPlayer = 1;
  let player1Name = '';
  let player2Name = '';
  let board = ['', '', '', '', '', '', '', '', ''];

  submitButton.addEventListener('click', function() {
    player1Name = player1Input.value;
    player2Name = player2Input.value;
    messageDiv.textContent = `${player1Name}, you're up!`;
  });

  cells.forEach(function(cell) {
    cell.addEventListener('click', function() {
      if (!cell.textContent) {
        if (currentPlayer === 1) {
          cell.textContent = 'X';
          board[cell.id - 1] = 'X';
          messageDiv.textContent = `${player2Name}, you're up!`;
          currentPlayer = 2;
        } else {
          cell.textContent = 'O';
          board[cell.id - 1] = 'O';
          messageDiv.textContent = `${player1Name}, you're up!`;
          currentPlayer = 1;
        }

        const winner = checkWinner();
        if (winner) {
          messageDiv.textContent = `${winner
