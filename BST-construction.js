/* eslint-disable complexity */
/* eslint-disable no-lonely-if */
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }

    insert(value) {
      let currTree = this;

      while (currTree) {
        if (currTree.value <= value) {
            if (!currTree.right) currTree.right = new BST(value);
            currTree = currTree.right;
        } else if (currTree.value > value) {
            if (!currTree.left) currTree.left = new BST(value);
            currTree = currTree.left;
        }
      }

      return this;
    }

    contains(value) {
      let currTree = this;

        while (currTree) {
            if (currTree.value === value) {
                return true;
            } else if (currTree.value > value) {
                currTree = currTree.left;
            } else {
                currTree = currTree.right;
            }
        }

        return false;
    }

    remove(value, parentTree = null) {
      let currTree = this;

      while (currTree) {
          if (currTree.value > value) {
              parentTree = currTree;
              currTree = currTree.left;
          } else if (currTree.value < value) {
              parentTree = currTree;
              currTree = currTree.right;
          } else {
              if (currTree.left && currTree.right) {
                  currTree.value = currTree.right.findSmallestVal();
                  currTree.right.remove(currTree.value, currTree);
              } else if (!parentTree) {
                  if (currTree.left) {
                      currTree.value = currTree.left.value;
                      currTree.right = currTree.left.right;
                      currTree.left = currTree.left.left;
                  } else if (currTree.right) {
                      currTree.value = currTree.right.value;
                      currTree.left = currTree.right.left;
                      currTree.right = currTree.right.right;
                  } else {
                      currTree.value = null;
                  }

              } else if (parentTree.left === currTree){
                  if (currTree.left) {
                      parentTree.left = currTree.left;
                  } else {
                      parentTree.left = currTree.right;
                  }
              } else if (parentTree.right === currTree) {
                if (currTree.left) {
                    parentTree.right = currTree.left;
                } else {
                    parentTree.right = currTree.right;
                }
              }
          }
          break
      }
      return this;
    }

    findSmallestVal() {
        let currTree = this;

        while (currTree) {
            currTree = currTree.left;
        }

        return currTree.value;
    }
  }

