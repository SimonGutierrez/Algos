/* eslint-disable complexity */

//TIME: O(n^2)
//SPACE: O(1)

const sort = (i, j, array) => {
    let currNum = array[i];

    array[i] = array[j];
    array[j] = currNum;
}

function bubbleSort (array) {
    let isSorted = false;
    let count  = 0;

    while (!isSorted) {
        isSorted = true;

        for ( let i = 0; i < array.length - 1 - count; i++) {
            if ( array[i] > array[i + 1]) {
                sort(i, i + 1, array)
                isSorted = false;
            }
        }
        count++
    }

    return array;
}

console.log(bubbleSort([1, 2])) // [ 1, 2 ]
console.log(bubbleSort([2, 1])) // [ 1, 2 ]
console.log(bubbleSort([3, 1, 2])) // [1, 2, 3]
console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3])) // [ 2, 3, 5, 5, 6, 8, 9 ]
console.log(bubbleSort([-4, 5, 10, 8, -10, -6, -4, -2, -5, 3, 5, -4, -5, -1, 1, 6, -7, -6, -7, 8])) // [ -10, -7, -7, -6, -6, -5, -5, -4, -4, -4, -2, -1, 1, 3, 5, 5, 6, 8, 8, 10 ]
