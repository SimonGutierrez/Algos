/* eslint-disable complexity */
const LIS = (nums) => {
    if (nums.length === 0) return 0;

    let dpChart  = new Array(nums.length).fill(1);

    for (let i = 0; i < nums.length; i++) {
        let j = 0;
        while (j < i) {
            if (nums[j] < nums[i]) {
                if (dpChart[i] <= dpChart[j]) dpChart[i] = dpChart[j] + 1;
            }
            j++;
        }
    }
    return dpChart.reduce((a, b) => Math.max(a, b));
}
// Time: O(n^2) // looping through the array 2x
// Space: O(n) // saving a spot for each elem in our dpchart

console.log(LIS([1, 3, 6, 7, 9, 4, 10])) // 6
console.log(LIS([0, 1, 2, 3, 4])) // 5
console.log(LIS([2, 2])) // 1
console.log(LIS([0])) // 1
console.log(LIS([])) // 0
