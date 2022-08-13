//URL--
// https://leetcode.com/problems/3sum/

//INSTRUCTIONS--
/* Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

Example 2:

Input: nums = []
Output: []

Example 3:

Input: nums = [0]
Output: []

 

Constraints:

		0 <= nums.length <= 3000
		-105 <= nums[i] <= 105


*/

//SOLUTION--
/* 
The first solution that comes to mind is using a triply nested for loop and just check if they all add up to 0
if so, add them to a set so no triplets are repeated
This solution is O(n^3) for time and O(1) for space where n is the length of the array

This solution ended up timing out
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
	const set = new Set()
	// iterate through the array with three pointers that never overlap 
	for (let left = 0; left < nums.length - 2; left++) {
		for (let mid = left + 1; mid < nums.length - 1; mid++) {
			for (let right = mid + 1; right < nums.length; right++) {
				const num1 = nums[left];
				const num2 = nums[mid];
				const num3 = nums[right];
				//if the 3 nums add up to 0
				if (num1 + num2 + num3 === 0) {
					//hash the three values and add it to the set
					const tripletHash = getTripletHash(num1, num2, num3)
					set.add(tripletHash)
				}
			}
		}
	}
	return [...set].map(hash => decodeHash(hash))
	function getTripletHash(num1, num2, num3) {
		return [num1, num2, num3]
			// sort so the hash is the same for each unique combination
			.sort((a, z) => a - z)
			// join by a non number character to separate the numbers
			.join("|")
	}
	function decodeHash(hash) {
		return hash
			//split the hash back into the three nums
			.split("|")
			// convert the strings back into numbers
			.map(Number)
	}
};
//TESTCASES--
console.log(threeSum([0, 1, 1]), []);
console.log(threeSum([-1, 0, 1, 2, -1, -4]), [[-1, -1, 2], [-1, 0, 1]]);
console.log(threeSum([0, 0, 0]), [[0, 0, 0]]);

//SOLUTION--
/* 
This time, I will loop through the array and set the target as the first number then iterate through the rest of the string
	if the number exists, add it to the hashmap with a value of 1, otherwise increment the value 
after each loop decrement the value of that key

*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum2 = function (nums) {
	const set = new Set()
	const hashMap = {}
	for (let left = 0; left < nums.length - 1; left++) {
		const target = nums[left]
		//remove the current target from the pool of possible
		hashMap[target]--
		for (let right = left + 1; right < nums.length; right++) {
			const num1 = nums[right]
			const num2 = target - num1

			//if a second number exists after the target and before num1
			if (hashMap[num2] !== undefined) {
				//hash the three values and add it to the set
				const tripletHash = getTripletHash(num1, num2, target)
				set.add(tripletHash)
			}
			addToHashMap(num1)
		}
	}
	return [...set].map(hash => decodeHash(hash))
	function addToHashMap(key) {
		//if the value doesn't exist in the hashmap
		if (hashMap[key] === undefined) {
			//set its value equal to 1
			hashMap[key] = 1
		}
		//otherwise increment the value
		else {
			hashMap[key]++
		}
	}
	function getTripletHash(num1, num2, num3) {
		return [num1, num2, num3]
			// sort so the hash is the same for each unique combination
			.sort((a, z) => a - z)
			// join by a non number character to separate the numbers
			.join("|")
	}
	function decodeHash(hash) {
		return hash
			//split the hash back into the three nums
			.split("|")
			// convert the strings back into numbers
			.map(Number)
	}
};
//TESTCASES--
console.log(threeSum2([0, 1, 1]), []);
console.log(threeSum2([-4, -1, -1, 0, 1, 2]), [[-1, -1, 2], [-1, 0, 1]]);
console.log(threeSum2([0, 0, 0]), [[0, 0, 0]]);
console.log(threeSum2([0, 0, 0, 0, 0]), [[0, 0, 0]]);