// https://leetcode.com/problems/validate-stack-sequences/

const validateStackSequences = (pushed, popped) => {
    let stack = [];
    let popPointer = 0;

    for (let i = 0 ; i < pushed.length; i++) {
        stack.push(pushed[i]);

        let peek = stack[stack.length - 1];

        while (peek === popped[popPointer] && stack.length) {
            stack.pop();
            popPointer++;
            peek = stack[stack.length - 1];
        }
    }

    return stack.length === 0;
};

console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1])) // true
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2])) // false
