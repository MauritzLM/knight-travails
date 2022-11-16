import { compareArrays } from "./helper";
import { gameBoard } from "./board";
import { validSquare } from "./helper";

// breadth first search
export function knightMoves(graph, start, end) {
    // check for valid start and end squares*
    let board = gameBoard();
    if (!validSquare(start, board)) {
        return 'starting square does not exist';
    }
    if (!validSquare(end, board)) {
        return 'end square does not exist';
    }

    // keep track of visited squares
    let visited = '';
    // create queue ([1] keeps track of path)
    const queue = [[start, '']]

    while (queue.length > 0) {
        let [current, path] = queue.shift();
        path += `[${current}] `;

        if (compareArrays(current, end)) {
            let answer = path.split(' ');
            answer.pop();
            console.log(`You made it in ${answer.length - 1} moves! Here's your path:`)
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