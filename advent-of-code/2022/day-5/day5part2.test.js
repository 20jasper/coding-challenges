// TODO
// change box move to move multiple

const { rearrangeStacks, parseInput } = require('./day5part2');

describe('rearrangeStacks', () => {

	describe('should get correct stack tops', () => {

		it('if stack is one long', () => {
			expect(rearrangeStacks([['C'], ['G']], [])).toBe('CG')
			expect(rearrangeStacks([['C'], ['G'], ['V']], [])).toBe('CGV')
		});

		it('if stacks are longer than 1', () => {
			expect(rearrangeStacks([['C', 'A'], ['G', 'C', 'Q']], [])).toBe('AQ')
		});
	});

	it('Should move from one stack to another', () => {
		expect(rearrangeStacks([['A', 'B'], ['D']], [{ amount: 1, start: 1, end: 2 }])).toBe('AB')
		expect(rearrangeStacks([['A'], ['D', 'E', 'F']], [{ amount: 2, start: 2, end: 1 }])).toBe('FD')
	});

	it('should do multiple operations', () => {
		const stacks = [['A', 'B', 'C'], ['D', 'E']]

		expect(rearrangeStacks(stacks, [{ amount: 1, start: 1, end: 2 }, { amount: 2, start: 2, end: 1 }])).toBe('CD')
	});
});

describe('parse input', () => {
	const [stacks, instructions] = parseInput('test.txt')
	it('should parse stacks of crates', () => {
		expect(stacks).toStrictEqual([['R', 'P', 'C'], ['H', 'V']])
	});

	it('should parse instructions', () => {
		expect(instructions).toStrictEqual([{ amount: 1, start: 2, end: 1 }, { amount: 21, start: 1, end: 2 }])
	});
});