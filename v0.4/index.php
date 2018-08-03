<!DOCTYPE html>
<html>
<head>
	<title>Profit Clicker</title>
	<script src="js/jquery-3.2.1.min.js"></script>
	<link rel="stylesheet" type="text/css" href="default.css">
	<script src="http://cdn.tewan.at/websetup.js"></script>

	<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="miner.css">
	<link rel="icon" type="image/png" href="./favicon.png">

	<!-- Loading Scripts-->
	<script src="js/fileLoader.js"></script>
	<script src="js/pricetables.js"></script>
	<script src="js/main.js"></script>
	<script src="js/miner.js"></script>
	<script src="js/auto.js"></script>
	<script src="js/bitcoin.js"></script>
	<script src="js/viewport_updater.js"></script>
	<script src="js/chartBitcoin/chartAI.js"></script>
	<script src="js/chartBitcoin/sketch.js"></script>
	<script src="js/upgrades.js"></script>
	<script src="js/progress_manager.js"></script>

	<script src="http://cdn.tewan.at/p5.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js"></script>


</head>
<body onload="initGame()" onunload="saveProgress()">

	<div id="cookies-container">
		<div class="cookies-box">
		<p>You need to accept the use of Cookies on this site. Cookies are used to save your game progress, so we can save it without needing you to log in. No personal data is saved on our servers.</p>

		<button onclick="acceptCookies()">I accept</button>

		</div>
	</div>

	<div class="parent-box">
		<div class="header">
			<h1>Profit Clicker!</h1>
			<div class="hint_container">
				<p class="hint">v0.4</p><br><a href="../changelog.html" class="hint"><b>Changelog</b></a><br>
				<p class="hint">We use cookies to store your game progress!</p>
			</div>
		</div>
		<div class="tabs">
			<div class="container" id="mainbar">
					<p id="viewport_money">0$</p>
					<button id="btn_earn" class="shop" onClick="earnMoney()">Earn 0.1$ for 1 Energy</button>
					<button id="btn_upgradeMpC" class="shop" onClick="upgradeMoneyPerClick()">Upgrade earnings <br>[7$]</button>
					<button id="btn_upgradeEC" class="shop" onClick="upgradeEnergyConsumption()">Decease Energy Consumption <br>[10$]</button>


					
					<div id="container_energy">
						<p style="font-size: 120%">Energy</p>
						<progress value="100" max="100" id="viewport_energy_bar"></progress>
						<p id="viewport_energy_text">100%</p>

				<!--	<div style="height: 100%; text-align: bottom">
							<input type="file" name="upload" id="saveStateInput">
							<button id="saveStateUpload">Upload</button>
UPLOAD FILE FUNCTION NOT IMPLEMENTED
							<button id="saveStateDownload">Download</button>
						</div>-->
					</div>
			</div>

			<div class="container" id="casebar">
				Gambling should be here in v0.4

			</div>

			<div class="container" id="bitcoinbar">
				
				<p style="font-size: 120%">Bitcoin</p>
				<div id="viewport_bitcoin_canvas"></div>

				
				<div id="container_bitcoin_info">
					<p id="viewport_bitcoin">Your Wallet: 0BTC</p>
					<p id="viewport_bitcoin_value">Loading...</p>
				</div>
				

				<div id="container_bitcoin_transaction">
					<div id="container_bitcoin_transaction_input">
						<input type="number" id="viewport_bitcoin_transaction_input" onchange=	"updateBitcoinTransaction()">
						<p id="viewport_bitcoin_transaction_view">0 $</p>
					</div>

					<div id="container_bitcoin_transaction_buttons">
						<button id="viewport_bitcoin_buy" onclick="bitcoinBuy()">Buy</button>
						<button id="viewport_bitcoin_sell" onclick="bitcoinSell()">Sell</button><br>
						<button id="viewport_bitcoin_transaction_helper" onClick="bitcoinHelperMax(0)">Max Money</button>
						<button id="viewport_bitcoin_transaction_helper" onClick="bitcoinHelperMax(1)">Max BTC</button>
					</div>

				</div>
				
				<p style="font-size: 120%">Miners</p>
				<div id="container_bitcoin_miner">
					<div class="miner_container" style="left: 20%;">
						<p class="miner_speed" id="miner_speed_00">Speed: 0 H/s</p>
						<button class="miner_button" onclick="upgradeMiner(0)" id="miner_upgrade_00">Loading...</button>
					</div>

					<div class="miner_container" style="left: 40%;">
						<p class="miner_speed" id="miner_speed_01">Speed: 0 H/s</p>
						<button class="miner_button" onclick="upgradeMiner(1)" id="miner_upgrade_01">Loading...</button>
					</div>

					<div class="miner_container" style="left: 60%;">
						<p class="miner_speed" id="miner_speed_02">Speed: 0 H/s</p>
						<button class="miner_button" onclick="upgradeMiner(2)" id="miner_upgrade_02">Loading...</button>
					</div>

					<div class="miner_container" style="left: 80%;">
						<p class="miner_speed" id="miner_speed_03">Speed: 0 H/s</p>
						<button class="miner_button" onclick="upgradeMiner(3)" id="miner_upgrade_03">Loading...</button>
					</div>
				</div>

			</div>
		</div>
	</div>
</body>
</html>