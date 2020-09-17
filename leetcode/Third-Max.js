// leetCode Link: https://leetcode.com/problems/third-maximum-number/

const thirdMax = (nums) => {
    let set = new Set();

    for (let num of nums) {
        set.add(num);

        if (set.size > 3) {
            let min = Math.min(...set);
            set.delete(min);
        }
    }

    return set.size < 3 ? Math.max(...set) : Math.min(...set);
}


const nums1 = [2, 2, 3, 1];
const nums2 = [5, 2, 2];
const nums3 = [1, 2, 2, 5, 3, 5];

console.log(thirdMax(nums1)); // 1
console.log(thirdMax(nums2)); // 5
console.log(thirdMax(nums3)); // 2
