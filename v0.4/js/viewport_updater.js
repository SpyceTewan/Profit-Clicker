function updateEverything(){
  updateMoney();
  updateEnergy();
  updateBitcoin();
  updateUpgradeMpC();
  updateUpgradeEC();
  updateMiner(0);
  updateMiner(1);
  updateMiner(2);
  updateMiner(3);
}

function updateMoney(){
    $("#viewport_money").html(money + "$");
}

function updateUpgradeMpC(){
    $("#btn_earn").html("Earn " + moneyPerClick + "$ for " + energyConsumption + " Energy");
    $("#btn_upgradeMpC").html("Upgrade earnings <br>[" + moneyPerClickPrice + "$]");
}

function updateEnergy(){
    $("#viewport_energy_bar").val(energy);
    $("#viewport_energy_text").html(energy + "%");
}

function updateBitcoin(){
    $("#viewport_bitcoin").html("Your Wallet: " + bitcoin + "BTC");
}

function updateBitcoinTransaction(){
    $("#viewport_bitcoin_transaction_view").html(getBitcoinInputToDollar() + " $");
}

function updateUpgradeEC(){
    $("#btn_upgradeEC").html("Decease Energy Consumption <br>[" + energyConsumptionPrice + "$]");
}

function updateMiner(index){
    $("#miner_upgrade_0" + index).html("Upgrade<br>" + miners[index].upgradeCost + "$");
    $("#miner_speed_0" + index).html("Speed: " + miners[index].speed + "H/s");
}