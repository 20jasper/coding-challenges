class Game{
	constructor(){
		this._score = 0
		this._frame = 2
	}

	roll(pinsKnockedDown){
		this._score += pinsKnockedDown
	}

	score(){
		return this._score
	}
}


module.exports = { Game }