function productSum(array, depth = 1) {
    // Write your code here.
       let sum = 0;

      for (let i = 0; i < array.length; i++) {
          let currElem = array[i];
          if (Array.isArray(currElem)) {
              sum += productSum(currElem, depth + 1)
          } else {
              sum += currElem;
          }
      }

      return sum * depth;
  }

console.log(productSum([1, 2, 3, 4, 5])) // 15
console.log(productSum([1, 2, [3], 4, 5])) // 18
console.log(productSum([[1, 2], 3, [4, 5]])) // 27
console.log(productSum([[[[[5]]]]])) // 600
console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]])) // 12
