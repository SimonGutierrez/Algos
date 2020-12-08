/* eslint-disable complexity */
// leet code link: https://leetcode.com/problems/find-all-anagrams-in-a-string/

const findAnagrams = (s, p) => {
    let result = [];
    let hash = {};
    let uniqueChars = 0;

    // fill up our hash and unique count;
    for (let char of p) {
        if (hash[char] === undefined) {
            uniqueChars++;
            hash[char] = 1;
        } else {
            hash[char]++;
        }
    }
    // L/R pointers to make our sliding window
    let right = 0, left = 0;

    for (right; right < s.length; right++) {
        // if this char to the right is in our hash map -- from its count;
        if (hash[s[right]] !== undefined) hash[s[right]]--;
        // if the count is ever 0 we have the max number of times we have seen this specific char, sub from uniqe chars now;
        if (hash[s[right]] === 0) uniqueChars--;
        // our window contains all of our unique chars and the correct num of times, valid anagram push to res;
        if (uniqueChars === 0) result.push(left);
        // if our window is the same len as p
        if (right - left + 1 === p.length) {
            // add to our hash when we see a valid char;
            if (hash[s[left]] !== undefined) hash[s[left]]++;
            // add to back to unique when this is the first time we see the char again;
            if (hash[s[left]] === 1) uniqueChars++;
            // move the left pointer now that we've found another unique char
            left++;
        }
    }

    return result;
};


console.log(findAnagrams('cbaebabacd', 'abc')) // [0, 6]
