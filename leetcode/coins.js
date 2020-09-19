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

console.log(numOfWaysChange(77, coinsArray))

// LeetCode link: https://leetcode.com/problems/coin-change/
