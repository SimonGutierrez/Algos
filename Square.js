/* eslint-disable guard-for-in */
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

        if (!currLetterS1 || dictS1[currLetterS1] > dictS2[currLetterS2]) {
            result += currLetterS2;
            pointerS2++;
        } else if (!currLetterS2 || dictS1[currLetterS1] < dictS2[currLetterS2]) {
            result += currLetterS1;
            pointerS1++;
        } else if (s1.charCodeAt(pointerS1) <= s2.charCodeAt(pointerS2)) {
            result += currLetterS1;
            pointerS1++;
        } else {
            result += currLetterS2;
            pointerS2++;
        }
    }

    return result;
}

// const test1 = 'dce';
// const test2 = 'cccbd';
// console.log(mergeStrings(test1, test2)) // 'dcecccbd'

// let test3 = 'super';
// let test4 = 'tower';
// console.log(mergeStrings(test3, test4)) // 'stouperwer'


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

// brute force approach
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

// optimal solution
const concatenationsSum2 = (a) => {
    let lowSum = 0;

    for (let num of a) lowSum += num;

    let sum = lowSum * a.length;

    for (let i = 0; i < a.length; i++) {
        let size = a[i].toString().length;
        let offset = ithPower(10, size);
        sum = sum + lowSum * offset;
    }

    return sum;
}

function ithPower(base, power) {
    let result = 1;

    for (let i = 1; i <= power; i++) result *= base;

    return result;
}

const concatenationsSum3 = (a) => {
    let lowSum = 0;
    let offsetSum = 0;
    for (let i = 0; i < a.length; i++) {
        lowSum += a[i];

        let size = a[i].toString().length;
        let offset = ithPower(10, size);
        offsetSum += offset;
    }

    return lowSum * a.length + lowSum * offsetSum;
}


// console.log(concatenationsSum([10, 2])) // 1344
// console.log(concatenationsSum([8])) // 88
// console.log(concatenationsSum([1, 2, 3])) // 198
// console.log(concatenationsSum2([10, 2])) // 1344
// console.log(concatenationsSum2([8])) // 88
// console.log(concatenationsSum2([1, 2, 3])) // 198


/*
apply gravity to a grid after a 90 deg roation;
restrictions:  - movable pieces are '*'
               - non-movable pieces are '#'
               - empty spaces are ''
               - a movable piece can only drop if empty spaces are avail
               - if a non-movable piece is in the way a movable one can not drop past it

input: [
    ['*', '', ''],
    ['*', '#', ''],
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
]

outPut: [
    ['', '', '', '*', ''],
    ['', '', '', '#', ''],
    ['', '', '', '', '*'],
]
*/

const rotateAndApplyGrav = (grid) => {
    // create our empty matrix with the right dimensions (aka original rotated 90 deg)
    let rotatedGrid = new Array(grid[0].length).fill().map(() => new Array(grid.length));
    // starting point for our new rotated grid
    let rotatedCol = rotatedGrid[0].length - 1;
    // fill in our rotated grid in the right order, fill in the rotated grid with vals from original grid col by col but starting from the end and working your way back, from the top of the last col (grid[0][grid[0].length]) moving down by rows, then once filled move to the next col to the left, repeat this process until the entire grid is filled. The original grid will be itterated through in normal order.
    for (let i = 0; i < grid.length; i++) {
        let row = grid[i];
        for (let j = 0; j < row.length; j++) {
            rotatedGrid[j][rotatedCol] = grid[i][j];
        }
        rotatedCol--;
    }

    // apply gravity to our newly rotated grid;
    for (let i = 0; i < rotatedGrid[0].length; i++) {
        let start = rotatedGrid.length - 1;
        let end = rotatedGrid.length - 2;
        // Scans from the bottom of the grid up, swapping '' with the first '*' element that occurs above it
        while (end >= 0) {
            // if start is empty space and end is a movable piece then swap them
            if (rotatedGrid[start][i] === '' && rotatedGrid[end][i] === '*') {
                let temp = rotatedGrid[start][i];
                rotatedGrid[start][i] = rotatedGrid[end][i];
                rotatedGrid[end][i] = temp;
                start--;
            } else if (rotatedGrid[start][i] !== '') {
                // keep moving start until you find the next avail empty space
                start--;
            } else if (rotatedGrid[end][i] === '#') {
                // if end ever falls on an in-movable piece Reset our start and end to be above that piece
                start = end - 1;
                end -= 2;
            } else {
                // keep moving end until you find a movable piece to swap
                end--;
            }
        }
    }
    return rotatedGrid;
}

let input = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
    ['*', '', ''],
    ['*', '#', ''],
]

// console.log(rotateAndApplyGrav(input));

// let twice = rotateAndApplyGrav(input);
// console.log(rotateAndApplyGrav(twice));

// let thrice = rotateAndApplyGrav(twice);
// console.log(rotateAndApplyGrav(thrice));


/*
You've created a new programming language, and now you've decided to add hashmap support to it. Actually you are quite disappointed that in common programming languages it's impossible to add a number to all hashmap keys, or all its values. So you've decided to take matters into your own hands and implement your own hashmap in your new language that has the following operations:

insert x y - insert an object with key x and value y.
get x - return the value of an object with key x.
addToKey x - add x to all keys in map.
addToValue y - add y to all values in map.
To test out your new hashmap, you have a list of queries in the form of two arrays: queryTypes contains the names of the methods to be called (eg: insert, get, etc), and queries contains the arguments for those methods (the x and y values).

Your task is to implement this hashmap, apply the given queries, and to find the sum of all the results for get operations.

Example

For queryType = ["insert", "insert", "addToValue", "addToKey", "get"] and query = [[1, 2], [2, 3], [2], [1], [3]], the output should be hashMap(queryType, query) = 5.

The hashmap looks like this after each query:

1 query: {1: 2}
2 query: {1: 2, 2: 3}
3 query: {1: 4, 2: 5}
4 query: {2: 4, 3: 5}
5 query: answer is 5
The result of the last get query for 3 is 5 in the resulting hashmap.


*/

function hashMap(queryType, query) {
    let myMap = [];

    for (let i = 0; i < queryType.length; i++) {
        let currQtype = queryType[i];
        let currQ = query[i];

        if (currQtype === 'insert') {
            myMap[currQ[0]] = currQ[1];
        } else if (currQtype === 'addToValue') {
            for (let j = 0; j < myMap.length; j++) {
                let elem = myMap[j];
                if (typeof elem === 'number') {
                    myMap[j] += currQ[0]
                }
            }
        } else if (currQtype === 'addToKey') {
            let add = new Array(currQ[0]);
            myMap = add.concat(myMap);
        } else if (currQtype === 'get') {
            return myMap[currQ[0]];
        }
    }
}

let testQ1 = ['insert', 'insert', 'addToValue', 'addToKey', 'get'];
let testQ2 = [[1, 2], [2, 3], [2], [1], [3]];

// console.log(hashMap(testQ1, testQ2)) // 5

/*
Example

For a = [25, 35, 872, 228, 53, 278, 872], the output should be digitAnagrams(a) = 4.

There are 4 pairs of digit anagrams:

a[1] = 35 and a[4] = 53 (i = 1 and j = 4),
a[2] = 872 and a[5] = 278 (i = 2 and j = 5),
a[2] = 872 and a[6] = 872 (i = 2 and j = 6),
a[5] = 278 and a[6] = 872 (i = 5 and j = 6).

*/

function digitAnagrams(a) {
    // let count = 0;
    // let hash = {};

    // for (let i = 0; i < a.lngth; i++) {
    //     let num = a[i];
    //     let key =
    // }

    // return count;
}

// console.log(digitAnagrams([25, 35, 872, 228, 53, 278, 872])) // 4


/*
find longest arithmitic Progression: find the AP in array A and B to from a longer array; if no array can be made return -1;

where arithmitic Progression = a{n) = a(1) + (n-1)d;

Example:
A = [0, 4, 8, 16]
B = [0, 2, 6, 12, 14, 20]

output = 6 => [0, 4, 8, 12, 16, 20]

*/

/*
sub matrix finder - in a grid KxK find a square MxM that has the largest sum; if multiple squares have the max sum of only one, add all UNIQUE nums together,

example : [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
]

outPut = 10 (1 + 2 + 3 + 4) 4x4;

*/

/*
PalindromeCutter:

cut a string down by its longest consecutive palen until it has no more palendromes in it;
        1       =>      2    => 3
ex: 'aaacodedoc' => 'codedoc' => ''

output = '';

ex: 'codesignal'

output = 'codesignal'

*/

const paliCutter = (string) => {

    const isPali = (left, right) => {
        while (left < right) {
            if (string[left] !== string[right]) return false;

            left++;
            right--;
        }

        return true;
    }

    let left = 0;

    while (left < string.length) {
        let right = string.length - 1;

        while (left < right) {
            if (isPali(left, right)) {
                string = string.slice(0, left) + string.slice(right + 1);
                left = 0;
                right = string.length - 1;
            } else {
                right--;
            }
        }

        left++;
    }

    return string;
}

// console.log(paliCutter('aaacodedoc')) // ''
// console.log(paliCutter('codesignal')) // 'codesignal'
// console.log(paliCutter('codaaab')) // 'codb'
// console.log(paliCutter('a')) // 'a'


/*
Create a function that outputs a leaderboard sorted by customers who have spent the most at a shop

input:
   name - price - months from today
 - Alison,   9,     2
 - Charlie, 12,     2
 - Bob,     10,     1
 - Alison,   5,     1
 - Dave,     5,     1

Task 1:
- create a function to take in one trans action at a time

Task 2:
- create a sorted leaderboard by top paying customer

Task 3:
- also filter these customers by most relevant by time of most recent purchase
*/

const updateLB = (transaction, lb) => {
    let [name, price, time] = transaction;

    if (lb[name]) {
        lb[name].price = lb[name].price + price;
        lb[name].time = time;
    } else {
        lb[name] = {};
        lb[name].price = price;
        lb[name].time = time;
    }
}

const sortLB = (lb) => {
    let sorted = [];

    for (let key in lb) {
        let customer = {name: key, ...lb[key]}
        sorted.push(customer)
    }

    let filtered = sorted.filter((elem) => elem.time === 1);

    filtered.sort((a, b) => b.price - a.price);

    return filtered;
}

let leaderboard = {};

updateLB(['Alison', 9, 2], leaderboard);
updateLB(['Charlie', 12, 2], leaderboard);
updateLB(['Bob', 10, 1], leaderboard);
updateLB(['Alison', 5, 1], leaderboard);
updateLB(['Dave', 5, 1], leaderboard);

// console.log(leaderboard);
// console.log(sortLB(leaderboard));


/*
Round2: use a trie to store and retrieve data

write two methods for the trie:

insert:
    - input: ipAdress: '10', port: 3;
    - output:
        trie -
            root
            /  \
           0    1
                /
               0 - 3

    - input: ipAdress: '0101', port: 10;
    - ouput:
            root
            /  \
           0    1
           \     /
            1   0 - 3
            /
           0
            \
             1 - 10

    - input: ipAdress: '1111', port: 8;
    - ouput:
              root
            /     \
           0       1
           \    /    \
            1  0 - 3   1
            /           \
           0             1
            \             \
             1 - 10        1 - 8

get: retrieve the closest avail port to string input
    - input('101010');
    - output: 3
*/

class Node {
    constructor(left, right, val) {
        this.left = left;
        this.right = right;
        this.val = val;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(ipAdress, port) {
        let currNode = this.root;

        for (let i = 0; i < ipAdress.length; i++) {

            if (ipAdress[i] === '0' ) {
                if (currNode.left === undefined) currNode.left = new Node();
                currNode = currNode.left;
            }

            if (ipAdress[i] === '1' ) {
                if (currNode.right === undefined) currNode.right = new Node();
                currNode = currNode.right;
            }
        }

        currNode.val = port;
    }

    get(ipAdress) {
        let curNode = this.root;

        for (let i = 0; i < ipAdress.length; i++) {
            let char = ipAdress[i];

            if (char === '0') {
                curNode = curNode.left;
            } else {
                curNode = curNode.right;
            }

            if (curNode.val) return curNode.val;
        }
    }
}

const myTrie = new Trie();

myTrie.insert('10', 3);

console.log(myTrie.root.right.left.val); // 3

myTrie.insert('0101', 10);

console.log(myTrie.root.left.right.left.right.val); // 10

myTrie.insert('1111', 8);

console.log(myTrie.root.right.right.right.right.val); // 8

console.log(myTrie.get('101010')); // 3
