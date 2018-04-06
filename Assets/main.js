
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
$("#add-Train-btn").on("click", function(event) {
  //dont refresh the page
    event.preventDefault();

  

    // Grabs user input
     trainName = $("#train-name-input").val().trim();
     destination = $("#destination-input").val().trim();
     trainTime = moment($("#trainTime-input").val().trim(),"hh:mm").format("X");
     frequency = $("#freq-input").val().trim();

     console.log(trainName);
     console.log(destination);
     console.log(trainTime);
     console.log(frequency);
     var chooChoo = {
        trainName: trainName,
        destination: destination,
        trainTime: trainTime,
        frequency: frequency
       };

     database.ref().push(chooChoo);
});


 /** add data event */
 database.ref().on('child_added', function(childSnapshot, prevChildKey){
    console.log(childSnapshot.val());
    console.log(childSnapshot.val().destination);
    console.log(childSnapshot.val().trainName);
    console.log(childSnapshot.val().trainTime);
    console.log(childSnapshot.val().frequency);

    let tName=childSnapshot.val().trainName;
    let tTime=childSnapshot.val().trainTime;
    let tDestination=childSnapshot.val().destination;
    let tFrequency=childSnapshot.val().frequency;
   
    

//the tDifference equals some amount of minutes.
  let tDifference=moment().subtract(moment.unix(tTime),'minutes');
//now we want to see how many minutes are left over from some amount of frequency
  let tRemainder=tDifference%tFrequency;

  let tMinutes=tFrequency-tRemainder;
  let tArrival=moment().add(tMinutes, 'm').format("hh:mm");
  

    $("#arrivals").append("<tr><td>"+tName+"</td><td>"+tDestination+"</td><td>"+tFrequency+"</td><td>"+tArrival+"</td><td>"+tMinutes+"</td></tr>")
 })

 // a new variable for each console log childsnapshot


 });