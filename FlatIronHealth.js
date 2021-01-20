/* eslint-disable complexity */
/*
First Question:
- given a string reverse the string
- then replace letters in string to its complements

complements: (and vice versa)
 - 'A' -> 'T'
 - 'C' -> 'G'

 Example:
- input = 'AATTACGC'
- ouput = 'GCGTAATT'
*/

const revAndRepComps = (string) => {
    let complements = {
        A: 'T',
        C: 'G',
        T: 'A',
        G: 'C',
    };

    let reversed = string.split('').reverse();
    let replaced = reversed.map((elem) => complements[elem]);

    return replaced.join('');
}

// console.log(revAndRepComps('AATTACGC')) // GCGTAATT


/*
Second Question:
- Given a list of products with a name, price, and weight find all the douplicate products
- a doup is defined as having the same name, price and weight

Example:
- input:
    - Names: ['Ball', 'Box', 'Ball', 'Ball'];
    - Prices: [ 1,      2,     1,      1   ];
    - Weights:[ 2,      2,     2,      2   ];
- Output:
    2 - there are two doups for the ball all at the same Name, price and weight
*/

const findDoups = (names, prices, weights) => {
    let set = new Set();
    let count = 0;

    for (let i = 0; i < names.length; i++) {
        let name = names[i];
        let price = prices[i];
        let weight = weights[i];

        if (set.has(`${name}, ${price}, ${weight}`)) {
            count++;
        } else {
            set.add(`${name}, ${price}, ${weight}`);
        }
    }

    return count;
}

let names1 = ['Ball', 'Box', 'Ball', 'Ball'];
let prices1 = [ 1, 2, 1, 1];
let weights1 = [ 2, 2, 2, 2];

// console.log(findDoups(names1, prices1, weights1)) // 2


/*
2D Matrix:
    - find all avail moves for a certain start point
    - valid moves right, down, left, up
    - pos avail only if board[r][c] === 0
    - return all avail moves in an array
*/

const board1 = [
    [0,  0,  0, -1,  -1],
    [0,  0, -1,  0,   0],
    [0, -1,  0, -1,   0],
    [0,  0, -1,  0,   0],
    [0,  0,  0,  0,   0],
    [0,  0,  0,  0,   0],
    [0,  0,  0,  0,   0],
];

const start1 = [1, 1];
const start2 = [5, 3];
const start3 = [6, 0];

const findAvailMoves = (board, start) => {
    let res = [];

    const posDirRow = [0, 1, 0, -1];
    const posDirCol = [1, 0, -1, 0];

    for (let i = 0; i < posDirCol.length; i++) {
        let [row, col] = start;
        let nextMove = [row + posDirRow[i], col + posDirCol[i]];

        if (board[nextMove[0]] !== undefined) {
            if (board[nextMove[0]][nextMove[1]] === 0) res.push(nextMove);
        }
    }

    return res;
}

// console.log(findAvailMoves(board1, start1)) // [ [1, 0], [0, 1] ]
// console.log(findAvailMoves(board1, start2)) // [ [ 5, 4 ], [ 6, 3 ], [ 5, 2 ], [ 4, 3 ] ]
// console.log(findAvailMoves(board1, start3)) // [ [ 6, 1 ], [ 5, 0 ] ]


/*
2D Matrix:
    - in the matrix find all valid rectangles
    - valid rectangle is a box of zeros
    - return upper left and bottom right coords
*/

const board2 = [
    [0,  1,  1,  1,  1,  1,  1],
    [1,  1,  1,  1,  1,  1,  1],
    [1,  1,  1,  0,  0,  0,  1],
    [1,  1,  1,  0,  0,  0,  1],
    [0,  0,  1,  1,  1,  1,  1],
];

const findPos = (board, row, col) => {
    let positions = [[row, col]];

    while (board[row][col + 1] === 0) col++;

    while (board[row + 1] && board[row + 1][col] === 0) row++;

    positions.push([row, col]);

    return positions;
}


const findBoxes = (board) => {
    let res = [];
    let set = new Set();

    for (let i = 0; i < board.length; i++) {
        let row = i;
        for (let j = 0; j < board[i].length; j++) {
            let col = j;
            if (board[row][col] === 0 && !set.has(`${row}, ${col}`)) {
                if (board[row - 1] === undefined || board[row - 1][col] !== 0 && board[row][col - 1] !== 0) {
                    res.push(findPos(board, row, col));
                    set.add(`${row}, ${col}`);
                }
            }
        }
    }

    return res;
}

console.log(findBoxes(board2))


/* Your students are getting craftier and hiding words in 2D grids of letters. The word may start anywhere in the grid, and consecutive letters can be either immediately below or immediately to the right of the previous letter.

Given a grid and a word, write a function that returns the location of the word in the grid as a list of coordinates. If there are multiple matches, return any one.

grid1 = [
	['c', 'c', 'c', 'a', 'r', 's'],
	['c', 'c', 'i', 't', 'n', 'b'],
	['a', 'c', 'n', 'n', 't', 'i'],
	['t', 'c', 'i', 'i', 'p', 't']
]

word1_1 = "catnip"
find_word_location(grid1, word1_1)-> [ (0, 2), (0, 3), (1, 3), (2, 3), (3, 3), (3, 4) ]

 - save in a stack then compare stacks at end to see which one is longest, save new longest;

*/

const grid1 = [
	['c', 'c', 'c', 'a', 'r', 's'],
	['c', 'c', 'i', 't', 'n', 'b'],
	['a', 'c', 'n', 'n', 't', 'i'],
	['t', 'c', 'i', 'i', 'p', 't']
];

const word1_1 = 'catnip';

const findNextLetter = (letter, grid, row, col) => {
    let posDir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let chars = [];

    for (let i = 0; i < posDir.length; i++) {
        let [addR, addC] = posDir[i];
        let newRow = row + addR;
        let newCol = col + addC;

        if (grid[newRow] !== undefined && grid[newRow][newCol] === letter) {
            chars.push([newRow, newCol]);
        }
    }

    if (chars.length) {
        return chars;
    } else {
        return -1;
    }
}

const findWord = (grid, row, col, word) => {
    let posSol = [];
    let wordPointer = 0;

    while (word[wordPointer]) {
        let next = findNextLetter(word[wordPointer + 1], grid, row, col)
        if (next) {
            // fix for mult letters found
            posSol.push(next);
            wordPointer++;
        } else {
            break;
        }
    }

    return posSol;
}

const findWordInGrid = (grid, word) => {
    let res = [];

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            let char = grid[row][col];

            if (char === word[0]) {
                let temp = findWord(row, col);

                if (temp.length > res.length) res = temp;
            }
        }
    }

    return res;
}

