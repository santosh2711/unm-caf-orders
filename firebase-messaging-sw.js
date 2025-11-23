importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBQZrBURFwenjWEEnQMMIH7sOSqPq0Qtx0",
  authDomain: "unm-caf-orders.firebaseapp.com",
  projectId: "unm-caf-orders",
  storageBucket: "unm-caf-orders.appspot.com",
  messagingSenderId: "562096834985",
  appId: "1:562096834985:web:f4bfe451e5482521e49cb8",
  measurementId: "G-J12PBDK7N1"
});


const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(
    payload.notification.title,
    {
      body: payload.notification.body,
      icon: '/favicon.ico'
    }
  );
});
