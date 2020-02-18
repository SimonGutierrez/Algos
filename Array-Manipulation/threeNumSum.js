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
                right--;
            }
        }

        currIndex++;
    }

    return pairs;
  }

  // Time: O(n^2); double loop;
  // Space: O(n); the number of triplets in the array;

  console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0)) // [[ -8, 2, 6 ], [ -8, 3, 5 ], [ -6, 1, 5 ]]
  console.log(threeNumberSum([1, 2, 3], 6)) // [[1, 2, 3]]
  console.log(threeNumberSum([1, 2, 3], 7)) // []
  console.log(threeNumberSum([8, 10, -2, 49, 14], 57)) // [[-2, 10, 49]]
