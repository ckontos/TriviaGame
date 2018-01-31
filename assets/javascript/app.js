var count = 60;
var correctCount = 0;
var incorrectCount = 0;
var unansweredCount = 0;
var intervalId;
var value1;
var value2;
var value3;
var value4;
var value5;
var value6;
var value7;
var value8;

$(document).ready(function() {


	$(".gameScreen").hide();
	$(".resultScreen").hide();

	window.scrollTo(0, 500);

	$("#startbutton").on("click", function() {
		$(".startScreen").hide();
		$(".gameScreen").show();
		run();
	});

	function decrement() {
		count--;
		$("#timeLeft").html(count);
		if (count === 0) {
			stop();
			alert("Time is up!");
			completed();
			$(".gameScreen").hide();
			$(".resultScreen").show();
		}
	}

	function run() {
		intervalId = setInterval(decrement, 1000);
	}

	function stop() {
		clearInterval(intervalId);
	}

	$("#submitQuiz").on("click", function() {
		stop();
		if (confirm("Are you sure you want to submit your answers?")) {
			$(".gameScreen").hide();
			$(".resultScreen").show();
			completed();
		}
		else {
			history.go(-1);
			run();
		}
	});

	$(".answerchoice1").on("click", function() {
		value1 = $(this).attr("value");
		console.log(value1);
		$(".showclick1").html(value1);
	});

	$(".answerchoice2").on("click", function() {
		value2 = $(this).attr("value");
		console.log(value2);
		$(".showclick2").html(value2);
	});

	$(".answerchoice3").on("click", function() {
		value3 = $(this).attr("value");
		console.log(value3);
		$(".showclick3").html(value3);
	});

	$(".answerchoice4").on("click", function() {
		value4 = $(this).attr("value");
		console.log(value4);
		$(".showclick4").html(value4);
	});

	$(".answerchoice5").on("click", function() {
		value5 = $(this).attr("value");
		console.log(value5);
		$(".showclick5").html(value5);
	});

	$(".answerchoice6").on("click", function() {
		value6 = $(this).attr("value");
		console.log(value6);
		$(".showclick6").html(value6);
	});

	$(".answerchoice7").on("click", function() {
		value7 = $(this).attr("value");
		console.log(value7);
		$(".showclick7").html(value7);
	});

	$(".answerchoice8").on("click", function() {
		value8 = $(this).attr("value");
		console.log(value8);
		$(".showclick8").html(value8);
	});


	function completed() {

		var key = ["1995", "John Fox", "John Kasey", "Houston", "Chris Gamble", "four", "five", "Kerry Collins"];
		console.log(value1);
		console.log(key[0]);

		if (value1 === key[0]) {
			correctCount++;
		}
		else if (value1 === undefined) {
			unansweredCount++;
		}
		else {
			incorrectCount++;
		}

		//------------------------//

		if (value2 === key[1]) {
			correctCount++;
		}
		else if (value2 === undefined) {
			unansweredCount++;
		}
		else {
			incorrectCount++;
		}

		//------------------------//

		if (value3 === key[2]) {
			correctCount++;
		}
		else if (value3 === undefined) {
			unansweredCount++;
		}
		else {
			incorrectCount++;
		}

		//------------------------//

		if (value4 === key[3]) {
			correctCount++;
		}
		else if (value4 === undefined) {
			unansweredCount++;
		}
		else {
			incorrectCount++;
		}

		//------------------------//

		if (value5 === key[4]) {
			correctCount++;
		}
		else if (value5 === undefined) {
			unansweredCount++;
		}
		else {
			incorrectCount++;
		}

		//------------------------//

		if (value6 === key[5]) {
			correctCount++;
		}
		else if (value6 === undefined) {
			unansweredCount++;
		}
		else {
			incorrectCount++;
		}

		//------------------------//

		if (value7 === key[6]) {
			correctCount++;
		}
		else if (value7 === undefined) {
			unansweredCount++;
		}
		else {
			incorrectCount++;
		}

		//------------------------//

		if (value8 === key[7]) {
			correctCount++;
		}
		else if (value8 === undefined) {
			unansweredCount++;
		}
		else {
			incorrectCount++;
		}

		$("#numcorrect").text(correctCount);
		$("#numincorrect").text(incorrectCount);
		$("#unanswered").text(unansweredCount);
	}

	$("#doOver").on("click", function() {
		window.location.reload(true);
	});




});
