const firebaseConfig = {
    apiKey: "AIzaSyCZMXyenjI3hwmIuy2DiJ53DZq7Ng5cjrY",
    authDomain: "kwitter-23296.firebaseapp.com",
    databaseURL: "https://kwitter-23296-default-rtdb.firebaseio.com",
    projectId: "kwitter-23296",
    storageBucket: "kwitter-23296.appspot.com",
    messagingSenderId: "1039482115325",
    appId: "1:1039482115325:web:b1c6055a8cc36f077b5a94"
  };
  firebase.initializeApp(firebaseConfig);
  username = localStorage.getItem("username");
  room_name = localStorage.getItem("room_name");
  
  function Send(){
    message = document.getElementById("msg").value;
    firebase.database().ref(room_name).push(
          {
                name:username,
                message:message,
                like:0
          }
    );
    document.getElementById("msg").value = " ";
}