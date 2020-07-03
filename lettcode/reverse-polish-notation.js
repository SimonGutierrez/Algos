const example = [5, 4, '+', 3, '/'] // ((5 + 4) / 3) = 3;
const example2 = ['2', '1', '+', '3', '*'] // ((2 + 1) * 3) = 9;
const example3 = ['4', '13', '5', '/', '+'] // 6
const example4 = ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'] // 22

// interview problem
function reversePolishNotation(array) {
    let stack = [];
    let dict = {
        '=': 1,
        '+': 1,
        '*': 1,
        '/': 1,
    }

    for (let i = 0; i < array.length; i++) {
        let currElem = array[i];
        if (currElem === 'ABS' || currElem === 'SQRT') {
           stack.push(isValidAbsorSqrt([stack.pop(), currElem]));
        } else  if (dict[currElem]) {
            let right = stack.pop();
            let left = stack.pop();
            stack.push(isValidOp([left, right, currElem]));
        } else {
            stack.push(currElem);
        }
    }

    return stack;
}

function isValidOp(subArray) {
    if (subArray[2] === '+') {
        return subArray[0] + subArray[1];
    } else if (subArray[2] === '-') {
        return subArray[0] - subArray[1];
    } else if (subArray[2] === '*') {
        return subArray[0] * subArray[1];
    } else if (subArray[2] === '/') {
        return subArray[0] / subArray[1];
    }
}

function isValidAbsorSqrt(subArray) {
    if (subArray[1] === 'ABS') {
        return Math.abs(subArray[0]);
    } else if (subArray[1] === 'SQRT') {
        return Math.sqrt(subArray[0]);
    }
}


console.log(reversePolishNotation(example)); // 3

// Leet code Problem
var evalRPN = function(tokens) {
    let stack = [];
    let dict = {
        '+': 1,
        '*': 1,
        '/': 1,
        '-': 1,
    }

    for (let i = 0; i < tokens.length; i++) {
        let currElem = tokens[i];
        if (dict[currElem]) {
            let right = stack.pop();
            let left = stack.pop();
            let isValidOutPut = isValid([left, right, currElem]);
            if (isValidOutPut < 0 ) {
                isValidOutPut = Math.ceil(isValidOutPut);
            } else {
                isValidOutPut = Math.floor(isValidOutPut);
            }
            stack.push(isValidOutPut);
        } else {
            stack.push(currElem);
        }
    }

    return stack[0];
};

function isValid(subArray) {
    if (subArray[2] === '+') {
        return Number(subArray[0]) + Number(subArray[1]);
    } else if (subArray[2] === '-') {
        return Number(subArray[0]) - Number(subArray[1]);
    } else if (subArray[2] === '*') {
        return Number(subArray[0]) * Number(subArray[1]);
    } else if (subArray[2] === '/') {
        return Number(subArray[0]) / Number(subArray[1]);
    }
}

console.log(evalRPN(example4)); // 22
console.log(evalRPN(example3)); // 6
console.log(evalRPN(example2)); // 9
