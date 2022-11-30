describe('Daily temperatures', () => {
	it('should be 0 if date is never warmer', () => {
		const data = [30]

		expect(dailyTemperatures(data)).toStrictEqual([0])
	});
});