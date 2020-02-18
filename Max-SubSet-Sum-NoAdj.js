function maxSubsetSumNoAdjacent(array) {
    let maxSums = [];

    for (let i = 0; i < array.length; i++) {
        let currNum = array[i];

        if (i <= 1) {
            maxSums.push(currNum);
        } else {
            findMaxSums(maxSums, currNum);
        }
    }

    return maxSums[maxSums.length - 1];
  }

function findMaxSums(array, nextNum) {
    const currSum = array[array.length - 1];
    const nextSum = array[array.length - 2] + nextNum;

    currSum > nextSum ? array.push(currSum) : array.push(nextSum);
}
