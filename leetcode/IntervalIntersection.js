// https://leetcode.com/problems/interval-list-intersections/submissions/

var intervalIntersection = function(A, B) {
    let Ai = 0, Bi = 0;
let res = [];

while (Ai < A.length && Bi < B.length) {
    let maxStart = Math.max(A[Ai][0], B[Bi][0]);
    let minEnd = Math.min(A[Ai][1], B[Bi][1]);

    if (maxStart <= minEnd) res.push([maxStart, minEnd]) // overlap found

    if (A[Ai][1] < B[Bi][1]) Ai++;
    else Bi++;
}

return res;
};

let test1 = [[0, 2], [5, 10], [13, 23], [24, 25]];
let test2 = [[1, 5], [8, 12], [15, 24], [25, 26]];

console.log(intervalIntersection(test1, test2)) // [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
