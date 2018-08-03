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
  for(let i = 0; i < minerCount; i++){ //Loop through all miners
    for(let j = 0; j < miners[i].speed; j++){
      if(random(0, 100) <= minerChance){
        bitcoin += minerReward;
        updateBitcoin();
      }
    }
  }
}
