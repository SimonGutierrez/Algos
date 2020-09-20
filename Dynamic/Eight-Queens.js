// how many diff ways can 8 queens fit on an 8 X 8 chess board
const checkValid = (columns, row, col) => {
    for (let row2 = 0; row2 < row; row2++) {
        let col2 = columns[row2];

        if (col2 === col) return false;

        let colsDistance = Math.abs(col2 - col), rowDistance = Math.abs(row2 - row)

        if (colsDistance === rowDistance) return false;
    }

    return true;
}


const eightQueens = (gridSize) => {
    let cols = [0, 1, 2, 3, 4, 5, 6, 7];

    const placeQueens = (row, columns, results) => {
        if (row === gridSize) {
            results.push(columns.slice());
        } else {
            for (let col = 0; col < gridSize; col++) {
                if (checkValid(columns, row, col)) {
                    placeQueens(row + 1, columns, results)
                }
            }
        }
    }

    return placeQueens(0, cols, []);
}

console.log(eightQueens(8)) //
