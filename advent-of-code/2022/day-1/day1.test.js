const { getMaxCalories } = require('./day1')

describe('Max Calories', () => {
	it('should return the total of the first elf if there is only one', () => {

		expect(10).toBe(getMaxCalories([[10]]))
		expect(9).toBe(getMaxCalories([[3, 3, 3]]))
	});
});