//URL--
// https://adventofcode.com/2022/day/3

const { readFileSync } = require("fs")

//INSTRUCTIONS--
/* 
As you finish identifying the misplaced items, the Elves come to you with another issue.

For safety, the Elves are divided into groups of three. Every Elf carries a badge that identifies their group. For efficiency, within each group of three Elves, the badge is the only item type carried by all three Elves. That is, if a group's badge is item type B, then all three Elves will have item type B somewhere in their rucksack, and at most two of the Elves will be carrying any other item type.

The problem is that someone forgot to put this year's updated authenticity sticker on the badges. All of the badges need to be pulled out of the rucksacks so the new authenticity stickers can be attached.

Additionally, nobody wrote down which item type corresponds to each group's badges. The only way to tell which item type is the right one is by finding the one item type that is common between all three Elves in each group.

Every set of three lines in your list corresponds to a single group, but each group can have a different badge item type. So, in the above example, the first group's rucksacks are the first three lines:

vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg

And the second group's rucksacks are the next three lines:

wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw

In the first group, the only item type that appears in all three rucksacks is lowercase r; this must be their badges. In the second group, their badge item type must be Z.

Priorities for these items must still be found to organize the sticker attachment efforts: here, they are 18 (r) for the first group and 52 (Z) for the second group. The sum of these is 70.

Find the item type that corresponds to the badges of each three-Elf group. What is the sum of the priorities of those item types?
*/

//SOLUTION--
/* 
*/

function getPrioritySum(groups) {
	const letterPriorityMap = getLetterPriorityMap()

	return groups.reduce(getPriority, 0)

	function getPriority(totalPriority, ruckSacks) {
		const duplicateLetter = getDuplicate(ruckSacks)

		return totalPriority + letterPriorityMap[duplicateLetter]
	}

	function getDuplicate(ruckSacks) {
		const letterSets = ruckSacks.map(ruckSack => new Set(ruckSack))

		const intersectionSet = letterSets.reduce(getIntersection)

		// return the only letter in the set
		return intersectionSet.keys().next().value

		function getIntersection(set1, set2) {
			const intersectionSet = new Set()

			set1.forEach(letter => {
				if (set2.has(letter)) {
					intersectionSet.add(letter);
				}
			})

			return intersectionSet
		}
	}

	// get hashmap of priorities where a is 1, A is 27, and Z is 52
	function getLetterPriorityMap() {
		const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

		const hashMap = {}
		for (let i = 0; i <= 51; i++) {
			const letter = alphabet[i]
			hashMap[letter] = i + 1
		}

		return hashMap
	}
}

function parseInput(relativePath) {
	const data = readFileSync(`${__dirname}/${relativePath}`, { encoding: 'utf8' })
	// trim end to remove ending newline
	const lines = data.trimEnd().split('\n')

	const stack = [[]]

	// split lines into groups of 3
	lines.forEach(line => {
		// make a new group if last is full
		if (stack.at(-1).length === 3) {
			stack.push([])
		}
		stack.at(-1).push(line)
	})

	return stack
}

module.exports = { getPrioritySum, parseInput }