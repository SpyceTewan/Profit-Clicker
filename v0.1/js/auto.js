function initAuto(){
  setInterval(autoEnergy, 5000);
}

function autoEnergy(){
    if(energy < 100){
        energy++;
        updateEnergy();
    }
}
