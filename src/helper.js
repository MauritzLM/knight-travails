// helper function to compare two arrays
export function compareArrays(a, b) {
    return a.toString() === b.toString();
};

// function to see if squares exist on board (valid)
export function validSquare(square, board) {
    // if square exists on board then move is valid
    for (let i = 0; i < board.length; i++) {
        if (compareArrays(square, board[i])) {
            return true;
        }
    }
    return false;
}