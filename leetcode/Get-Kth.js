// https://leetcode.com/problems/sort-integers-by-the-power-value/

const findPower = (num) => {
    let count = 0;

    while (num !== 1) {
        if (num % 2 === 0) {
            num /= 2;
        } else {
            num = (num * 3) + 1;
        }
        count++;
    }

    return count;
}

const getKth = (lo, hi, k)  => {
    let map = {};
    let res = [];

    for (let i = lo; i <= hi; i++) {
        let power = findPower(i);

        if (map[power] === undefined) {
            map[power] = [i];
        } else {
            map[power].push(i);
        }
    }

    let keys = Object.keys(map).sort((a, b) => a - b);

    keys.forEach((key) => {
        let elem = map[key];
        elem.sort((a, b) => a - b);
        res = [...res, ...elem];
    })

    return res[k - 1];
};

console.log(getKth(12, 15, 2)) // 13
