//URL--
// https://leetcode.com/problems/balanced-binary-tree/

//INSTRUCTIONS--
/* Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

    a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

 

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: true

Example 2:

Input: root = [1,2,2,3,3,null,null,4,4]
Output: false

Example 3:

Input: root = []
Output: true

 

Constraints:

    The number of nodes in the tree is in the range [0, 5000].
    -104 <= Node.val <= 104


*/

//SOLUTION--
/* 
if the root is undefined, return true
set right equal to root
set left equal to root
Forever
    if right.right is defined, 
        set right equal to it
        else, set left equal to left.left
            if left.left is still defined, return false
            else return true
    if left.left is defined, 
        set left equal to it
        else, set right equal to right.right
            if right.right is still defined, return false
            else return true
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
 * @return {boolean}
 */
const isBalanced = function (root) {
    // if the root is null, return true
    if (root === null) {
        return true
    }
    let right = root.right
    let left = root.left
    // Forever
    while (true) {
        //if right is defined, set right equal to right.right
        if (right !== null) {
            right = right.right
        }
        else {
            //if left is null, return true
            if (left === null) {
                return true
            }
            // set left equal to left.left
            left = left.left
            // if left is still defined, return false
            return left === null
        }
        //if left is defined, set left equal to left.left
        if (left !== null) {
            left = left.left
        }
        else {
            //if right is null, return true
            if (right === null) {
                return true
            }
            // set right equal to right.right
            right = right.right
            //if right is null, return true
            return right === null
        }
    }
};
