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
    [0]
  ]

var spiralOrder = function(matrix) {
    let map = new Map();
    let row = 0;
    let col = 0;
    let right = true;
    let down = false;
    let left = false;
    let up = false;

    for (let i = 0; i < (matrix.length * matrix[0].length) - 1; i++) {
        if (right) {
            if (map.has(`${row}, ${col}`)) {
                right = false;
                down = true;
                col--;
                row++;
            } else if  (col === matrix[0].length - 1) {
                map.set(`${row}, ${col}`, matrix[row][col]);
                right = false;
                down = true;
                row++;
            } else {
                map.set(`${row}, ${col}`, matrix[row][col]);
                col++;
                }
            }
        if (down) {
            if (map.has(`${row}, ${col}`)) {
                down = false;
                left = true;
                row--;
                col--;
            } else if  (row === matrix.length - 1) {
                map.set(`${row}, ${col}`, matrix[row][col]);
                down = false;
                left = true;
                col--;
            } else {
                map.set(`${row}, ${col}`, matrix[row][col]);
                row++;
                }
            }
        if (left) {
            if (map.has(`${row}, ${col}`)) {
                left = false;
                up = true;
                col++;
                row--;
            } else if  (col === 0) {
                map.set(`${row}, ${col}`, matrix[row][col]);
                left = false;
                up = true;
                row--;
            } else {
                map.set(`${row}, ${col}`, matrix[row][col]);
                col--;
                }
            }
        if (up) {
            if (map.has(`${row}, ${col}`)) {
                up = false;
                right = true;
                row++;
                col++;
            } else {
                map.set(`${row}, ${col}`, matrix[row][col]);
                row--;
                }
            }
    }

    return [...map.values()];
};

// console.log(spiralOrder(matrix1)); // [ 1, 2, 3, 4, 8, 12, 16, 20, 19, 18, 17, 13, 9, 5, 6, 7, 11, 15, 14, 10 ]
// console.log(spiralOrder(matrix2)); // [ 1, 2, 3, 6, 9, 8, 7, 4, 5 ]
console.log(spiralOrder(matrix3)); // [ 1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7 ]

