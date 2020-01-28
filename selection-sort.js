function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let smallest = array[i];
        let pointer;

        for (let j = i + 1; j < array.length; j++) {
            let potentialSmallest = array[j];

            if (smallest > potentialSmallest) {
                smallest = potentialSmallest;
                pointer = j;
            }
        }
        if (pointer) {
            array[pointer] = array[i];
            array[i] = smallest;
        }
    }

    return array;
  }

  console.log(selectionSort([2, 3, 1, 4])) // [1, 2, 3, 4]
  console.log(selectionSort([2, 3, 1, 4, 6, 5])) // [1, 2, 3, 4, 5, 6]
  console.log(selectionSort([8, 5, 2, 9, 5, 6, 3])) // [2, 3, 5, 5, 6, 8, 9]
