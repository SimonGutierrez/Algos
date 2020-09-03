/* eslint-disable complexity */
// Leet code Link: https://leetcode.com/problems/3sum/
// Num Times Practiced = 2;

const threeSum = (nums) => {
    if (nums.length < 3) return [];

    nums.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        let mid = i + 1;
        let right = nums.length - 1;
        // if our left bound is past 0 there are no positive int that will add up to 0;
        if (nums[i] > 0) break;
        // skip repeats in left bound;
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        while (mid < right) {
            let currSum = nums[i] + nums[mid] + nums[right];
            if (currSum === 0) {
                result.push([nums[i], nums[mid], nums[right]]);
                // skip any repeats for our mid val
                while (nums[mid] === nums[mid + 1]) mid++;
                // skip repeats in our right bound;
                while (nums[right] === nums[right - 1]) right--;
                mid++;
                right--;
            } else if (currSum > 0) {
                right--;
            } else {
                mid++;
            }
        }
    }


    return result;
}

// Second attempt

const threeSum2 = (nums) => {
    nums.sort((a, b) => a - b);
    let solutionSet = [];

    for (let i = 0; i < nums.length; i++) {
        let mid = i + 1;
        let right = nums.length - 1;

        while (mid < right) {
            if (nums[i] + nums[mid] + nums[right] === 0) {
                solutionSet.push([nums[i], nums[mid], nums[right]]);
                while (nums[mid] === nums[mid + 1]) mid++;
                while (nums[right] === nums[right - 1]) right--;
                mid++;
                right--;
            } else if (nums[i] + nums[mid] + nums[right] < 0) {
                mid++;
            } else {
                right--;
            }
        }
        while (nums[i] === nums[i + 1]) i++;
    }

    return solutionSet;
};

console.log(threeSum2([-1, 0, 1, 2, -1, -4])); //  [ -1, -1, 2 ], [ -1, 0, 1 ] ]
console.log(threeSum2([0, 0, 0, 0, 0, 0])); // [ [ 0, 0, 0 ] ]
