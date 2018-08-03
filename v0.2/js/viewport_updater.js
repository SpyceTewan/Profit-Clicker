function updateEverything(){
  updateMoney();
  updateEnergy();
  updateBitcoin();
  updateUpgradeMpC();
  updateUpgradeEC();
  updateMinerSpeed();
  updateMinerCount();
  updateMinerUpgrade();
}

function updateMoney(){
    $("#viewport_money").html(money + "$");
}

function updateUpgradeMpC(){
    $("#btn_earn").html("Earn " + moneyPerClick + "$ for " + energyConsumption);
    $("#btn_upgradeMpC").html("Upgrade earnings <br>[" + moneyPerClickPrice + "$]");
}

function updateEnergy(){
    $("#viewport_energy_bar").val(energy);
    $("#viewport_energy_text").html(energy + "%");
}

function updateBitcoin(){
    $("#viewport_bitcoin").html("Your Wallet: " + bitcoin + " B");
}

function updateBitcoinTransaction(){
    $("#viewport_bitcoin_transaction_view").html(getBitcoinInputToDollar() + " $");
}

function updateUpgradeEC(){
    $("#btn_upgradeEC").html("Decease Energy Consumption <br>[" + energyConsumptionPrice + "$]");
}

function updateMinerCount() {
    $("#miner_count").html("Miner Count: " + bitcoinMinerCount);
}

function updateMinerUpgrade(){
    $("#miner_upgrade").html("Upgrade all Miners <br> [" + bitcoinMinerSpeedCost + "$]");
}

function updateMinerSpeed(){
    $("#miner_speed").html("Miner Speed: " + bitcoinMinerSpeed + " Hash/s ");
    $("#miner_speed_total").html("Total Mining Speed: " + bitcoinMinerSpeed * bitcoinMinerCount + " Hash/s");
}
