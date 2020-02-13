/* eslint-disable complexity */
/* eslint-disable no-lonely-if */
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
      }

      insert(value) {
        let currNode = this;

              while (currNode !== null) {
                  if (value < currNode.value) {
                      if (currNode.left === null) {
                          currNode.left = new BST(value);
                          break;
                      } else {
                          currNode = currNode.left
                      }
                  } else {
                      if (currNode.right === null) {
                          currNode.right = new BST(value);
                          break;
                      } else {
                          currNode = currNode.right;
                      }
                  }
              }
        return this;
      }

      contains(value) {
        let currTree = this;

          while (currTree !== null) {
              if (value < currTree.value) {
                  currTree = currTree.left;
              } else if (value > currTree.value) {
                  currTree = currTree.right;
              } else {
                  return true;
              }
          }

          return false;
      }

      remove(value, parentTree = null) {
        let currNode = this;

        while (currNode !== null) {
            if (value < currNode.value) {
                parentTree = currNode;
                currNode = currNode.left;
            } else if (value > currNode.value) {
                parentTree = currNode;
                currNode = currNode.right;
            } else {
                if (currNode.left !== null && currNode.right !== null) {
                    currNode.value = currNode.right.findSmallestVal();
                    currNode.right.remove(currNode.value, currNode);
                } else if (parentTree === null) {
                    if (currNode.left !== null) {
                        currNode.value = currNode.left.value;
                        currNode.right = currNode.left.right;
                        currNode.left = currNode.left.left;
                    } else if (currNode.right !== null) {
                        currNode.value = currNode.right.value;
                        currNode.left = currNode.right.left;
                        currNode.right = currNode.right.right;
                    } else {
                        currNode.value = null;
                    }

                } else if (parentTree.left === currNode){
                    parentTree.left = currNode.left !== null ? currNode.left : currNode.right;
                } else if (parentTree.right === currNode) {
                       parentTree.left = currNode.left !== null ? currNode.left : currNode.right;
                  break;
                }
            }
        }
        return this;
      }

      findSmallestVal() {
          let currTree = this;

          while (currTree.left !== null) {
              currTree = currTree.left;
          }

          return currTree.value;
      }
  }

