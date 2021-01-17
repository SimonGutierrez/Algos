// https://leetcode.com/problems/validate-stack-sequences/

const validateStackSequences = (pushed, popped) => {
    let stack = [];
    let popPointer = 0;

    for (let i = 0 ; i < pushed.length; i++) {
        stack.push(pushed[i]);

        while (stack.length && stack[stack.length - 1] === popped[popPointer]) {
            stack.pop();
            popPointer++;
        }
    }

    return stack.length === 0;
};

// Time: O(N) - where N is the length of pushed and poped items
// Space: O(N) - saving your own stack with N elems

console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1])) // true
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2])) // false
