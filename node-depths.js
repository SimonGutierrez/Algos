function nodeDepths(root, depth = 0) {
    let sum = 0;

    if (root.left) {
       sum += nodeDepths(root.left, depth + 1);
    }

    if (root.right) {
        sum += nodeDepths(root.right, depth + 1)
    }

    return sum + depth;
  }

  // Time: O(n) where n is the number of nodes;
  // space: O(h) recursion takes up space for the height of the tree

