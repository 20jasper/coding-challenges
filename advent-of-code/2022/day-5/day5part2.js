//URL--
// https://adventofcode.com/2022/day/5

//INSTRUCTIONS--
/* 
As you watch the crane operator expertly rearrange the crates, you notice the process isn't following your prediction.

Some mud was covering the writing on the side of the crane, and you quickly wipe it away. The crane isn't a CrateMover 9000 - it's a CrateMover 9001.

The CrateMover 9001 is notable for many new and exciting features: air conditioning, leather seats, an extra cup holder, and the ability to pick up and move multiple crates at once.

Again considering the example above, the crates begin in the same configuration:

		[D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

Moving a single crate from stack 2 to stack 1 behaves the same as before:

[D]        
[N] [C]    
[Z] [M] [P]
 1   2   3 

However, the action of moving three crates from stack 1 to stack 3 means that those three moved crates stay in the same order, resulting in this new configuration:

				[D]
				[N]
		[C] [Z]
		[M] [P]
 1   2   3

Next, as both crates are moved from stack 2 to stack 1, they retain their order as well:

				[D]
				[N]
[C]     [Z]
[M]     [P]
 1   2   3

Finally, a single crate is still moved from stack 1 to stack 2, but now it's crate C that gets moved:

				[D]
				[N]
				[Z]
[M] [C] [P]
 1   2   3

In this example, the CrateMover 9001 has put the crates in a totally different order: MCD.

Before the rearrangement process finishes, update your simulation so that the Elves know where they should stand to be ready to unload the final supplies. After the rearrangement procedure completes, what crate ends up on top of each stack?
*/

//SOLUTION--
/* 
*/
const { readFileSync } = require("fs")

function rearrangeStacks(stacks, operations) {

	operations.forEach(({ amount, start, end }) => {
		const startIndex = start - 1
		const endIndex = end - 1
		// move "amount" boxes from startIndex to endIndex
		for (let i = 0; i < amount; i++) {
			const stackTop = stacks[startIndex].pop()
			stacks[endIndex].push(stackTop)
		}
	})

	return generateStackTopString(stacks)
}

function generateStackTopString(stacks) {
	let stackTopString = ''

	stacks.forEach(stack => {
		stackTopString += stack.at(-1)
	})

	return stackTopString
}

function parseInput(relativePath) {
	const path = `${__dirname}/${relativePath}`
	//trim end to remove final newline
	const data = readFileSync(path, { encoding: 'utf8' }).trimEnd()

	const lines = data.split('\n')

	const stackIndexRow = getStackIndexRow(lines)

	const crateLines = lines.slice(0, stackIndexRow + 1)
	const stacksOfCrates = parseStacks(crateLines)

	const operationLines = lines.slice(stackIndexRow + 2)
	const operations = parseOperations(operationLines)

	return [stacksOfCrates, operations]
}

function getStackIndexRow(lines) {
	let i = 0

	while (!lines[i].startsWith(' 1 ')) {
		i++
	}

	return i
}

function parseStacks(lines) {
	const stacks = []
	const stackIndexes = lines.at(-1)

	// while the column exists, add new stacks of crates
	for (let col = 1; stackIndexes.indexOf(col) !== -1; col++) {
		const columnIndex = stackIndexes.indexOf(col)

		stacks.push([])
		// Add new crates to the stack while there are more crates and row is in bounds
		for (let row = -1 - 1; row >= -lines.length && lines.at(row)[columnIndex] !== ' '; row--) {
			const line = lines.at(row)
			const crate = line[columnIndex]
			stacks.at(-1).push(crate)
		}
	}

	return stacks
}

function parseOperations(lines) {
	const createOperation = ([amount, start, end]) => ({
		amount: Number(amount),
		start: Number(start),
		end: Number(end),
	})

	const res = []

	lines.forEach(line => {
		// remove everything but numbers
		const nums = line.split(/[^0-9]/).filter(line => line.length > 0)

		res.push(createOperation(nums))
	})

	return res
}
module.exports = { rearrangeStacks, parseInput }