function twoNumberSum(array, targetSum) {
	array.sort((a, b) => a - b);
	let left = 0;
	let right = array.length - 1;

	while (left < right) {
		let currSum = array[left] + array[right]
		if (currSum === targetSum) {
			return [array[left], array[right]];
		} else if (currSum > targetSum) {
			right--;
		} else {
			left++;
		}
	}

	return [];
}
console.log(twoNumberSum([4, 6, 1], 5)) // [1, 4]
console.log(twoNumberSum([4, 6, 1, -3], 3)) // [-3, 6]
console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10)) // [-1, 11]
console.log(twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 17)) // [8, 9]
console.log(twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18)) // [3, 15]
