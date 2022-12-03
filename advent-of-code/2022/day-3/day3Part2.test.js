// TODO
// update duplicate to be per 3 rucksacks instead of 2 halves of one
// update parseinput to fit new requirements
// get duplicate by getting union of all three sets

const { getPrioritySum, parseInput } = require('./day3Part2')

describe('Get priority sum', () => {
	it('should get the priority of a letter', () => {
		expect(getPrioritySum([['aa', 'aa', 'aa']])).toBe(1)
		expect(getPrioritySum([['AA', 'AA', 'AA']])).toBe(27)
		expect(getPrioritySum([['ZZ', 'ZZ', 'ZZ']])).toBe(52)
	});

	it('should get priority of letter in all 3 elve\'s rucksacks', () => {
		expect(getPrioritySum([['aa', 'baab', 'awwwwbbbba']])).toBe(1)
	});

	it('should sum priorities of three elf groups', () => {
		expect(getPrioritySum([['aa', 'baab', 'awwwwbbbba'], ['bb', 'baab', 'awwwwbbbba']])).toBe(3)
	});
});

describe('parse input', () => {
	it('should split input file by line', () => {
		expect(parseInput('test.txt')).toStrictEqual(['aa', 'bb', 'baac'])
	});
});