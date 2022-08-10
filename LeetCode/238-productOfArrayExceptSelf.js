//URL--
// https://leetcode.com/problems/product-of-array-except-self/

//INSTRUCTIONS--
/* 
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

 

Constraints:

		2 <= nums.length <= 105
		-30 <= nums[i] <= 30
		The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

 

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

*/

//SOLUTION--
/* 
My first solution does not use the division operator but instead multiplies the product of the array by the current number ^(-1)
This solution has a time complexity of O(n) and a space complexity of O(1) where n is the lenght of the array

This approach did not end up working since I did not account there is no way to get the original number from a number multiplied by 0

If I just went over the rest of the array if it's a 0, that would make my algorithm O(n^2) since the worst case would be an array of all 0s

I am going to making a rolling product now. 

[a, b, c, d]=> [bcd, acd, cda, abc]

Make an array of the same length full of 1s

[ 1, 1, 1, 1]

start from the front of the array
multiply the next element by the last element in the original array times the current product

product = 1
index = 0
[ 1, 1, 1, 1]

product = a
index = 1
[ 1, a, 1, 1]

product = ab
index = 2
[ 1, a, ab, 1]

product = abc
index = 3
[ 1, a, ab, abc]

Now iterate backwards and do the same thing

product = 1
index = 0
[ 1, a, ab, abc]

product = d
index = 1
[ 1, a, abd, abc]

product = cd
index = 2
[ 1, acd, abd, abc]

product = bcd
index = 3
[bcd, acd, abd, abc]

*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
	//initialize an array of the same length as nums full of 1s
	const res = Array(nums.length).fill(1)

	//multiply each element by the product of each element to the left 
	let product = 1
	for (let i = 0; i < res.length - 1; i++) {
		product *= nums[i]
		res[i + 1] *= product
	}

	//multiply each element by the product of each element to the right 
	product = 1
	for (let i = res.length - 1; i > 0; i--) {
		product *= nums[i]
		res[i - 1] *= product
	}
	//return the resultant array
	return res
};

//TESTCASES-- 
console.log(productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6]);
console.log(productExceptSelf([-1, 1, 0, -3, 3]), [0, 0, 9, 0, 0]);

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf2 = function (nums) {

	//set each element to the product of each element to the left 
	let product = 1
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 0) {
			const res = Array(nums.length).fill(0)
			res[i] = product * getRightProduct(i)
			return res
		}
		else {
			product *= nums[i]
		}
	}
	//set each element to the product of each element to the right 
	for (let i = 0; i < nums.length; i++) {
		nums[i] = product * nums[i] ** (-1)
	}
	//return the resultant array
	return nums

	function getRightProduct(currentIndex) {
		let product = 1
		for (let i = currentIndex + 1; i < nums.length; i++) {
			if (nums[i] === 0) {
				return 0
			}
			product *= nums[i]
		}
		return product
	}
};

//TESTCASES-- 
console.log(productExceptSelf2([1, 2, 3, 4]), [24, 12, 8, 6]);
console.log(productExceptSelf2([-1, 1, 0, -3, 3]), [0, 0, 9, 0, 0]);
console.log(productExceptSelf2([-1, 0, 0, -3, 3]), [0, 0, 0, 0, 0]);