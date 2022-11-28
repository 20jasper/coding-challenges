const {stringArrayDuplicates} = require('./stringArrayDuplicates')

describe('String Array Duplicates', () => {
	test('function should exist', () => {
		expect(stringArrayDuplicates).toBeDefined()
	});

	test('length of input and output array should be the same', () => {
		const data = []

		expect(stringArrayDuplicates(data).length).toBe(0)
	});
});