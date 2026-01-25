importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyAQIRA5qILygBQaAuHe-0TBKMo2_8QEml0",
    authDomain: "resello-dd003.firebaseapp.com",
    projectId: "resello-dd003",
    messagingSenderId: "862430777987",
    appId: "1:862430777987:web:6516b3c6d2fea77dce81b6"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/firebase-logo.png' // Optional: customize icon
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
