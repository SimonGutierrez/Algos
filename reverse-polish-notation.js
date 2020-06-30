const example = [5, 4, '+', 3, '/'] // (5 + 4) / 3 = 3;

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
