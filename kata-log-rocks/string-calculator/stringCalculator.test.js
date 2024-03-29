const { Add } = require('./stringCalculator');

describe('String Calculator', () => {

	describe('Amount of numbers passed', () => {

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

	describe('Delimiters', () => {

		it('should allow both commas and newline characters to delimit numbers', () => {
			expect(Add('1\n2,3')).toBe(6)
		});

		it('should support custom delimiters', () => {
			expect(Add('//;\n1;2')).toBe(3)
		});
	});

	describe('Negative numbers', () => {

		it('should throw an exception if a negative number is passed', () => {
			expect(() => Add('-1')).toThrow('negatives not allowed')
		});
		it('should show negatives in error message if multiple are passed', () => {
			expect(() => Add('-1,-2')).toThrow('-1, -2')
		});
	});
});