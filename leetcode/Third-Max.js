// leetCode Link: https://leetcode.com/problems/third-maximum-number/

const thirdMax = (nums) => {
  let maximums = new Set();

  for (let num of nums) {
    maximums.add(num);
    if (maximums.size > 3) {
      maximums.delete(Math.min(...maximums))
    }
  }

  if (maximums.size === 3) return Math.min(...maximums);
    return Math.max(...maximums)
}


const nums1 = [2, 2, 3, 1];
const nums2 = [5, 2, 2]
const nums3 = [1, 2, 2, 5, 3, 5];

console.log(thirdMax(nums1)); // 1
console.log(thirdMax(nums2)); //
console.log(thirdMax(nums3)); // 2
