// create knight
class Knight {
    constructor() {
        // possible moves list
        this.moves = [[-1, -2], [-2, -1], [1, -2], [-2, 1], [2, -1], [-1, 2], [1, 2], [2, 1]];
        this.graph = {};
        this.board = gameBoard();
    }
    // build adjacency list
    buildGraph() {
        // for every square on the board
        for (let i = 0; i < this.board.length; i++) {
            // create graph[square] array
            let square = this.board[i];
            this.graph[square] = [];

            for (let j = 0; j < this.moves.length; j++) {
                // create next move using moves array
                let nextSquare = [this.moves[j][0] + square[0], this.moves[j][1] + square[1]];
                // check if move to new square is valid
                if (this.validMove(nextSquare, this.board)) {
                    // if move is valid add next square to array
                    this.graph[square].push(nextSquare);
                }
            }

        }

    }
    // look for valid move
    validMove(square, board) {
        // if square exists on board then move is valid
        for (let i = 0; i < board.length; i++) {
            if (compareArrays(square, board[i])) {
                return true;
            }
        }
        return false;
    }
}