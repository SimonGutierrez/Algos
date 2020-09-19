/*
given a 2D array fill in surrounding cells with a given paint color
*/

const paintFill = (grid, point, newColor, originalColor) => {
    let [row, col] = point;
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) {
        return false;
    }

    if (grid[row][col] === originalColor) {
        grid[row][col] = newColor;
        let topPoint = row + 1, rightPoint = col + 1, bottomPoint = row - 1, leftPoint = col - 1;
        paintFill(grid, topPoint, newColor);
        paintFill(grid, rightPoint, newColor);
        paintFill(grid, bottomPoint, newColor);
        paintFill(grid, leftPoint, newColor);
    }

    return true;
}
