// https://leetcode.com/problems/word-search/

let board1 =
[
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
  ]

let word1 = 'ABCCED';

const findFirst = () => {

}

const findNext = (grid, currWordMap, seenMap,  row, col) => {
    let possibleRowDir = [0, -1, 0, 1];
    let possibleColDir = [1, 0, -1, 0];

    for (let i = 0; i < 4; i++) {
        let newRow = row + possibleRowDir[i];
        let newCol = col + possibleColDir[i];
        if (!seenMap.has(`${newRow}, ${newCol}`) && currWordMap[grid[newRow][newCol]]) {
            seenMap.set(`${newRow}, ${newCol}`, grid[newRow][newCol]);
            return [newRow, newCol];
          }
    }

    return false;
}

const exist = (board, word) => {
    let seen = new Map();
    let wordMap = {};
    let row = 0;
    let col = 0;

    for (let char of word) {
        if (wordMap[char]) {
            wordMap[char]++;
        } else {
            wordMap[char] = 1;
        }
    }

    for (let i = 0; i < board.length; i++) {
        if (wordMap[row][col]) {
            seen.set(`${i}, ${j}`, char)
        }
        for (let j = 0; j < board[0].length; j++) {
            let char = board[i][j];
            if (wordMap[char]) {
                seen.set(`${i}, ${j}`, char)
                row = i;
                col = j;
                break;
            }
        }
    }

    console.log(row, col);

    // for (let k = 0; k < word.length; k++) {
    //     let runHelper = helper(board, wordMap, seen, row, col);
    //     if (!runHelper) {
    //         return runHelper;
    //     }
    // }

    return seen;
};


console.log(exist(board1, word1))
