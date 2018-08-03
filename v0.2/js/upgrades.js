
function upgradeMoneyPerClick(){
	if(money >= moneyPerClickPrice){
    setMoney(money -= moneyPerClickPrice);
    setMoneyPerClick(moneyPerClick += 0.1);
    setMoneyPerClickPrice(moneyPerClickPrice *= 1.1);

		updateMoney();
		updateUpgradeMpC();
	}
}

function upgradeEnergyConsumption() {
  if(money >= energyConsumptionPrice){
    setMoney(money -= energyConsumptionPrice);
    setEnergyConsumption(energyConsumption *= 0.9);
    setEnergyConsumptionPrice(energyConsumptionPrice *= 1.5);

    updateMoney();
    updateUpgradeEC();
  }
}

function minersBuy(){
    if(money >= bitcoinMinerCost){
        bitcoinMinerCount++;
        setMoney(money - bitcoinMinerCost);
        updateMoney();
        updateMinerCount();
        updateMinerSpeed();
    }
}
function minersUpgrade(){
    if(money >= bitcoinMinerSpeedCost){
      bitcoinMinerSpeed++;
      setMoney(money -= bitcoinMinerSpeedCost);
      bitcoinMinerSpeedCost *= 1.75;
      updateMoney();
      updateMinerCount();
      updateMinerSpeed();
      updateMinerUpgrade();
    }
}
