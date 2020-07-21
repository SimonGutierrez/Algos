/* eslint-disable complexity */
const calculate = (s) => {
    if (s.length === 1) return Number(s);
    let dict = {
        '+': 1,
        '-': 1,
        '*': 1,
        '/': 1
    };
    let nums = [];
    let operator = [];
    let substr = '';

    for (let i = s.length - 1; i >= 0; i--) {
        // if (dict[s[i]]) {
        //     if (nums.length === 2) {
        //         let op = operator.pop();
        //         let num2 = Number(nums.pop());
        //         let num1 = Number(nums.pop());
        //         nums.push(helper(num1, op, num2));
        //     }
        //     operator.push(s[i]);
        // } else if (Number(s[i]) || Number(s[i]) === 0) {
        //     substr = s[i] + substr;
        //     if (dict[s[i - 1]]) {
        //         nums.push(Number(substr));
        //         substr = '';
        //     }
        // }
        if (nums.length === 2 || i === 0) {
            let num2 = Number(nums.pop());
            let num1 = i === 0 ? Number(s[i] + substr) : Number(nums.pop());
            let op = operator.pop();
            nums.push(helper(num1, op, num2));
       } else if (Number(s[i]) || Number(s[i]) === 0) {
            if (dict[s[i - 1]]) {
                substr = s[i] + substr;
                nums.push(Number(substr));
                substr = '';
                operator.push(s[i - 1]);
            } else {
                substr = s[i] + substr;
            }
    }
    console.log('nums', nums)
}

    return nums;
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
console.log(calculate('3+5')) // 8
