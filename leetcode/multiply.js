let example1 = '109', example2 = '9';

var multiply = function(num1, num2) {
    let product = '', carryOver = '0';

    for (let i = num1.length - 1; i >= 0; i--) {
        for (let j = num2.length - 1; j >= 0; j--) {
            let currPorduct = (Number(num1[i]) * Number(num2[j])) + Number(carryOver);
            carryOver = '0';
            if (currPorduct < 10) {
                product = currPorduct.toString() + product;
            } else {
                let cps = currPorduct.toString();
                product = cps[1] + product;
                carryOver = cps[0]
            }
        }
    }

    return product;
};

console.log(multiply(example1, example2))
