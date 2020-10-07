// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
// remove all dups in string

const removeDuplicatesI = (S)  => {

};


/*
Given a string s, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them causing the left and the right side of the deleted substring to concatenate together.

We repeatedly make k duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made.

It is guaranteed that the answer is unique.

Example 1:

Input: s = "abcd", k = 2
Output: "abcd"
Explanation: There's nothing to delete.
Example 2:


Input: s = "deeedbbcccbdaa", k = 3
Output: "aa"
Explanation:
First delete "eee" and "ccc", get "ddbbbdaa"
Then delete "bbb", get "dddaa"
Finally delete "ddd", get "aa"

*/

const removeDuplicates = (string, k) => {
    let stack = [];
    let result = '';

    for (let i = 0; i < string.length; i++) {
      let char = string[i];
      let peek = stack.length - 1;
        // save obj in the stack with vals character and count;
      if (stack[peek] && stack[peek].character === char) {
        stack[peek].count++
        if (stack[peek].count === k) stack.pop();
      }
      else {
        stack.push({ character: char, count: 1 });
      }
    }

    for (let {character, count} of stack) {
      result += character.repeat(count);
    }

    return result;
  }

  console.log(removeDuplicates('deeedbbcccbdaa', 3)) // 'aa'
