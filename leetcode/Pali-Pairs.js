// https://leetcode.com/problems/palindrome-pairs/

const isPali = (str, left, right) => {
    while (left < right) {
        if (str[left] !== str[right]) return false;

        left++;
        right--;
    }

    return true;
}

const palindromePairs = (words) => {
    let res = [];

    for (let i = 0; i < words.length; i++) {
        let j = i + 1 < words.length ? i + 1 : 0;

        while (j !== i) {
            let currCombo = words[i] + words[j];
            if (isPali(currCombo, 0, currCombo.length - 1)) res.push([i, j]);

            if (j + 1 < words.length) {
                j++;
            } else {
                j = 0;
            }
        }
    }

    return res;
};

const test = ['abcd', 'dcba', 'lls', 's', 'sssll']

console.log(palindromePairs(test)) // [[0,1],[1,0],[3,2],[2,4]]
