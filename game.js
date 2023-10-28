const gameField = document.querySelectorAll('.fiel');

console.log(gameField);

const gameBoard = document.querySelector('#game-board');

gameBoard.addEventListener('click', () => (
    console.log('click!')
));