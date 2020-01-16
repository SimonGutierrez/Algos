class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack { // FILO
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

console.log(testStack.push(1)) // obj: {this.top: node{val: 1, nxt: null}}
console.log(testStack.push(2)) // obj: {this.top: node{val: 2, nxt: node{val: 1, nxt: null}}}
console.log(testStack.pop()) // obj: node{val: 2, nxt: null}
console.log(testStack.push(3)) // obj: {this.top: node{val: 3, nxt: node{val: 1, nxt: null}}}

class Queue { // FIFO
    constructor() {
        this.head = null;
        this.tail = null;
    }

    push(val) {

    }
}
