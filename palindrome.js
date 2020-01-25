function isPalindrome(string) {
    let reverse = '';
    let midPt = Math.ceil(string.length / 2);

    for (let i = 0; i < string.length; i++) {
        reverse = string[i] + reverse;
    }

    if (reverse === string) return true;

    return false;
}

console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('notpalindrome')) // false
