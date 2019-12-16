import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDWaygC4VLGq2OvomRLnquX8D7tKFK7q7c",
    authDomain: "library-ddfd0.firebaseapp.com",
    databaseURL: "https://library-ddfd0.firebaseio.com",
    projectId: "library-ddfd0",
    storageBucket: "library-ddfd0.appspot.com",
    messagingSenderId: "874411485736",
    appId: "1:874411485736:web:1afdfd45c8f69f2d62a31d",
    measurementId: "G-7EZW7FGWXJ"
};

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()