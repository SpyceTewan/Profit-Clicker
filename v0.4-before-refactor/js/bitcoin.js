let miners;
let minerCount;
let minerChance;
let minerReward;

function initBitcoin(){
  miners = [];
  minerCount = 4;
  minerChance = 1; //Between 0 and 100
  minerReward = 0.01;

  for(let i = 0; i < minerCount; i++){
    miners[i] = new Miner();
  }
  
}

function bitcoinBuy(){
  if(getBitcoinInputToDollar() < money){
    setMoney(money - getBitcoinInputToDollar());
    setBitcoin(bitcoin + getBitcoinInput());

    updateMoney();
    updateBitcoin();
  }
}

function bitcoinSell(){
  if(getBitcoinInput() <= bitcoin){
    setMoney(money + getBitcoinInputToDollar());
    setBitcoin(bitcoin - getBitcoinInput());

    updateMoney();
    updateBitcoin();
  }
}

function getBitcoinInput(){
  return parseFloat($("#viewport_bitcoin_transaction_input").val());
}

function getBitcoinInputToDollar(){
  return parseFloat($("#viewport_bitcoin_transaction_input").val() * chart);
}

function upgradeMiner(index){
  if(money >= miners[index].upgradeCost){
    let miner = miners[index];
    setMoney(money - miner.upgradeCost);
    miner.upgradeCost *= 1.5;
    miner.speed++;

    miners[index] = miner;

    updateMiner(index);
    updateMoney();

    
  }
}

function bitcoinHelperMax(arg){
  if(arg === 0){ //Money
    $("#viewport_bitcoin_transaction_input").val(roundNumber(money / chart));

  }else if(arg === 1){ //Bitcoin
    $("#viewport_bitcoin_transaction_input").val(bitcoin);
  }
}

$(document).ready(function() {
  $("#viewport_bitcoin_buy").click(function() {
    if($(".container_bitcoin_transaction_box").css("visibility", "hidden")) {

    }
  });
});