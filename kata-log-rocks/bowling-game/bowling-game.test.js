const Name = require('./bowling-game')

let name;

beforeEach(() => {
  name = new Name;
});

describe('bowling game', ()=>{
	test('should initialize on the 0th frame', ()=>{
		expect(name._frame).toBe(0)
	})
	test('should initialize with 0 points', ()=>{
		expect(name._points).toBe(0)
	})
	test('should add points for each pin knocked down', ()=>{
		name.roll(5)
		expect(name._points).toBe(5)
	})
	test('The frame should advance when all 10 pins are knocked down', ()=>{
		name.roll(10)
		expect(name._frame).toBe(1)
	})
})

