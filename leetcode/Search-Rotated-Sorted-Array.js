/* eslint-disable complexity */
/* eslint-disable no-unneeded-ternary */
var search = function(nums, target) {
    let index = (nums[0] > target) ? nums.length - 1 : 0;
    let forward = index ? false : true;

    while (nums[index] !== undefined) {
        if (nums[index] === target) return true;

        if (forward && nums[index] > target) {
            return false;
        } else if (!forward && nums[index] < target) {
            return false;
        }

        if (nums[index] > target) {
            index--;
        } else {
            index++;
        }
    }

    return false;
};

console.log(search([2, 5, 6, 0, 0, 1, 2], 0)); // true;
console.log(search([4, 5, 6, 7, 1, 2, 3, 4], 6)); // true;
console.log(search([1, 1, 3], 3)); // true;
console.log(search([2, 5, 6, 0, 0, 1, 2], 0)); // false;
