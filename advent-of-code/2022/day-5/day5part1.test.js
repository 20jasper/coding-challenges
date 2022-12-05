// TODO
// parse stacks
// parse instructions
// move from one column to another
// get top of crate string
// do multiple operations

const { rearrangeStacks, parseInput } = require('./day5part1');

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
		expect(rearrangeStacks([['A'], ['D', 'E', 'F']], [{ amount: 2, start: 2, end: 1 }])).toBe('ED')
	});

	it('should do multiple operations', () => {
		const stacks = [['A', 'B', 'C'], ['D', 'E']]

		expect(rearrangeStacks(stacks, [{ amount: 1, start: 1, end: 2 }, { amount: 2, start: 2, end: 1 }])).toBe('ED')
	});
});

describe('parse input', () => {
	it('should parse stacks of crates', () => {
		expect(parseInput('test.txt')).toStrictEqual([['R', 'P', 'C'], ['H', 'V']])
	});
});