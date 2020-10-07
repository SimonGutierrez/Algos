// LeetCode Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

const maxProfit = (prices) => {
    let lowest1 = {val: Infinity, indx: -1};
    let lowest2 = {val: Infinity, indx: -1};
    let result = 0;

    for (let i = 0; i < prices.length - 1; i++) {
        let curr = prices[i];

        if (curr < lowest1.val) {
            lowest1.val = curr;
            lowest1.indx = i;
        } else if (curr < lowest2.val) {
            lowest2.val = curr;
            lowest2.indx = i;
        }


    }

    return [lowest1, lowest2]
}

const test1 = [7, 1, 5, 3, 6, 4]

console.log(maxProfit(test1))
