const { getMaxCalories } = require('./day1')

describe('Max Calories', () => {
	it('should return the total of the first elf if there is only one', () => {

		expect(10).toBe(getMaxCalories([[10]]))
		expect(9).toBe(getMaxCalories([[3, 3, 3]]))
	});

	it('should return the second elf\s total if it has more calories', () => {

		expect(11).toBe(getMaxCalories([[10], [11]]))
	});
});