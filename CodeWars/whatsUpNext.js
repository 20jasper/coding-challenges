//URL--
// 

//INSTRUCTIONS--
/* 
Given a sequence of items and a specific item in that sequence, return the item immediately following the item specified. If the item occurs more than once in a sequence, return the item after the first occurence. This should work for a sequence of any type.

When the item isn't present or nothing follows it, the function should return nil in Clojure and Elixir, Nothing in Haskell, undefined in JavaScript, None in Python.

nextItem([1, 2, 3, 4, 5, 6, 7], 3) # 4
nextItem("testing", "t") # "e"

*/

//SOLUTION--
/* 
Initially, I just tried using indexOf to find the first appearance of the element, but it turned out, there were other kinds of iterables, so I ended up using a for of loop

The time complexity of this solution is O(n) and the space complexity is O(1), where n is the amount of items in the iterable
*/
function nextItem(xs, item) {
	let itemIsFound = false

	//iterate through each value
	for (const key of xs) {
		//if an item has been found, return the current element
		if (itemIsFound) return key
		//if the current element is the item, set the itemIsFound flag to true
		if (key === item) itemIsFound = true
	}
	//if the item is not in the array, return undefined
	return undefined
}
//TESTCASES--
console.log((nextItem([1, 2, 3, 4, 5, 6, 7, 8], 5), 6))
console.log((nextItem(['a', 'b', 'c'], 'd'), undefined))
console.log((nextItem(['a', 'b', 'c'], 'c'), undefined))
console.log((nextItem("testing", "t"), "e"))
function* countFrom(n) { for (let i = n; ; ++i) yield i; }
console.log((nextItem(countFrom(1), 12), 13))