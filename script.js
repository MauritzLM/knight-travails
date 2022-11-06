// exercises
const graph = {
    f: ['g', 'i'],
    g: ['h'],
    i: ['g', 'k'],
    h: [],
    j: ['i'],
    k: []
}

// const breadthFirst = (graph, source, dist) => {

//     const queue = [source];

//     while (queue.length > 0) {
//         let current = queue.shift();
//         console.log(current);
//         if (current === dist) {
//             return true;
//         }

//         for (let neighbour of graph[current]) {
//             queue.push(neighbour);
//         }
//     }
//     return false;
// }


const depthFirst = (graph, source, dist) => {
    if (source === dist) {
        return true;
    }

    for (let neighbour of graph[source]) {
        if (depthFirst(graph, neighbour, dist) === true) {
            return true;
        }

    }

    return false;
}

const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
]

const undirectedPath = (edges, src, dist) => {
    const graph = buildGraph(edges);

    return hasPath(graph, src, dist, new Set());
}

// recursive traversal
const hasPath = (graph, src, dist, visited) => {
    if (visited.has(src)) {
        return false;
    }
    if (src === dist) {
        return true;
    }

    visited.add(src);

    for (let neighbour of graph[src]) {
        if (hasPath(graph, neighbour, dist, visited) === true) {
            return true;
        }
    }
    return false;
}

// create adjacency list from edges array
// const buildGraph = (edges) => {
//     const graph = {};

//     for (let pair of edges) {
//         let [a, b] = pair;

//         if (!(a in graph)) {
//             graph[a] = [];
//         }
//         if (!(b in graph)) {
//             graph[b] = [];
//         }
//         graph[a].push(b);
//         graph[b].push(a);
//     }

//     return graph;
// }

const shortestPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges);
}

const hasPathB = (graph, src, dist, visited) => {
    const queue = [src];
    let count = 0;

    while (queue.length > 0) {
        let current = queue.shift();

        if (current === dist) {
            return count;
        }

        for (let neighbour of graph[current]) {
            queue.push(neighbour);
        }
    }

}

// project
// create game board
const gameBoard = () => {
    let board = [];
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            let square = [i, j];
            board.push(square);
        }
    }
    return board;
}

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
            // create graph[square]
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

// breadth first search
const knightMoves = (graph, start, end) => {
    // check for valid start and end squares*

    // keep track of visited squares
    let visited = '';
    // create queue
    const queue = [[start, '']]

    while (queue.length > 0) {
        let [current, path] = queue.shift();
        path += `[${current}] `;

        if (compareArrays(current, end)) {
            let answer = path.split(' ');
            answer.pop();
            console.log(`You made it in ${answer.length} moves! Here's your path:`)
            for (let i = 0; i < answer.length; i++) {
                console.log(answer[i]);
            }
            return answer;
        }

        // iterate over neighbours array
        for (let i = 0; i < graph[current].length; i++) {
            let neighbour = graph[current][i];

            // look for neighbour pattern in visited string
            if (!visited.includes(neighbour.toString())) {
                visited += `${neighbour}, `;
                queue.push([neighbour, path]);
            }

        }

    }
}

const compareArrays = (a, b) => {
    return a.toString() === b.toString();
};

const one = new Knight;
one.buildGraph();
knightMoves(one.graph, [0, 0], [3, 4]);

// still need to do error checking (valid start and end squares)
// improve structure of program: is there a better way to implement the board?
