const { Game } = require('./bowling-game')


describe('bowling game', ()=>{
	test('Game class should exist', ()=>{
		const model = new Game()

		expect(model).toBeDefined()
	})
})