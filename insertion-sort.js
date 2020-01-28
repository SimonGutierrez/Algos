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

  console.log(insertionSort([2, 1, 3])) // [1, 2, 3]
  console.log(insertionSort([2, 1, 3, 5, 4])) // [1 , 2, 3, 4, 5]
  console.log(insertionSort([8, 5, 2, 9, 5, 6, 3])) // [2, 3, 5, 5, 6, 8, 9]
