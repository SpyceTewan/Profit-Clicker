let pricetable;

function initPriceTables(){
    let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            pricetable = JSON.parse(this.responseText);

            setMoneyPerClickPrice(pricetable.earnings[0]);
            setEnergyConsumptionPrice(pricetable.consumption[0]);
        }
    };
    xhttp.open("GET", "json/pricetables.json", true);
    xhttp.send();


}
