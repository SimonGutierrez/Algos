// find the numbers of ways to calc n change given an infinit number of quarters, nickles and dimes, pennies [25, 10, 5, 1]

const helper = (total, array, index, map) => {
    if (map.has(`${total}, ${index}`)) return map.get(`${total}, ${index}`);

    let coin = array[index];
    if (index === array.length - 1) {
        let remaining = total % coin;
        return remaining === 0 ? 1 : 0;
    }

    let ways = 0;

    for (let amount = 0; amount <= total; amount += coin) {
        ways += helper(total - amount, array, index + 1, map)
    }

    map.set(`${total}, ${index}`, ways);

    return ways;
}

const numOfWaysChange = (n, coins) => {
    let map = new Map()
   return helper(n, coins, 0, map);
}

let coinsArray = [25, 10, 5, 1];

console.log(numOfWaysChange(10, coinsArray)) // 4

const dynamicCoin = (n, coins) => {
    let ways = new Array(n + 1).fill(0);
    // so that you can fill the array with 1's for your first loop; this is why you add an extra elem to array when init;
    ways[0] = 1;

    for (let j = 0; j < coins.length; j++) {
        let coin = coins[j];
        for (let amount = 0; amount < ways.length; amount++) {
            if (amount >= coin) {
                // any amount is equal to the whats left over that was prev calc and saved in ways;
                ways[amount] += ways[amount - coin];
            }
        }
    }

    return ways[n];
}

let coins1 = [1, 5, 10, 25]

console.log(dynamicCoin(10, coins1)) // 4

// Time: O(n * m) for the length of your coins array and the length of your nums array *NOTE* nums array could not be relavant depending on how many coins
// Space: O(n) for the ways array created;

// LeetCode link: https://leetcode.com/problems/coin-change/
// find the minimun amount of change for amount

const coinChange = (coins, amount) => {
   let max = amount + 1;
   let dpArray = new Array(max).fill(max);
   dpArray[0] = 0;

   for (let i = 1; i <= amount; i++) {
       for (let j = 0; j < coins.length; j++) {
           if (coins[j] <= i) {
               dpArray[i] = Math.min(dpArray[i], dpArray[i - coins[j]] + 1);
           }
       }
   }

   return dpArray[amount] > amount ? -1 : dpArray[amount];
};

const change1 = [1, 2, 5];
const change2 = [2];
const change3 = [186, 419, 83, 408];

console.log(coinChange(change1, 11)) // 3
console.log(coinChange(change2, 11)) // -1
console.log(coinChange(change3, 6249)) // 20
