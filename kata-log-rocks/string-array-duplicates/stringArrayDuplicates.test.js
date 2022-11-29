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

	test('Should remove 5 consecutive duplicate letters', () => {
		const data = ['a'.repeat(5)]

		expect(stringArrayDuplicates(data)).toStrictEqual(["a"])
	});

	test('should remove multiple unique duplicates', () => {
		const data = ['aabb']

		expect(stringArrayDuplicates(data)).toStrictEqual(["ab"])
	});

	test('should not remove non–consecutive duplicates', () => {
		const data = ['aabba']

		expect(stringArrayDuplicates(data)).toStrictEqual(["aba"])
	});

	test('should remove duplicates from multiple elements', () => {
		const data = ['aaabbb', 'cccddd']

		expect(stringArrayDuplicates(data)).toStrictEqual(['ab', 'cd'])
	});

	test('should not change empty strings', () => {
		const data = ['']

		expect(stringArrayDuplicates(data)).toStrictEqual([''])
	});

	test('should return empty array if array is empty', () => {
		const data = []

		expect(stringArrayDuplicates(data)).toStrictEqual([])
	});
	test('code wars test cases should pass', () => {
		
		expect(stringArrayDuplicates(["abracadabra","allottee","assessee"])).toStrictEqual(["abracadabra","alote","asese"])
		expect(stringArrayDuplicates(["kelless","keenness"])).toStrictEqual(["keles","kenes"])
		expect(stringArrayDuplicates(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"])).toStrictEqual(['codewars','picaniny','hubububo'])
		expect(stringArrayDuplicates(["abracadabra","allottee","assessee"])).toStrictEqual(['abracadabra','alote','asese'])
	});
});