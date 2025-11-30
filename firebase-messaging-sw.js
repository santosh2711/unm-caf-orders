importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBQzrBURFwenjWEnQMMIH7sOSqPq0Q0tx0",
  authDomain: "unm-caf-orders.firebaseapp.com",
  projectId: "unm-caf-orders",
  storageBucket: "unm-caf-orders.appspot.com",
  messagingSenderId: "562096834985",
  appId: "1:562096834985:web:f4bfe451e5482521e49cb8",
  measurementId: "G-J12PBDK7N1"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const title = payload.notification?.title || payload.data.title;
  const body = payload.notification?.body || payload.data.body;

  self.registration.showNotification(title, {
    body: body,
    icon: 'favicon.ico'
  });
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/order-status.html')
  );
});
