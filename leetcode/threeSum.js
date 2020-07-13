/* eslint-disable complexity */
const threeSum  = (nums) => {
    if (nums.length < 2) return [];

    nums.sort((a, b) => a - b);

    let mid = Math.floor(nums.length / 2);
    let left = mid - 1;
    let right = mid + 1;
    let result = [];

    while (typeof nums[left] === 'number' && typeof nums[right] === 'number') {
        // console.log('mid left right', mid, left, right)
        let currSum = nums[left] + nums[mid] + nums[right];
        if (currSum === 0) {
            result.push([nums[left], nums[mid], nums[right]]);
            left--;
            right++;
        } else if (currSum > 0) {
            if (mid - 1 === left) {
                left--;
                mid--;
            } else {
                mid--;
            }
        } else if (currSum < 0){
            if (mid + 1 === right) {
                right++;
                mid++;
            } else {
                mid++;
            }
        }
    }

    return result;
}

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 0, 0, 0, 0, 0]));
