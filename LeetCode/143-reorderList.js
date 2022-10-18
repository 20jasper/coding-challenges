//URL--
// https://leetcode.com/problems/reorder-list/

//INSTRUCTIONS--
/* 
You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln

Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …

You may not modify the values in the list's nodes. Only nodes themselves may be changed.

 

Example 1:

Input: head = [1,2,3,4]
Output: [1,4,2,3]

Example 2:

Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]

 

Constraints:

		The number of nodes in the list is in the range [1, 5 * 104].
		1 <= Node.val <= 1000


*/

//SOLUTION--
/* 
This solution can be broken into three steps—find the middle of the list, split the list at that point and reverse the list after the middle, then merge the lists together

The time complexity of this solution is O(n) and the space complexity is O(1) where n is the length of the linked list
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
	let slow = head
	let fast = head

	//find the middle of the list
	while (fast.next !== null && fast.next.next !== null) {
		slow = slow.next
		fast = fast.next.next
	}

	//separate the lists into two
	let prev = null
	let curr = slow.next
	slow.next = null
	//reverse the second list
	while (curr != null) {
		const next = curr.next
		curr.next = prev
		prev = curr
		curr = next
	}

	//merge the two lists together
	let list1 = head
	let list2 = prev

	while (list2 !== null) {
		//set the list 1 next pointer to list2 and go to the next node in list1
		const next1 = list1.next
		list1.next = list2
		list1 = next1

		//set the list 2 next pointer to list1 and go to the next node in list2
		const next2 = list2.next
		list2.next = list1
		list2 = next2
	}
};
//TESTCASES--
// [1,2,3,4,5] => [1,5,2,4,3]
// [1,2,3,4] => [1,4,2,3]