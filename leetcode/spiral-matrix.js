/* eslint-disable complexity */
/* eslint-disable max-statements */
let matrix1 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
    [17, 18, 19, 20],
  ]

let matrix2 = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
   ]

let matrix3 = [
    []
  ]

const spiralOrder2 = (matrix) => {
    if (matrix.length === 0) return [];

    let map = new Map();
    let endRow = matrix.length, endCol = matrix[0].length;
    let row = 0, col = 0, dir = 0;
    const possibleRowDir  = [0, 1, 0, -1];
    const possibleColDir = [1, 0, -1, 0];

    for (let i = 0; i < endRow * endCol; i++) {
        map.set(`${row}, ${col}`, matrix[row][col]);
        let nextRow = row + possibleRowDir[dir];
        let nextCol = col + possibleColDir[dir];

        if (!map.has(`${nextRow}, ${nextCol}`) && 0 <= nextRow && nextRow < endRow && 0 <= nextCol && nextCol < endCol) {
            row += possibleRowDir[dir];
            col += possibleColDir[dir];
        } else {
            dir = (dir + 1) % 4;
            row += possibleRowDir[dir];
            col += possibleColDir[dir];
        }
    }

    return [...map.values()];
}

// Time: O(N) where N is the total number of elements in the matrix
// Space: O(N) where N is the number of elements saved in the map, i.e the number of elems in the matrix
// Num Times Practiced = 1;

console.log(spiralOrder2(matrix1)); // [ 1, 2, 3, 4, 8, 12, 16, 20, 19, 18, 17, 13, 9, 5, 6, 7, 11, 15, 14, 10 ]
console.log(spiralOrder2(matrix2)); // [ 1, 2, 3, 6, 9, 8, 7, 4, 5 ]
console.log(spiralOrder2(matrix3)); // [ ]

