function isPalindrome(string) {
    let rightPointer = string.length - 1;
    let leftPointer = 0;

    while (leftPointer < rightPointer) {
        if (string[leftPointer] !== string[rightPointer]) return false;
        leftPointer++;
        rightPointer--;
    }

    return true;
}

// Time: O(n)
// Space: O(1)

console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('poop')) // true
console.log(isPalindrome('notpalindrome')) // false
