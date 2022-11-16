// create game board
export function gameBoard() {
    let board = [];
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            let square = [i, j];
            board.push(square);
        }
    }
    return board;
}