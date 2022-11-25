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
		this._scoreMultiplierQueue = [1, 1]
	}

	roll(pinsKnockedDown){
		this.updateScore(pinsKnockedDown)
		this._pinsLeft-=pinsKnockedDown
		
		this._rollsThisFrame++

		this.updateScoreMultiplier()
		this.frameAdvanceCheck()
	}
	
	updateScoreMultiplier(){
		this._scoreMultiplierQueue.pop()
		this._scoreMultiplierQueue.unshift(1)

		if(this._pinsLeft!==0){
			return
		}

		// if it's a strike
		if(this._rollsThisFrame===1){
			this._scoreMultiplierQueue[0]++
			this._scoreMultiplierQueue[1]++
		}
		// if it's a spare
		else {
			this._scoreMultiplierQueue[1]++
		}
	}

	frameAdvanceCheck(){
		//reset lane after all pins are knocked down before the third roll on the tenth frame
		if(this._frame === 10 && this._rollsThisFrame<3 && this._pinsLeft === 0){
			this._pinsLeft = 10
		}
		else if(this._rollsThisFrame===2 || this._pinsLeft===0){
			//advance frame 
			this._frame++
			this._pinsLeft = 10
			this._rollsThisFrame = 0
		}
	}

	updateScore(pinsKnockedDown){
		const scoreMultiplier = this._scoreMultiplierQueue[1]

		this._points += pinsKnockedDown * scoreMultiplier
	}

	score(){
		return this._points
	}
}

module.exports = Name