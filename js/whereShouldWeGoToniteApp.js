//This is the Where Should We Go Tonite App code

//Here's yer document ready
$(document).ready(function() {

	//This hides the results page until it is needed
   $("#altTitle").hide();
   $("#decisionDiv").hide();
   
   
	//These fire all the buttons assigning classes
   $( ".clickableWho" ).click(function() {

		$(".activeWho").removeClass("activeWho");
		$(this).addClass("activeWho");
		
	});
	
   $( ".clickableHow" ).click(function() {

		$(".activeHow").removeClass("activeHow");
		$(this).addClass("activeHow");
		
	});
	
   $( ".clickableWhat" ).click(function() {

		$(".activeWhat").removeClass("activeWhat");
		$(this).addClass("activeWhat");
		
	});
	

	//These fire all the buttons assigning variables
   $( "#me" ).click(function() {

		whoComes = "me";
		
	});
	
   $( "#we" ).click(function() {

		whoComes = "we";
	
	});
	
   $( "#us" ).click(function() {

		whoComes = "us";
		
	});
	
   $( "#low" ).click(function() {

		howMuch = "low";
		
	});
	
   $( "#mid" ).click(function() {

		howMuch = "mid";
		
	});
	
   $( "#high" ).click(function() {

		howMuch = "high";
		
	});
	
   $( "#dinner" ).click(function() {

		whatDo = "dinner";
		
	});
	
   $( "#drinks" ).click(function() {

		whatDo = "drinks";
		
	});
	
   $( "#activity" ).click(function() {

		whatDo = "activity";
		
	});
	
	//This fires the actual function	
   $("#fireButton").click(function() {
   
	placePicker(whoComes, howMuch, whatDo);
	$("#fireButton").slideUp();
	$(".argumentTitle").slideUp();
	$(".argumentWrapper").slideUp();
	$("#title").slideUp();
	$("#altTitle").delay(500).slideDown();
	$("#decisionDiv").delay(1000).slideDown();
	});
 
});


//These are the variables/arguments that will be passed into placePicker

var whoComes = "me";

var howMuch = "low";

var whatDo = "dinner";




//This is the placePicker function that does all the work!

function placePicker (whoComes, howMuch, whatDo) {


	//This is the big honkin' array that houses the choices
	var choiceList = [
	{
	"placeName": "meLowDinnerOne",
	"numPeople": "me",
	"pricePoint": "low",
	"activityType": "dinner"
	},
	{
	"placeName": "meLowDinnerTwo",
	"numPeople": "me",
	"pricePoint": "low",
	"activityType": "dinner"
	},
	{
	"placeName": "meLowDinnerThree",
	"numPeople": "me",
	"pricePoint": "low",
	"activityType": "dinner"
	},
	{
	"placeName": "weLowDinnerOne",
	"numPeople": "we",
	"pricePoint": "low",
	"activityType": "dinner"
	},
	{
	"placeName": "weLowDinnerTwo",
	"numPeople": "we",
	"pricePoint": "low",
	"activityType": "dinner"
	},
	{
	"placeName": "weLowDinnerThree",
	"numPeople": "we",
	"pricePoint": "low",
	"activityType": "dinner"
	},
	{
	"placeName": "usLowDinnerOne",
	"numPeople": "us",
	"pricePoint": "low",
	"activityType": "dinner"
	},
	{
	"placeName": "usLowDinnerTwo",
	"numPeople": "us",
	"pricePoint": "low",
	"activityType": "dinner"
	},
	{
	"placeName": "usLowDinnerThree",
	"numPeople": "us",
	"pricePoint": "low",
	"activityType": "dinner"
	},
	{
	"placeName": "meMidDinnerOne",
	"numPeople": "me",
	"pricePoint": "mid",
	"activityType": "dinner"
	},
	{
	"placeName": "meMidDinnerTwo",
	"numPeople": "me",
	"pricePoint": "mid",
	"activityType": "dinner"
	},
	{
	"placeName": "meMidDinnerThree",
	"numPeople": "me",
	"pricePoint": "mid",
	"activityType": "dinner"
	},
	{
	"placeName": "weMidDinnerOne",
	"numPeople": "we",
	"pricePoint": "mid",
	"activityType": "dinner"
	},
	{
	"placeName": "weMidDinnerTwo",
	"numPeople": "we",
	"pricePoint": "mid",
	"activityType": "dinner"
	},
	{
	"placeName": "weMidDinnerThree",
	"numPeople": "we",
	"pricePoint": "mid",
	"activityType": "dinner"
	},
	{
	"placeName": "usMidDinnerOne",
	"numPeople": "us",
	"pricePoint": "mid",
	"activityType": "dinner"
	},
	{
	"placeName": "usMidDinnerTwo",
	"numPeople": "us",
	"pricePoint": "mid",
	"activityType": "dinner"
	},
	{
	"placeName": "usMidDinnerThree",
	"numPeople": "us",
	"pricePoint": "mid",
	"activityType": "dinner"
	},
	{
	"placeName": "meHighDinnerOne",
	"numPeople": "me",
	"pricePoint": "high",
	"activityType": "dinner"
	},
	{
	"placeName": "meHighDinnerTwo",
	"numPeople": "me",
	"pricePoint": "high",
	"activityType": "dinner"
	},
	{
	"placeName": "meHighDinnerThree",
	"numPeople": "me",
	"pricePoint": "high",
	"activityType": "dinner"
	},
	{
	"placeName": "weHighDinnerOne",
	"numPeople": "we",
	"pricePoint": "high",
	"activityType": "dinner"
	},
	{
	"placeName": "weHighDinnerTwo",
	"numPeople": "we",
	"pricePoint": "high",
	"activityType": "dinner"
	},
	{
	"placeName": "weHighDinnerThree",
	"numPeople": "we",
	"pricePoint": "high",
	"activityType": "dinner"
	},
	{
	"placeName": "usHighDinnerOne",
	"numPeople": "us",
	"pricePoint": "high",
	"activityType": "dinner"
	},
	{
	"placeName": "usHighDinnerTwo",
	"numPeople": "us",
	"pricePoint": "high",
	"activityType": "dinner"
	},
	{
	"placeName": "usHighDinnerThree",
	"numPeople": "us",
	"pricePoint": "high",
	"activityType": "dinner"
	},
	{
	"placeName": "meLowDrinksOne",
	"numPeople": "me",
	"pricePoint": "low",
	"activityType": "drinks"
	},
	{
	"placeName": "meLowDrinksTwo",
	"numPeople": "me",
	"pricePoint": "low",
	"activityType": "drinks"
	},
	{
	"placeName": "meLowDrinksThree",
	"numPeople": "me",
	"pricePoint": "low",
	"activityType": "drinks"
	},
	{
	"placeName": "weLowDrinksOne",
	"numPeople": "we",
	"pricePoint": "low",
	"activityType": "drinks"
	},
	{
	"placeName": "weLowDrinksTwo",
	"numPeople": "we",
	"pricePoint": "low",
	"activityType": "drinks"
	},
	{
	"placeName": "weLowDrinksThree",
	"numPeople": "we",
	"pricePoint": "low",
	"activityType": "drinks"
	},
	{
	"placeName": "usLowDrinksOne",
	"numPeople": "us",
	"pricePoint": "low",
	"activityType": "drinks"
	},
	{
	"placeName": "usLowDrinksTwo",
	"numPeople": "us",
	"pricePoint": "low",
	"activityType": "drinks"
	},
	{
	"placeName": "usLowDrinksThree",
	"numPeople": "us",
	"pricePoint": "low",
	"activityType": "drinks"
	},
	{
	"placeName": "meMidDrinksOne",
	"numPeople": "me",
	"pricePoint": "mid",
	"activityType": "drinks"
	},
	{
	"placeName": "meMidDrinksTwo",
	"numPeople": "me",
	"pricePoint": "mid",
	"activityType": "drinks"
	},
	{
	"placeName": "meMidDrinksThree",
	"numPeople": "me",
	"pricePoint": "mid",
	"activityType": "drinks"
	},
	{
	"placeName": "weMidDrinksOne",
	"numPeople": "we",
	"pricePoint": "mid",
	"activityType": "drinks"
	},
	{
	"placeName": "weMidDrinksTwo",
	"numPeople": "we",
	"pricePoint": "mid",
	"activityType": "drinks"
	},
	{
	"placeName": "weMidDrinksThree",
	"numPeople": "we",
	"pricePoint": "mid",
	"activityType": "drinks"
	},
	{
	"placeName": "usMidDrinksOne",
	"numPeople": "us",
	"pricePoint": "mid",
	"activityType": "drinks"
	},
	{
	"placeName": "usMidDrinksTwo",
	"numPeople": "us",
	"pricePoint": "mid",
	"activityType": "drinks"
	},
	{
	"placeName": "usMidDrinksThree",
	"numPeople": "us",
	"pricePoint": "mid",
	"activityType": "drinks"
	},
	{
	"placeName": "meHighDrinksOne",
	"numPeople": "me",
	"pricePoint": "high",
	"activityType": "drinks"
	},
	{
	"placeName": "meHighDrinksTwo",
	"numPeople": "me",
	"pricePoint": "high",
	"activityType": "drinks"
	},
	{
	"placeName": "meHighDrinksThree",
	"numPeople": "me",
	"pricePoint": "high",
	"activityType": "drinks"
	},
	{
	"placeName": "weHighDrinksOne",
	"numPeople": "we",
	"pricePoint": "high",
	"activityType": "drinks"
	},
	{
	"placeName": "weHighDrinksTwo",
	"numPeople": "we",
	"pricePoint": "high",
	"activityType": "drinks"
	},
	{
	"placeName": "weHighDrinksThree",
	"numPeople": "we",
	"pricePoint": "high",
	"activityType": "drinks"
	},
	{
	"placeName": "usHighDrinksOne",
	"numPeople": "us",
	"pricePoint": "high",
	"activityType": "drinks"
	},
	{
	"placeName": "usHighDrinksTwo",
	"numPeople": "us",
	"pricePoint": "high",
	"activityType": "drinks"
	},
	{
	"placeName": "usHighDrinksThree",
	"numPeople": "us",
	"pricePoint": "high",
	"activityType": "drinks"
	},
	{
	"placeName": "meLowActivityOne",
	"numPeople": "me",
	"pricePoint": "low",
	"activityType": "activity"
	},
	{
	"placeName": "meLowActivityTwo",
	"numPeople": "me",
	"pricePoint": "low",
	"activityType": "activity"
	},
	{
	"placeName": "meLowActivityThree",
	"numPeople": "me",
	"pricePoint": "low",
	"activityType": "activity"
	},
	{
	"placeName": "weLowActivityOne",
	"numPeople": "we",
	"pricePoint": "low",
	"activityType": "activity"
	},
	{
	"placeName": "weLowActivityTwo",
	"numPeople": "we",
	"pricePoint": "low",
	"activityType": "activity"
	},
	{
	"placeName": "weLowActivityThree",
	"numPeople": "we",
	"pricePoint": "low",
	"activityType": "activity"
	},
	{
	"placeName": "usLowActivityOne",
	"numPeople": "us",
	"pricePoint": "low",
	"activityType": "activity"
	},
	{
	"placeName": "usLowActivityTwo",
	"numPeople": "us",
	"pricePoint": "low",
	"activityType": "activity"
	},
	{
	"placeName": "usLowActivityThree",
	"numPeople": "us",
	"pricePoint": "low",
	"activityType": "activity"
	},
	{
	"placeName": "meMidActivityOne",
	"numPeople": "me",
	"pricePoint": "mid",
	"activityType": "activity"
	},
	{
	"placeName": "meMidActivityTwo",
	"numPeople": "me",
	"pricePoint": "mid",
	"activityType": "activity"
	},
	{
	"placeName": "meMidActivityThree",
	"numPeople": "me",
	"pricePoint": "mid",
	"activityType": "activity"
	},
	{
	"placeName": "weMidActivityOne",
	"numPeople": "we",
	"pricePoint": "mid",
	"activityType": "activity"
	},
	{
	"placeName": "weMidActivityTwo",
	"numPeople": "we",
	"pricePoint": "mid",
	"activityType": "activity"
	},
	{
	"placeName": "weMidActivityThree",
	"numPeople": "we",
	"pricePoint": "mid",
	"activityType": "activity"
	},
	{
	"placeName": "usMidActivityOne",
	"numPeople": "us",
	"pricePoint": "mid",
	"activityType": "activity"
	},
	{
	"placeName": "usMidActivityTwo",
	"numPeople": "us",
	"pricePoint": "mid",
	"activityType": "activity"
	},
	{
	"placeName": "usMidActivityThree",
	"numPeople": "us",
	"pricePoint": "mid",
	"activityType": "activity"
	},
	{
	"placeName": "meHighActivityOne",
	"numPeople": "me",
	"pricePoint": "high",
	"activityType": "activity"
	},
	{
	"placeName": "meHighActivityTwo",
	"numPeople": "me",
	"pricePoint": "high",
	"activityType": "activity"
	},
	{
	"placeName": "meHighActivityThree",
	"numPeople": "me",
	"pricePoint": "high",
	"activityType": "activity"
	},
	{
	"placeName": "weHighActivityOne",
	"numPeople": "we",
	"pricePoint": "high",
	"activityType": "activity"
	},
	{
	"placeName": "weHighActivityTwo",
	"numPeople": "we",
	"pricePoint": "high",
	"activityType": "activity"
	},
	{
	"placeName": "weHighActivityThree",
	"numPeople": "we",
	"pricePoint": "high",
	"activityType": "activity"
	},
	{
	"placeName": "usHighActivityOne",
	"numPeople": "us",
	"pricePoint": "high",
	"activityType": "activity"
	},
	{
	"placeName": "usHighActivityTwo",
	"numPeople": "us",
	"pricePoint": "high",
	"activityType": "activity"
	},
	{
	"placeName": "usHighActivityThree",
	"numPeople": "us",
	"pricePoint": "high",
	"activityType": "activity"
	}
	];
	
	//This is the area that choices get pushed to
	//This is also what resets the array, because it lives inside the function
	var deciderArray = [];

	//This is how for loops work
	var i = 0;
	
	for (i=0; i < choiceList.length; i++) {
	
		//This takes the passed variables and passes them through this big fat equation
		if ((choiceList[i].numPeople == whoComes) && (choiceList[i].pricePoint == howMuch) && (choiceList[i].activityType == whatDo)) {
		
		//This is the array that gets populated by the previous equation
		deciderArray.push(choiceList[i].placeName);
		
		
		
		}
	
	}

	//console.log(deciderArray);
	
	//This randomizes your decisions for you
	var decision = deciderArray[Math.floor(Math.random() * deciderArray.length)];
	
	//This returns your decision!
	//console.log(decision);
	$("<p>" + decision + "</p>").appendTo("#decisionDiv");
	
};
