/*
Lint Code link: https://aaronice.gitbook.io/lintcode/sweep-line/employee-free-time

We are given a list scheduleof employees, which represents the working time for each employee.
Each employee has a list of non-overlappingIntervals, and these intervals are in sorted order.
Return the list of finite intervals representing common, positive-length free time forallemployees, also in sorted order.
Example 1:
Input:
 schedule = [[[1,2],[5,6]],[[1,3]],[[4,10]]]

Output:
 [[3,4]]

Explanation:

There are a total of three employees, and all common
free time intervals would be [-inf, 1], [3, 4], [10, inf].
We discard any intervals that contain inf as they aren't finite.
*/

class Interval {
    constructor (start, end) {
        this.start = start;
        this.end = end;
    }
}

const findFreeTime = (employeesTime) => {
    if (employeesTime.length <= 1) return [];

    let allTimes = [], result = [];

    employeesTime.forEach((employeeTime) => {
        allTimes = [...allTimes, ...employeeTime];
    });

    allTimes.sort((a, b) => a.start - b.start);

    for (let i = 0; i < allTimes.length - 1; i++) {
        let curr = allTimes[i], next = allTimes[i + 1];

        if (curr.end < next.start) result.push(new Interval(curr.end, next.start));
    }

    return result;
}

let schedule1 = [[new Interval(1, 2), new Interval(5, 6)], [new Interval(1, 3)], [new Interval(4, 10)]];
let schedule2 = [[new Interval(1, 3), new Interval(6, 7)], [new Interval(2, 4)], [new Interval(2, 5), new Interval(9, 1)]];
let schedule3 = [];

// Time: O(n*log(n)) sorting algo adds to time complex (quick sort);
// Space: O(n) ?? possible because assigning a new array when creating newTimes

console.log(findFreeTime(schedule1)) // [ {3, 4} ]
console.log(findFreeTime(schedule2)) // [{5,6},{7,9}]
console.log(findFreeTime(schedule3)) // []


/*
merge intervals

leetcode Link: https://leetcode.com/problems/merge-intervals/

*/

const merge = (intervals) => {
    if (!intervals.length) return [];

    intervals.sort((a, b) => a[0] - b[0]);

    let result = [intervals[0]];

    for (let interval of intervals) {
       let temp = result[result.length - 1];

       if (interval[0] >= temp[0] && interval[0] <= temp[1]) {
           if (interval[1] > temp[1]) {
               result.pop();
               result.push([temp[0], interval[1]]);
           }
       } else {
        result.push(interval);
        }
    }

    return result;
}

let test1 = [[1, 3], [2, 6], [8, 10], [15, 18]];
let test2 = [[1, 4], [4, 5]];
let test3 = [[1, 4], [2, 3]];

console.log(merge(test1)) // [ [ 1, 6 ], [ 8, 10 ], [ 15, 18 ] ]
console.log(merge(test2)) // [ [ 1, 5 ] ]
console.log(merge(test3)) // [ [ 1, 4 ] ]
