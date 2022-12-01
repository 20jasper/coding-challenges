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