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
to make a dummy node
start the current node at the dummy node
while each list still has more values in it
    if the values are equal
        set the dummy node's pointer to the current node of the first list
        set the node's pointer of the first list to the next value
        set the dummy node's pointer to the next node of the dummy node
        set the dummy node's pointer to the current element of the second list
        set the current node of the second list's pointer to the the next value
    if the value of the current node of the first list is less than the current node of the second list
        set the dummy node's pointer to the current element of the first list
        set the current node's pointer of the first list to the next value
    else
        set the dummy node's pointer to the current element of the second list
        set the current node of the second list's pointer to the the next value
    set the dummy node's pointer to the next node of the current node
if the first list isn't empty
    set the dummy node's pointer to the current element of the first list
if the second list isn't empty
    set the dummy node's pointer to the current element of the second list
return the next value of head



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
    //make a dummy node
    let dummy = new ListNode(-1)
    //start current node at the dummy node
    let head = dummy
    // while each list still has more values in it
    while (list1 !== null && list2 !== null) {
        // if the values are equal
        if (list1.val === list2.val) {
            //set the dummy node's pointer to the current node of the first list
            dummy.next = list1
            //set the node's pointer of the first list to the next value
            list1 = list1.next

            //set the dummy node's pointer to the next node of the dummy node
            dummy = dummy.next

            //set the dummy node's pointer to the current element of the second list
            dummy.next = list2
            //set the current node of the second list's pointer to the the next value
            list2 = list2.next
        }
        //if the value of the current node of the first list is less than the current node of the second list
        else if (list1.val < list2.val) {
            //set the dummy node's pointer to the current element of the first list
            dummy.next = list1
            //set the current node's pointer of the first list to the next value
            list1 = list1.next
        }
        else {
            //set the dummy node's pointer to the current element of the second list
            dummy.next = list2
            //set the current node of the second list's pointer to the the next value
            list2 = list2.next
        }
        //set the dummy node's pointer to the next node of the current node
        dummy = dummy.next
    }

    //if the first list isn't empty
    if (list1 !== null) {
        //set the dummy node's pointer to the current element of the first list
        dummy.next = list1
    }
    //if the second list isn't empty
    else {
        //set the dummy node's pointer to the current element of the second list
        dummy.next = list2
    }
    //return the next value of head
    return head.next
};
