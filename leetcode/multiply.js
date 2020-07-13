let example1 = '15', example2 = '10';

var multiply = function(num1, num2) {
    let product = 0, carryOver = '0', trailingZero = '';

    for (let i = num1.length - 1; i >= 0; i--) {
        if (i !== num1.length - 1) trailingZero += '0';

        let partialPorduct = '';
        for (let j = num2.length - 1; j >= 0; j--) {
            let currPorduct = (Number(num1[i]) * Number(num2[j])) + Number(carryOver);

            if (currPorduct < 10) {
                partialPorduct = currPorduct.toString() + partialPorduct;
                carryOver = '0';
            } else {
                let cps = currPorduct.toString();
                partialPorduct = cps[1] + partialPorduct;
                carryOver = cps[0];
            }
        }

        if (Number(carryOver)) {
            partialPorduct = carryOver + partialPorduct;
            carryOver = '0';
        }

        product = Number(partialPorduct + trailingZero) + product;
    }

    return product.toString();
};

console.log(multiply(example1, example2)) // 150
