// leet code link = https://leetcode.com/problems/lru-cache/

/*
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.map = new Map();
    this.capacity = capacity;
};

/*
 * @param {number} key
 * @return {number}
 */

LRUCache.prototype.get = function(key) {
    if (!this.map.has(key)) return -1;

    const replace = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, replace);

    return this.map.get(key);
};

/*
 * @param {number} key
 * @param {number} value
 * @return {void}
 */

LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)) {
        this.map.delete(key)
    }

    this.map.set(key, value);

    if (this.map.size > this.capacity) {
        this.map.delete(this.map.keys().next().value) // returns the first items key
    }

};

/*
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

 let myLRU = new LRUCache(2);
 myLRU.put(2, 1)
 myLRU.put(1, 1)
 myLRU.put(2, 3)
//  myLRU.put(4, 1)

 console.log(myLRU)
