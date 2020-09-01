/*

leet code: https://leetcode.com/problems/flood-fill/

Input:
image = [[1,1,1],[1,1,0],[1,0,1]]
sr = 1, sc = 1, newColor = 2

Output: [[2,2,2],[2,2,0],[2,0,1]]

Explanation:
From the center of the image (with position (sr, sc) = (1, 1)), all pixels connected
by a path of the same color as the starting pixel are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected
to the starting pixel.

*/

const floodFill = (image, sr, sc, newColor) => {
    const originalColor = image[sr][sc];

    if (originalColor === newColor) return image;

    let stack = [[sr, sc]];
    const possibleRowDir = [0, 1, 0, -1];
    const possibleColDir = [1, 0, -1, 0];

    while (stack.length) {
        let [row, col] = stack.pop();
        image[row][col] = newColor;
        for (let i = 0; i < 4; i++) {
            let newRow = row + possibleRowDir[i];
            let newCol = col + possibleColDir[i];
            if (validNeighbor(image, newRow, newCol, originalColor)) {
                stack.push([newRow, newCol]);
            }
        }
    }

    return image;
}

function validNeighbor(image, row, col, originalColor) {
    if (row < image.length && row >= 0 && col < image[0].length && col >= 0) {
        if (image[row][col] === originalColor) {
            return true;
        }
    }

    return false;
}

// Time = O(n) where n are all elements in the 2D array;
// Space = O(n) use of stack to store all points in the 2D array;

console.log(floodFill([[0, 0, 0], [0, 0, 0]], 1, 0, 2)); // [ [ 2, 2, 2 ], [ 2, 2, 2 ] ]
