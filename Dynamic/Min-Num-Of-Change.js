function minNumberOfCoinsForChange(n, denoms) {
    let min = [];
    for (let i = 0; i <= n; i++) min.push(Infinity);
    min[0] = 0;

    for (let j = 0; j < denoms.length; j++) {
        let denom = denoms[j];
        for (let k = 0; k < min.length; k++) {
            if (denom <= k) {
                if (denom <= k) {
                    min[k] = Math.min(min[k], 1 + min[k - denom]);
                }
            }
        }
    }

  return min[n] !== Infinity ? min[n] : -1;

  }

  // Space = O(n) the length of n for the array min;
  // Time = O(n*d) the num of denoms and the length of n;

  console.log(minNumberOfCoinsForChange(7, [1, 5, 10])) // 3
  console.log(minNumberOfCoinsForChange(135, [39, 45, 130, 40, 4, 1, 60, 75])) // 2
  console.log(minNumberOfCoinsForChange(7, [2, 4])) // -1
  console.log(minNumberOfCoinsForChange(7, [3, 7])) // 1
