// leet code link: https://leetcode.com/problems/climbing-stairs/


// when you can only take 1 or 2 steps at a time
const climbStairs2 = (n) => {
    if (n === 1) return 1;

    let numsArray = new Array(n + 1);
    numsArray[0] = 1;
    numsArray[1] = 1;

    for (let i = 2; i <= n; i++) numsArray[i] = numsArray[i - 1] + numsArray[i - 2];

    return numsArray[n]
};

console.log(climbStairs2(2)) // 2
console.log(climbStairs2(3)) // 3


// when you can take 1, 2 or 3 steps at a time

const climbStairs3 = (n) => {
    if (n === 1) return 1;

    let numsArray = new Array(n + 1);
    numsArray[0] = 1;
    numsArray[1] = 1;
    numsArray[2] = 2;

    for (let i = 3; i <= n; i++) numsArray[i] = numsArray[i - 1] + numsArray[i - 2] + numsArray[i - 3];

    return numsArray[n]
};


// console.log(climbStairs3(4)) // 7
// console.log(climbStairs3(3)) // 4
