
 $(document).ready(function(){

 


 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCVHon--gvgajATamnJ6yC_k43P4_f7rio",
    authDomain: "trainscheduler-22735.firebaseapp.com",
    databaseURL: "https://trainscheduler-22735.firebaseio.com",
    projectId: "trainscheduler-22735",
    storageBucket: "trainscheduler-22735.appspot.com",
    messagingSenderId: "566416614236"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

//creating some global variables for just in case.
let trainName = "";
let destination = "";
let trainTime = "";
let frequency = "";

// 2. Button for adding Employees
$("#add-train-btn").on("click", function(event) {
  //dont refresh the page
    event.preventDefault();

  console.log("hello");

    // Grabs user input
     trainName = $("#train-name-input").val().trim();
     destination = $("#destination-input").val().trim();
     trainTime = $("#trainTime-input").val().trim();
     frequency = $("#freq-input").val().trim();

     console.log(trainName);
     console.log(destination);
});

 // Creates local "temporary" object for holding employee data
//  var newEmp = {
//    name: trainName,
//    role: empRole,
//    start: empStart,
//    rate: empRate
//  };

//  // Uploads employee data to the database
//  database.ref().push(newEmp);

//  // Logs everything to console
//  console.log(newEmp.name);
//  console.log(newEmp.role);
//  console.log(newEmp.start);
//  console.log(newEmp.rate);





 });