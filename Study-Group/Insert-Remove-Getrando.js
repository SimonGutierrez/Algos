/*
LeetCode Link: https://leetcode.com/problems/insert-delete-getrandom-o1/

Implement the RandomizedSet class:

bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
Follow up: Could you implement the functions of the class with each function works in average O(1) time?


Example 1:

Input
["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
[[], [1], [2], [2], [], [1], [2], []]
Output
[null, true, false, true, 2, true, false, 2]

Explanation
RandomizedSet randomizedSet = new RandomizedSet();
randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].
randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.
randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
randomizedSet.insert(2); // 2 was already in the set, so return false.
randomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return 2.


*/
/*

insert(1)
insert(2)
insert(4)
getRandom()


this.map = {1: 0, 2: 1, 4: 2}
this.values = [1, 2, 4]


*/

/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.map = new Map();
    this.values = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {

  if (!this.map.has(val)) {
    this.map.set(val, this.values.length);
    this.values.push(val);
  } else {
    return false;
  }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {

    if (this.map.has(val)) {
      let index = this.map.get(val);
      let newVal = this.values[this.values.length - 1];
      this.values[index] = newVal;
      this.values.pop();
      this.map.set(newVal, index);
      this.map.delete(val);
      return true;
    } else {
      return false;
    }

};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let randomIndx = Math.floor(Math.random() * this.map.size);
    return this.values[randomIndx];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

let test1 = new RandomizedSet();
test1.insert(0);
test1.insert(1);
test1.remove(0);
test1.insert(2);
test1.remove(1);

console.log(test1.getRandom()); // 2 only one left in map;
