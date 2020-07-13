var checkSubSumOofN = function (nums, k) {
    if (!nums) {
      return false;
    }
    const map = new Map();
    map.set(0, -1) //Handle an edge case
    let sum = 0 // Aggregator

    for (let i = 0; i < nums.length; i++) {
      sum += nums[i]

      if (k != 0) { // Breaks when k === 0
        sum = sum % k // Effectively limits sum to be from 0 <= sum < k ** Special sauce **
      }

      if (map.has(sum)) { //We found it?
        const val = map.get(sum) // Save index

        if (i - val > 1) { // Checks that the sub array is atleast length two
          return true
        }
      } else {
        map.set(sum, i) // Sets value as index
      }

    }

    return false

  }
