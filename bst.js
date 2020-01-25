function binarySearch(array, target) {
    let right = array.length - 1;
    let left = 0;

    while (left <= right) {
        let midPt = Math.floor((right + left ) / 2);
        let currMidPt = array[midPt];

        if (currMidPt === target) {
            return midPt;
        }

        if (currMidPt < target) {
            left = midPt + 1;
        } else if (currMidPt > target) {
            right = midPt - 1;
        }
    }

    return -1;
  }

// Time = O(log(n))
// Space = O(1)

console.log(binarySearch([1, 2, 3, 4, 5], 1)) // 0
console.log(binarySearch([1, 2, 3, 4, 5], 5)) // 4
console.log(binarySearch([1, 2, 3, 4, 5], 4)) // 3
console.log(binarySearch([1, 2, 3, 4, 5], 7)) // -1
