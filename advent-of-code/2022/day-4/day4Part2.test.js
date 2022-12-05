// TODO
// check for any overlap

const { getOverlappingPairAmount, parseInput } = require('./day4Part2')

describe('Get fully contained sum', () => {

	describe('should overlap', () => {
		it('starts are equal', () => {
			expect(getOverlappingPairAmount([[[1, 2], [1, 3]]])).toBe(1)
		});
		it('ends are equal', () => {
			expect(getOverlappingPairAmount([[[2, 2], [1, 2]]])).toBe(1)
		});
		it('start and end are in between', () => {
			expect(getOverlappingPairAmount([[[2, 2], [1, 3]]])).toBe(1)
			expect(getOverlappingPairAmount([[[1, 3], [2, 2]]])).toBe(1)
		});
		it('2nd function overlaps, but isn\'t fully contained', () => {
			expect(getOverlappingPairAmount([[[2, 4], [3, 5]]])).toBe(1)
		});
	});

	describe('should not overlap', () => {
		it('no overlap between sections ', () => {
			expect(getOverlappingPairAmount([[[1, 2], [3, 4]]])).toBe(0)
			expect(getOverlappingPairAmount([[[3, 4], [1, 2]]])).toBe(0)
		});
	});

	it('should sum multiple pairs', () => {
		expect(getOverlappingPairAmount([[[2, 2], [1, 2]], [[2, 2], [1, 2]]])).toBe(2)
	});
});

describe('parse input', () => {

	it('should return an array of section arrays, each with 2 arrays of pairs', () => {
		expect(parseInput('test.txt')).toStrictEqual([[[14, 28], [13, 28]], [[72, 81], [82, 91]]])
	});
});