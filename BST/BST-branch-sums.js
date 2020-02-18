class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  function branchSums(root) {
    let sumsArray = []

    findBranchSums(root, sumsArray, 0)

    return sumsArray;
  }

  const findBranchSums = (node, array, sum) => {
    if (!node) return;

		const newSum = sum + node.value

    if (!node.left && !node.right) {
      array.push(newSum);
      return;
    }

    findBranchSums(node.left, array, newSum);
		findBranchSums(node.right, array, newSum);

  }

  // Time = O(n) # of nodes;
  // Space = O(n) log(n) for statndard BST but also keeping track of leaves in array so about 1/2 of the BST;

