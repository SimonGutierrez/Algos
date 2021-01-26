// leet code link: https://leetcode.com/problems/decode-string/
/*
Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

Example 1:
Input: s = "3[a]2[bc]"
Output: "aaabcbc"

Example 2:
Input: s = "3[a2[c]]"
Output: "accaccacc"

Example 3:
Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"

Example 4:
Input: s = "abc3[cd]xyz"
Output: "abccdcdcdxyz"
*/

const string1 = '3[a]2[bc]';
const string2 = '3[a2[c]]';

const decodeString = (string) => {
    let stack = [];

    for (let char of string) {
        if (char !== ']') {
            stack.push(char);
            continue;
        }
        let curr = stack.pop();
        let str = '';

        while (curr !== '[') {
            str = curr + str;
            curr = stack.pop();
        }

        let num = '';
        curr = stack.pop();

        while (!Number.isNaN(Number(curr))) {
            num = curr + num;
            curr = stack.pop();
        }
        stack.push(curr);
        stack.push(str.repeat(Number(num)));
    }

    return stack.join('');
}

console.log(decodeString(string1)) // aaabcbc
console.log(decodeString(string2)) // accaccacc
