//URL--
// https://leetcode.com/problems/invert-binary-tree/

//INSTRUCTIONS--
/* Given the root of a binary tree, invert the tree, and return its root.

 

Example 1:

Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

Example 2:

Input: root = [2,1,3]
Output: [2,3,1]

Example 3:

Input: root = []
Output: []

 

Constraints:

    The number of nodes in the tree is in the range [0, 100].
    -100 <= Node.val <= 100


*/

//SOLUTION--
/* 

Until the node is null
    Switch the right and left node on the current node 
    Swap the right and left node of each child node
return the root node
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = function (root) {
    //if the root is null, return null
    if (root === null) {
        return null
    }

    const right = root.right
    const left = root.left
    //swap the left and right branches
    root.left = right
    root.right = left

    //invert the left and right branches of the tree
    invertTree(root.left)
    invertTree(root.right)

    //return the root
    return root
};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
