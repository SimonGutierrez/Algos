/* eslint-disable no-loop-func */
/*
There is a row of n houses, where each house can be painted one of three colors: red, blue, or green. The cost of painting each house with a certain color is different. You have to paint all the houses such that no two adjacent houses have the same color.

The cost of painting each house with a certain color is represented by a n x 3 cost matrix. For example, costs[0][0] is the cost of painting house 0 with the color red; costs[1][2] is the cost of painting house 1 with color green, and so on... Find the minimum cost to paint all houses.

Example 1:

Input: costs = [[17,2,17],[16,16,5],[14,3,19]]
Output: 10
Explanation: Paint house 0 into blue, paint house 1 into green, paint house 2 into blue.
Minimum cost: 2 + 5 + 3 = 10.
Example 2:

Input: costs = []
Output: 0
Example 3:

Input: costs = [[7,6,2]]
Output: 2
*/

const minCost = (costs) => {
    if (!costs.length) return 0;

    for (let i = costs.length - 2; i >= 0; i--) {
        for (let j = 0; j < costs[i].length; j++) {
            let prevCosts = costs[i + 1].filter((elem, index) => index !== j);
            costs[i][j] = costs[i][j] + Math.min(...prevCosts);
        }
    }

    return Math.min(...costs[0]);
}
// Time: O(N) only number of rows bc num of cols are always 3;
// Space: O(1) no additional space is stored;

let costs1 = [[17, 2, 17], [16, 16, 5], [14, 3, 19]];
let costs2 = [[7, 6, 2]];
let costs3 = [[3, 5, 3], [6, 17, 6], [7, 13, 18], [9, 10, 18]];

console.log(minCost(costs1)) // 10
console.log(minCost(costs2)) // 2
console.log(minCost(costs3)) // 26
