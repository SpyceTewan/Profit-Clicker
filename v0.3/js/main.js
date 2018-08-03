let money;
let moneyPerClick;
let moneyPerClickPrice;
let nachkommerStellen;
let energy;
let energyConsumption;
let energyConsumptionPrice;
let bitcoin;

function initGame(){
	nachkommerStellen = Math.pow(10, 2);
	money = 0;
	moneyPerClick = 0.1;
	moneyPerClickPrice = 7;
	energy = 100;
	energyConsumption = 1;
	energyConsumptionPrice = 10;
	bitcoin = 0;

	initBitcoin();
	initAuto();
	initProgress();
	initPriceTables();

	for(let i = 0; i < minerCount; i++){
		updateMiner(i);
	}
	console.log("Game started!");
	console.log("ProfitClicker v0.3");
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
	money = roundNumber(arg);
}

function setMoneyPerClick(arg) {
	moneyPerClick = roundNumber(arg);
}

function setMoneyPerClickPrice(arg) {
	moneyPerClickPrice = roundNumber(arg);
}

function setEnergy(arg) {
	energy = roundNumber(arg);
}

function setEnergyConsumption(arg) {
	energyConsumption = roundNumber(arg);
}

function setEnergyConsumptionPrice(arg) {
	energyConsumptionPrice = roundNumber(arg);
}

function setBitcoin(arg) {
	bitcoin = arg;
}

function roundNumber(arg) {
	return Math.floor(arg * nachkommerStellen) / nachkommerStellen;
}
