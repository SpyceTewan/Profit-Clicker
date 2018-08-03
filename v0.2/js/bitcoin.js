function bitcoinBuy(){
  if(getBitcoinInputToDollar() < money){
    money = Math.round( (money -= getBitcoinInputToDollar() ) * nachkommerStellen) / nachkommerStellen;
    bitcoin = Math.round( (bitcoin += getBitcoinInput() ) * nachkommerStellen) / nachkommerStellen;

    updateMoney();
    updateBitcoin();
  }
}

function bitcoinSell(){
  if(getBitcoinInput() <= bitcoin){
    money = Math.round( (money += getBitcoinInputToDollar() ) * nachkommerStellen) / nachkommerStellen;
    bitcoin = Math.round( (bitcoin -= getBitcoinInput() ) * nachkommerStellen) / nachkommerStellen;

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
