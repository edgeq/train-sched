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

  var database = firebase.database();

  database.ref().on('child_added', function(childsnap){
  	console.log(childsnap.val().name)


  })

})  