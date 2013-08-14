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
	"placeName": "Broad St Diner",
	"numPeople": "me",
	"pricePoint": "low",
	"activityType": "dinner"
	},
	{
	"placeName": "Midtown III",
	"numPeople": "me",
	"pricePoint": "low",
	"activityType": "dinner"
	},
	{
	"placeName": "Oregon Diner",
	"numPeople": "me",
	"pricePoint": "low",
	"activityType": "dinner"
	},
	{
	"placeName": "Teri's",
	"numPeople": "we",
	"pricePoint": "low",
	"activityType": "dinner"
	},
	{
	"placeName": "Silk City",
	"numPeople": "we",
	"pricePoint": "low",
	"activityType": "dinner"
	},
	{
	"placeName": "Tom Jones Restaurant",
	"numPeople": "we",
	"pricePoint": "low",
	"activityType": "dinner"
	},
	{
	"placeName": "South Street Diner",
	"numPeople": "us",
	"pricePoint": "low",
	"activityType": "dinner"
	},
	{
	"placeName": "Melrose Diner",
	"numPeople": "us",
	"pricePoint": "low",
	"activityType": "dinner"
	},
	{
	"placeName": "West Chester Diner",
	"numPeople": "us",
	"pricePoint": "low",
	"activityType": "dinner"
	},
	{
	"placeName": "Penrose Diner",
	"numPeople": "me",
	"pricePoint": "mid",
	"activityType": "dinner"
	},
	{
	"placeName": "Darling's Diner",
	"numPeople": "me",
	"pricePoint": "mid",
	"activityType": "dinner"
	},
	{
	"placeName": "Aki",
	"numPeople": "me",
	"pricePoint": "mid",
	"activityType": "dinner"
	},
	{
	"placeName": "The Continental",
	"numPeople": "we",
	"pricePoint": "mid",
	"activityType": "dinner"
	},
	{
	"placeName": "The Cantina",
	"numPeople": "we",
	"pricePoint": "mid",
	"activityType": "dinner"
	},
	{
	"placeName": "El Rey",
	"numPeople": "we",
	"pricePoint": "mid",
	"activityType": "dinner"
	},
	{
	"placeName": "SideCar",
	"numPeople": "us",
	"pricePoint": "mid",
	"activityType": "dinner"
	},
	{
	"placeName": "Trolley Car Cafe",
	"numPeople": "us",
	"pricePoint": "mid",
	"activityType": "dinner"
	},
	{
	"placeName": "Marathon",
	"numPeople": "us",
	"pricePoint": "mid",
	"activityType": "dinner"
	},
	{
	"placeName": "Morimoto",
	"numPeople": "me",
	"pricePoint": "high",
	"activityType": "dinner"
	},
	{
	"placeName": "Parc",
	"numPeople": "me",
	"pricePoint": "high",
	"activityType": "dinner"
	},
	{
	"placeName": "Fork",
	"numPeople": "me",
	"pricePoint": "high",
	"activityType": "dinner"
	},
	{
	"placeName": "Le Bec Fin",
	"numPeople": "we",
	"pricePoint": "high",
	"activityType": "dinner"
	},
	{
	"placeName": "LaCroix",
	"numPeople": "we",
	"pricePoint": "high",
	"activityType": "dinner"
	},
	{
	"placeName": "Los Catrines Tequilas",
	"numPeople": "we",
	"pricePoint": "high",
	"activityType": "dinner"
	},
	{
	"placeName": "Koo Zee Doo",
	"numPeople": "us",
	"pricePoint": "high",
	"activityType": "dinner"
	},
	{
	"placeName": "Chima Brazilian Steakhouse",
	"numPeople": "us",
	"pricePoint": "high",
	"activityType": "dinner"
	},
	{
	"placeName": "Butcher and Singer",
	"numPeople": "us",
	"pricePoint": "high",
	"activityType": "dinner"
	},
	{
	"placeName": "El Bar",
	"numPeople": "me",
	"pricePoint": "low",
	"activityType": "drinks"
	},
	{
	"placeName": "Locust Bar",
	"numPeople": "me",
	"pricePoint": "low",
	"activityType": "drinks"
	},
	{
	"placeName": "The Druid's Keep",
	"numPeople": "me",
	"pricePoint": "low",
	"activityType": "drinks"
	},
	{
	"placeName": "The Dive Bar",
	"numPeople": "we",
	"pricePoint": "low",
	"activityType": "drinks"
	},
	{
	"placeName": "McGillin's",
	"numPeople": "we",
	"pricePoint": "low",
	"activityType": "drinks"
	},
	{
	"placeName": "Paddy's",
	"numPeople": "we",
	"pricePoint": "low",
	"activityType": "drinks"
	},
	{
	"placeName": "Kung Fu Necktie",
	"numPeople": "us",
	"pricePoint": "low",
	"activityType": "drinks"
	},
	{
	"placeName": "Tattoed Mom",
	"numPeople": "us",
	"pricePoint": "low",
	"activityType": "drinks"
	},
	{
	"placeName": "JR's South Philly",
	"numPeople": "us",
	"pricePoint": "low",
	"activityType": "drinks"
	},
	{
	"placeName": "Graffiti Bar",
	"numPeople": "me",
	"pricePoint": "mid",
	"activityType": "drinks"
	},
	{
	"placeName": "Eulogy",
	"numPeople": "me",
	"pricePoint": "mid",
	"activityType": "drinks"
	},
	{
	"placeName": "Fergie's",
	"numPeople": "me",
	"pricePoint": "mid",
	"activityType": "drinks"
	},
	{
	"placeName": "Tria",
	"numPeople": "we",
	"pricePoint": "mid",
	"activityType": "drinks"
	},
	{
	"placeName": "National Mechanics",
	"numPeople": "we",
	"pricePoint": "mid",
	"activityType": "drinks"
	},
	{
	"placeName": "P.O.P.E.",
	"numPeople": "we",
	"pricePoint": "mid",
	"activityType": "drinks"
	},
	{
	"placeName": "Prohibition",
	"numPeople": "us",
	"pricePoint": "mid",
	"activityType": "drinks"
	},
	{
	"placeName": "Monk's",
	"numPeople": "us",
	"pricePoint": "mid",
	"activityType": "drinks"
	},
	{
	"placeName": "Good Dog",
	"numPeople": "us",
	"pricePoint": "mid",
	"activityType": "drinks"
	},
	{
	"placeName": "Emmanuelle",
	"numPeople": "me",
	"pricePoint": "high",
	"activityType": "drinks"
	},
	{
	"placeName": "Jamonera",
	"numPeople": "me",
	"pricePoint": "high",
	"activityType": "drinks"
	},
	{
	"placeName": "Tinto",
	"numPeople": "me",
	"pricePoint": "high",
	"activityType": "drinks"
	},
	{
	"placeName": "The Ranstead Room",
	"numPeople": "we",
	"pricePoint": "high",
	"activityType": "drinks"
	},
	{
	"placeName": "Bar Ferdinand",
	"numPeople": "we",
	"pricePoint": "high",
	"activityType": "drinks"
	},
	{
	"placeName": "XIX",
	"numPeople": "we",
	"pricePoint": "high",
	"activityType": "drinks"
	},
	{
	"placeName": "Voltage Cafe",
	"numPeople": "us",
	"pricePoint": "high",
	"activityType": "drinks"
	},
	{
	"placeName": "Xochitl",
	"numPeople": "us",
	"pricePoint": "high",
	"activityType": "drinks"
	},
	{
	"placeName": "Cuba Libre",
	"numPeople": "us",
	"pricePoint": "high",
	"activityType": "drinks"
	},
	{
	"placeName": "Union Transfer",
	"numPeople": "me",
	"pricePoint": "low",
	"activityType": "activity"
	},
	{
	"placeName": "Johnny Brenda's",
	"numPeople": "me",
	"pricePoint": "low",
	"activityType": "activity"
	},
	{
	"placeName": "The Rusty Nail",
	"numPeople": "me",
	"pricePoint": "low",
	"activityType": "activity"
	},
	{
	"placeName": "Magic Gardens",
	"numPeople": "we",
	"pricePoint": "low",
	"activityType": "activity"
	},
	{
	"placeName": "Philly Improv Theater",
	"numPeople": "we",
	"pricePoint": "low",
	"activityType": "activity"
	},
	{
	"placeName": "ComedySportz",
	"numPeople": "we",
	"pricePoint": "low",
	"activityType": "activity"
	},
	{
	"placeName": "The Legendary Dobbs",
	"numPeople": "us",
	"pricePoint": "low",
	"activityType": "activity"
	},
	{
	"placeName": "Danger Danger",
	"numPeople": "us",
	"pricePoint": "low",
	"activityType": "activity"
	},
	{
	"placeName": "The Grape Room",
	"numPeople": "us",
	"pricePoint": "low",
	"activityType": "activity"
	},
	{
	"placeName": "The Tin Angel",
	"numPeople": "me",
	"pricePoint": "mid",
	"activityType": "activity"
	},
	{
	"placeName": "The Troc",
	"numPeople": "me",
	"pricePoint": "mid",
	"activityType": "activity"
	},
	{
	"placeName": "Ritz Bourse",
	"numPeople": "me",
	"pricePoint": "mid",
	"activityType": "activity"
	},
	{
	"placeName": "Lucky Strike",
	"numPeople": "we",
	"pricePoint": "mid",
	"activityType": "activity"
	},
	{
	"placeName": "World Cafe Live",
	"numPeople": "we",
	"pricePoint": "mid",
	"activityType": "activity"
	},
	{
	"placeName": "Club Polaris",
	"numPeople": "we",
	"pricePoint": "mid",
	"activityType": "activity"
	},
	{
	"placeName": "Shampoo/Nocturne",
	"numPeople": "us",
	"pricePoint": "mid",
	"activityType": "activity"
	},
	{
	"placeName": "North Bowl",
	"numPeople": "us",
	"pricePoint": "mid",
	"activityType": "activity"
	},
	{
	"placeName": "Barcade",
	"numPeople": "us",
	"pricePoint": "mid",
	"activityType": "activity"
	},
	{
	"placeName": "The Actor's Center",
	"numPeople": "me",
	"pricePoint": "high",
	"activityType": "activity"
	},
	{
	"placeName": "Tower Theatre",
	"numPeople": "me",
	"pricePoint": "high",
	"activityType": "activity"
	},
	{
	"placeName": "Stay Home and Burn Money",
	"numPeople": "me",
	"pricePoint": "high",
	"activityType": "activity"
	},
	{
	"placeName": "Rumor",
	"numPeople": "we",
	"pricePoint": "high",
	"activityType": "activity"
	},
	{
	"placeName": "Kimmel Center",
	"numPeople": "we",
	"pricePoint": "high",
	"activityType": "activity"
	},
	{
	"placeName": "Opera Philadelphia",
	"numPeople": "we",
	"pricePoint": "high",
	"activityType": "activity"
	},
	{
	"placeName": "Skirmish Paintball",
	"numPeople": "us",
	"pricePoint": "high",
	"activityType": "activity"
	},
	{
	"placeName": "Laser Pink Floyd",
	"numPeople": "us",
	"pricePoint": "high",
	"activityType": "activity"
	},
	{
	"placeName": "Get in the Van! We're going to Burning Man!",
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
