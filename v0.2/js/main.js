let money;
let moneyPerClick;
let moneyPerClickPrice;
let nachkommerStellen;
let energy;
let energyConsumption;
let energyConsumptionPrice;
let bitcoin;
let bitcoinMinerCount;
let bitcoinMinerCost;
let bitcoinMinerSpeed;
let bitcoinMinerSpeedCost;

function initGame(){
	nachkommerStellen = Math.pow(10, 2);
	money = 0;
	moneyPerClick = 0.1;
	moneyPerClickPrice = 7;
	energy = 100;
	energyConsumption = 1;
	energyConsumptionPrice = 10;
	bitcoin = 0;
	bitcoinMinerSpeed = 1;
	bitcoinMinerSpeedCost = 40;
	bitcoinMinerCount = 0;
	bitcoinMinerCost = 40;

	initAuto();
	initProgress();
	console.log("Starting game");
}

function earnMoney(){
	if(energy >= 1){
		money = Math.round( (money += moneyPerClick) * nachkommerStellen) / nachkommerStellen;
		setEnergy(energy -= energyConsumption);

		updateMoney();
		updateEnergy();
	}
}

function setMoney(arg){
	money = Math.round(arg * nachkommerStellen) / nachkommerStellen;
}

function setMoneyPerClick(arg) {
	moneyPerClick = Math.round(arg * nachkommerStellen) / nachkommerStellen;
}

function setMoneyPerClickPrice(arg) {
	moneyPerClickPrice = Math.round(arg * nachkommerStellen) / nachkommerStellen;
}

function setEnergy(arg) {
	energy = Math.round(arg * nachkommerStellen) / nachkommerStellen;
}

function setEnergyConsumption(arg) {
	energyConsumption = Math.round(arg * nachkommerStellen) / nachkommerStellen;
}

function setEnergyConsumptionPrice(arg) {
	energyConsumptionPrice = Math.round(arg * nachkommerStellen) / nachkommerStellen;
}

function setBitcoin(arg) {
	bitcoin = Math.round(arg * nachkommerStellen) / nachkommerStellen;
}

function roundNumber(arg) {
	arg = Math.round(arg * nachkommerStellen) / nachkommerStellen;
}
