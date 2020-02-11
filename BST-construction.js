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
              currTree = currTree.right;
          } else if (currTree.value > value) {
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

    remove(value) {
      // Write your code here.
      // Do not edit the return statement of this method.
      return this;
    }

    findBalancingNode(tree) {
        let currTree = tree.right;
        let balancedNode;

        while (currTree) {
            balancedNode = currTree.value;

            if (currTree.left) {
                if (!currTree.left.left) {
                    balancedNode = currTree.left.value;
                    currTree.left = null;
                }
            }
            currTree = currTree.left;
        }


        return balancedNode;
    }
  }

