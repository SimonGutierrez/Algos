class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  function validateBst(tree, min = -Infinity, max = Infinity) {
	if (tree === null) return true;
    if (tree.value >= max || tree.value < min) return false;
    const leftIsValid = validateBst(tree.left, min, tree.value)

    return  leftIsValid && validateBst(tree.right, tree.value, max)
}

