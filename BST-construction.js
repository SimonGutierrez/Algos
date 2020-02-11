class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }

    insert(value) {
      // Write your code here.
      // Do not edit the return statement of this method.
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
  }
