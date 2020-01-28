function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let position = i;

        while (array[position] < array[position - 1]) {
            let currNum = array[position];

            array[position] = array[position - 1];
            array[position - 1] = currNum;

            position--;
        }
    }

    return array;
  }

  console.log(insertionSort([8, 5, 2, 9, 5, 6, 3])) // [2, 3, 5, 5, 6, 8, 9]
