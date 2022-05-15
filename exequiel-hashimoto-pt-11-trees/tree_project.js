class TreeNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// Given a tree, find the left-most node at each
// level of the tree and return it in an array, with the root at the
// 0th index, and the left-most node in the deepest level of the tree
// in the last index.

//        5
//       / \
//      4   7
//     / \   \
//    1   3   2
//       /    / \
//      8    4   9
//              / \
//             2   4

// Expected Output -> [ 5, 4, 1, 8, 2 ]

function findLeftMostNodes(root) {
    let queue = [root];
    let result = [];
    root.level = 0;
    while (queue.length) {
      let numberOfNodes = queue.length;
      let currentLevel = [];

      for (let i = 0; i < numberOfNodes; i++) {
        let current = queue.shift();
        currentLevel.push(current.value);
        if (current.left) {
          queue.push(current.left)
        };
        if (current.right) queue.push(current.right);
      }
      result.push(currentLevel[0]);
    }
    return result;

}

// Uncomment the code below for local testing.

// // Build a tree for testing

  const simpleTree = new TreeNode(4, null, null);
  simpleTree.right = new TreeNode(8, null, null);
  simpleTree.left = new TreeNode(3, null, null);
  simpleTree.right.right = new TreeNode(2, null, null);

// // Test the function with the debug tree
console.log(findLeftMostNodes(simpleTree)); // -> [ 4, 3, 2 ]

/*******************************************************************************
 * Do not change the code after this line.
 */

try {
  exports.TreeNode = TreeNode;
  exports.findLeftMostNodes = findLeftMostNodes;
} catch (e) {
  module.exports = null;
}
