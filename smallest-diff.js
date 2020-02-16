function smallestDifference(arrayOne, arrayTwo) {
	arrayOne.sort((a, b) => a - b);
	arrayTwo.sort((a, b) => a - b);

	let smallest = Infinity;
	let first = 0;
	let second  = 0;
	let pair = [];

	while (first < arrayOne.length && second < arrayTwo.length) {
		let firstNum = arrayOne[first];
		let secondNum = arrayTwo[second];
		let currAbs = Math.abs(firstNum - secondNum);

		if (currAbs === 0) {
			return [firstNum, secondNum];
		}

		if (firstNum < secondNum) {
			first++;
		} else {
			second++;
		}

		if (currAbs < smallest) {
			smallest = currAbs;
			pair = [firstNum, secondNum];
		}
	}

	return pair;
}

  // Time: O(n*log(n) + m*log(m)) due to the sorting of the arrays, pointing doesnt affect the time.
  // Space: O(1);

  console.log(smallestDifference([0, 20], [21, -2])); // [20, 21]
  console.log(smallestDifference([-1, 5, 10, 20, 3], [26, 134, 135, 15, 17])); // [20, 17]
  console.log(smallestDifference([240, 124, 86, 111, 2, 84, 954, 27, 89], [1, 3, 954, 19, 8])); // [954, 954]
  console.log(smallestDifference([10, 0, 20, 25, 2000], [1005, 1006, 1014, 1032, 1031])); // [2000, 1032]

