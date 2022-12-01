const fs = require('fs');

function getMaxCalories(elves) {
	let max = -Infinity

	elves.forEach(elf => {
		const total = elf.reduce((acc, val) => acc + val, 0)

		max = Math.max(max, total)
	});

	return max
}

function parseInput(relativePath) {
	const absolutePath = `${__dirname}/${relativePath}`

	const data = fs.readFileSync(absolutePath, { encoding: 'utf8' })

	const caloriesArr = data.split('\n')

	return caloriesArr
}

module.exports = { getMaxCalories, parseInput }