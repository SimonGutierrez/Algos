// https://leetcode.com/problems/permutation-in-string/

const checkInclusion = (s1, s2) => {

    const createHash = (string) => {
        let hash = {};

        for (let letter of string) {
            if (hash[letter] === undefined) {
                hash[letter] = 1;
            } else {
                hash[letter]++;
            }
        }

        return hash;
    }

    const permCheck = (hash1, hash2) => {
        for (let char in hash1) {
            if (hash2[char] !== hash1[char]) return false;
        }

        return true;
    }

    const hashS1 = createHash(s1);

    let left = 0;
    let right = s1.length - 1;

    while (right < s2.length) {
        let windowHash = createHash(s2.slice(left, right + 1));

        if (permCheck(hashS1, windowHash)) {
            return true;
        } else {
            left++;
            right++;
        }
    }

    return false;
}

// console.log(checkInclusion('ab', 'eidbaooo')) // true
// console.log(checkInclusion('ab', 'eidboaoo')) // false

// optimal solution
const checkInclusionII = (s1, s2) => {
    if (s1.length > s2.length) return false;

        const s1CharCount = new Array(26).fill(0);
        const window = new Array(26).fill(0);

        for (let char of s1) {
            //'a'.charCodeAt() === 97;
            const idx = char.charCodeAt() - 97;
            s1CharCount[idx]++;
        }

        // construct window
        for (let i = 0; i < s1.length; i++) {
            const idx = s2[i].charCodeAt() - 97;
            window[idx]++;
        }

        let start = 0;
        let end = s1.length - 1;
        console.log(s1CharCount)
        while (end < s2.length) {
            console.log(window)
            if (window.join('') === s1CharCount.join('')) return true;
            end++;
            if (end === s2.length) break;
            const startIdx = s2[start].charCodeAt() - 97;
            const endIdx = s2[end].charCodeAt() - 97;
            window[startIdx]--;
            window[endIdx]++;
            start++;
        }

    return false;
}

console.log(checkInclusionII('ab', 'eidbaooo')) // true

