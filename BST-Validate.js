class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  function validateBst(tree) {
    while (tree !== null) {
        if (tree.value <= tree.left || tree.value > tree.right) {
            return false;
        }
        validateBst(tree.left)
        validateBst(tree.right)
    }
  }

