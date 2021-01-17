// https://leetcode.com/problems/gas-station/


const canCompleteCircuit = (gas, cost) => {
    for (let  i = 0; i < gas.length; i++) {
        let j = i + 1;
        let found = true;
        let sum = gas[i];
        let count = 0;

        while (count < gas.length) {
            count++;

            if (j === gas.length) j = 0;

            j === 0 ? sum -= cost[cost.length - 1] : sum -= cost[j - 1];

            if (sum < 0) {
                found = false;
                break;
            }
            sum += gas[j];
            j++;
        }

        if (found) return i;
    }

    return -1;
};

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])) // 3
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3])) // -1
console.log(canCompleteCircuit([3, 1, 1], [1, 2, 2])) // -1

