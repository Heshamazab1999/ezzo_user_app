importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js");

firebase.initializeApp({
 apiKey: "AIzaSyAI17BMvlALd0BJAOC5NXYr78FSiEzGS9M",
   authDomain: "ezzoapp-650ab.firebaseapp.com",
   projectId: "ezzoapp-650ab",
   storageBucket: "ezzoapp-650ab.appspot.com",
   messagingSenderId: "378028389125",
   appId: "1:378028389125:web:dac7b7aa1700b89428bd6c",
   measurementId: "G-Y6HGYVLHVH"
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});