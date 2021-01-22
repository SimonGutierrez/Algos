// https://leetcode.com/problems/find-the-town-judge/submissions/

function findJudge(n, pairs) {
    let count = new Array(n + 1).fill(0);

    for (let i = 0; i < pairs.length; i++) {
      let [truster, trustee] = pairs[i];

      count[truster]--;
      count[trustee]++;
    }
    // everyone besides the judge must trust the judge thats why N - 1 is the judge
    // the process above only adds to a person when they are trusted i.e in the second slot
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


  // second attempt using a graph, slower time

  const findJudgeII = function(N, trust) {
    if (trust.length === 0 && N !== 1) return -1;

    let graph = new Map();

    for (let i = 1; i <= N; i++) graph.set(i, [])

    for (let group of trust) {
        let [truster, trustiee] = group;

        let temp = graph.get(truster)
        temp.push(trustiee);
        graph.set(truster, temp);
    }


    for (let i = 1; i <= N; i++) {
        if (graph.get(i).length === 0) {
            let isJudge = true;
            graph.forEach((val, key) => {
                if (!val.includes(i) && key !== i) isJudge = false;
            })

            if (isJudge) return i;
        }
    }

    return -1;
};
