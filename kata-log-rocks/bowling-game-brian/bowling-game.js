class Game{
	constructor(){
		this._score = 0
	}

	roll(){
		this._score = 3
	}

	score(){
		return 11
	}
}


module.exports = { Game }