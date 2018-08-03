//ProfitClicker Bitcoin Chart AI

//Chart behavior. 0 = Resting, 1 = Rising, 2 = Lowering, 3 = Shaky, 4 = Super Rising, 5 = Super Lowering
let behavior;
let behaviorR;
let behaviorAmount;
//Change behavior every a frames
let behaviorChangeRate;
//0% - 100%
let behaviorChangeRateChance;
let shakeAmount;
let changeAmount;
let changeEveningChance;
let superAmount;

function initAI(){
	behavior = 3;
	behaviorR = 0;
	behaviorAmount = 5;
	behaviorChangeRate = 20;
	behaviorChangeRateChance = 70;

	shakeAmount = 7;
	changeAmount = 3;
	changeEveningChance = 0.7;
	superAmount = 3;

	console.log("Started chartAI");
}

function updateAI(){
	if(behaviorR > behaviorChangeRate && Math.random() * 100 < behaviorChangeRateChance){
		behavior = Math.round(Math.random() * behaviorAmount);
		behaviorR = 0;

		if(Math.random() * 100 <= behaviorChangeRateChance){
			behavior = 3; //Changing to shaky
		}

	}

	switch(behavior){
		case 0: 	//Resting
			if(Math.random() >= 0.5){
				chart += Math.random();
			}else{
				chart -= Math.random();
			}
			break;
		case 1: 	//Rising
			if(Math.random() >= changeEveningChance){
				chart += Math.random() * changeAmount;
			}else{
				chart -= Math.random() * changeAmount;
			}
			break;
		case 2: 	//Lowering
			if(Math.random() >= changeEveningChance){
				chart -= Math.random() * changeAmount;
			}else{
				chart += Math.random() * changeAmount;
			}
			break;
		case 3: 	//Shaky
			if(Math.random() >= 0.5){
				chart += Math.random() * shakeAmount;
			}else{
				chart -= Math.random() * shakeAmount;
			}
			break;
		case 4: 	//Super Rising
			chart += Math.random() * changeAmount * superAmount;
			break;
		case 5: 	//Super Lowering
			chart -= Math.random() * changeAmount * superAmount;
			break;
	}

	if(chart > 1000){
			chart = 1000;
		}

		if(chart < 0){
			chart = 0;
		}

	behaviorR++;
}