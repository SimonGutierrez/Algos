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

console.log('linked list', addTwoNumbers4(linkedList1, linkedList2)); // [1, 8]
console.log('linked list', addTwoNumbers4(linkedList3, linkedList4)); // [0, 0 , 1]
console.log('linked list', addTwoNumbers4(linkedList5, linkedList5)); // [0, 1]
console.log('linked list', addTwoNumbers4(linkedList6, linkedList7)); // [9, 1, 6]
