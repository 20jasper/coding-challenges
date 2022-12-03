// TODO
// find the duplicate letter in each half of the rucksack
// get the priority of that letter
// sum all the priorities of each rucksack
// change alphabet string to hashmap
// get duplicate letter by adding each letter to a set

const { getPrioritySum } = require('./day3Part1')

describe('Get priority sum', () => {
	it('should get the priority of a letter', () => {
		expect(getPrioritySum(['aa'])).toBe(1)
		expect(getPrioritySum(['AA'])).toBe(27)
		expect(getPrioritySum(['ZZ'])).toBe(52)
	});

	it('should get priority of the duplicate letter', () => {
		expect(getPrioritySum(['abac'])).toBe(1)
		expect(getPrioritySum(['baac'])).toBe(1)
	});

	it('should sum priorities of multiple rucksacks', () => {
		expect(getPrioritySum(['abac', 'ZvcZ'])).toBe(53)
	});
});
