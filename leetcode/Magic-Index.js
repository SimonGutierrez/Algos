// find an index where the indext matched the contents of that element i.e: A[1] === 1; in a sorted array;

const findMagicIndex = (array) => {
    let left = 0, right = array.length - 1, mid = Math.ceil((left + right) / 2);

    while (left <= right) {
        if (array[mid] === mid) {
            return mid;
        } else if (array[mid] < mid) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }

        mid = Math.ceil((left + right) / 2);
    }

    return -1;
}


const array1 = [-40, -20, -1, -1, 2, 3, 5, 7, 9, 12, 13];
const array2 = [-5, 0, 0, 3, 5, 6, 7];
const array3 = [-10, -5, 2, 2, 2, 3, 4, 5, 9, 12, 13];
const array4 = [-1, 0, 0, 3];

console.log(findMagicIndex(array1)) // 7
console.log(findMagicIndex(array2)) // 3
console.log(findMagicIndex(array3)) // -1
console.log(findMagicIndex(array4)) // 3
