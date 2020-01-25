function getNthFib(n) {
    let firstFib = 0;
    let secondFib = 1;

    if (n < 1) {
        return 'invalid: no neg numbers or zero'
    } else if (n === 1) {
        return firstFib;
    }

    for (let i = 2; i < n; i++) {
        let nthFib = firstFib + secondFib;
        firstFib = secondFib;
        secondFib = nthFib;
    }

    return secondFib;
}

// Time: O(2^n)
// Space: O(n)

console.log(getNthFib(-2)) // 'invalid: no neg numbers or zero'
console.log(getNthFib(1)) // 0
console.log(getNthFib(2)) // 1
console.log(getNthFib(7)) // 8
