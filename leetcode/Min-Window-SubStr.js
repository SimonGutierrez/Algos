/* eslint-disable complexity */
// https://leetcode.com/problems/minimum-window-substring/submissions/

const minWindow = (str, targets) => {
    let seen = {};
    let result = [0, Infinity];
    let left = 0;
    // populate our seen obj
    for (let char of targets) {
        if (seen[char] === undefined) {
            seen[char] = 1;
        } else {
            seen[char]++;
        }
    }
    // let missing be the length of only unique chars
    let missing = Object.keys(seen).length;

    for (let right = 0; right < str.length; right++) {
        // hunt for our range
        if (str[right] in seen) {
            seen[str[right]] -= 1;
            // if that seen is ever 0 subtract one from missing bc we've seen the right number of a letter
            if (seen[str[right]] === 0) missing -= 1;
        }
        // catch up now
        while (missing === 0) {
            // make sure we keep track of the smallest window
            if ((right - left) < (result[1] - result[0])) {
                result[0] = left;
                result[1] = right;
            }
            // if our left char is in our seen make sure to add back to seen and missing as now we need to find that char again
            if (str[left] in seen) {
                if (seen[str[left]] === 0) {
                    missing += 1;
                }
                seen[str[left]] += 1;
            }
            // move out left pointer to continue searching for the next window
            left++;
        }
    }

    return result[1] === Infinity ? '' : str.slice(result[0], result[1] + 1);
}

console.log(minWindow('ADOBECODEBANC', 'ABC')) // BANC
console.log(minWindow('aa', 'aa')) // aa

