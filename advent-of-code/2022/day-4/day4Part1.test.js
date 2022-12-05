// TODO
// Parse input
// Find fully contained section assignments
// Get sum of all fully contained assignments

const { getFullyContainedSum, parseInput } = require('./day4Part1')

describe('Get fully contained sum', () => {

	it('should add to the section if fully contained', () => {
		// if starts are equal
		expect(getFullyContainedSum([[[1, 2], [1, 3]]])).toBe(1)
		// if ends are equal
		expect(getFullyContainedSum([[[2, 2], [1, 2]]])).toBe(1)
	});

	it('should not add to the section if not fully contained', () => {
		expect(getFullyContainedSum([[[1, 2], [3, 4]]])).toBe(0)
	});

	it('should sum multiple pairs', () => {
		expect(getFullyContainedSum([[[2, 2], [1, 2]], [[2, 2], [1, 2]]])).toBe(2)
	});
});

describe('parse input', () => {

	it('should return an array of section arrays, each with 2 arrays of pairs', () => {
		expect(parseInput('test.txt')).toStrictEqual([[[14, 28], [13, 28]], [[72, 81], [82, 91]]])
	});
});