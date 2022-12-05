// TODO
// check for any overlap

const { getFullyContainedSum, parseInput } = require('./day4Part2')

describe('Get fully contained sum', () => {

	describe('should be fully contained', () => {
		it('starts are equal', () => {
			expect(getFullyContainedSum([[[1, 2], [1, 3]]])).toBe(1)
		});
		it('ends are equal', () => {
			expect(getFullyContainedSum([[[2, 2], [1, 2]]])).toBe(1)
		});
		it('start and end are in between', () => {
			expect(getFullyContainedSum([[[2, 2], [1, 3]]])).toBe(1)
			expect(getFullyContainedSum([[[1, 3], [2, 2]]])).toBe(1)
		});
	});

	describe('should not be fully contained', () => {
		it('no overlap between sections ', () => {
			expect(getFullyContainedSum([[[1, 2], [3, 4]]])).toBe(0)
		});
		it('2nd function overlaps, but isn\'t fully contained', () => {
			expect(getFullyContainedSum([[[2, 4], [3, 5]]])).toBe(0)
		});
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