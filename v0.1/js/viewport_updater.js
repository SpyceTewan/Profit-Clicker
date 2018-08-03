function updateMoney(){
    $("#viewport_money").html(money + "$");
}

function updateUpgradeMpC(){
    $("#btn_earn").html("Earn " + moneyPerClick + "$");
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
