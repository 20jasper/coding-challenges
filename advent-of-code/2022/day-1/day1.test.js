const { getMaxCalories, parseInput } = require('./day1')
const readline = require('node:readline/promises');

function mockReadlineReturn(lines) {
	return jest.spyOn(readline, 'createInterface')
		.mockImplementationOnce(() => lines.map(line => line + '\n'))
}

describe('Max Calories', () => {
	it('should return the total of the first elf if there is only one', async () => {
		mockReadlineReturn(['10'])
		mockReadlineReturn(['3', '3', '3'])

		expect(await getMaxCalories('file.txt')).toBe(10)
		expect(await getMaxCalories('file.txt')).toBe(9)
	});

	it('should return the second elf\'s total if it has more calories', async () => {
		mockReadlineReturn(['10', '', '11'])

		expect(await getMaxCalories('file.txt')).toBe(11)
	});

	it('should return a total in the middle if it has more calories', async () => {
		mockReadlineReturn(['10', '', '11', '11', '', '1'])

		expect(await getMaxCalories('file.txt')).toBe(22)
	});
});

describe('Parse input file', () => {
	it('Each nested array should contain correct numbers', () => {
		const res = parseInput('test.txt')

		expect(res[0]).toContain(9524)
		expect(res[1]).toContain(12411)
	});
});