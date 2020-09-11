class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack { // LIFO
    constructor() {
        this.top = null;
    }

    push(val) {
        const newTop = new Node(val);
        newTop.next = this.top;
        this.top = newTop;

        return this;
    }

    pop() {
        if (!this.top) return null;

        const nodeToRemove = this.top;
        this.top = nodeToRemove.next;
        nodeToRemove.next = null;

        return nodeToRemove;
    }
}

const testStack = new Stack;

console.log(testStack.push(1)) // obj: {top: Node{val: 1, nxt: null}}
console.log(testStack.push(2)) // obj: {top: Node{val: 2, nxt: Node{val: 1, nxt: null}}}
console.log(testStack.pop()) // obj: Node{val: 2, nxt: null}
console.log(testStack.push(3)) // obj: {top: Node{val: 3, nxt: Node{val: 1, nxt: null}}}

class Queue { // FIFO
    constructor() {
        this.head = null;
        this.tail = null;
    }

    push(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }

        this.tail.next = newNode;
        this.tail = newNode;

        return this;
    }

    pop() {
        if (!this.head) return null;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }

        const removedHead = this.head;
        this.head = this.head.next;

        return removedHead;
    }
}

const testQueue = new Queue;

console.log(testQueue.push(1)) // obj: {head: Node{val: 1, nxt: null}, tail: Node{val: 1, nxt: null}}
console.log(testQueue.push(2)) // obj: {head: Node{val: 1, nxt:  Node{val: 2, nxt: null}}, tail: Node{val: 2, nxt: null}}
console.log(testQueue.push(3)) // obj: {head: Node{val: 1, nxt:  Node{val: 2, nxt: Node{val: 3, nxt: null}}}, tail: Node{val: 3, nxt: null}}
console.log(testQueue.pop()) // Node{val: 1, nxt:  Node{val: 2, nxt: Node{val: 3, nxt: null}}}
console.log(testQueue.head) // Node{val: 2, next: Node {val: 3, next: null}}
