const fs = require('fs');
const readline = require('node:readline/promises');

async function getMaxCalories(relativePath) {
	const absolutePath = `${__dirname}/${relativePath}`
	const rl = readline.createInterface({
		input: fs.createReadStream(absolutePath),
		crlfDelay: Infinity
	});

	let max = -Infinity
	let elfCalories = 0

	for await (const line of rl) {
		// if end of elf's calories
		if (line.trim() === '') {
			max = Math.max(max, elfCalories)
			elfCalories = 0
			continue
		}

		elfCalories += Number(line)
	}

	max = Math.max(max, elfCalories)

	return max
}


console.time('test')

getMaxCalories('input.txt')

console.timeEnd('test')

function parseInput(relativePath) {
	const absolutePath = `${__dirname}/${relativePath}`
	const data = fs.readFileSync(absolutePath, { encoding: 'utf8' })

	const caloriesArr = data.split('\n')

	const res = [[]]

	for (let i = 0; i < caloriesArr.length; i++) {
		// go to next elf if end of current elf's calories
		if (caloriesArr[i] === '') {
			res.push([])
			continue
		}

		res.at(-1).push(Number(caloriesArr[i]))
	}

	return res
}

module.exports = { getMaxCalories, parseInput }