// write a function that recursively mutiplies;

const recursiveMult = (num1, num2, sum = 0) => {
    if (num2 === 0)  {
        return sum;
    } else {
        sum += num1;
        num2--;
    }

    return recursiveMult(num1, num2, sum)
}

console.log(recursiveMult(2, 4)) // 8
console.log(recursiveMult(3, 4)) // 12
console.log(recursiveMult(3, 0)) // 0
console.log(recursiveMult(9, 5)) // 45
