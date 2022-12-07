const { Add } = require('./stringCalculator');

describe('String Calculator', () => {

	describe('Add method', () => {

		it('should return 0 if given an empty string', () => {
			expect(Add('')).toBe(0)
		});
	});
});