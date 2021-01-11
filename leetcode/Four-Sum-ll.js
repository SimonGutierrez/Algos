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
    // solve for two sum first
    const twoSum = (list1, list2) => {
        let map = new Map();

        for (let i = 0; i < list1.length; i++) {
            for (let j = 0; j < list2.length; j++){
                let sum = list1[i] + list2[j];
                let freq = map.has(sum) ? map.get(sum) + 1 : 1;
                map.set(sum, freq)
            }
        }

        return map;
    }

    let sum1 = twoSum(A, B);
    let sum2 = twoSum(C, D);
    let total = 0;

    sum1.forEach((value, key) => {
        let offSet = 0 - key;

        if (sum2.has(offSet)) {
            let sum1Sum2Freq = sum2.get(offSet) * sum1.get(key);
            total += sum1Sum2Freq;
        }
    });

    return total;
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
