function moveElementToEnd(array, toMove) {
    let left  = 0;
    let right = array.length - 1;

    while (left < right) {
        let currLeft = array[left];
        let currRight = array[right];

        if (currLeft === toMove && currRight === toMove) {
            right--;
        } else if (currLeft === toMove && currRight !== toMove) {
            array[left] = currRight;
            array[right] = currLeft;
            left++;
            right--;
        } else {
            left++;
        }
    }

    return array;
  }


  console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2))
