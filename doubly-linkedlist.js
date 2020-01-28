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
        } else {
            this.insertBefore(this.head, node)
        }
    }

    setTail(node) {
        if (!this.tail) {
            this.head = node;
            this.tail = node;
        } else {
            this.insertAfter(this.tail, node)
        }
    }

    insertBefore(node, nodeToInsert) {
      let currNode = this.head;

      while (currNode) {
          if (currNode.value === node.value) {
              if (!currNode.prev) {
                  nodeToInsert.next = this.head;
                  this.head = nodeToInsert;
              } else {
                  nodeToInsert.prev = currNode.prev;
                  nodeToInsert.next = currNode;
                  currNode.prev.next = nodeToInsert;
                  currNode.prev = nodeToInsert;
              }
          } else {
              currNode = currNode.next;
          }
      }
    }

    insertAfter(node, nodeToInsert) {
        let currNode = this.head;

        while (currNode) {
            if (currNode.value === node.value) {
                if (!currNode.next) {
                    nodeToInsert.prev = this.tail;
                    this.tail = nodeToInsert;
                } else {
                    nodeToInsert.prev = currNode;
                    nodeToInsert.next = currNode.next;
                    currNode.next.prev = nodeToInsert;
                    currNode.next = nodeToInsert;
                }
            } else {
                currNode = currNode.next;
            }
        }
    }

    insertAtPosition(position, nodeToInsert) {
        let currPosistion = 0;
        let currNode = this.head;

        while (currNode) {
            if (!currNode.prev) {
                this.setHead(nodeToInsert);
            } else if (currPosistion === position) {
                this.insertBefore(currPosistion, nodeToInsert);
            } else {
                currNode = currNode.next;
                currPosistion++;
            }
        }

        this.setTail(nodeToInsert);

    }

    removeNodesWithValue(value) {
        let currNode = this.head;
        // does there need to be another temp var?
        while (currNode) {
            if (currNode.value === value) {
                this.remove(currNode);
            }

            currNode = currNode.next;
        }
    }

    remove(node) {
        let currNode = this.head;

        while (currNode) {
            if (currNode.value === node.value) {
                if (!currNode.prev && !currNode.next) {
                    this.head = null;
                    this.tail = null;
                } else if (!currNode.prev) {
                    this.head = this.head.next;
                    this.head.prev = null
                } else if (!currNode.next) {
                    this.tail = this.tail.prev;
                    this.tail.next = null;
                } else {
                    currNode.prev.next = currNode.next;
                    currNode.next.prev = currNode.prev;
                    currNode.prev = null;
                    currNode.next = null;
                }
            } else {
                currNode = currNode.next;
            }
        }
    }

    containsNodeWithValue(value) {
        let currNode = this.head;

        while (currNode) {
            if (currNode.value === value) {
                return true;
            } else {
                currNode = currNode.next;
            }
        }

        return false;
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
