const {stringArrayDuplicates} = require('./stringArrayDuplicates')

describe('String Array Duplicates', () => {
	test('function should exist', () => {
		expect(stringArrayDuplicates).toBeDefined()
	});

	test('length of input and output array should be the same', () => {
		const data = []

		expect(stringArrayDuplicates(data).length).toBe(0)
	});

	test('Should not change strings without duplicates', () => {
		const data = ["abc"]

		expect(stringArrayDuplicates(data)).toStrictEqual(["abc"])
	});

	test('Should remove 2 consecutive duplicate letters', () => {
		const data = ["aa"]

		expect(stringArrayDuplicates(data)).toStrictEqual(["a"])
	});
});