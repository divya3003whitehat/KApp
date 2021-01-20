  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAY7oSLQxGgrEpSt9uv6uDkKgfwft0e7vI",
    authDomain: "kwitter-63d8f.firebaseapp.com",
    databaseURL: "https://kwitter-63d8f-default-rtdb.firebaseio.com",
    projectId: "kwitter-63d8f",
    storageBucket: "kwitter-63d8f.appspot.com",
    messagingSenderId: "636029952180",
    appId: "1:636029952180:web:9bb5cb34f493e9911277e1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}