$(function() {
var computerGuess = "";
var wins = 0;
var losses = 0;
var counter = 0;
var images = ['./Assets/Images/blue.jpg', './Assets/Images/purple.jpg','./Assets/Images/rainbow.jpg','./Assets/Images/diamond.jpg'];

function randomCount () {
	computerGuess = Math.floor(Math.random() * 100) + 1;
}

function resetCrystals () {
	for (var i = 0; i < images.length; i++) {
		var crystal = $("<img>");
		crystal.addClass("crystal");
		crystal.attr("src", images[i]);
		crystal.attr("value", (Math.floor(Math.random() * 10) + 1));
		crystal.attr("height", "100");
		$(".img").append(crystal);
	}
}

function resetHTML () {
	$(".computer-count").html(computerGuess);
	$(".wins-losses").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
	$("#score").html(counter);
	$(".img").empty();
}

function totalReset () {
	randomCount ();
	counter = 0;
	resetHTML ();
	resetCrystals ();
}


randomCount();
resetHTML ();
resetCrystals ();


function crystalClick () {
	counter += parseInt($(this).attr("value"));
	$("#score").html(counter);
	if (counter == computerGuess) {
		wins++;
		totalReset();
	}
	else if (counter > computerGuess) {
		losses++;
		totalReset();
	};
};

$(document).on("click", ".crystal", crystalClick);
});