//URL--
// 

const { readFileSync } = require("fs")

//INSTRUCTIONS--
/* 
It seems like there is still quite a bit of duplicate work planned. Instead, the Elves would like to know the number of pairs that overlap at all.

In the above example, the first two pairs (2-4,6-8 and 2-3,4-5) don't overlap, while the remaining four pairs (5-7,7-9, 2-8,3-7, 6-6,4-6, and 2-6,4-8) do overlap:

		5-7,7-9 overlaps in a single section, 7.
		2-8,3-7 overlaps all of the sections 3 through 7.
		6-6,4-6 overlaps in a single section, 6.
		2-6,4-8 overlaps in sections 4, 5, and 6.

So, in this example, the number of overlapping assignment pairs is 4.

In how many assignment pairs do the ranges overlap?
*/

//SOLUTION--
/* 
*/
function getFullyContainedSum(pairs) {

	return pairs.reduce((total, [section1, section2]) => {
		if (isFullyContained(section1, section2) || isFullyContained(section2, section1)) {
			return total + 1
		}
		return total
	}, 0)

	function isFullyContained([containedStart, containedEnd], [containingStart, containingEnd]) {
		return containedStart <= containingStart && containedEnd >= containingEnd
	}
}


function parseInput(relativePath) {
	const path = `${__dirname}/${relativePath}`
	//trim end to remove final newline
	const data = readFileSync(path, { encoding: 'utf8' }).trimEnd()

	const lines = data.split('\n')

	lines.forEach((line, i) => {
		// split line into section
		lines[i] = line.split(',')

		// split start and end of range
		const ranges = lines[i]
		ranges.forEach((range, j) => {
			ranges[j] = range.split('-')

			// convert to number type
			const bounds = ranges[j]
			bounds.forEach((num, k) => {
				bounds[k] = Number(num)
			})

		})
	})

	return lines
}


module.exports = { getFullyContainedSum, parseInput }