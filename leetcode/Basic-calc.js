/* eslint-disable complexity */
// PEMDAS
const calculate = (s) => {
    if (s.length === 1) return Number(s);
    let dict = {
        '+': 2,
        '-': 1,
        '*': 4,
        '/': 3
    };
    let nums = [];
    let operator = [];
    let substr = '';

    for (let i = s.length - 1; i >= 0; i--) {
        if (nums.length === 2 || i === 0) {
            let num2 = Number(nums.pop());
            let num1 = i === 0 ? Number(s[i] + substr) : Number(nums.pop());
            let op = operator.pop();
            num2 ? nums.push(helper(num1, op, num2)) : nums.push(num1);
       } else if (Number(s[i]) || Number(s[i]) === 0) {
            if (dict[s[i - 1]]) {
                substr = s[i] + substr;
                nums.unshift(Number(substr));
                substr = '';
                operator.unshift(s[i - 1]);
            } else {
                substr = s[i] + substr;
            }
            console.log('oper', operator)
    }
}

    return nums[0] < 0 ? nums[0] * -1 :  nums[0];
}

const helper = (num1, op, num2) => {
    if (op === '+') {
        return num1 + num2;
    } else if (op === '-') {
        return num1 - num2;
    } else if (op === '*') {
        return num1 * num2;
    } else {
        return Math.trunc(num1 / num2);
    }
}

// white spaces!
console.log(calculate('10 / 5 + 1 - 10 * 6')) // -57
// nums = 10, 5, 1, 10, 6
// op = /, +, -, *
