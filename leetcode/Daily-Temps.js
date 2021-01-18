// https://leetcode.com/problems/daily-temperatures/submissions/

const dailyTemperatures = function(temps) {
    let res = [];
    let left = 0;
    let right = left + 1;

    while (left < temps.length) {
        if (right > temps.length - 1) {
            res.push(0);
            left++;
            right = left + 1;
        }

        if (temps[left] < temps[right]) {
            res.push(right - left);
            left++;
            right = left + 1;
        } else {
            right++;
        }
    }

    return res;
};

let temps = [55, 38, 53, 81, 61, 93, 97, 32, 43, 78];

console.log(dailyTemperatures(temps)) // [3,1,1,2,1,1,0,1,1,0]

// use a stack
const dailyTemperaturesII = function(temps) {
    let stack = [];
    let res = new Array(temps.length).fill(0);

    for (let i = 0; i < temps.length; i++) {
        let peek = stack[stack.length - 1];

        while (stack.length && temps[peek] < temps[i]) {
            let idx = stack.pop();
            res[idx] = i - idx;
            peek = stack[stack.length - 1];
        }

        stack.push(i)
    }

    return res;
};

console.log(dailyTemperaturesII(temps)) // [3,1,1,2,1,1,0,1,1,0]
