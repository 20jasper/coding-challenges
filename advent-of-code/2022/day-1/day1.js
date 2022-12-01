function getMaxCalories(elves) {
	let max = -Infinity

	elves.forEach(elf => {
		const total = elf.reduce((acc, val) => acc + val, 0)

		max = Math.max(max, total)
	});

	return max
}


module.exports = { getMaxCalories }