let Bitcoin.canvas = new p5(function(sketch) {
	let chart; 		// The actual value of the chart
	let history;	// The chart-history
	let detail;		// History size

	function setup(){
		// Initiating canvas
		createCanvas(650, 300);
		
		initAI(); // Initiating chartAI
		frameRate(1); // Setting frame rate

		// Setting variables
		chart = 500;
		history = [];

		detail = 50;

		for(let i = 0; i < detail; i++) {
			history[i] = chart;
		}
	}

	function draw(){
		sketch.background(20); // Setting grey background

		sketch.stroke(30); // Setting helping line color
		sketch.strokeWeight(1); // Setting helping line thickness
		
		sketch.updateAI();
		
		let count = 50;

		// Drawing vertical Helperlines
		for(let i = 0; i < width / count; i++){
			sketch.line(i * count, 0, i * count, height);
		}

		// Drawing horizontal Helperlines
		for(let i = 0; i < width / count; i++){
			sketch.line(0, i * count, width, i * count);
		}

		// Updating transaction viewport
		updateBitcoinTransaction();

		// Updating history
		history[history.length] = chart;

		// Setting line color and width
		sketch.stroke(84, 96, 253);
		sketch.strokeWeight(3);
		for(let i = 0; i < detail; i++){
		sketch.line(	/*Drawing the lines*/
	/*x1*/	width - i * width / detail,
	/*y1*/	sketch.map(history[history.length - 1 - i], 0, 1000, height, 0),
	/*x2*/	width - (i + 1) * width / detail,
	/*y2*/	sketch.map(history[history.length - 2 - i], 0, 1000, height, 0)
		);

		}

		// Deleting junk data
		if(history.length > detail){
			history.shift();
		}
		// Updating bitcoin value viewport
		$("#viewport_bitcoin_value").html("1 BTC = " + roundNumber(chart) + "$");
	}
}, "viewport_bitcoin_canvas");
	