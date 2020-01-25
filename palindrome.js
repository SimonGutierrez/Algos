function isPalindrome(string) {
    let reverse = '';
    let endHalf = '';
    let midPt = Math.floor(string.length / 2);

    for (let i = 0; i < midPt; i++) {
        reverse = string[i] + reverse;
    }

    if (string.length % 2 === 0 ) {
        endHalf = string.slice(midPt, string.length);
    } else {
        endHalf = string.slice(midPt + 1, string.length);
    }

    if (reverse === endHalf) return true;

    return false;
}

console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('poop')) // true
console.log(isPalindrome('notpalindrome')) // false
