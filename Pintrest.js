/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable complexity */

/*
You are running a classroom and suspect that some of your students are passing around the answers to multiple choice questions disguised as random strings.

Your task is to write a function that, given a list of words and a string, finds and returns the word in the list that is scrambled up inside the string, if any exists. There will be at most one matching word. The letters don't need to be contiguous.

Example:
words = ['cat', 'dog', 'bird', 'car', 'ax', 'baby']
string1 = 'tcabnihjs'
find_embedded_word(words, string1) -> cat

string2 = 'tbcanihjs'
find_embedded_word(words, string2) -> cat

string3 = 'baykkjlbbbbbbbbbbbbbbbbb'bbbbbbbbbbbbbbbbaby
bbbbbbbbbbbbbaby
find_embedded_word(words, string3) -> None

string4 = 'bbabylkkj'
find_embedded_word(words, string4) -> baby

n = number of words in `words`
m = maximal string length of each word

*/

const wordsList = ['cat', 'dog', 'bird', 'car', 'ax', 'baby'];
const string1 = 'tcabnihjs';
const string2 = 'tbcanihjs';
const string3 = 'baykkjl';
const string4 = 'bbabylkkj';

const isCheating = (words, string) => {
    let stringBank = {};

    for (let char of string) stringBank[char] ? stringBank[char]++ : stringBank[char] = 1;

    for (let i = 0; i < words.length; i++) {
        let word = words[i], wordBank = {}, count = 0;

        for (let char of word) {
            wordBank[char] ? wordBank[char]++ : wordBank[char] = 1;

            if (wordBank[char] <= stringBank[char]) count++;
        }

        if (count === word.length) return word;
    }

    return 'None';
 }

console.log(isCheating(wordsList, string1)) // cat
console.log(isCheating(wordsList, string2)) // cat
console.log(isCheating(wordsList, string3)) // none
console.log(isCheating(wordsList, string4)) // baby

/* Your students are getting craftier and hiding words in 2D grids of letters. The word may start anywhere in the grid, and consecutive letters can be either immediately below or immediately to the right of the previous letter.

Given a grid and a word, write a function that returns the location of the word in the grid as a list of coordinates. If there are multiple matches, return any one.

grid1 = [
	['c', 'c', 'c', 'a', 'r', 's'],
	['c', 'c', 'i', 't', 'n', 'b'],
	['a', 'c', 'n', 'n', 't', 'i'],
	['t', 'c', 'i', 'i', 'p', 't']
]

word1_1 = "catnip"
find_word_location(grid1, word1_1)-> [ (0, 2), (0, 3), (1, 3), (2, 3), (3, 3), (3, 4) ]

word1_2 = "cccc"
find_word_location(grid1, word1_2)-> [(0, 1), (1, 1), (2, 1), (3, 1)]
OR [(0, 0), (1, 0), (1, 1), (2, 1)]
OR [(0, 0), (0, 1), (1, 1), (2, 1)]
OR [(1, 0), (1, 1), (2, 1), (3, 1)]


grid2 = [
    ['c', 'p', 'a', 'n', 't', 's'],
    ['a', 'b', 'i', 't', 'a', 'b'],
    ['t', 'f', 'n', 'n', 'c', 'i'],
    ['x', 's', 'c', 'a', 't', 'n'],
    ['x', 's', 'd', 'd', 'e', 'a'],
    ['s', 'q', 'w', 'x', 's', 'p']
]


word2 = "catnap"
find_word_location(grid2, word2)-> [ (3, 2), (3, 3), (3, 4), (3, 5), (4, 5), (5, 5) ]

grid3 = [
    ['c', 'r', 'c', 'a', 'r', 's'],
    ['a', 'b', 'i', 't', 'n', 'i'],
    ['t', 'f', 'n', 'n', 'x', 'p'],
    ['x', 's', 'i', 'x', 'p', 't']]
word3 = "catnip"
find_word_location(grid3, word3)-> [ (0, 2), (0, 3), (1, 3), (1, 4), (1, 5), (2, 5) ]

n = number of rows
m = number of columns
w = length of the word


*/

const findWordInGrid = (grid, word) => {
    let queue = [[0, 0]];
    let result = [];
    let wordPointer = 0;
    while (queue.length || result.length !== word.length || word[wordPointer]) {
        let coord = queue.pop();
        let row = coord[0];
        let col = coord[1];

        if (grid[row][col] === word[wordPointer]) {
            let newPointer = wordPointer++;
            result.push(coord);
            let newRow = row++;
            let newCol = col--;
            if (grid[newRow][col] === word[newPointer]) {
                queue.push([newRow, col]);
                wordPointer = newPointer;
            } else if (grid[row][newCol] === word[newPointer]) {
                queue.push([newRow, col]);
                wordPointer = newPointer;
            } else {
                // move backwards
            }
        } else {

            // keep moving down the row;
        }
    }
}

// leet code decription
/**
message = "Hello World!";
r1 = 3
c1 = 4


H e l l
o   W o
r l d !

Output -----> "Hore llWdlo!"

message = "Hello World!";
r2 = 6
c2 = 2

H e
l l
o
W o
r l
d !

Output -----> "HloWrdel  ol!"

message = "Hello World!";
r2 = 2
c2 = 6

H e l l o
W o r l d !

Output -----> "HWeolrllod !"


message = "I have a Dream";
r4 = 7
c4 = 2

I
h a
v e
  a
  D
r e
a m

Output -----> "Ihv   raaeaDem"
 */
const encyrpt = (message, row, col) => {
    let result = '';
// loop until you have filled each col
    for (let i = 0; i < col; i++) {
        let j = i;
        // fill each col with the correct letters
        while (message[j]) {
            // add them to our result
            result += message[j];
            j += col;
        }
    }

    return result;
  }

const encryptII = (message, row, col) => {
    let grid = new Array(row).fill().map(elem => new Array(col));
    let pointer = 0;
    let res = '';

    for (let i = 0; i < grid.length; i++) {
        let row = grid[i];
        for (let j = 0; j < col; j++) {
            row[j] = message[pointer];
            pointer++;
        }
    }

    for (let k = 0; k < col; k++) {
        let curRow = 0;

        while (curRow < row) {
            res += grid[curRow][k];
            curRow++;
        }
    }

    return res;
}

const message = 'Hello World!';
const r1 = 3;
const c1 = 4;


const r2 = 6;
const c2 = 2;
const r3 = 2;
const c3 = 6;


const message2 = 'I have a Dream';
const r4 = 7
const c4 = 2


/*
ij
'Hello World!'


H e l l

o   W o

r l d !
*/

// console.log(encyrpt(message, r1, c1));
// console.log(encyrpt(message, r1, c1) === 'Hore llWdlo!')
// // console.log(encyrpt(message, r2, c2));
// console.log(encryptII(message, r2, c2) === 'HloWrdel ol!')
// // console.log(encyrpt(message, r3, c3));
// console.log(encyrpt(message, r3, c3) === 'HWeolrllod !')
// // console.log(encyrpt(message2, r4, c4));
// console.log(encyrpt(message2, r4, c4) === 'Ihv  ra aeaDem')

///////////////////
/*

A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
T h e g i r l w a n s o b z c v d f j u k m y p q x

const key = "The girl wants a goblins, zebras, caves, dogs, fish, jesus, kings, monkeys, percs, queen, xmen";
const message = "It was all a Dream!"

Output ---> "au yTj Too T gfiTb!"
 */

// time complexity = O(n + m) // we loop through the key and the message who both have diff lengths;
// space complexity = O(1) // at max our banks will only contain 26 items;

const encyrptedMessage = (messageToEncrypt, key) => {
    let alphabetBank = new Map();
    let keyBank = new Set();
    let encrypted = '';
    // create our alphabet bank and set each letter A - Z with  corrispnding Vals 0 - 25 to reference when encrypting message;
    for (let i = 0; i < 26; i++) alphabetBank.set(String.fromCharCode(i + 65), i);
    // create our keyBank with no repeating letters in key to ref, use a set to achieve this;
    for (let j = 0; j < key.length; j++) {
        let char = key[j];
        if (alphabetBank.has(char.toUpperCase()) && !keyBank.has(char.toUpperCase())) keyBank.add(char);
    }
    // spread the vals in the set in an array to quick look up vals with an index;
    keyBank = [...keyBank];
    // encrypt our message using both banks, search for each letter in our alpha bank to get the index at which the new encrypted message will use;
    for (let k = 0; k < messageToEncrypt.length; k++) {
        let messageChar = messageToEncrypt[k];
        if (alphabetBank.has(messageChar.toUpperCase())) {
            let lookupIndx = alphabetBank.get(messageChar.toUpperCase());
            encrypted += keyBank[lookupIndx];
        } else {
            encrypted += messageChar;
        }
    }

    return encrypted;
}

const key = 'The girl wants a goblins, zebras, caves, dogs, fish, jesus , kings , monkeys, percs, queen, xmen';
const message3 = 'It was all a Dream!';

// console.log(encyrptedMessage(message3, key));
// console.log(encyrptedMessage(message3, key) === 'au yTj Too T gfiTb!');
// correct version of problem*
const encryptMessage = (key, message) => {
    let result = '';
    let map = new Map();
    let keySet = new Set();

  for (let i = 0; i < 26; i++) map.set(String.fromCharCode(i + 65), i)

  for (let j = 0; j < key.length; j++) {
    let char = key[j];
    // check if its in the key for doubles! 'T' & 't';
    if (map.has(char.toUpperCase()) && !keySet.has(char.toUpperCase())) {
      keySet.add(char);
    }
  }

  keySet = [...keySet];

  for (let k = 0; k < message.length; k++) {
    let char = message[k];
    // forgot the to use toUpperCass!!!!
    if (map.has(char.toUpperCase())) {
      let index = map.get(char.toUpperCase());
      if (k === 0) {
        result += keySet[index].toUpperCase();
      } else {
        result += keySet[index].toLowerCase();
      }

    } else {
      result += char;
    }
  }

    return result;
}
