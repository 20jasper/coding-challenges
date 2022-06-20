//URL--
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

//INSTRUCTIONS--
/* Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

 

Example 1:

Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.

Example 2:

Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

Example 3:

Input: root = [2,1], p = 2, q = 1
Output: 2

 

Constraints:

    The number of nodes in the tree is in the range [2, 105].
    -109 <= Node.val <= 109
    All Node.val are unique.
    p != q
    p and q will exist in the BST.


*/

//SOLUTION--
/* 

    If the value of the root node is the value of p, return p
    If the value of the root node is the value of q, return q
    If the value of the root node is more than the value of p and q, 
        set the value of the root node to the left node
    If the value of the root node is less than the value of p and q, 
        set the value of the root node to the right node
    else, return the current node

*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// const lowestCommonAncestor = function (root, p, q) {
//     while (root !== undefined) {
//         // If the value of the root node is the value of p, return p
//         if (root.val === p.val) {
//             return p
//         }
//         // If the value of the root node is the value of q, return q
//         if (root.val === q.val) {
//             return q
//         }
//         // If the value of the root node is more than the value of p and q, 
//         if (root.val > p.val && root.val > q.val) {
//             //set the value of the root node to the left node 
//             root = root.left
//         }
//         // If the value of the root node is less than the value of p and q, 
//         else if (root.val < p.val && root.val < q.val) {
//             // set the value of the root node to the right node 
//             root = root.right
//         }
//         //if the p or q is less, and the other node is more, return the root
//         else {
//             return root
//         }
//     }
// }
/*
Optimizations
I realized that the first two checks (check if the root is equal to p or q) are unnecesary because they also essentailly return the root, so I removed them 
*/
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function (root, p, q) {
    //forever
    while (root !== undefined) {
        // If the value of the root node is more than the value of p and q, 
        if (root.val > p.val && root.val > q.val) {
            //set the value of the root node to the left node
            root = root.left
        }
        // If the value of the root node is less than the value of p and q, 
        else if (root.val < p.val && root.val < q.val) {
            // set the value of the root node to the right node
            root = root.right
        }
        //else, return the root
        else {
            return root
        }
    }
}


//TESTCASES--
console.log(lowestCommonAncestor([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 8), 2);
console.log(lowestCommonAncestor([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 4), 6);
console.log(lowestCommonAncestor([2, 1], 2, 1), 2);