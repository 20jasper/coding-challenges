// TODO
// parse stacks
// parse instructions
// move from one column to another
// get top of crate string
// do multiple operations

const { rearrangeStacks } = require('./day5part1');
describe('rearrangeStacks', () => {

	describe('should get correct stack tops', () => {

		it('if stack is one long', () => {
			expect(rearrangeStacks([['C'], ['G']])).toBe('CG')
			expect(rearrangeStacks([['C'], ['G'], ['V']])).toBe('CGV')
		});

		it('if stacks are longer than 1', () => {
			expect(rearrangeStacks([['C', 'A'], ['G', 'C', 'Q']])).toBe('AQ')
		});
	});
});