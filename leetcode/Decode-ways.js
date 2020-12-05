/* eslint-disable complexity */
/* eslint-disable no-eq-null */
/*
Leet code Link: https://leetcode.com/problems/decode-ways/
https://leetcode.com/problems/integer-to-english-words/
https://leetcode.com/problems/palindrome-pairs/
*/

const numDecodings = (s) => {
    if (s == null || s.length === 0) return 0;
    if (s[0] === '0') return 0;

    const dp = new Array(s.length + 1).fill(0);

    dp[0] = 1; // theres only one way, 0 ways
    dp[1] = 1; // theres only one way, 1 ways

    for (let i = 2; i <= s.length; i++) {
      const a = Number(s[i - 1]);  // last one digit
      if (a !== 0) {
        dp[i] += dp[i - 1];
      }

      const b = Number(s[i - 2] + a);  // last two digits
      if (b >= 10 && b <= 26) {
        dp[i] += dp[i - 2];
      }
    }

    return dp[s.length];
};

console.log(numDecodings('110')) // 1
console.log(numDecodings('226')) // 3

const numDecodingsII = (s) => {
    if (s.length === 0 || s[0] === '0') return 0;

    let dp = new Array(s.length + 1).fill(0);

    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= s.length; i++) {
        let ones = Number(s[i - 1]);
        if (ones !== 0) {
            dp[i] += dp[i - 1];
        }

        let tens = Number(s[i - 2]  + s[i - 1]);
        if (10 <= tens && tens <= 26) {
            dp[i] += dp[i - 2];
        }
    }

    return dp[s.length];
};

console.log(numDecodingsII('110')) // 1
console.log(numDecodingsII('226')) // 3
