function smallestDifference(arrayOne, arrayTwo) {
    arrayOne.sort((a, b) => a - b);
    arrayTwo.sort((a, b) => a - b);

    let first = 0;
    let second = 0;
    let abs = Infinity;
    let pair = [];

    while (typeof arrayOne[first] === 'number' && typeof arrayTwo[second] === 'number') {
        let currAbs = Math.abs(arrayOne[first] - arrayTwo[second]);

        if (arrayOne[first] ===  arrayTwo[second]) {
            pair = [arrayOne[first], arrayTwo[second]];
            return pair;
        }

        if (arrayOne[first] < arrayTwo[second]) {
            if (currAbs < abs) {
                abs = currAbs;
                pair = [arrayOne[first], arrayTwo[second]]
            }
            first++;
        }

        if (arrayOne[first] > arrayTwo[second]) {
            if (currAbs < abs) {
                abs = currAbs;
                pair = [arrayOne[first], arrayTwo[second]]
            }
            second++;
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

