// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyBH3w9xSoqrEgcthKUtkS3-zXwjWM88CxY",
      authDomain: "kwitter-3696d.firebaseapp.com",
      projectId: "kwitter-3696d",
      storageBucket: "kwitter-3696d.appspot.com",
      messagingSenderId: "907697591461",
      appId: "1:907697591461:web:f56e9cdcc90e985eb3294c",
      measurementId: "G-EB3EH48R4F"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
