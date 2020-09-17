// find the greatest common denom for two numbers

const gcd = (num1, num2) => {

    while (num2 !== 0) {
        let temp  = num1;
        num1 = num2;
        num2 = temp % num2;
    }

    return num1;
}

console.log(gcd(20, 8)) // 4
console.log(gcd(60, 96)) // 12


// stacks and queues

const stackExample = () => {
    let simpleStack = [];

    for (let i = 0; i < 5; i++) simpleStack.push(i);

    while (simpleStack.length) {
        console.log(simpleStack.pop())
    }
}

console.log(stackExample()) // 4, 3, 2, 1, 0
