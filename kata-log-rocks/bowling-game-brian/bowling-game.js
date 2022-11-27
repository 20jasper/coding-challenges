class Game{
	constructor(){
		this._score = 0
	}

	roll(pinsKnockedDown){
		this._score += pinsKnockedDown
	}

	score(){
		return this._score
	}
}


module.exports = { Game }