// https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/discuss/840652/Javascript-easy-to-understand

var findSmallestSetOfVertices = function(n, edges) {
    // s will have all vertices with non-zero indegree
    const s = new Set();

    for (const [from, to] of edges) s.add(to);

    const ans = [];
    // find which ones are missing and these must be start points bc no other nodes point to them
    for (let i = 0; i < n; i++) {
      if (!s.has(i)) ans.push(i);
    }

    return ans;
  };

const test = [[0, 1], [0, 2], [2, 5], [3, 4], [4, 2]];

console.log(findSmallestSetOfVertices(test)) // [0, 3]
