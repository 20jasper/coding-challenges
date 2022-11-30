const { dailyTemperatures } = require('./dailyTemperatures')

describe('Daily temperatures', () => {
	it('should be 0 if date is never warmer', () => {
		const data = [30]

		expect(dailyTemperatures(data)).toStrictEqual([0])
	});

	it('should be 1 if the next day is warmer', () => {
		const data = [30, 31]

		expect(dailyTemperatures(data)).toStrictEqual([1, 0])
	});
});