function initProgress(){
    //Checking if user has a save
    if(Cookies.get("visited") == "true"){
        loadProgress();
    }else{
        Cookies.set("visited", "true");
    }
}

//Loading progress from cookies
function loadProgress(){
    money =                     parseFloat(Cookies.get("money"));
    moneyPerClick =             parseFloat(Cookies.get("moneyPerClick"));
    moneyPerClickPrice =        parseFloat(Cookies.get("moneyPerClickPrice"));
    energy =                    parseFloat(Cookies.get("energy"));
    energyConsumption =         parseFloat(Cookies.get("energyConsumption"));
    energyConsumptionPrice =    parseFloat(Cookies.get("energyConsumptionPrice"));
    bitcoin =                   parseFloat(Cookies.get("bitcoin"));
    for(let i = 0; i < minerCount; i++){
        miners[i].speed =       parseFloat(Cookies.get("bitcoinMiner0" + i + "speed"));
        miners[i].upgradeCost = parseFloat(Cookies.get("bitcoinMiner0" + i + "cost"));
    }

    updateEverything();
}

//Saving progress from cookies
function saveProgress(){
    Cookies.set("money",                    money);
    Cookies.set("moneyPerClick",            moneyPerClick);
    Cookies.set("moneyPerClickPrice",       moneyPerClickPrice);
    Cookies.set("energy",                   energy);
    Cookies.set("energyConsumption",        energyConsumption);
    Cookies.set("energyConsumptionPrice",   energyConsumptionPrice);
    Cookies.set("bitcoin",                  bitcoin);
    for(let i = 0; i < 4; i++){
        Cookies.set("bitcoinMiner0" + i + "speed", miners[i].speed);
        Cookies.set("bitcoinMiner0" + i + "cost", miners[i].upgradeCost);
    }
}

//Clearing "visited" cookie. Results in no data loading after relog (Data is still saved so you can recover it if you don't override it with new one.)
function clearProgress(){
    Cookies.set("visited", "false");
    window.location = "index.php";
}