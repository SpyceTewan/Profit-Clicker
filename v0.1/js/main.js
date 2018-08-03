let money;
let moneyPerClick;
let moneyPerClickPrice;
let nachkommerStellen;
let bitcoin;
let energy;


function initGame(){
	money = 0;
	moneyPerClick = 0.1;
	moneyPerClickPrice = 7;
	energy = 100;
	bitcoin = 0;
	initAuto();

	nachkommerStellen = Math.pow(10, 2);

	console.log("Starting game");
}

function earnMoney(){
	if(energy > 0){
		money = Math.round( (money += moneyPerClick) * nachkommerStellen) / nachkommerStellen;
		energy--;

		updateMoney();
		updateEnergy();
	}
}

function upgradeMoneyPerClick(){
	if(money >= moneyPerClickPrice){
		money = Math.round( (money -= moneyPerClickPrice) * nachkommerStellen) / nachkommerStellen;
		moneyPerClick = Math.round( (moneyPerClick += 0.1) * nachkommerStellen) / nachkommerStellen;
		moneyPerClickPrice = Math.round( (moneyPerClickPrice *= 1.1) * nachkommerStellen) / nachkommerStellen;

		updateMoney();
		updateUpgradeMpC();
	}
}
