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

var uniquePathsWithObstacles = function(obstacleGrid) {
    // if our first cell has an obstacle no ways to get to end point
    if (obstacleGrid[0][0] === 1) return 0;

    const rows = obstacleGrid.length;
    const cols = obstacleGrid[0].length;
    // loop through the first row/col and switch all 0s to 1s and 1s to 0s; !! - we only mark a path valid if its prev is not a 0 meaning there are no obstacles - !!
    for (let i = 0; i < cols; i++) obstacleGrid[0][i] = obstacleGrid[0][i] === 1 || obstacleGrid[0][i - 1] === 0 ? 0 : 1;

    for (let k = 1; k < rows; k++) obstacleGrid[k][0] = obstacleGrid[k][0] === 1 || obstacleGrid[k - 1][0] === 0 ? 0 : 1;
    // loop through the rest of the grid starting at [1, 1] adding up vals on top of curr cell and to its left;
    for (let j = 1; j < rows; j++) {
        for (let m = 1; m < cols; m++) obstacleGrid[j][m] = obstacleGrid[j][m] === 0 ? obstacleGrid[j - 1][m] + obstacleGrid[j][m - 1] : 0;
    }
    // return the last cell in the grid which is its calculated num of paths to get there;
    return obstacleGrid[rows - 1][cols - 1];
};

// Time: O(M×N) M is the length of a row and N is the length of a colummn;
// Space: O(1) no additional space is allocated;
// Num Times Practiced = 2;

console.log(uniquePathsWithObstacles(grid)); // 0
console.log(uniquePathsWithObstacles(grid2)); // 2
console.log(uniquePathsWithObstacles(grid3)); // 1
