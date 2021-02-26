// https://leetcode.com/problems/rotate-image/

const matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const rotate = (matrix) => {
    let temp = new Array(matrix.length).fill().map(() => new Array(matrix[0].length));

    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i];
        for (let j = 0; j < row.length; j++) {
            temp[i][j] = matrix[i][j];
        }
    }

    let tempRow = temp.length - 1;

    for (let k = 0; k < matrix[0].length; k++) {
        let col = 0;

        for (let l = 0; l < matrix.length; l++) {
            matrix[l][k] = temp[tempRow][col];
            col++;
        }
        
        tempRow--;
    }

    return matrix;
};

console.log(rotate(matrix1))


// second solution: transpose the matrix then reverse each row

const rotateII = (matrix) => {
    // tanspose the matrix
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix[0].length; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    // reverse each row to indicate correct rotation
    matrix.forEach((row) => row.reverse());

    return matrix;
};

console.log(rotateII(matrix1))