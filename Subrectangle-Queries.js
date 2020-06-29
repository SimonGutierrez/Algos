const rectangle1 = [
    [6, 9, 6, 1, 2],
    [8, 8, 6, 5, 9],
    [7, 6, 10, 8, 2],
    [7, 7, 4, 9, 1]
]

// set the this to our initial rectangle;
var SubrectangleQueries = function(rectangle) {
    this.rectangle = rectangle;
};
// update the values of a sub rectangle in our master rectangle;
SubrectangleQueries.prototype.updateSubrectangle = function(row1, col1, row2, col2, newValue) {
    // create our own row var to manipulate and initiate it with the val of row1;
    let row = row1;
    // loop though the rows until we get to our stopping point which is [row2, col2]
    while (row <= row2) {
        let col = col1;
        while (col <= col2) {
            this.rectangle[row][col] = newValue;
            col++;
        }
        row++;
    }
};
// get the value at specific coordinates in our rectangle
SubrectangleQueries.prototype.getValue = function(row, col) {
    return this.rectangle[row][col];
};
// get our most up to date rectangle
SubrectangleQueries.prototype.getRectangle = function() {
    return this.rectangle;
};

// Time: O(M*N) where rows between our start and end points in our sub array are M and the length of our columns is our N;
// Space: O(1) no additional space was allocated;


const newRectangle = new SubrectangleQueries(rectangle1);

console.log('update values', newRectangle.updateSubrectangle(1, 4, 2, 4, 5));
console.log('get rectangle', newRectangle.getRectangle());
// [ 6, 9, 6, 1, 2 ],
// [ 8, 8, 6, 5, 5 ],
// [ 7, 6, 10, 8, 5 ],
// [ 7, 7, 4, 9, 1 ]
console.log('get value', newRectangle.getValue(3, 4)); // 1
console.log('get value', newRectangle.getValue(2, 4)); // 5
console.log('get value', newRectangle.getValue(3, 4)); // 1
console.log('update values', newRectangle.updateSubrectangle(3, 4, 3, 4, 8));
console.log('get rectangle', newRectangle.getRectangle());
// [ 6, 9, 6, 1, 2 ],
// [ 8, 8, 6, 5, 5 ],
// [ 7, 6, 10, 8, 5 ],
// [ 7, 7, 4, 9, 8 ]
console.log('get value', newRectangle.getValue(2, 0)); // 7
console.log('update values', newRectangle.updateSubrectangle(1, 3, 3, 4, 3));
console.log('get rectangle', newRectangle.getRectangle());
// [ 6, 9, 6, 1, 2 ],
// [ 8, 8, 6, 3, 3 ],
// [ 7, 6, 10, 3, 3 ],
// [ 7, 7, 4, 3, 3 ]
console.log('get value', newRectangle.getValue(0, 2)); // 6
console.log('update values', newRectangle.updateSubrectangle(3, 1, 3, 4, 5));
console.log('get rectangle', newRectangle.getRectangle());
// [ 6, 9, 6, 1, 2 ],
// [ 8, 8, 6, 3, 3 ],
// [ 7, 6, 10, 3, 3 ],
// [ 7, 5, 5, 5, 5 ]
