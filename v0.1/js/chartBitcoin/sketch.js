let chart;
let history;
let detail;
let noiseV;

function setup(){

	var newCanvas = createCanvas(500, 300);
	newCanvas.parent("viewport_bitcoin_canvas");
	frameRate(1);

	history = [];
	detail = 50;
	noiseV = 0;
}



function draw(){
	background(20);

	updateBitcoinTransaction();
	noiseV += 0.005;
	chart = Math.round( (chart = noise(noiseV) * 1000) * nachkommerStellen) / nachkommerStellen;
	history[history.length] = chart;
		stroke(84, 96, 253);
		strokeWeight(3);
		for(let i = 0; i < detail; i++){
		line(
			width - i * width / detail,
			map(history[history.length - 1 - i], 0, 1000, height, 0),
			width - (i + 1) * width / detail,
			map(history[history.length - 2 - i], 0, 1000, height, 0)
		);

		}

		if(history.length > detail){
			history.shift();
		}
	$("#viewport_bitcoin_value").html("1 B = " + chart + "$");
}
