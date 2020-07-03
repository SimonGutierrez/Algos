/* eslint-disable complexity */
/* eslint-disable max-statements */
// class Node {
//     constructor(value, next) {
//       this.value = value;
//       this.next = next;
//     }
//   }

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
 }

const linkedList1 = new ListNode(0, new ListNode(8, null));
const linkedList2 = new ListNode(1, null);
const linkedList3 = new ListNode(1, new ListNode(9, null));
const linkedList4 = new ListNode(9, null);
const linkedList5 = new ListNode(5, null);
const linkedList6 = new ListNode(9, new ListNode(1, new ListNode(6, null)));
const linkedList7 = new ListNode(0, null);

var addTwoNumbers2 = function(l1, l2) {
    let carryOver = 0;
    let currNode1 = l1;
    let currNode2 = l2;
    let head = new ListNode(0);
    let curr = head;


    while (currNode1 || currNode2) {
        let currValL1 = (currNode1) ? currNode1.val : 0;
        let currValL2 = (currNode2) ? currNode2.val : 0;
        let currSum = currValL1 + currValL2 + carryOver;

        carryOver = (currSum >= 10) ? 1 : 0;
        curr.next = new ListNode(currSum % 10);
        curr = curr.next;

        if (currNode1) currNode1 = currNode1.next;
        if (currNode2) currNode2 = currNode2.next;
    }

    if (carryOver) curr.next = new ListNode(carryOver);

    return head.next;
};

console.log('linked list', addTwoNumbers2(linkedList1, linkedList2)); // [1, 8]
console.log('linked list', addTwoNumbers2(linkedList3, linkedList4)); // [0, 0 , 1]
console.log('linked list', addTwoNumbers2(linkedList5, linkedList5)); // [0, 1]
console.log('linked list', addTwoNumbers2(linkedList6, linkedList7)); // [9, 1, 6]
