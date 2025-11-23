// Import Firebase scripts
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyBQzrBURFwenjWEnQMMIH7sOSqPq0Qtx0",
  authDomain: "unm-caf-orders.firebaseapp.com",
  projectId: "unm-caf-orders",
  storageBucket: "unm-caf-orders.appspot.com",
  messagingSenderId: "562096834985",
  appId: "1:562096834985:web:f4bfe451e5482521e49cb8",
  measurementId: "G-J12PBDK7N1"
});

// Retrieve messaging instance
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message:', payload);

  // Support both notification payloads & data payloads
  const notificationTitle =
    payload.notification?.title || payload.data?.title || "Notification";

  const notificationOptions = {
    body:
      payload.notification?.body || payload.data?.body || "You have a new message.",
    icon: "favicon.ico"
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

