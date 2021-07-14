 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCg5tuXjTCWYMiEV5flN4MApqxNn1N6OTQ",
    authDomain: "kwitter1-46280.firebaseapp.com",
    databaseURL: "https://kwitter1-46280-default-rtdb.firebaseio.com",
    projectId: "kwitter1-46280",
    storageBucket: "kwitter1-46280.appspot.com",
    messagingSenderId: "480129067891",
    appId: "1:480129067891:web:51fb27daee2acdfcb7f306",
    measurementId: "G-EQEDEZ0H6H"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id= " + Room_names + "onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();




function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}