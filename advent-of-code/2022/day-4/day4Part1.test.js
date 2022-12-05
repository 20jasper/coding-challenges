// TODO
// Parse input
// Find fully contained section assignments
// Get sum of all fully contained assignments

const { getFullyContainedSum } = require('./day4Part1')

describe('Get fully contained sum', () => {

	it('should add to the section if fully contained', () => {
		expect(getFullyContainedSum([[[1, 2], [1, 2]]])).toBe(1)
	});
});