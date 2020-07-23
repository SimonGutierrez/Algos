/* eslint-disable complexity */
// PEMDAS
const calculate1 = (s) => {
    if (s.length === 1) return Number(s);
    s.replace(/\s/g, ''); // remove all white spaces
    let num = '';
    let calc = []; // your stack
    let prevSign = '+';

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
       if (!isNaN(char)) num += char;

       if (isNaN(char) || i === s.length - 1) {
           // store nums in stack and only pop when mult or div is done;
           if (prevSign === '+') {
               calc.push(Number(num));
           } else if (prevSign === '-') {
               calc.push(Number(-num));
           } else if (prevSign === '*') {
               calc.push(Math.floor(calc.pop() * num));
           } else if (prevSign === '/') {
               calc.push(Math.trunc(calc.pop() / num));
           }

           prevSign = char;
           num = '';
       }

    }
    // sum up all the numbers in our stack at the end;
    return calc.reduce((a, b) => a + b);
}

console.log(calculate1('2048')) // 2048
console.log(calculate1('3+5 / 2 ')) // 5
console.log(calculate1('"3+2*2')) // 7
