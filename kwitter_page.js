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

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name")

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}