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
})