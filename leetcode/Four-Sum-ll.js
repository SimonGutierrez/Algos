/* eslint-disable complexity */
/*
Leet Code Link: https://leetcode.com/problems/4sum-ii/

Given four lists A, B, C, D of integer values, compute how many tuples (i, j, k, l) there are such that A[i] + B[j] + C[k] + D[l] is zero.

To make problem a bit easier, all A, B, C, D have same length of N where 0 ≤ N ≤ 500. All integers are in the range of -228 to 228 - 1 and the result is guaranteed to be at most 231 - 1.

Example:

Input:
A = [ 1, 2]
B = [-2,-1]
C = [-1, 2]
D = [ 0, 2]

Output:
2

Explanation:
The two tuples are:
1. (0, 0, 0, 1) -> A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0
*/

const fourSumCount = (A, B, C, D) => {
    let counter = 0;
    let newList = [...A, ...B, ...C, ...D];
    newList.sort((a, b) => a - b);

    for (let i = 0; i < newList.length - 3; i++) {
        for (let j =  i + 1; j < newList.length - 2; j++) {
            let k = j + 1;
            let l = newList.length - 1;
            while (k < l) {
                let sum = newList[i] + newList[j] + newList[k] + newList[l];
                if (sum === 0) {
                    console.log(i, j, k, l)
                    counter++;
                    while (newList[k] === newList[k + 1]) k++;
                    while (newList[l] === newList[l - 1]) l--;
                    k++;
                    l--;
                } else if (sum > 0) {
                    l--;
                } else {
                    k++;
                }
            }
            while (newList[j] === newList[j + 1]) j++;
        }
        while (newList[i] === newList[i + 1]) i++;
    }

    return counter;
};

const A = [ 1, 2];
const B = [-2, -1];
const C = [-1, 2];
const D = [ 0, 2];


const E = [-1, -1];
const F = [-1, 1];
const G = [-1, 1];
const H = [1, -1];

console.log(fourSumCount(A, B, C, D)) // 2
console.log(fourSumCount(E, F, G, H)) // 6
