const { getMaxCalories } = require('./day1')

describe('Max Calories', () => {
	it('should return the total of the first elf if there is only one', () => {

		expect(getMaxCalories([[10]])).toBe(10)
		expect(getMaxCalories([[3, 3, 3]])).toBe(9)
	});

	it('should return the second elf\'s total if it has more calories', () => {

		expect(getMaxCalories([[10], [11]])).toBe(11)
	});
});