/* eslint-disable complexity */
/*
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

Now consider if some obstacles are added to the grids. How many unique paths would there be?
An obstacle and empty space is marked as 1 and 0 respectively in the grid.

[ Start
   ^
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
         ^
         Finish
]

*/
const grid = [
    [0, 0],
    [1, 1],
    [0, 0]
];

const grid2 = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
  ];

const grid3 = [
    [0, 0]
]

// eslint-disable-next-line max-statements
var uniquePathsWithObstacles = function(obstacleGrid) {
    let row = 1;
    let column = 1;

    // is there an obstacle at our starting point
    if (obstacleGrid[0][0] === 1) {
        return 0;
    }
    // mark our starting point as a path
    obstacleGrid[0][0] = 1;
    // is our first row clear with no obstacles?
    let clearPathRow = true;
    while (column < obstacleGrid[0].length) {
        // if there is no obstacle mark it as a possible path by changing it to 1;
        if (obstacleGrid[0][column] !== 1 && clearPathRow) {
            obstacleGrid[0][column] = 1;
        } else {
        // if there is an obstacle do not include it as a posslible path by changing it to 0;
            obstacleGrid[0][column] = 0;
        // if we come across an obstacle in the first row our path is no longer clear so we update it to false;
            clearPathRow = false;

        }
        column++;
    }

    let clearPathColumn = true;
    while (row < obstacleGrid.length) {

        if (obstacleGrid[row][0] !== 1 && clearPathColumn) {
            obstacleGrid[row][0] = 1;
        } else {
            obstacleGrid[row][0] = 0;
            clearPathColumn = false;
        }
        row++;
    }
    // change our starting point to [1, 1] bc we have already checked everything in the first row and column;
    column = 1;
    row = 1;

    while (row < obstacleGrid.length) {
        if (obstacleGrid[row]) {
            while (column < obstacleGrid[row].length) {
                 // continue looking for paths by adding our left most cell and our top most cell together to get our new unique paths for the cell we are currently at
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

    // return our finish point which is the last element in the final row
    return obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1];
};

// Time: O(M×N) M is the length of a row and N is the length of a colummn;
// Space: O(1) no additional space is allocated;

console.log(uniquePathsWithObstacles(grid)); // 0
console.log(uniquePathsWithObstacles(grid2)); // 2
console.log(uniquePathsWithObstacles(grid3)); // 1
