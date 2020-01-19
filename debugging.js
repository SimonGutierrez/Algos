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
console.log(logFibEven(nestedData)) // 2, 8

// Answer the following questions:

// What does the throw keyword do? Meant for errors or exceptions.
// What does the finally keyword do? After all code is ran run this code to finish the sequence. 
// What is the difference between a TypeError and ReferenceError?
// TYPE ERROR - is when the value being targeted is the incorrect type as in using .map on a string or trying to invoke something that is not a function.
// REFERENCE ERROR - is when the value targeted is not saved in memory yet, there is no reference to that value, like when you dont declare a variable or try to reference a variable that is out of scope.

// Fix the broken code and explain what was wrong:

1.

for(var i=0; i > 5; i++){
    console.log(i);
}

//

2.

function addIfEven(num){
    if(num % 2 = 0){
        return num + 5;
    }
    return num;
}
3.

function loopToFive(){
    for(var i=0, i < 5, i++){
        console.log(i);
    }
}
4.

function displayEvenNumbers(){
    var numbers = [1,2,3,4,5,6,7,8];
    var evenNumbers = [];
    for(var i=0; i<numbers.length-1; i++;){
        if(numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // should return [2,4,6,8] 


