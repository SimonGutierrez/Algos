/* eslint-disable complexity */
const grid = [[0, 0], [1, 1], [0, 0]]

// eslint-disable-next-line max-statements
var uniquePathsWithObstacles = function(obstacleGrid) {
    let row = 1;
    let column = 1;

    if (obstacleGrid[0][0] === 1) {
        return 0;
    }

    obstacleGrid[0][0] = 1;
    let clearPath1 = true;
    while (column < obstacleGrid[0].length) {

        if (obstacleGrid[0][column] !== 1 && clearPath1) {
            obstacleGrid[0][column] = 1;
        } else {
            obstacleGrid[0][column] = 0;
            clearPath1 = false;

        }
        // console.log(obstacleGrid[0][column]);
        column++;
    }

    let clearPath2 = true;
    while (row < obstacleGrid.length) {

        if (obstacleGrid[row][0] !== 1 && clearPath2) {
            obstacleGrid[row][0] = 1;
        } else {
            obstacleGrid[row][0] = 0;
            clearPath2 = false;
        }
        row++;
    }

    column = 1;
    row = 1;


    while (row < obstacleGrid.length) {
        if (obstacleGrid[row]) {
            while (column < obstacleGrid[row].length) {
                if (obstacleGrid[row][column] !== 1) {
                    obstacleGrid[row][column] = obstacleGrid[row - 1][column] + obstacleGrid[row][column - 1];
                } else {
                    obstacleGrid[row][column] = 0;
                }
                column++;
            }
        }

        column = 1;
        row++;
    }
    console.log('the grid', obstacleGrid)
    return obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1];
};

console.log(uniquePathsWithObstacles(grid));
