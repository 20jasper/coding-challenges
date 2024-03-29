//URL--
// https://adventofcode.com/2022/day/5

//INSTRUCTIONS--
/* 
The expedition can depart as soon as the final supplies have been unloaded from the ships. Supplies are stored in stacks of marked crates, but because the needed supplies are buried under many other crates, the crates need to be rearranged.

The ship has a giant cargo crane capable of moving crates between stacks. To ensure none of the crates get crushed or fall over, the crane operator will rearrange them in a series of carefully-planned steps. After the crates are rearranged, the desired crates will be at the top of each stack.

The Elves don't want to interrupt the crane operator during this delicate procedure, but they forgot to ask her which crate will end up where, and they want to be ready to unload them as soon as possible so they can embark.

They do, however, have a drawing of the starting stacks of crates and the rearrangement procedure (your puzzle input). For example:

		[D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2

In this example, there are three stacks of crates. Stack 1 contains two crates: crate Z is on the bottom, and crate N is on top. Stack 2 contains three crates; from bottom to top, they are crates M, C, and D. Finally, stack 3 contains a single crate, P.

Then, the rearrangement procedure is given. In each step of the procedure, a quantity of crates is moved from one stack to a different stack. In the first step of the above rearrangement procedure, one crate is moved from stack 2 to stack 1, resulting in this configuration:

[D]        
[N] [C]    
[Z] [M] [P]
 1   2   3 

In the second step, three crates are moved from stack 1 to stack 3. Crates are moved one at a time, so the first crate to be moved (D) ends up below the second and third crates:

				[Z]
				[N]
		[C] [D]
		[M] [P]
 1   2   3

Then, both crates are moved from stack 2 to stack 1. Again, because crates are moved one at a time, crate C ends up below crate M:

				[Z]
				[N]
[M]     [D]
[C]     [P]
 1   2   3

Finally, one crate is moved from stack 1 to stack 2:

				[Z]
				[N]
				[D]
[C] [M] [P]
 1   2   3

The Elves just need to know which crate will end up on top of each stack; in this example, the top crates are C in stack 1, M in stack 2, and Z in stack 3, so you should combine these together and give the Elves the message CMZ.

After the rearrangement procedure completes, what crate ends up on top of each stack?

To begin, get your puzzle input.
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
		const nums = line.match(/[0-9]+/g)

		res.push(createOperation(nums))
	})

	return res
}
module.exports = { rearrangeStacks, parseInput }