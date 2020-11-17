/* eslint-disable complexity */
/*
https://leetcode.com/problems/minimum-window-substring/
*/


const minWindow = (str, targets) => {
    let counts = {};
    let missing = targets.length;
    let result = [0, Infinity];
    let left = 0;
    // populate our counts obj
    for (let char of targets) {
        counts[char] = 0;
    }

    for (let right = 0; right < str.length; right++) {
        // hunt for our range
        if (str[right] in counts) {

            // if that counts is ever 0 we just found a letter so sub one from missing bc we just found a letter
            if (counts[str[right]] === 0) {
                missing -= 1;
            }
            counts[str[right]]++;
        }
        // catch up now
        while (missing === 0) {
            if ((right - left) < (result[1] - result[0])) {
                result[0] = left;
                result[1] = right;
            }

            if (str[left] in counts) {
                counts[str[left]] -= 1;
                if (counts[str[left]] === 0) {
                    missing += 1;
                }

            }

            left++;
        }
    }

    return result[1] === Infinity ? '' : str.slice(result[0], result[1] + 1);
}

let test1 = 'ADOBECODEBANC';
let test2 = 'ABC';

console.log(minWindow(test1, test2)) // [9,12]
