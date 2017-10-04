$(document).ready(function() { 
console.log("linked up");

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCXu2LaS7EoHy-tgmaC-vt7cwtJYbSMjNM",
    authDomain: "bootcampdb.firebaseapp.com",
    databaseURL: "https://bootcampdb.firebaseio.com",
    projectId: "bootcampdb",
    storageBucket: "bootcampdb.appspot.com",
    messagingSenderId: "425847005611"
  };
  firebase.initializeApp(config);
  //firebase var for easy reference later
  var database = firebase.database();

  database.ref().on('child_added', function(childsnap){
  	// console.log(childsnap.val().train)

  	var dbTrain = childsnap.val().train;
  	var dbDest = childsnap.val().trainDest
  	var db1TrainTime = childsnap.val().firstTrainTime;
  	var dbTrainFreq = childsnap.val().trainFreq;

  	// console.log(dbDest);

  	var newRow = $("<tr>");
  	var newTrain = $("<td>").text(dbTrain);
  	var newDest = $("<td>").text(dbDest);
  	var new1TrainTime = $("<td>").text(db1TrainTime);
  	var dbTrainFreq = $("<td>").text(dbTrainFreq);

  	newRow.append(newTrain, newDest, dbTrainFreq /*new1TrainTime, */);

  	$("table").prepend(newRow);

  })

  function submit (event) {
  	// console.log("submit");
  	event.preventDefault();
  	//make variables for everything that comes through after submit is clicked
  	var train = $("#train-name").val().trim();
  	var trainDest = $("#destination").val().trim();
  	var firstTrainTime = $("#first-train-time").val().trim();
  	var trainFreq = $("#frequency").val().trim();
  	//push these variables as objects to the firebase db
  	database.ref().push({
  		train: train,
  		trainDest: trainDest,
  		firstTrainTime: firstTrainTime,
  		trainFreq: trainFreq
  	})

  	// $("form").trigger("reset")
  }
  // run the submit function on a button click
  $('button').on('click', submit);

})  