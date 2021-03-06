/* eslint-disable guard-for-in */
/*
Medium:

We are working on a security system for a badged-access room in our company's building.
We want to find employees who badged into our secured room unusually often. We have an unordered list of names and entry times over a single day. Access times are given as numbers up to four digits in length using 24-hour time, such as "800" or "2250".
Write a function that finds anyone who badged into the room three or more times in a one-hour period, and returns each time that they badged in during that period. (If there are multiple one-hour periods where this was true, just return the first one.)
badge_times = [
  ["Paul",     "1355"],
  ["Jennifer", "1910"],
  ["John",      "835"],
  ["John",      "830"],
  ["Paul",     "1315"],
  ["John",     "1615"],
  ["John",     "1640"],
  ["Paul",     "1405"],
  ["John",      "855"],
  ["John",      "930"],
  ["John",      "915"],
  ["John",      "730"],
  ["John",      "940"],
  ["Jennifer", "1335"],
  ["Jennifer",  "730"],
  ["John",     "1630"],
  ["Jennifer",    "5"]
]

Expected output (in any order)
  John:  830  835  855  915  930
  Paul: 1315 1355 1405
*/

const badge_times = [
    ['Paul',     '1355'],
    ['Jennifer', '1910'],
    ['John',      '835'],
    ['John',      '830'],
    ['Paul',     '1315'],
    ['John',     '1615'],
    ['John',     '1640'],
    ['Paul',     '1405'],
    ['John',      '855'],
    ['John',      '930'],
    ['John',      '915'],
    ['John',      '730'],
    ['John',      '940'],
    ['Jennifer', '1335'],
    ['Jennifer',  '730'],
    ['John',     '1630'],
    ['Jennifer',    '5']
  ];

const findRedFlags = (array) => {
    let left = 0;
    let right = 1;
    let res = [];

    while (right < array.length) {
        let leftTime = Number(array[left]);
        let rightTime = Number(array[right]);

        if (leftTime >= rightTime - 100) {
            if (!res.length) res.push(leftTime);
            res.push(rightTime);
            right++;
        } else {
            if (res.length >= 3) return res;
            left++;
            res = [];
        }
    }

    return res.length >= 3 ? res : false;
}

const findShady = (twoDArray) => {
    let employees = {};
    let redFlags = {};

    for (let [employee, time] of twoDArray) employees[employee] ? employees[employee].push(time) : employees[employee] = [time];

    for (let employee in employees) {
        let timeStamps = employees[employee];

        timeStamps.sort((a, b) => a - b);

        const flags = findRedFlags(timeStamps);

        if (flags) redFlags[employee] = flags;
    }

    return redFlags;
}

console.log(findShady(badge_times))

/*
Hard:

We want to find employees who badged into our secured room together often. Given an unordered list of names and access times over a single day, find the largest group of people that were in the room together during two or more separate time periods, and the times when they were all present.
badge_records = [
  ["Paul",     "1214", "enter"],
  ["Paul",      "830", "enter"],
  ["Curtis",   "1100", "enter"],
  ["Paul",      "903", "exit"],
  ["John",      "908", "exit"],
  ["Paul",     "1235", "exit"],
  ["Jennifer",  "900", "exit"],
  ["Curtis",   "1330", "exit"],
  ["John",      "815", "enter"],
  ["Jennifer", "1217", "enter"],
  ["Curtis",    "745", "enter"],
  ["John",     "1230", "enter"],
  ["Jennifer",  "800", "enter"],
  ["John",     "1235", "exit"],
  ["Curtis",    "810", "exit"],
  ["Jennifer", "1240", "exit"],
]
Expected output:
  John, Paul, Jennifer: 830 to 900, 1230 to 1235
For this input data:
  From 830 til 900, the room contains Jennifer, John, and Paul.
  From 1230 til 1235, the room contains Curtis, Paul, Jennifer, and John.
The group "Jennifer, John, Paul" exists at both of these times, and is the largest group that exists multiple times.
You should note that the group is a subset of the people in the room from 1230 to 1235
*/

const badge_records = [
    ['Paul',     '1214', 'enter'],
    ['Paul',      '830', 'enter'],
    ['Curtis',   '1100', 'enter'],
    ['Paul',      '903', 'exit'],
    ['John',      '908', 'exit'],
    ['Paul',     '1235', 'exit'],
    ['Jennifer',  '900', 'exit'],
    ['Curtis',   '1330', 'exit'],
    ['John',      '815', 'enter'],
    ['Jennifer', '1217', 'enter'],
    ['Curtis',    '745', 'enter'],
    ['John',     '1230', 'enter'],
    ['Jennifer',  '800', 'enter'],
    ['John',     '1235', 'exit'],
    ['Curtis',    '810', 'exit'],
    ['Jennifer', '1240', 'exit'],
  ]

const findGroup = (twoDArray) => {
    twoDArray.sort((a, b) => a[1] - b[1]);
    let groups = new Map();
    let subGroups = {};
    let start, end;

    for (let [name, time, state] of twoDArray) {
        if (state === 'enter') {
            start = time;
            subGroups[name] = 1;
        } else {
            end = time;
            groups.set(Object.keys(subGroups).join(', '), [start, end])
            delete subGroups[name];
        }
    }

    return groups;
}


console.log(findGroup(badge_records))


/*
ESCAPE ROOMS:
youre given a set of codes to crack with a word bank, see if you can create any of the words in the word bank with the letters in the code.

constaints:
- a code is 7 letters long containing only all unique letters
- a word must contain the first letter in the code to be considered a valid word

input:
worslist: ['APPLE', 'PLEAS', 'PLEASE']
keypad: ['AELWXYZ', 'AELPXYZ', 'AELPSXY', 'SAELPRT', 'XAEBKSY']

output:
 [0, 1, 3, 2, 0]

 Explaination:
 keypad-
 index
 0 - (0) no words can be made
 1 - (1) apple can only be made
 2 - (3) all words can be made and contain key 'A'
 3 - (2) pleas and please can be made
 4 - (0) no words contain key 'X'

*/

// this solution is too slow
function numKeypadSolutions(wordlist, keypads) {
    let res = [];
    let wordBank = [];
    let keypadBank = [];

    for (let word of wordlist) {
        let wordObj = { unique: 0 };
        for (let char of word) {
            if (!wordObj[char]) {
                wordObj[char] = 1;
                wordObj.unique++;
            }
        }
        wordBank.push(wordObj);
    }

    for (let keypad of keypads) {
        let keypadObj = { key: keypad[0] };
        for (let char of keypad) {
            if (char !== keypad[0]) keypadObj[char] = 1;
        }
        keypadBank.push(keypadObj);
    }

    for (let i = 0; i < keypadBank.length; i++) {
        let currKeyPad = keypadBank[i];

        res.push(findWords(currKeyPad, wordBank));
    }

    return res;
}

function findWords(keypad, words) {
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let uniqueCounter = word.unique;

        if (!word[keypad.key]) continue;
        uniqueCounter--;
        for (let char in word) {
            if (keypad[char]) uniqueCounter--;
        }

        if (uniqueCounter === 0) count++;
    }

    return count;
}

// use hash map a - z
const numKeypadSolutionsII = (wordlist, keypads) => {
    let res = [];
    let wordBank = [];

    for (let word of wordlist) {
        let wordObj = { unique: 0 };
        for (let char of word) {
            if (!wordObj[char]) {
                wordObj[char] = 1;
                wordObj.unique++;
            }
        }
        wordBank.push(wordObj);
    }

    for (let keypad of keypads) {
        for (let i = 0; i < keypad.length; i++) {

        }
    }
}
