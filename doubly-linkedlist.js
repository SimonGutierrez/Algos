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
        if (this.head) {
            if (this.containsNodeWithValue(node.value)) {
                this.remove(node);
            }
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        } else {
            this.head = node;
            this.tail = node;
        }
    }

    setTail(node) {
        if (this.tail) {
            if (this.containsNodeWithValue(node.value)) {
                this.remove(node)
            }
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node;
	    } else {
			this.head = node;
			this.tail = node;
		}
    }

    insertBefore(node, nodeToInsert) {
      // Write your code here.
    }

    insertAfter(node, nodeToInsert) {
      // Write your code here.
    }

    insertAtPosition(position, nodeToInsert) {
        let currPosistion = 1;
        let currNode = this.head;

        while (currPosistion <= position) {

            if (currPosistion === position) {
                if (this.head === null) {
                    this.head = nodeToInsert;
                    this.tail = nodeToInsert;
                } else {
                    nodeToInsert.next = currNode;
                    nodeToInsert.prev = currNode.prev;
                    currNode.prev.next = nodeToInsert;
                    currNode.prev = nodeToInsert;

                    if (nodeToInsert.next === null) {
                        this.tail = nodeToInsert;
                        }
                }
            }

            if (currNode !== null) {
                currNode = currNode.next;
            }

            currPosistion++;
        }

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

