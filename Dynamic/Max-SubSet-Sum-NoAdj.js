function maxSubsetSumNoAdjacent(array) {
    if (!array.length) {
        return 0;
    } else if (array.length === 1) {
        return array[0];
    }

    let second = array[0];
    let first = Math.max(array[0], array[1]);

    for (let i = 2; i < array.length; i++) {
        let currSum = Math.max(first, second + array[i]);
        second = first;
        first = currSum;
    }

    return first;
  }

// Time : O(n) - where n is the number of elems in the array;
// Space : O(1) - bc you are not storing any additional data just two variables;

console.log(maxSubsetSumNoAdjacent([])) // 0
console.log(maxSubsetSumNoAdjacent([1])) // 1
console.log(maxSubsetSumNoAdjacent([7, 10, 12, 7, 9, 14])) // 33
console.log(maxSubsetSumNoAdjacent([10, 5, 20, 25, 15, 5, 5, 15, 3, 15, 5, 5, 15])) // 90
