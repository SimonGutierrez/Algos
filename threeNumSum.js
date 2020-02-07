function threeNumberSum(array, targetSum) {
    array.sort((a, b) => a - b);
    let pairs = [];
    let currIndex = 0;

    while (currIndex < array.length - 2) {
        let left = currIndex + 1;
        let right = array.length - 1;

        while (left < right) {
            let currSum = array[currIndex] + array[left] + array[right];

            if (array[currIndex] > targetSum) {
                return pairs;
            }

            if (currSum > targetSum) {
                right--;
            } else if (currSum < targetSum) {
                left++;
            } else {
                pairs.push([array[currIndex], array[left], array[right]]);
                left++;
            }
        }

        currIndex++;
    }

    return pairs;
  }


  console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0))
