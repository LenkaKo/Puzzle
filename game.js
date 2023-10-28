const gameField = document.querySelectorAll('.fiel');
const gameBoard = document.querySelector('#game-board');

const gameState = [
    [gameField[0], gameField[1],gameField[2]],
    [gameField[3], gameField[4],gameField[5]],
    [gameField[6], gameField[7],gameField[8]],
]
gameBoard.addEventListener('click', (event) => {
    const target = event.target;

    let x, y;

    gameState.forEach((row, rowIndex) => {
        row.forEach((column, columnIndex) => {
            if (column === target) {
                x = rowIndex;
                y = columnIndex;
            }
        });
    });

    let emptyX, emptyY;

    gameState.forEach((row, rowIndex) => {
        row.forEach((column, columnIndex) => {
            if (column.innerText === '') {
                emptyX = rowIndex;
                emptyY = columnIndex;
            }
        });
    });

    console.log(x, y);
    console.log(emptyX, emptyY);
});