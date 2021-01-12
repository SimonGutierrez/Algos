// https://leetcode.com/problems/multiply-strings/

const multiplyII = (num1, num2) => {
    let res = 0;
    let placeHolder = '';

    for (let i = num1.length - 1; i >= 0; i--) {
        let curN1 = num1[i];
        let carryOver = 0;
        let subSum = '';
        for (let j = num2.length - 1; j >= 0; j--) {
            let curN2 = num2[j];
            let product = String((Number(curN2) * Number(curN1)) + carryOver);

            if (product.length > 1) {
                carryOver = Number(product[0]);
                subSum = product[1] + subSum;
            } else {
                carryOver = 0;
                subSum = product[0] + subSum;
            }
        }

        if (carryOver !== 0) subSum = String(carryOver) + subSum;
        res += Number(subSum + placeHolder);
        placeHolder += '0';
    }

    return String(res);
};

let example1 = '15', example2 = '10';

console.log(multiplyII(example1, example2)) // 150


// Optimal solution DP approach

var multiply = function(num1, num2) {
    if (num1 === '0' || num2 === '0') return '0'

    const m = num1.length, n = num2.length, res = new Array(m + n).fill(0)
    // fill an array with the corrisponding vals and update as you go;
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const p1 = i + j, p2 = i + j + 1
            let sum = res[p2] + Number(num1[i]) * Number(num2[j])
            // update the val at the curr place as long as it is a single digit, i + j + 1;
            res[p2] = sum % 10
            // if larger than a single digit move the carry over to the correct spot, i + j;
            res[p1] += Math.floor(sum / 10)
        }
    }

    if (res[0] === 0) res.shift();

    return res.join('');
}

console.log(multiply(example1, example2)) // 150
