//URL--
// https://leetcode.com/problems/merge-two-sorted-lists/

//INSTRUCTIONS--
/* You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Example 1:

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:

Input: list1 = [], list2 = []
Output: []

Example 3:

Input: list1 = [], list2 = [0]
Output: [0]

 

Constraints:

		The number of nodes in both lists is in the range [0, 50].
		-100 <= Node.val <= 100
		Both list1 and list2 are sorted in non-decreasing order.


*/

//SOLUTION--
/* 
The time comlexity of this solution is O(m+n) and the space complexity is O(1) where m is the length of the first linked list and n is the length of the second
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
	this.val = (val === undefined ? 0 : val)
	this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function (list1, list2) {
	//start the head at an arbitrary value
	const head = new ListNode(Infinity)
	let curr = head

	//iterate until one of the pointers hits the end of the linked list
	while (list1 !== null && list2 !== null) {
		//if the first linked list's value is less than the second's
		if (list1.val < list2.val) {
			//set the next value for the merged list to list1
			curr.next = list1
			//move the list1 pointer forward
			list1 = list1.next
		}
		else {
			//set the next value for the merged list to list2
			curr.next = list2
			//move the list2 pointer forward
			list2 = list2.next
		}
		//move the merged list pointer forward
		curr = curr.next
	}
	//if either list is empty, add the other list to the end of the merged list
	if (list1 === null) curr.next = list2
	else curr.next = list1
	//return the node after the head in the merged linked list
	return head.next
};
