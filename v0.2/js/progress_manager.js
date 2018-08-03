function initProgress(){
    let visited;

    if(Cookies.get("visited") == "true"){
        loadProgress();
    }else{
        Cookies.set("visited", "true");
    }
}

function loadProgress(){
    money = parseFloat(Cookies.get("money"));
    moneyPerClick = parseFloat(Cookies.get("moneyPerClick"));
    moneyPerClickPrice = parseFloat(Cookies.get("moneyPerClickPrice"));
    energy = parseFloat(Cookies.get("energy"));
    energyConsumption = parseFloat(Cookies.get("energyConsumption"));
    energyConsumptionPrice = parseFloat(Cookies.get("energyConsumptionPrice"));
    bitcoin = parseFloat(Cookies.get("bitcoin"));
    bitcoinMinerSpeed = parseFloat(Cookies.get("bitcoinMinerSpeed"));
    bitcoinMinerSpeedCost = parseFloat(Cookies.get("bitcoinMinerSpeedCost"));
    bitcoinMinerCount = parseFloat(Cookies.get("bitcoinMinerCount"));

    updateEverything();
}

function saveProgress(){
    Cookies.set("money", money);
    Cookies.set("moneyPerClick", moneyPerClick);
    Cookies.set("moneyPerClickPrice", moneyPerClickPrice);
    Cookies.set("energy", energy);
    Cookies.set("energyConsumption", energyConsumption);
    Cookies.set("energyConsumptionPrice", energyConsumptionPrice);
    Cookies.set("bitcoin", bitcoin);
    Cookies.set("bitcoinMinerSpeed", bitcoinMinerSpeed);
    Cookies.set("bitcoinMinerSpeedCost", bitcoinMinerSpeedCost);
    Cookies.set("bitcoinMinerCount", bitcoinMinerCount);
}
