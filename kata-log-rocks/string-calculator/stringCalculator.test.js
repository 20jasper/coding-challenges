const { Add } = require('./stringCalculator');

describe('String Calculator', () => {

	describe('Add method', () => {

		it('should return 0 if given an empty string', () => {
			expect(Add('')).toBe(0)
		});

		it('should return the number if only one number is passed in', () => {
			expect(Add('5')).toBe(5)
			expect(Add('1000')).toBe(1000)
		});

		it('should sum two numbers', () => {
			expect(Add('5,7')).toBe(12)
		});

		it('should sum an arbitrary amount of numbers', () => {
			expect(Add('1,2,3,4,5')).toBe(15)
		});
	});
});