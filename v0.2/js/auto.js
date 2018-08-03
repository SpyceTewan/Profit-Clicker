function initAuto(){
  setInterval(autoEnergy, 3000);
  setInterval(autoBitcoinMining, 1000);
}

function autoEnergy(){
  if(energy < 100){
      energy++;
      updateEnergy();
  }
}

function autoBitcoinMining(){
  for(let i = 0; i < bitcoinMinerCount; i++){
    if(random(0, 100) < bitcoinMinerSpeed){
      setBitcoin(bitcoin + 0.01);
      updateBitcoin();
    }
  }
}
