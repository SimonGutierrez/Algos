/* eslint-disable complexity */
// https://leetcode.com/problems/integer-to-english-words/

const numberToWords = (num) => {
    num = String(num);

    const ones = {
        0: 'Zero',
        1: 'One',
        2: 'Two',
        3: 'Three',
        4: 'Four',
        5: 'Five',
        6: 'Six',
        7: 'Seven',
        8: 'Eight',
        9: 'Nine',
    }

    const teens = {
        10: 'Ten',
        11: 'Eleven',
        12: 'Twelve',
        13: 'Thirteen',
        14: 'Fourteen',
        15: 'Fifteen',
        16: 'Sixteen',
        17: 'Seventeen',
        18: 'Eighteen',
        19: 'Nineteen',
    }

    const dozens = {
        2: 'Twenty',
        3: 'Thirty',
        4: 'Forty',
        5: 'Fifty',
        6: 'Sixty',
        7: 'Seventy',
        8: 'Eighty',
        9: 'Ninety',
    }

    const tensPlace = (string, addSpace) => {
        let tensStr = '';

        if (string !== '00') {
            if (addSpace) tensStr += ' ';

            if (teens[string]) {
                tensStr += teens[string];
            } else {
                let holder = dozens[string[0]];
                if (string[1] !== '0' && string[0] !== '0') {
                    tensStr += `${holder} ${ones[string[1]]}`;
                } else if (string[1] === '0' && string[0] !== '0') {
                    tensStr += `${holder}`;
                } else if (string[1] !== '0' && string[0] === '0') {
                    tensStr += ones[string[1]];
                }
            }
        }

        return tensStr;
    }

    const subNumtoWord = (str) => {
        let temp = '';

        if (str.length === 1) temp = ones[str];

        if (str.length === 2) temp = tensPlace(str, false);

        if (str.length === 3) {
            let input = true;
            if (str[0] !== '0') {
                temp += `${ones[str[0]]} Hundred`;
            } else {
                input = false;
            }

            let remainingStr = str[1] + str[2];

            temp += tensPlace(remainingStr, input);
        }

        return temp;
    }

    let parsed = [], partial = '', count = 0, res = '';

    for (let i = num.length - 1; i >= 0 ; i--) {
        count++;
        partial = num[i] + partial;

        if (count === 3) {
            parsed.push(partial);
            partial = '';
            count = 0;
        }

        if (i === 0 && partial.length) parsed.push(partial);
    }

    for (let j = 0; j < parsed.length; j++) {
        if (parsed[j] === '000') continue;

        let word = subNumtoWord(parsed[j]);

        if (res.length) res = ' ' + res;

        if (j === 1) {
            res = ' Thousand' + res;
        } else if (j === 2) {
            res = ' Million' + res;
        } else if (j === 3) {
            res = ' Billion' + res;
        }

        res = word + res;
    }

    return res;
};

const num1 = 123;
const num2 = 12345;
const num3 = 1234567;
const num4 = 1234567891;

console.log(numberToWords(num1) === 'One Hundred Twenty Three');
console.log(numberToWords(num2) === 'Twelve Thousand Three Hundred Forty Five');
console.log(numberToWords(num3) === 'One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven');
console.log(numberToWords(num4) === 'One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One');
