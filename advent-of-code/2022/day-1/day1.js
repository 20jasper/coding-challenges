function getMaxCalories(elves) {
	return elves[0].reduce((acc, val) => acc + val, 0)
}


module.exports = { getMaxCalories }