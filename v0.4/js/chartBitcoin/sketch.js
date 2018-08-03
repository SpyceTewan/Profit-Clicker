let chart; 		//The actual value of the chart
let history;	//The chart-history
let detail;		//History size

function setup(){
	//Initiating canvas
	var newCanvas = createCanvas(500, 300);
	newCanvas.parent("viewport_bitcoin_canvas");
	
	initAI(); //Initiating chartAI
	frameRate(1); //Setting frame rate

	//Setting variables
	chart = 500;
	history = [];
	detail = 50;

	
}

function draw(){
	background(20); //Setting grey background

	stroke(30); //Setting helping line color
	strokeWeight(1); //Setting helping line thickness
	
	updateAI();
	
	let count = 50;

	//Drawing vertical Helperlines
	for(let i = 0; i < width / count; i++){
		line(i * count, 0, i * count, height);
	}

	//Drawing horizontal Helperlines
	for(let i = 0; i < width / count; i++){
		line(0, i * count, width, i * count);
	}

	//Updating transaction viewport
	updateBitcoinTransaction();

	//Updating history
	history[history.length] = chart;

	//Setting line color and width
	stroke(84, 96, 253);
	strokeWeight(3);
	for(let i = 0; i < detail; i++){
	line(	/*Drawing the lines*/
/*x1*/	width - i * width / detail,
/*y1*/	map(history[history.length - 1 - i], 0, 1000, height, 0),
/*x2*/	width - (i + 1) * width / detail,
/*y2*/	map(history[history.length - 2 - i], 0, 1000, height, 0)
	);

	}

	//Deleting junk data
	if(history.length > detail){
		history.shift();
	}
	//Updating bitcoin value viewport
	$("#viewport_bitcoin_value").html("1 BTC = " + roundNumber(chart) + "$");
}
