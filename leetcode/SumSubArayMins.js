// leetcode link: https://leetcode.com/problems/sum-of-subarray-minimums/

const sumSubarrayMins = (array) => {
    let results = [];

   for (let i = 0; i < array.length; i++) {
       let temp = i !== 0 ? array.slice(i) : array.slice();
       while (temp.length) {
           results.push(Math.min(...temp));
           temp = temp.slice(0, temp.length - 1);
       }
   }

    return results.reduce((a, b) => a + b);
}

console.log(sumSubarrayMins([3, 1, 2, 4])) // 17
