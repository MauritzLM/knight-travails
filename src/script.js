
// project
// import knight, board and helper functions
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

// helper function to compare two arrays
const compareArrays = (a, b) => {
    return a.toString() === b.toString();
};

const one = new Knight;
one.buildGraph();
knightMoves(one.graph, [0, 0], [3, 4]);

// still need to do error checking (valid start and end squares)
// improve structure of program: is there a better way to implement the board?
