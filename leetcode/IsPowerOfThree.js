// Find if a number is a power of three, return true/false
// LeetCode Link: https://leetcode.com/problems/power-of-three/


const isPowerOfThreeRecursion = (n) => {
    if (n === 1) {
        return true;
    } else if (n < 1) {
        return false;
    } else if (n > 1) {
        let newNum = n / 3;
        return isPowerOfThreeRecursion(newNum);
    }
};

const isPowerOfThree = (n) => {
    while (n >= 1) {
        if (n === 1) {
            return true;
        } else {
            n = n / 3;
        }
    }

    return false;
};

console.log(isPowerOfThree(27)) // true;
console.log(isPowerOfThree(1)) // true;
console.log(isPowerOfThree(1000)) // false;
console.log(isPowerOfThree(19684)) // false;
