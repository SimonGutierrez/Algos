const LIS = (nums) => {
    let count = 1
    if (!nums.length) return 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= nums[i + 1]) count++;
    }

    return count;
}

console.log(LIS([10, 9, 2, 5, 3, 7, 101, 18])) // 4
