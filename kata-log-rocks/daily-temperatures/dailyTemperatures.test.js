const { dailyTemperatures } = require('./dailyTemperatures')

describe('Daily temperatures', () => {
	it('should be 0 if date is never warmer', () => {
		const data = [30]

		expect(dailyTemperatures(data)).toStrictEqual([0])
	});

	it('should be 1 if the next day is warmer', () => {

		expect(dailyTemperatures([30, 31])).toStrictEqual([1, 0])
		expect(dailyTemperatures([100, 30, 31])).toStrictEqual([0, 1, 0])
	});

	it('should calculate correct amount of days for any amount of days in the future', () => {

		expect(dailyTemperatures([99, 30, 30, 30, 30, 100])).toStrictEqual([5, 4, 3, 2, 1, 0])
	});
});