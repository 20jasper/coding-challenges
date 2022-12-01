const { getMaxCalories, parseInput } = require('./day1')

describe('Max Calories', () => {
	it('should return the total of the first elf if there is only one', () => {

		expect(getMaxCalories([[10]])).toBe(10)
		expect(getMaxCalories([[3, 3, 3]])).toBe(9)
	});

	it('should return the second elf\'s total if it has more calories', () => {

		expect(getMaxCalories([[10], [11]])).toBe(11)
	});
});

describe('Parse input file', () => {
	it('should contain correct numbers', () => {
		const res = parseInput('test.txt')

		expect(res).toContain('9524')
		expect(res).toContain('12411')
	});
});