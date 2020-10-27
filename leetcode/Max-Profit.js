
const test1 = [7, 1, 5, 3, 6, 4];
const test2 = [1, 2, 3, 0, 2];
const test3 = [1, 3, 2, 8, 4, 9];

// LeetCode Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
const maxProfitI = (prices) => {
    let lowest = Infinity;
    let result = 0;

    for (let i = 0; i < prices.length; i++) {
        let currPrice = prices[i];

        if (currPrice < lowest) lowest = currPrice;
        if (currPrice - lowest > result) result = currPrice - lowest;
    }

    return result;
}

// console.log(maxProfitI(test1)) // 5

// LeetCode Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
const maxProfitII = (prices) => {
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        let curr = prices[i];
        let prev = prices[i - 1];
        if (curr > prev) {
            profit += curr - prev;
        }
    }

    return profit;
}

// console.log(maxProfitII(test1)) // 7

// LeetCode Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
const maxProfitIII = (prices) => {
    let rest = 0;
    let sold = 0;
    let hold = -Infinity;
    for (let price of prices) {
        let nextHold = Math.max(hold, rest - price);
        let nextSold = hold + price;
        let nextRest = Math.max(rest, sold);

        rest = nextRest;
        sold = nextSold;
        hold = nextHold;
    }

    return Math.max(rest, sold);
}

// console.log(maxProfitIII(test2)) // 3

// LeetCode Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/
const maxProfitIV = (prices, fee) => {
    let profit = 0;
    let buy = 0;
    let sell = 1;

    while (prices[sell]) {
        let buyPrice = prices[buy];
        let sellPrice = prices[sell];
        if (buyPrice < sellPrice && sellPrice - buyPrice > fee) {
            profit += sellPrice - buyPrice;
            buy = sell + 1;
            sell = buy + 1;
        } else if (buyPrice < sellPrice && sellPrice - buyPrice <= fee) {
            sell++;
        } else {
            buy++;
            sell++;
        }
    }

    return profit;
}

console.log(maxProfitIV(test3, 2))
