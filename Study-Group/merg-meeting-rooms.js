/*
 Your company built an in-house calendar tool called HiCal. You want to add a feature to see the times in a day when everyone is available.

To do this, you’ll need to know when any team is having a meeting. In HiCal, a meeting is stored as objects ↴ with integer properties startTime and endTime. These integers represent the number of 30-minute blocks past 9:00am.

For example:

{ startTime: 2, endTime: 3 }  // meeting from 10:00 – 10:30 am
{ startTime: 6, endTime: 9 }  // meeting from 12:00 – 1:30 pm

JavaScript
Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges.
*/

const mergeRanges = (meetings) => {
    meetings.sort((a, b) => a.startTime - b.startTime);
    let result = [meetings[0]];

    for (let i = 1; i < meetings.length; i++) {
        let prev = result[result.length - 1];
        let curr = meetings[i];

        if (prev.endTime >= curr.startTime) {
            result[result.length - 1] = {
                startTime: Math.min(prev.startTime, curr.startTime),
                endTime: Math.max(prev.endTime, curr.endTime)
            }
        } else {
            result.push(curr);
        }
    }

    return result;
}

console.log(mergeRanges([{ startTime: 5, endTime: 6 }, { startTime: 6, endTime: 8 }])); // [{ startTime: 5, endTime: 8 }]
console.log(mergeRanges([{ startTime: 1, endTime: 3 }, { startTime: 4, endTime: 8 }])); // [{ startTime: 1, endTime: 3 }, { startTime: 4, endTime: 8 }]
console.log(mergeRanges([
    { startTime: 1, endTime: 4 },
    { startTime: 5, endTime: 8 },
    { startTime: 2, endTime: 5 },
  ])); // [{ startTime: 1, endTime: 8 }]

// LeetCode Link: https://leetcode.com/problems/merge-intervals/

const merge = (intervals) => {
    intervals.sort((a, b) => a[0] - b[0]);

    let result = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        let peek = result[result.length - 1];
        let curr = intervals[i];
        if (peek[1] >= curr[0]) {
            let newInterval = [peek[0], Math.max(peek[1], curr[1])];
            result.pop();
            result.push(newInterval);
        } else  {
            result.push(curr);
        }
    }

    return result;
}

let test1 = [[1, 3], [2, 6], [8, 10], [15, 18]];

console.log(merge(test1)) // [[1,6],[8,10],[15,18]]


// leetcode Link: https://leetcode.com/problems/insert-interval/
// insert an interval then merge intervals;

const insert = (intervals, newInterval) => {

    let combine = intervals.length ? [] : [newInterval];
    let pushed = false;

    for (let elem of intervals) {
        if (elem[0] > newInterval[0] && !pushed) {
            combine.push(newInterval);
            combine.push(elem);
            pushed = true;
        } else {
            combine.push(elem)
        }
    }

    if (!pushed) combine.push(newInterval);

    const merged = merge(combine);

    return merged;
}

const test2 = [[[1, 5]], [2, 7]]

console.log(insert(test2[0], test2[1])) // [1, 7]
