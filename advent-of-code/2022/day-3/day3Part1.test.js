// TODO
// find the duplicate letter in each half of the rucksack
// get the priority of that letter
// sum all the priorities of each rucksack
const { getPrioritySum } = require('./day3Part1')

describe('Get priority sum', () => {
	it('should get the priority of a letter', () => {
		expect(getPrioritySum(['aa'])).toBe(1)
		expect(getPrioritySum(['AA'])).toBe(27)
		expect(getPrioritySum(['ZZ'])).toBe(52)
	});
});
