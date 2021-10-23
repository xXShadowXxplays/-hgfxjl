var firebaseConfig = {
  apiKey: "AIzaSyC0QkQrpMA9mg7NckunrJnSdTuTN3ogS4c",
  authDomain: "ishaanchatapp-8964a.firebaseapp.com",
  databaseURL: "https://ishaanchatapp-8964a-default-rtdb.firebaseio.com",
  projectId: "ishaanchatapp-8964a",
  storageBucket: "ishaanchatapp-8964a.appspot.com",
  messagingSenderId: "543904089934",
  appId: "1:543904089934:web:e15cd9eac9cfa92d5b401f",
  measurementId: "G-RGSQCL1Y9Z"
};

firebase.initializeApp(firebaseConfig)

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

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}