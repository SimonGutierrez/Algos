/* eslint-disable complexity */
// leet code link: https://leetcode.com/problems/time-based-key-value-store/

var TimeMap = function() {
    this.map = new Map();
};

/*
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (!this.map.get(key)) this.map.set(key, []);

    this.map.get(key).push({value, timestamp});
};

/*
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if (!this.map.has(key)) return '';

    return this.binarySearch(this.map.get(key), timestamp);
};

TimeMap.prototype.binarySearch = function (key, timeStamp) {
    let left = 0;
    let right = key.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (key[mid].timeStamp === timeStamp) {
            return key[mid].value;
        } else if (key[mid].timeStamp > timeStamp) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    if (key[left] && key[left].timestamp <= timeStamp) return key[left].value;
    if (key[left - 1] && key[left - 1].timestamp <= timeStamp) return  key[left - 1].value;

    return '';
}

let myTestMap = new TimeMap();

myTestMap.set('love', 'high', 10);
myTestMap.set('love', 'low', 20);
console.log(myTestMap.get('love', 15)); // high


// ["TimeMap","set","set","get","get","get","get","get"]
// InPut: [[],["love","high",10],["love","low",20],["love",5],["love",10],["love",15],["love",20],["love",25]]
// OutPut: [null,null,null,"","high","high","low","low"]
