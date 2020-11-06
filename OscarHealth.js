/*
sort a list of transactions by num of occur first then by the name of the transaction

return strings should be in 'string numOfOccur' format
*/

function groupTransactions(transactions) {
    let seen = new Map();
    let numOfTimes = {};

    for (let transaction of transactions) {
        if (seen.has(transaction)) {
            numOfTimes[transaction]++;
            seen.set(transaction, `${transaction} ${numOfTimes[transaction]}`);
        } else {
            numOfTimes[transaction] = 1;
            seen.set(transaction, `${transaction} ${numOfTimes[transaction]}`);
        }
    }

    let ordered = [...seen.values()].sort((a, b) => {
       if (a[a.length - 1] !== b[b.length - 1]) {
           return b[b.length - 1] - a[a.length - 1];
       } else {
           return a.split(' ')[0].localeCompare(b.split(' ')[0]);
       }
    })

    return ordered;
}

let test = ['bin', 'can', 'bin', 'bin']
let test2 = ['kkldp', 'kkldp', 'kkldp', 'zzxl', 'aabbs', 'bbuuy']

console.log(groupTransactions(test));
console.log(groupTransactions(test2));

/*

Setup:
a word has a char code 'A - Z': 65 - 92
                        'a - z': 97 - 123
                        ' ': 32
given the string 'Find the truth ' in char code and reversed is
'23401611711411611231014016112300101150107'

write a function that prints out the encoded mesage
*/

function decode(encode) {
    let alphabetBank = new Map();
    let message = '';

    for (let i = 0; i < 26; i++) alphabetBank.set(`${i + 65}`, String.fromCharCode(i + 65));
    for (let i = 0; i < 26; i++) alphabetBank.set(`${i + 97}`, String.fromCharCode(i + 97));
    alphabetBank.set('32', ' ');

    let pointer = encode.length - 1;

    while (encode[pointer]) {
        let twoDigits = encode[pointer] + encode[pointer - 1];

        if (alphabetBank.has(twoDigits)) {
            message += alphabetBank.get(twoDigits);
            pointer -= 2;
        } else {
            let threeDigits = encode[pointer] + encode[pointer - 1] + encode[pointer - 2];
            message += alphabetBank.get(threeDigits);
            pointer -= 3;
        }
    }

    return message;
}

let encode1 = '23401611711411611231014016112300101150107'

console.log(decode(encode1)) // 'Find the truth '
