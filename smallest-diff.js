function smallestDifference(arrayOne, arrayTwo) {
    let first = 0;
    let second = 0;
    let abs = Infinity;
    let pair = [arrayOne[first], arrayTwo[second]];

    arrayOne.sort(function (a, b) {
        return a - b;
    })
    arrayTwo.sort(function (a, b) {
        return a - b;
    })

    while (arrayOne[first] && arrayTwo[second]) {
        let currPosInArrOne = arrayOne[first];
        let currPosInArrTwo = arrayTwo[second];
        let currAbs = Math.abs(currPosInArrOne - currPosInArrTwo);

        if (currPosInArrOne === currPosInArrTwo) {
            return pair;
        }

        if (currPosInArrOne < currPosInArrTwo) {
            if (currAbs > abs) {
                abs = currAbs;
            }
            pair = [currPosInArrOne, currPosInArrTwo]
            first++;
        }

        if (currPosInArrOne > currPosInArrTwo) {
            if (currAbs > abs) {
                abs = currAbs;
            }
            pair = [currPosInArrOne, currPosInArrTwo]
            second++;
        }
    }

    return pair;
  }

  console.log(smallestDifference([2, 3, 4, 1, 3, 4], [3, 2, 1, 5, 4]));
