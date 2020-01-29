function searchInSortedMatrix(matrix, target) {
        let row = 0;
        let column = matrix[row].length - 1;

        while (row < matrix.length && column >= 0) {
            let currPosition = matrix[row][column];

            if (currPosition === target) {
                return [row, column];
            }

            if (currPosition > target) {
                column--;
            } else {
                row++;
            }

        }

        return [-1, -1];
  }

  // Time: O(n + m) where n is len of rows and n is the len of the columns;
  // Space: O(1) no storing being done;


  const matrix = [
    [1, 4, 7, 12, 15, 1000],
    [2, 5, 19, 31, 32, 1001],
    [3, 8, 24, 33, 35, 1002],
    [40, 41, 42, 44, 45, 1003],
    [99, 100, 103, 106, 128, 1004],
  ];

console.log(searchInSortedMatrix(matrix, 1)) // [0, 0]
console.log(searchInSortedMatrix(matrix, 2)) // [1, 0]
console.log(searchInSortedMatrix(matrix, 4)) // [0, 1]
console.log(searchInSortedMatrix(matrix, 15)) // [0, 4]
console.log(searchInSortedMatrix(matrix, 44)) // [3, 3]
