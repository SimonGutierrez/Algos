/*
Find the minimum number of steps to reduce n to 1
Steps allowed:
1. reduce n by 3 if n % 3 = 0;
2. reduce by 2 if n % 2 = 0;
3. else subtract 1 (n  - 1);
*/


function findMSOne (n, memo = {}) {
    if (memo[n]) return memo[n];

   if (n === 1) {
       return 0;
   }

   let steps = findMSOne(n - 1, memo);

   if (n % 3 === 0) {
    let divide3 = findMSOne(n / 3, memo);
    steps = Math.min(steps, divide3);
   }

   if (n % 2 === 0) {
    let divide2 = findMSOne(n / 2, memo);
    steps = Math.min(steps, divide2);
   }

   memo[n] = steps + 1;

    return memo[n];
}
console.log(findMSOne(10)) // 3
console.log(findMSOne(30)) // 4


// tabulation (build your own array)

const findMSOneTab = (n) => {
    let DPTable = new Array(n + 1);
    DPTable[1] = 0;

    for (let i = 2; i < DPTable.length; i++) {
        let steps = DPTable[i - 1];
        if (i % 3 === 0) {
            let divide3 = DPTable[i / 3];
            steps = Math.min(steps, divide3);
        }

        if (i % 2 === 0) {
            let divide2 = DPTable[i / 2];
            steps = Math.min(steps, divide2);
        }

        DPTable[i] = steps + 1;
    }

    return DPTable[n];
}

console.log(findMSOneTab(10)) // 3
console.log(findMSOneTab(30)) // 4
