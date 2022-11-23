const Name = require('./bowling-game')

let name;

beforeEach(() => {
  name = new Name;
});

describe('bowling game', ()=>{
	test('should initialize on the 0th frame', ()=>{
		expect(name._frame).toBe(0)
	})
})

