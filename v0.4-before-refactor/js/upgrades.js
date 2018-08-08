
function upgradeMoneyPerClick(){
	if(money >= moneyPerClickPrice){
    setMoney(money -= moneyPerClickPrice);
    setMoneyPerClick(moneyPerClick += 0.1);
    setMoneyPerClickPrice(pricetable.earnings[++moneyPerClickProgress]);

		updateMoney();
		updateUpgradeMpC();
	}
}

function upgradeEnergyConsumption() {
  if(money >= energyConsumptionPrice){
    setMoney(money -= energyConsumptionPrice);
    setEnergyConsumption(energyConsumption *= 0.9);
    setEnergyConsumptionPrice(pricetable.consumption[++energyConsumptionProgress]);

    updateMoney();
    updateUpgradeEC();
		updateUpgradeMpC();
  }
}
