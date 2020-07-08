/* eslint-disable complexity */
function fourSum(nums, target) {
    let res = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 3; i++) {
        for (let j = i + 1; j < nums.length - 2; j++) {

            let k = j + 1;
            let l = nums.length - 1;

            while (k < l) {
                let sum = nums[i] + nums[j] + nums[k] + nums[l];
                if (sum === target) {
                    res.push([nums[i], nums[j], nums[k], nums[l]]);
                    while (nums[k] === nums[k + 1]) k++;
                    while (nums[l] === nums[l - 1]) l--;
                    k++;
                    l--;
                } else if (sum < target) {
                    k++;
                } else {
                    l--;
                }
            }
            while (nums[j] === nums[j + 1]) j++;
        }
        while (nums[i] === nums[i + 1]) i++;

    }

    return res
}

console.log('what is 4sum>>>', fourSum([-1, 2, 2, -5, 0, -1, 4], 3)) // [ [ -5, 2, 2, 4 ], [ -1, 0, 2, 2 ] ]
console.log('what is 4sum>>>', fourSum([1, 0, -1, 0, -2, 2], 0)) // [ [ -2, -1, 1, 2 ], [ -2, 0, 0, 2 ], [ -1, 0, 0, 1 ] ]
