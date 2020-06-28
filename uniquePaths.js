/* eslint-disable complexity */
const grid = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
  ]

var uniquePathsWithObstacles = function(obstacleGrid) {
    let row = 0;
    let column = 0;

    if (obstacleGrid[0][0] === 1) {
        return 0;
    }

    while (row < obstacleGrid.length) {
        if (row === 0 && column === 0) {
            while (column < obstacleGrid[0].length) {
                if (obstacleGrid[0][column] !== 1) {
                    obstacleGrid[0][column] = 1;
                } else {
                    obstacleGrid[0][column] = 0;
                }

                column++;
            }

            row = 1;

            while (row < obstacleGrid.length) {
                if (obstacleGrid[row][0] !== 1) {
                    obstacleGrid[row][0] = 1;
                } else {
                    obstacleGrid[row][0] = 0;
                }

                row++;
            }

            column = 1;
            row = 1;

        }

        while (column < obstacleGrid[row].length) {
            if (obstacleGrid[row][column] !== 1) {
                obstacleGrid[row][column] = obstacleGrid[row - 1][column] + obstacleGrid[row][column - 1];
            } else {
                obstacleGrid[row][column] = 0;
            }
            column++;
        }

        column = 1;
        row++;
    }
    column = obstacleGrid[row - 1].length - 1;

    return obstacleGrid[row - 1][column];

};

console.log(uniquePathsWithObstacles(grid));
