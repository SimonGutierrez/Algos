/*
eslint-disable complexity
 eslint-disable max-statements
 Leet Code Link: https://leetcode.com/problems/add-two-numbers/submissions/
*/

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

var addTwoNumbers4 = function(l1, l2) {
    let carryOver = 0;
    let dummy = new ListNode(-1);
    let head = dummy;


    while (l1 || l2 || carryOver) {
        if (l1) {
            carryOver += l1.val;
            l1 = l1.next;
        }

        if (l2) {
            carryOver += l2.val;
            l2 = l2.next;
        }

        head.next = new ListNode((carryOver) % 10);
        head = head.next;

        carryOver = Math.floor(carryOver / 10);
    }

    return dummy.next;
};

// Time: O(MAX(M,N)) where M and N are the lengths of the two linked lists the longer list will be how many items we look at;
// Space: O(MAX(M,N)) the new list will be as long as the longest of list M or N;
// Num Times Practiced = 2;

console.log('linked list', addTwoNumbers4(linkedList1, linkedList2)); // [1, 8]
console.log('linked list', addTwoNumbers4(linkedList3, linkedList4)); // [0, 0 , 1]
console.log('linked list', addTwoNumbers4(linkedList5, linkedList5)); // [0, 1]
console.log('linked list', addTwoNumbers4(linkedList6, linkedList7)); // [9, 1, 6]

// second attempt
const addTwoNumbers2 = (l1, l2) => {
    let currL1 = l1, currL2 = l2, head = new ListNode(), tail = head, carry = 0;

    while (currL1 || currL2) {
        let tempL1 = currL1 ? currL1.val : 0;
        let tempL2 = currL2 ? currL2.val : 0;
        let sum = (tempL1 + tempL2 + carry) % 10;
        carry = Math.trunc((tempL1 + tempL2 + carry) / 10);
        tail.next = new ListNode(sum);
        tail = tail.next;
        currL1 = currL1 ? currL1.next : null;
        currL2 = currL2 ? currL2.next : null;
    }

    if (carry) tail.next = new ListNode(carry);

    return head.next;
};
