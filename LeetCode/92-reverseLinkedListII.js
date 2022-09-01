//URL--
// https://leetcode.com/problems/reverse-linked-list-ii/

//INSTRUCTIONS--
/* 
Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

 

Example 1:

Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]

Example 2:

Input: head = [5], left = 1, right = 1
Output: [5]

 

Constraints:

		The number of nodes in the list is n.
		1 <= n <= 500
		-500 <= Node.val <= 500
		1 <= left <= right <= n

*/

//SOLUTION--
/* 
This solution is O(n) for time and O(1) for space where n is the length of the linked list 
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
const reverseBetween = function (head, left, right) {
	if (head === null || left === right) return head

	//make a sentinal node with an arbitrary value
	const sentinalNode = new ListNode(Infinity)
	let curr = sentinalNode
	curr.next = head

	//iterate up to the node before the reversed section
	for (let i = 0; i < left - 1; i++) curr = curr.next

	//store the pointer for the node before the reversed section and increment the current pointer
	let nodeBeforeReverse = curr
	curr = curr.next

	//reverse the nodes betweeen left and right
	let prev = null
	for (let i = 0; i < right - left + 1; i++) {
		const next = curr.next
		//flip the next pointer to the previous value
		curr.next = prev
		//move the previous pointer forward
		prev = curr
		//move the current pointer forward
		curr = next
	}

	//add the end of the original list after the reversed section (it's two nodes long at this point)
	nodeBeforeReverse.next.next = curr
	//add the reversed section of the linked list in the middle of the nodes surrounding the reversed section
	nodeBeforeReverse.next = prev

	//return the next node after the sentinal node
	return sentinalNode.next
};
//TESTCASES--
// [1,2,3,4,5]
// 2
// 4

// [1,4,3,2,5]


// [5]
// 1
// 1

// [5]