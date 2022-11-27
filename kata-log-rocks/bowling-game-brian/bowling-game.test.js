const { Game } = require('./bowling-game')


describe('bowling game', ()=>{
	let model

	beforeEach(()=>{
		model = new Game()
	})

	test('Game class should exist', ()=>{

		expect(model).toBeDefined()
	})

	test('score is initialized as 0', ()=>{
		
		expect(model.score).toBe(0)
	})

	test('score should increase by pins knocked down after a roll', ()=>{
		model.roll(3)

		expect(model.score).toBe(3)
	})
})