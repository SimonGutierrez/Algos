// expand around center solution
const longestPalindrome = (s) => {
    if (s.length === 0 || s === null) return '';
    let max = '';
    for (let i = 0; i < s.length; i++) {
        // this loop is to take into account
        // different palindromes like 'aba' and 'abba'
        for (let j = 0; j < 2; j++) {
            let left = i;
            let right = i + j;
            while (s[left] && s[left] === s[right]){
                right++;
                left--;
            }
            // here imagine we get into string like
            // "sabbad", then
            // right = 5
            // left = 0
            // and actual length of "abba" should be "4"
            // 5 - 0 - 1 === 4
            if ((right - left - 1) > max.length) {
                max = s.substring(left + 1, right);
            }
        }
    }
    return max;
};

// Time: O(N^2) double loop for finding longest sub str
// Space: O(1) no additional space used

console.log(longestPalindrome('sabbad')) // abba
console.log(longestPalindrome('thetacocat')) // tacocat
console.log(longestPalindrome('findthe/racecar|longestpali')) // racecar
