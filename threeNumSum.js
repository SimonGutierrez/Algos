function threeNumberSum(array, targetSum) {
    array.sort((a, b) => a - b);
    let pairs = [];
    let first = 0;
    let second = Math.floor((array.length - 1) / 2);
    let third = array.length - 1;

    while (first < second) {
        let currSum = array[first] + array[second] + array[third];

        if (currSum > targetSum) {
            third--;
        } else if (currSum < targetSum) {
            first++;
        } else {
            pairs.push([array[first], array[second], array[third]]);
            second++;
        }
    }

    return pairs;
  }


  console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0))
