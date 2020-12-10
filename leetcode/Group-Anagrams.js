// LeetCode Link: https://leetcode.com/problems/group-anagrams

const groupAnagrams = (strs) => {
    let hash = {};

    for (let word of strs) {
        // if you want to sort by alpha just .sort no funct needed
        let key = word.split('').sort().join('');

        if (hash[key] !== undefined) {
            hash[key].push(word);
        } else {
            hash[key] = [word];
        }
    }

    return Object.values(hash);
}

let test1 = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

console.log(groupAnagrams(test1)) // [["eat","tea","ate"],["tan","nat"],["bat"]]
