/* leet code link: https://leetcode.com/problems/invert-binary-tree/

Invert a binary tree.

Example:

Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9
Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1

*/
const invertTree = (root)  => {
    if (!root) return root;

    let temp = invertTree(root.left)
    root.left = invertTree(root.right);
    root.right = temp;


    return root
};
