//instructions
/*
A magic bubble (object) is a bubble that pops exactly 5 minutes after creation. Create a magic bubble at the given timestamp and count the number of magic bubbles at the given timestamp. 
*/


//solution
/*
Assuming it's sorted
*/
function magicBubbles(nums, timeStamp) {
	let left = 0
	let right = nums.length - 1

	//set minTimeStamp to the given time stamp minus a very small amount under 5 seconds
	const minTimeStamp = timeStamp - 5

	//minIndex search
	while (left < right) {
		//mid is biased to the left so the index won't get stuck if mid time stamp is not less than the min time stamp
		const mid = Math.floor((left + right) / 2)
		const midTimeStamp = nums[mid]
		//if mid time stamp is less or equal to the min time stamp
		if (midTimeStamp <= minTimeStamp) {
			//move the left pointer one index past that element since that element or any elements before will be popped
			left = mid + 1
		}
		//else, the mid time stamp is more than the min time stamp
		else {
			//so move the right pointer to the mid time stamp since no other time stamp past that index can be more than the minimum
			right = mid
		}
	}
	//if no elements in the array are valid time stamps, return an empty array
	if (nums[left] < minTimeStamp) {
		return []
	}
	//save the left index as the minimum index
	const minIndex = left

	//maxIndex search

	//reset the right pointer
	right = nums.length - 1

	while (left < right) {
		//mid is biased to the right so the index won't get stuck if mid time stamp is not more than the max time stamp
		const mid = Math.ceil((left + right) / 2)
		const midTimeStamp = nums[mid]
		//if mid time stamp is more than the time stamp
		if (midTimeStamp > timeStamp) {
			//move the right pointer one index before that element
			right = mid - 1
		}
		//else, the mid time stamp is less than or equal to the max time stamp
		else {
			//so move the left pointer to the mid time stamp since no other time stamp before that index can be the maximum
			left = mid
		}
	}
	//save the right pointer as the max index since it looks nicer I guess
	const maxIndex = right
	return nums.slice(minIndex, maxIndex + 1)
}
//TestCases
console.log(magicBubbles([1, 2, 3, 4, 5, 6, 7, 8], 100000), [])
console.log(magicBubbles([1, 2, 3, 4, 5, 6, 7, 8], 7), [3, 4, 5, 6, 7])
console.log(magicBubbles([1, 2, 3, 4, 5, 6, 7, 8], 11), [7, 8])
console.log(magicBubbles([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 7), [3, 4, 5, 6, 7])
console.log(magicBubbles([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 5, 5, 5, 5, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 7), [3, 4, 5, 5, 5, 5, 5, 6, 7])