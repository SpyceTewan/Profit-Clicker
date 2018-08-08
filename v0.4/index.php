<!DOCTYPE html>
<html>
<head>
	<title>Profit Clicker</title>

	

	<!-- Loading Resources -->
	<link rel="stylesheet" type="text/css" href="css/default.css">
	<link rel="stylesheet" type="text/css" href="css/cookieaccept.css">
	<link rel="stylesheet" type="text/css" href="css/miner.css">
	<link rel="stylesheet" type="text/css" href="css/layout.css">
	<link rel="stylesheet" type="text/css" href="css/navbar.css">
	<link rel="stylesheet" type="text/css" href="css/general.css">
	<link rel="icon" type="image/png" href="./favicon.png">

	<script src="js/lib/p5.min.js"></script>
	<script src="js/lib/jquery-3.2.1.min.js"></script>
	<script src="js/lib/websetup.js"></script>
	<script src="js/lib/cookies.js"></script>	

	<!-- Loading Scripts-->
	<script src="js/fileLoader.js"></script>
	<script src="js/tabs.js"></script>
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
				<p class="hint">Cookies are used to save your progress</p>
			</div>
		</div>
		<div class="tabs">
			<div class="container" id="navbar">
				<ul>
					<li class="navbutton">General</li>
					<li>Bitcoin</li>
					<li>Gambling</li>
					<li>Machines</li>
				</ul>

				<p><a href="credits.php">Credits</a></p>
			</div>

			<div class="container" id="contentbar">
				<?php 
				include "tabs/general.html";
				//include "tabs/bitcoin.html"; ?>
			</div>
		</div>
	</div>
</body>
</html>