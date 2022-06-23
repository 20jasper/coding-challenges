//URL--
// https://leetcode.com/problems/squares-of-a-sorted-array/

//INSTRUCTIONS--
/* Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]

 

Constraints:

    1 <= nums.length <= 104
    -104 <= nums[i] <= 104
    nums is sorted in non-decreasing order.

*/

//SOLUTION--
/*
Create an array the same length as the original array
Iterate through the array with two pointers
    Put one pointer at the beginning of the array, and one at the end
        Starting from the back of the new array
            if the left number squared is more than the right, set the current element to the left number and increment the left pointer 
            else, set the current element to the right number and decrement the right pointer 
return the array
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function (nums) {
    //create a new array the same length of the original array
    const squaredArr = Array(nums.length)
    let left = 0
    let right = nums.length - 1
    //iterate through the new array from the back
    for (let i = nums.length - 1; i >= 0; i--) {
        const leftSquared = nums[left] ** 2
        const rightSquared = nums[right] ** 2
        //if the left number squared is more than the right number squared
        if (leftSquared > rightSquared) {
            //set the current element to the left number squared and increment the left pointer
            squaredArr[i] = leftSquared
            left++
        }
        else {
            //set the current element to the right number squared and increment the right pointer
            squaredArr[i] = rightSquared
            right--
        }
    }
    //return the array
    return squaredArr
}

//TESTCASES--
console.log(sortedSquares([-4, -1, 0, 3, 10]), [0, 1, 9, 16, 100]);
console.log(sortedSquares([-7, -3, 2, 3, 11]), [4, 9, 9, 49, 121]);