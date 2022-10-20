//URL--
// https://leetcode.com/problems/koko-eating-bananas/

//INSTRUCTIONS--
/* 
Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.

 

Example 1:

Input: piles = [3,6,7,11], h = 8
Output: 4

Example 2:

Input: piles = [30,11,23,4,20], h = 5
Output: 30

Example 3:

Input: piles = [30,11,23,4,20], h = 6
Output: 23

 

Constraints:

		1 <= piles.length <= 104
		piles.length <= h <= 109
		1 <= piles[i] <= 109


*/

//SOLUTION--
/* 
Setting the right bound to the maximum possible number rather than search the whole array for the biggest pile gives a better worst case. There can be up to 10,000 piles to check, and at worst the max value is still 10^9
The time complexity of this solution is O(n) and the space complexity is O(1) where n is the amount of piles
*/
/**
 * @param {number[]} piles
 * @param {number} maxHours
 * @return {number}
 */
var minEatingSpeed = function (piles, maxHours) {
	let left = 1
	let right = 10 ** 9

	//binary search
	while (left <= right) {
		const mid = Math.floor((right - left) / 2) + left
		if (canEatAllBananas(mid)) {
			right = mid - 1
			continue
		}
		left = mid + 1
	}

	return left


	function canEatAllBananas(bananasPerHour) {
		let hours = 0

		//iterate until all bananas are eaten or the guards return
		for (let i = 0; i < piles.length && hours <= maxHours; i++) {
			const hoursToEatPile = Math.ceil(piles[i] / bananasPerHour)
			hours += hoursToEatPile
		}
		//return if all bananas were eaten in time
		return hours <= maxHours
	}
};
//TESTCASES--
console.log(minEatingSpeed([3, 6, 7, 11], 8), 4);
console.log(minEatingSpeed([100, 1, 1, 1, 1], 5), 100);
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6), 23);