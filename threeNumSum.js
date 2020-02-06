function threeNumberSum(array, targetSum) {
    array.sort((a, b) => a - b);
    let pairs = [];
    let first = 0;
    let second = Math.floor(array.length / 2);
    let third = array.length - 1;

    while (first < second) {
        let currSum = array[first] + array[second] + array[third];

        if (currSum === targetSum) {
            pairs.push([array[first], array[second], array[third]]);
            second++;
        } else if (currSum > targetSum) {
            third--;
        } else {
            first++;
        }
    }

    return pairs;
  }


  console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0))
