const shift = (array, num, indx) => {
	if (indx === 2) {
		array[0] = array[1];
		array[1] = array[2];
		array[2] = num;
	}
	if (indx === 1) {
		array[0] = array[1];
		array[1] = num;
	}
	if (indx === 0) {
		array[0] = num;
	}
}

const update = (array1, array2) => {
	for (let i = 0; i < array1.length; i++) {
		let currNum = array1[i];
		if (currNum > array2[2] || array2[2] === null) {
			shift(array2, currNum, 2)
		} else if (currNum > array2[1] || array2[1] === null) {
			shift(array2, currNum, 1)
		} else if (currNum > array2[0] || array2[0] === null) {
			shift(array2, currNum, 0)
		}
	}
}

function findThreeLargestNumbers(array) {
	let threeLargest = [null, null, null];
	update(array, threeLargest);
	return threeLargest;
}

console.log(findThreeLargestNumbers([55, 43, 11, 3, -3, 10])) // [11, 43, 55]
console.log(findThreeLargestNumbers([7, 3, 8, 11, 43, 55])) // [11, 43, 55]
console.log(findThreeLargestNumbers([7, 7, 7, 7, 7, 7, 7, 7])) // [7, 7, 7]
console.log(findThreeLargestNumbers([7, 7, 7, 8, 7, 7, 7])) // [7, 7, 8]
console.log(findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])) // [18, 141, 541]

