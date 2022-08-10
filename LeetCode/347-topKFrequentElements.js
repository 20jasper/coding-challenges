//URL--
// https://leetcode.com/problems/top-k-frequent-elements/

//INSTRUCTIONS--
/* 
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:

Input: nums = [1], k = 1
Output: [1]

 

Constraints:

		1 <= nums.length <= 105
		-104 <= nums[i] <= 104
		k is in the range [1, the number of unique elements in the array].
		It is guaranteed that the answer is unique.

 

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

*/

//SOLUTION--
/* 
This solution has a time complexity of O(nlogn) and a space complexity of O(n) where n is the length of the array
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function (nums, k) {
	const hashMap = {}
	//store the frequency of each element in a hashmap
	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		//if the number doesn't exist in the hashmap
		if (hashMap[num] === undefined) {
			//set it's value to 1
			hashMap[num] = 1
		}
		//else increment it by one
		else {
			hashMap[num]++
		}
	}

	//find the k highest values
	const keyArr = Object.keys(hashMap)
		//convert the values to numbers
		.map(Number)
		//sort the array
		.sort((a, z) => hashMap[a] - hashMap[z])
		//get the top k most frequent values
		.slice(-k)

	return keyArr
};
//TESTCASES--
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2), [1, 2]);
console.log(topKFrequent([1], 1), [1]);

//Optimization--
/* 
This solution can be optimized by using bucket sort
For each distinct frequency, make an array of numbers that occur that many times
This solution has a time complexity of O(n) and a space complexity of O(n)
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent2 = function (nums, k) {
	const hashMap = {}
	//store the frequency of each element in a hashmap
	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		//if the number doesn't exist in the hashmap
		if (hashMap[num] === undefined) {
			//set it's value to 1
			hashMap[num] = 1
		}
		//else increment it by one
		else {
			hashMap[num]++
		}
	}

	//Use bucket sort to sort by frequency
	const buckets = []

	for (const value in hashMap) {
		const frequency = hashMap[value]
		//if there is no bucket for a frequency
		if (buckets[frequency] === undefined) {
			//add it, and set the value equal to an array of the value converted to a number
			buckets[frequency] = [Number(value)]
		}
		//otherwise, add the value converted to a number to the bucket
		else {
			buckets[frequency].push(Number(value))
		}
	}

	//add k most frequent elements to the resultant array
	const res = []
	//iterate backward from most frequent to least frequent until the end is reached or the result is k long
	for (let i = buckets.length - 1; i > 0 && res.length < k; i--) {
		const bucket = buckets[i];
		//if there is a bucket for a certain frequency
		if (bucket !== undefined) {
			//add its contents to the resultant array
			res.push(...bucket)
		}
	}

	return res
};
//TESTCASES--
console.log(topKFrequent2([1, 1, 1, 2, 2, 3], 2), [1, 2]);
console.log(topKFrequent2([1, 1, 1, 2, 2, 3, 2,], 2), [1, 2]);
console.log(topKFrequent2([1], 1), [1]);