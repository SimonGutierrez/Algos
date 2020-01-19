var nestedData = {
    innerData: {
      order: ['first', 'second', 'third'],
      snacks: ['chips', 'fruit', 'crackers'],
      numberData: {
          primeNumbers: [2, 3, 5, 7, 11],
          fibonnaci: [1, 1, 2, 3, 5, 8, 13]
      },
      addSnack: function(snack){
          this.snacks.push(snack);
          return this;
      }
    }
  }

// Using a for loop, console.log all of the numbers in the primeNumbers array.
const logAllPrime = (obj) => {
    obj.innerData.numberData.primeNumbers.forEach(element => {
        console.log(element);
    });
}

//Using a for loop, console.log all of the even Fibonnaci numbers.
const logFibEven = (obj) => {
    obj.innerData.numberData.fibonnaci.forEach(element => {
        if (element % 2 === 0) {
            console.log(element);
        }
    });

}

console.log(logAllPrime(nestedData)) // 2, 3, 5, 7 , 11
console.log(logFibEven(nestedData))
