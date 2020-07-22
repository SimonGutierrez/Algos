function findJudge(n, pairs) {
    let count = new Array(n + 1).fill(0);

    for (let i = 0; i < pairs.length; i++) {
      let truster = pairs[i][0];
      let trustee = pairs[i][1];

      count[truster]--;
      count[trustee]++;
    }

    for (let i = 1; i < count.length; i++) {
      if (count[i] === n - 1) return i;
    }

    return -1;
  }

// Time = O(n);
// Space = O(1);
  console.log(findJudge(2, [[1, 2]])) // 2
  console.log(findJudge(3,  [[1, 3], [2, 3]] )) // 3
  console.log(findJudge(3, [[1, 3], [2, 3], [3, 1]])) // -1
  console.log(findJudge(3, [[1, 2], [2, 3]])) // -1
  console.log(findJudge(4, [[1, 3], [1, 4], [2, 3], [2, 4], [4, 3]])) // 3
