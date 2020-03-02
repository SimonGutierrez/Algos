function numberOfWaysToMakeChange(n, denoms) {
    let ways = [1]
    for (let i = 0; i < n; i++) ways.push(0)

    for (let k = 0; k < denoms.length; k++) {
        let denom = denoms[k];
        for (let j = 0; j < ways.length; j++) {
            let currPos = j;
            if (denom <= currPos) {
                ways[currPos] += ways[currPos - denom];
            }
        }
    }

    return ways[ways.length - 1];
  }

  // Time: O(n*d) where n is the target and d is the number of denoms we are able to use;
  // Space: O(n) bc of the array we initiate at the beginning based on the target;

  console.log(numberOfWaysToMakeChange(10, [1, 5, 10, 25])) // 4
  console.log(numberOfWaysToMakeChange(0, [2, 3, 4, 7])) // 1
  console.log(numberOfWaysToMakeChange(9, [5])) // 0
  console.log(numberOfWaysToMakeChange(25, [1, 5, 10, 25])) // 13
