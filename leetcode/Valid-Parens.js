// create a function that returns the diff variations of valid parens given n;
const addParens = (array, leftRem, rightRem, subStr, index) => {
    if (leftRem < 0 || rightRem < leftRem) return; // invalid State

    if (leftRem === 0 && rightRem === 0) { // out of left and right side of parens;
        array.push(subStr.slice().join('')); // join your result together and push into result;
    } else {
        subStr[index] = '(';
        addParens(array, leftRem - 1, rightRem, subStr, index + 1); // add parens to the left side then do recursive call;

        subStr[index] = ')';
        addParens(array, leftRem, rightRem - 1, subStr, index + 1); // add parens to right side and do recursive call;
    }
}

const parens = (n) => {
    let result = [];
    let subArray = new Array(n * 2); // build array to manipulate indecies; max num of n * 2 parens in each set;
    addParens(result, n, n, subArray, 0);

    return result;
}

console.log(parens(3)) // [...]


// https://leetcode.com/problems/valid-parentheses/

const isValid = (s) => {
    let stack = [];
    let dict = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (dict[char]) {
            stack.push(char);
        } else {
            let prev = stack.pop();
            if (dict[prev] !== char) return false;
        }
    }

    return stack.length === 0;
};

let string1 = '([{[}])', string2 = '([)]', string3 = '()', string4 = '()[]{}';


console.log(isValid(string1)) // false;
console.log(isValid(string2)) // false;
console.log(isValid(string3)) // true;
console.log(isValid(string4)) // true;
