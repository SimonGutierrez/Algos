/* eslint-disable no-return-assign */
/*
Find the largest number of containers a manufacturer can use given
a budget, cost per container, and number of empty containers needed to
be traded in for a free one;

Example 1:

Budget: 4,
Cost: 1,
tradeInVal: 2,

output: 7
Explaination: 4 + 2 + 1 = 7

Example 2:

Budget: 6,
Cost: 2,
tradeInVal: 2,

output: 5

Explaination: 3 + 1 + 1 = 5
*/

const findMaxContainters = (budget, cost, tradeInVal) => {
    let maxContainers = Math.floor(budget / cost);
    let remaining = maxContainers;

    while (remaining >= tradeInVal) {
        let calc = Math.floor(remaining / tradeInVal);
        maxContainers += calc;
        remaining = calc + (remaining % tradeInVal);
    }

    return maxContainers;
}

console.log(findMaxContainters(4, 1, 2)) // 7
console.log(findMaxContainters(6, 2, 2)) // 5


/*
Grouping Options

https://stackoverflow.com/questions/58260014/number-of-ways-to-divide-n-objects-in-k-groups-such-that-no-group-will-have-few

Example: n=8, k=4 Answer: 5

[1,1,1,5], [1,1,2,4], [1,1,3,3], [1,2,2,3], [2,2,2,2]

*/

function countOptions(n, k, memo = {}){
    if (k === 0 && n === 0) return 1;

    if (n <= 0 || k <= 0) return 0;

    let key = String([n, k]);

    if (memo.hasOwnProperty(key)) return memo[key];

    return memo[key] = countOptions(n - k, k, memo) + countOptions(n - 1, k - 1, memo);
  }

  console.log(countOptions(8, 4)) // 5
