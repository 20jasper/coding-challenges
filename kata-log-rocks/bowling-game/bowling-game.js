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
		this._pinsLeft = 10
		this._rollsThisFrame = 0
		this._lastFrameWasSpare = false
	}

	roll(pinsKnockedDown){
		this.updateScore(pinsKnockedDown)
		this._pinsLeft-=pinsKnockedDown
		
		this._rollsThisFrame++

		if(this._rollsThisFrame===2&&this._pinsLeft===0){
			this._lastFrameWasSpare = true
		}

		if(this.shouldFrameAdvance()){
			this._frame++
		}
	}
	
	shouldFrameAdvance(){
		if(this._rollsThisFrame===2){
			return true
		}
		if(this._pinsLeft===0){
			return true
		}

		return false
	}

	updateScore(pinsKnockedDown){
		this._points+=pinsKnockedDown
		if(this._lastFrameWasSpare){
			this._points+=pinsKnockedDown
		}
	}

	score(){
		return this._points
	}
}

module.exports = Name