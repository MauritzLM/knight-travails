
// import knight and knightmoves
import { Knight } from "./knight";
import { knightMoves } from "./knightmoves";

// create a knight
const one = new Knight;

// build graph
one.buildGraph();

knightMoves(one.graph, [7, 1], [3, 4]);
knightMoves(one.graph, [0, 1], [6, 7]);

