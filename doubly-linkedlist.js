class StartNode {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }

  class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
      }

      setHead(node) {
          if (!this.head) {
              this.head = node;
              this.tail = node;

              return;
          }

          this.insertBefore(this.head, node)

      }

      setTail(node) {
          if (!this.tail) {
              this.setHead(node);

              return;
          }

          this.insertAfter(this.tail, node)

      }

      insertBefore(node, nodeToInsert) {
          if (nodeToInsert === this.head && nodeToInsert === this.tail) return;

          this.remove(nodeToInsert); // remove the node just incase its already in the LL;
          nodeToInsert.prev = node.prev;
          nodeToInsert.next = node;

          if (!node.prev) {
              this.head = nodeToInsert;
          } else {
              node.prev.next = nodeToInsert;
          }

          node.prev = nodeToInsert;
      }

      insertAfter(node, nodeToInsert) {
          if (nodeToInsert === this.head && nodeToInsert === this.tail) return;

          this.remove(nodeToInsert); // remove the node just incase its already in the LL;
          nodeToInsert.prev = node;
          nodeToInsert.next = node.next;

          if (!node.next) {
              this.tail = nodeToInsert;
          } else {
              node.next.prev = nodeToInsert;
          }

          node.next = nodeToInsert;
      }

      insertAtPosition(position, nodeToInsert) {
          if (position === 1) {
              this.setHead(nodeToInsert);

              return;
          }

          let currNode = this.head;
          let currPosition = 1;

          while (currNode && currPosition !== position) {
              currNode = currNode.next;
              currPosition = currPosition + 1;
          }

          if (currNode) {
              this.insertBefore(currNode, nodeToInsert);
          } else {
              this.setTail(nodeToInsert);
          }

      }

      removeNodesWithValue(value) {
          let currNode = this.head;
          while (currNode) {
              const nodeToRemove = currNode;
              currNode = currNode.next;

              if (nodeToRemove.value === value) {
                  this.remove(nodeToRemove);
              }
          }
      }

      remove(node) {
          if (node === this.head) this.head = this.head.next;
          if (node === this.tail) this.tail = this.tail.prev;
          this.removeNodeBindings(node);
      }

      containsNodeWithValue(value) {
          let currNode = this.head;

          while (currNode && currNode.value !== value) {
              currNode = currNode.next;
          }

          return currNode !== null;
      }

      removeNodeBindings(node) {
          if (node.prev) node.prev.next = node.next;
          if (node.next) node.next.prev = node.prev;
          node.prev = null;
          node.next = null;
      }
  }

// SEARCHING
// Time: O(n) - number of nodes;
// Space: O(1) - not storing anything;

// Removing
// Time: O(1) - all done in constat time operations
// Space: O(1) - not storing anything;

// insert at pos
// Time: O(p) - traverse to p;
// Space: O(1) - no storing;
