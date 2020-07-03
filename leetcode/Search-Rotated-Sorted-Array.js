/* eslint-disable complexity */
/* eslint-disable no-unneeded-ternary */

// search for a number in a rotated sorted array;
var search = function(nums, target) {
    // if the first element is greater than our target start at the end of the array else start at the beginning
    let index = (nums[0] > target) ? nums.length - 1 : 0;
    // indicate if we started at the end or the begining of the array
    let forward = index ? false : true;

    while (nums[index] !== undefined) {
        if (nums[index] === target) return true;
        // if we started at the begining of the array and the number we are looking at now is greater than the target we know there are no more elements in the array that will be equal to the target
        if (forward && nums[index] > target) {
            return false;
        // same here if we started at the end of the array and we are moving backwards then if we come across a number that is less than the target we know all options are exhausted
        } else if (!forward && nums[index] < target) {
            return false;
        }
        // move backwards in the array until we find the target
        if (nums[index] > target) {
            index--;
        // move forward in the array until we find the target
        } else {
            index++;
        }
    }

    return false;
};

console.log(search([2, 5, 6, 0, 0, 1, 2], 0)); // true;
console.log(search([4, 5, 6, 7, 1, 2, 3, 4], 6)); // true;
console.log(search([1, 1, 3], 3)); // true;
console.log(search([2, 5, 6, 0, 0, 1, 2], 4)); // false;
