
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
    event.preventDefault();

  console.log("hello");

    // Grabs user input
    var trainName = $("#train-name-input").val().trim();
    var empRole = $("#role-input").val().trim();
    var empStart = moment($("#start-input").val().trim(), "DD/MM/YY").format("X");
    var empRate = $("#rate-input").val().trim();
})
 });