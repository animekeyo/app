importScripts('https://www.gstatic.com/firebasejs/8.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.8.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyChoUInYN6hWDmbNCuHwHTfQBPeC93pZQA",
    authDomain: "anime-keyo.firebaseapp.com",
    databaseURL: "https://anime-keyo-default-rtdb.firebaseio.com",
    projectId: "anime-keyo",
    storageBucket: "anime-keyo.appspot.com",
    messagingSenderId: "473838311733",
    appId: "1:473838311733:web:c1f0444785c7617be9d47c",
    measurementId: "G-3YG1S4N1D6"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();