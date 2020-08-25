/*
flatten a doubly linked list

i.e: 1 = 2 = 3 = 10 = null
              \
               4 = 5 = 6
                    \
                     7 = 8

    ans: 1 = 2 = 3 = 4 = 5 = 7 = 8 = 6 = 10 = null
*/

class Node {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
      this.child = null;
    }
  }

let LL = new Node(1);

LL.next = new Node(2);
LL.next.next = new Node(3);
LL.next.next.next = new Node(10)
LL.next.next.child = new Node(4)
LL.next.next.child.next = new Node(5)
LL.next.next.child.next.child = new Node(7)
LL.next.next.child.next.child = new Node(8)
LL.next.next.child.next.next = new Node(6)

console.log(LL);

const flattenLL = (node) => {
    let stack = [];


}
