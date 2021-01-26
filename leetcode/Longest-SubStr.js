/* eslint-disable complexity */
// https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/

var longestSubstring = function(s, k) {
    let maxUnique = new Set(s).size;
    // we'll try substrings consisting of one distinct character to those consisting of maximum distinct characters
    let max = 0;
    for (let curUnique = 1; curUnique <= maxUnique; curUnique++) {
        let start = 0, end = 0, atLeastK = 0, unique = 0, map = new Map();

        while (end < s.length) {
            map.set(s[end], map.get(s[end]) + 1 || 1);

            if (map.get(s[end]) === 1) unique++;
            if (map.get(s[end]) === k) atLeastK++;

            while (unique > curUnique) { // move left pointer so that the number of unique characters do not exceed the upper bound
                map.set(s[start], map.get(s[start]) - 1);

                if (map.get(s[start]) === k - 1) atLeastK--;
                if (map.get(s[start]) === 0) unique--;

                start++;
            }

            if (unique === curUnique && unique === atLeastK) {
                max = Math.max(max, end - start + 1);
            }

            end++;
        }
    }

    return max;
};

// We are only considering lowercase alphaabets so maxUnique can be at most 26.
// Therefore, Time complexity: O(26) * O(n) = O(n)
// Space Complexity: O(26) = O(1)

console.log(longestSubstring('aaabb', 3)) // 3
console.log(longestSubstring('ababbc', 2)) // 5
