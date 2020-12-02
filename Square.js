/* eslint-disable complexity */
/* eslint-disable max-statements */

/*
merge two strings together using the folling conditions:
1) add the letter with the least amount of occuranses first
example: 'dce' 'cccdb' here d will be added bc its occurance is 1 in its string and c is 3 in its sting;

2) if num of occurances are equal compare in alpha order aka comapare char codes;
exaple: 'super' 'tower' here s will go first bc it comes before t in the aplhabet, and so on..

3) if the occurances and letters are the same S1 will always go first by default;
*/
function mergeStrings(s1, s2) {
    let dictS1 = {};
    let dictS2 = {};
    let result = '';

    for (let letter of s1) {
        if (dictS1[letter]) {
            dictS1[letter]++;
        } else {
            dictS1[letter] = 1;
        }
    }

    for (let letter of s2) {
        if (dictS2[letter]) {
            dictS2[letter]++;
        } else {
            dictS2[letter] = 1;
        }
    }

    let pointerS1 = 0;
    let pointerS2 = 0;

    while (s1[pointerS1] || s2[pointerS2]) {
        let currLetterS1 = s1[pointerS1];
        let currLetterS2 = s2[pointerS2];

        if (!s1[pointerS1]) {
            result += currLetterS2;
            pointerS2++;
        } else if (!s2[pointerS2]) {
            result += currLetterS1;
            pointerS1++;
        } else if (dictS1[currLetterS1] < dictS2[currLetterS2]) {
            result += currLetterS1;
            pointerS1++;
        } else if (dictS1[currLetterS1] > dictS2[currLetterS2]) {
            result += currLetterS2;
            pointerS2++;
        } else if (s1.charCodeAt(pointerS1) < s2.charCodeAt(pointerS2)) {
            result += currLetterS1;
            pointerS1++;
        } else if (s1.charCodeAt(pointerS1) > s2.charCodeAt(pointerS2)) {
            result += currLetterS2;
            pointerS2++;
        } else {
            result += currLetterS1;
            pointerS1++;
        }
    }

    return result;
}

const test1 = 'dce';
const test2 = 'cccbd';
console.log(mergeStrings(test1, test2)) // 'dcecccbd'

let test3 = 'super';
let test4 = 'tower';
console.log(mergeStrings(test3, test4)) // 'stouperwer'


/*
Given an array of positive integers a, your task is to calculate the sum of every possible a[i] ∘ a[j], where a[i] ∘ a[j] is the concatenation of the string representations of a[i] and a[j] respectively.

Example

For a = [10, 2], the output should be concatenationsSum(a) = 1344.

a[0] ∘ a[0] = 10 ∘ 10 = 1010,
a[0] ∘ a[1] = 10 ∘ 2 = 102,
a[1] ∘ a[0] = 2 ∘ 10 = 210,
a[1] ∘ a[1] = 2 ∘ 2 = 22.
So the sum is equal to 1010 + 102 + 210 + 22 = 1344.

For a = [8], the output should be concatenationsSum(a) = 88.

There is only one number in a, and a[0] ∘ a[0] = 8 ∘ 8 = 88, so the answer is 88.

For a = [1, 2, 3], the output should be concatenationsSum(a) = 198.

a[0] ∘ a[0] = 1 ∘ 1 = 11,
a[0] ∘ a[1] = 1 ∘ 2 = 12,
a[0] ∘ a[2] = 1 ∘ 3 = 13,
a[1] ∘ a[0] = 2 ∘ 1 = 21,
a[1] ∘ a[1] = 2 ∘ 2 = 22,
a[1] ∘ a[2] = 2 ∘ 3 = 23,
a[2] ∘ a[0] = 3 ∘ 1 = 31,
a[2] ∘ a[1] = 3 ∘ 2 = 32,
a[2] ∘ a[2] = 3 ∘ 3 = 33.
The total result is 11 + 12 + 13 + 21 + 22 + 23 + 31 + 32 + 33 = 198.
*/


const concatenationsSum = (a) => {
    let result = [];

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length; j++) {
            let subconcat = `${String(a[i])}`;
            subconcat += `${String(a[j])}`;
            result.push(subconcat);
        }
    }
    // number the whole reduce incase it is a single number
    return Number(result.reduce((strNum1, strNum2) => Number(strNum1) + Number(strNum2)));
}

console.log(concatenationsSum([10, 2])) // 1344
console.log(concatenationsSum([8])) // 88
console.log(concatenationsSum([1, 2, 3])) // 198
