// LeetCode Link: https://leetcode.com/problems/permutations/

const permute = (nums) => {
    let results = [];

    let permutations = (current, remaining) => {
      if (remaining.length <= 0) {
          results.push(current.slice());
        } else {
            for (let i = 0; i < remaining.length; i++) { // Loop through remaining elements
                current.push(remaining[i]); // Insert the iTH element onto the end of current
                permutations(current.slice(), remaining.slice(0, i).concat(remaining.slice(i + 1))); // Recurse with inserted element removed
                current.pop(); // Remove last inserted element for next iteration
            }
      }
    };

    permutations([], nums);
    return results;
};

console.log(permute([1, 2, 3]))
/*
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/
