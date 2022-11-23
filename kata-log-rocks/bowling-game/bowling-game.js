//URL--
// https://kata-log.rocks/bowling-game-kata

//INSTRUCTIONS--
/* 
*/ 

//SOLUTION--
/* 
*/ 
class Name{
	constructor(){
		this._frame = 0
		this._points = 0
	}

	roll(pinsKnockedDown){
		this._points+=pinsKnockedDown
		if(pinsKnockedDown===10){
			this._frame++
		}
	}
}

module.exports = Name