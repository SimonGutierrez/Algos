/*
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

const findFreeTime = (employeesTime) => {
    let allTimes = [];
    employeesTime.forEach((employeeTime) => {
        allTimes = [...allTimes, ...employeeTime];
    });

    allTimes.sort((a, b) => a[0] - b[0]);

    let result = [];

    for (let i = 0; i < allTimes.length - 1; i++) {
        let curr = allTimes[i];
        let next = allTimes[i + 1];
        if (curr[1] < next[0]) {
            result.push([curr[1], next[0]]);
        }
    }

    return result;
}

let schedule1 = [[[1, 2], [5, 6]], [[1, 3]], [[4, 10]]];
let schedule2 = [[[1, 3], [6, 7]], [[2, 4]], [[2, 5], [9, 12]]];

// Time: O(n*log(n)) sorting algo adds to time complex (quick sort);
// Space: O(n) ?? possible because assigning a new array when creating newTimes

console.log(findFreeTime(schedule1)) // [ [ 3, 4 ] ]
console.log(findFreeTime(schedule2)) // [[5,6],[7,9]]
