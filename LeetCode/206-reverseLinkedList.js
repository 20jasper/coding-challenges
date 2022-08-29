//URL--
// https://leetcode.com/problems/reverse-linked-list/

//INSTRUCTIONS--
/* 
Given the head of a singly linked list, reverse the list, and return the reversed list.

 

Example 1:

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:

Input: head = [1,2]
Output: [2,1]

Example 3:

Input: head = []
Output: []

 

Constraints:

		The number of nodes in the list is the range [0, 5000].
		-5000 <= Node.val <= 5000

 

Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

*/

//SOLUTION--
/* 
I am going to push each value to a stack and then iterate backwards over the linked list
//the time complexity of this solution of O(n) and the space complexity is O(n) where n is the length of the linked list

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
 * @return {ListNode}
 */
const reverseList = function (head) {
	//if the linked list is empty, return null
	if (head === null) {
		return head
	}

	let curr = head
	const stack = []

	//iterate over the linked list and add each value to the stack
	while (curr !== null) {
		stack.push(curr.val)
		curr = curr.next
	}

	//make a new ListNode with an arbitrary value
	const list2 = new ListNode(23423)
	let head2 = list2

	//create a new linked list by iterating over the stack backwards
	while (stack.length > 0) {
		head2.next = new ListNode(stack.pop())
		head2 = head2.next
	}

	//return the next node in the linked list
	return list2.next
};

//SOLUTION--
/* 
I am going to push each value to a stack and then iterate backwards over the linked list
//the time complexity of this solution of O(n) and the space complexity is O(n) where n is the length of the linked list

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
 * @return {ListNode}
 */
const reverseList2 = function (head) {
	let curr = head
	let prev = null

	//iterate through the linked list
	while (curr !== null) {
		const next = curr.next
		//flip the next pointer to the previous value
		curr.next = prev
		//move the previous pointer forward
		prev = curr
		//move the current pointer forward
		curr = next
	}

	return prev
};
//TESTCASES--
// [0]
// [1,2,3,4,5]
// [5,4,2,3,1,null]
