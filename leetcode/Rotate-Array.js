// leet code link: https://leetcode.com/problems/rotate-array/submissions/

const rotate = (nums, k) => {
    while (k) {
        let temp = 0;

        for (let i = 0; i < nums.length; i++) {
            let curr = nums[i];
            nums[i] = temp;
            temp = curr;
        }
        nums[0] = temp;
        k--;
    }

    return nums;
};

const array1 = [[1, 2, 3, 4, 5, 6, 7]]
console.log(rotate(array1, 3)) // [5,6,7,1,2,3,4]
