// leetcode link: https://leetcode.com/problems/sum-of-subarray-minimums/
// unable to solve..
const sumSubarrayMins = (array) => {
    let sum = 0;
    // sliding window approach
    let windowSize = array.length;

    while (windowSize) {
        let left = 0;
        let right = windowSize - 1;

        while (right < array.length) {
            let window = array.slice(left, right + 1);
            sum += Math.min(...window);
            left++;
            right++;
        }

        windowSize--;
    }

    return sum;
}

console.log(sumSubarrayMins([3, 1, 2, 4])) // 17
