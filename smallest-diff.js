function smallestDifference(arrayOne, arrayTwo) {
    arrayOne.sort(function (a, b) {
        return a - b;
    })
    arrayTwo.sort(function (a, b) {
        return a - b;
    })

    let first = 0;
    let second = 0;
    let abs = Infinity;
    let pair = [arrayOne[first], arrayTwo[second]];

    while (typeof arrayOne[first] === 'number' && typeof arrayTwo[second] === 'number') {
        let currPosInArrOne = arrayOne[first];
        let currPosInArrTwo = arrayTwo[second];
        let currAbs = Math.abs(currPosInArrOne - currPosInArrTwo);

        if (currPosInArrOne === currPosInArrTwo) {
            pair = [currPosInArrOne, currPosInArrTwo];
            return pair;
        }

        if (currPosInArrOne < currPosInArrTwo) {
            if (currAbs < abs) {
                abs = currAbs;
                pair = [currPosInArrOne, currPosInArrTwo]
            }
            first++;
        }

        if (currPosInArrOne > currPosInArrTwo) {
            if (currAbs < abs) {
                abs = currAbs;
                pair = [currPosInArrOne, currPosInArrTwo]
            }
            second++;
        }
    }

    return pair;
  }

  console.log(smallestDifference([240, 124, 86, 111, 2, 84, 954, 27, 89], [1, 3, 954, 19, 8]));
