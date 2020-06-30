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

var addTwoNumbers = function(l1, l2) {
    let carryOver = 0;
    let currNode1 = l1;
    let currNode2 = l2;
    let tail = null;
    let l3 = null;


    while (currNode1 && currNode2) {
        let currSum = currNode1.val + currNode2.val;

        if (carryOver) {
            currSum += carryOver;
            carryOver = 0;
        }

        if (currSum >= 10) {
            currSum = currSum - 10;
            carryOver = 1;
        }

        if (l3 === null) {
            l3 = new ListNode(currSum);
            tail = l3;
        } else if (l3.next) {
            tail = l3.next;

            while (tail.next) {
                tail = tail.next;
            }
            tail.next = new ListNode(currSum);
            tail = tail.next;

        } else {
            l3.next = new ListNode(currSum);
        }

        currNode1 = currNode1.next;
        currNode2 = currNode2.next;
    }

    if (carryOver && currNode1 || currNode2) {
        let remainingVal;

        if (currNode1) {
            remainingVal = currNode1.val;
        } else if (currNode2) {
            remainingVal = currNode2.val;
        }

        if (remainingVal && carryOver) {
            let remainingSum = remainingVal + carryOver;
            if (remainingSum >= 10) {
                remainingVal = remainingSum - 10;
                carryOver = 1;
                tail.next = new ListNode(remainingVal);
            } else {
                tail.next = new ListNode(remainingSum);
                carryOver = 0;
            }
        } else if (remainingVal) {
            tail.next = new ListNode(remainingVal);
        }

        tail = tail.next;
    }


    if (carryOver) {
        tail.next = new ListNode(carryOver);
    }

    return l3;
};

console.log('linked list', addTwoNumbers(linkedList1, linkedList2));
