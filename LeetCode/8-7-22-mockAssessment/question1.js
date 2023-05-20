//URL--
// 

//INSTRUCTIONS--
/* 
In a deck of cards, each card has an integer written on it.

Return true if and only if you can choose X >= 2 such that it is possible to split the entire deck into 1 or more groups of cards, where:

		Each group has exactly X cards.
		All the cards in each group have the same integer.

 

Example 1:

Input: deck = [1,2,3,4,4,3,2,1]
Output: true
Explanation: Possible partition [1,1],[2,2],[3,3],[4,4].

Example 2:

Input: deck = [1,1,1,2,2,2,3,3]
Output: false
Explanation: No possible partition.

 

Constraints:

		1 <= deck.length <= 104
		0 <= deck[i] < 104


*/

//SOLUTION--
/* 
if there is only one card, return false
Find the frequency of each integer and save it in a hashmap
somehow find if each number has a common factor??????

If there's only one key, return true
check each integer's frequency. If sny frequency is different return false
return true

The time complexity of this solution is O(n) and the space complexity is O(n) where n is the amount of cards in the deck
*/
/**
 * @param {number[]} deck
 * @return {boolean}
 */
const hasGroupsSizeX = function (deck) {
	//if there is only one card, return false
	if (deck.length === 1) {
		return false
	}

	//make a map of each frequency
	const frequencyMap = {}
	for (let i = 0; i < deck.length; i++) {
		const card = deck[i];
		//if a card does not exist in the hashmap
		if (frequencyMap[card] === undefined) {
			frequencyMap[card] = 1
		}
		else {
			frequencyMap[card]++
		}
	}

	const values = Object.values(frequencyMap)

	// find min value
	const minFrequency = Math.min(...values)

	// if the min frequency is less than 2, the deck is not evenly divisible with the min frequency, return false
	if (minFrequency < 2 || deck.length % minFrequency !== 0) {
		return false
	}

	const firstMultiples = findMultiples(values[0])
	//check if each value is evenly divisible by the minimum value
	for (let i = 0; i < values.length; i++) {
		const frequency = values[i];
		//if the frequency isn't evenly divisible by the minimum frequency, return false
		if (frequency % minFrequency !== 0) {
			return false
		}
	}
	function findMultiples(num){
		const multiples = [num]
		if(num%2===0){
			multiples.push(2)
		}
		for (let i = 3; i < num; i+=2) {
			if(num%i===0){
				multiples.push(i)
			}
		}
	}
	//otherwise, return true
	return true
};
//TESTCASES--
console.log(hasGroupsSizeX([1]), false);
console.log(hasGroupsSizeX([1, 1]), true);
console.log(hasGroupsSizeX([1, 1, 2, 2]), true);
console.log(hasGroupsSizeX([1, 1, 2, 3]), false);
console.log(hasGroupsSizeX([1, 3, 3, 3]), false);
console.log(hasGroupsSizeX([1, 1, 3, 3, 3, 3]), false);


console.log(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1]), true);
console.log(hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3]), false);