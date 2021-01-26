/* eslint-disable complexity */
/* eslint-disable guard-for-in */
// https://leetcode.com/problems/top-k-frequent-elements/

const { pid } = require('process');

// O(N) solution

var topKFrequent = function(nums, k) {
    const freqMap = new Map();
    const bucket = [];
    const result = [];

    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    for (let [num, freq] of freqMap) {
        bucket[freq] = (bucket[freq] || new Set()).add(num);
    }

    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i]) result.push(...bucket[i]);
        if (result.length === k) break;
    }
    return result;
};
// Simple O(N * log(N))
var topKFrequent2 = function(nums, k) {
    // results array
    let results = [];

    // 1) first step is to build a hash map, where "element -> its frequency"
    // it costs O(n), where n is nums.length
    let map = {};
    nums.forEach(n => (map[n] ? map[n] += 1 : map[n] = 1));

    // 2) sort the map keys array based on its frequency
    // it costs O(log n), where n is nums.length
    let sortedKeys = Object.keys(map).sort((a, b) => map[b] - map[a]);

    // 3) take first k results
    for (let i = 0; i < k; i++){
        results.push(sortedKeys[i]);
    }

    // as result we have O(n Log n) where n is length of nums
    return results;
};

// using a Heap O(n log(n))
var topKFrequent = function(nums, k) {
    // results array
    let results = [];

    // 1) first step is to build a hash map, where "element -> its frequency"
    // it costs O(n), where n is nums.length
    let map = {};
    nums.forEach(n => (map[n] ? map[n] += 1 : map[n] = 1));

    let pq = new PriorityQueue();
    // 2) enqueue each map element to max binary heap priority queue
    for (let key in map){
	    // it costs O(log n), where n is nums.length
        pq.enqueue(key, map[key]);
    }

    // 3) k times dequeue element from priority queue and push it to results array
    for (let i = 0; i < k; i++){
	    // it costs O(log n), where n is nums.length
        results.push(pq.dequeue());
    }

    // return results array
	// as result we have O(n Log n) where n is length of nums
    return results;
};

class PriorityQueue {
    constructor(){
        this._values = [];
    }

    enqueue(val, priority){
        this._values.push(new Node(val, priority));
        this._traverseUp();
    }

    dequeue(){
        const max = this._values[0];
        const end = this._values.pop();
        if (this._values.length > 0){
            this._values[0] = end;
            this._traverseDown();
        }
        return max.val;

    }

    _traverseUp(){
        let idx = this._values.length - 1;
        const el = this._values[idx];
        while (idx > 0){
            let pIdx = Math.floor((idx - 1) / 2);
            let parent = this._values[pIdx];
            if (el.priority <= parent.priority) break;
            this._values[pIdx] = el;
            this._values[idx] = parent;
            idx = pIdx;
        }
    }

    _traverseDown(){
        let leftChildIdx = null;
        let rightChildIdx = null;
        let leftChild = null;
        let rightChild = null;
        let swapIdx = null;

        let idx = 0;
        const el = this._values[idx];
        while (true){
            swapIdx = null;
            leftChildIdx = 2 * idx + 1;
            rightChildIdx = 2 * idx + 2;

            if (leftChildIdx < this._values.length){
                leftChild = this._values[leftChildIdx];
                if (leftChild.priority > el.priority){
                    swapIdx = leftChildIdx;
                }
            }

            if (rightChildIdx < this._values.length){
                rightChild = this._values[rightChildIdx];
                if (
                    (swapIdx === null && rightChild.priority > el.priority) ||
                    (swapIdx !== null && rightChild.priority > leftChild.priority)
                ) {
                    swapIdx = rightChildIdx;
                }
            }

            if (swapIdx === null) break;
            this._values[idx] = this._values[swapIdx];
            this._values[swapIdx] = el;
            idx = swapIdx
        }
    }
}

class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

class MaxHeap {
    constructor() {
        this.list = [];
    }

    insert(node) {
        this.list.push(node);

        let idx = this.list.length - 1;
        const elem = this.list[idx];

        while (idx > 0) {
            let pIdx = Math.floor((idx - 1) / 2);
            let parent = this.list[pIdx];

            if (elem.priority <= parent.priority) break;

            this.list[pIdx] = elem;
            this.list[idx] = parent;
            idx = pIdx;
        }
    }

    remove() {
        let top = this.list[0];
        let currNode = this.list.pop();
        this.list[0] = currNode;

        // rebalance heap
        let curIdx = 0;
        let elem = this.list[curIdx];
        let len = this.list.length

        while ((curIdx * 2) + 1 < len || (curIdx * 2) + 2 < len) {
            let leftIdx = (curIdx * 2) + 1;
            let rightIdx = (curIdx * 2) + 2;
            let left = this.list[leftIdx];
            let right = this.list[rightIdx];
            let switchIdx = null;

            if (left) {
                if (left.priority > elem.priority) {
                    switchIdx = leftIdx;
                }
            }

            if (right) {
                let swap = switchIdx ? this.list[switchIdx] : elem;
                if (right.priority > swap.priority) {
                    switchIdx = rightIdx;
                }
            }

            if (switchIdx === null) break;

            this.list[curIdx] = this.list[switchIdx];
            this.list[switchIdx] = elem;
            curIdx = switchIdx;
        }

        return top.val;
    }
}

// personal attempt to Max Heap

const topKFreq = (nums, k) => {
    let map = {};
    let res = [];

    for (let num of nums) {
        map[num] ? map[num]++ : map[num] = 1;
    }

    let newMaxHeap = new MaxHeap();

    for (let key in map) {
        newMaxHeap.insert(new Node(key, map[key]));
    }

    for (let i = 0; i < k; i++) {
        res.push(newMaxHeap.remove());
    }

    return res;
}

console.log(topKFreq([3, 1, 1, 1, 2, 2], 2))
console.log(topKFreq([3, 0, 1, 0], 1))
