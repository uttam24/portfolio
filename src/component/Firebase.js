import firebase from 'firebase'


var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC3dMY6sFutfeeIh3gMeadND2fSkMLzjP0",
    authDomain: "react-contact-form-8844f.firebaseapp.com",
    projectId: "react-contact-form-8844f",
    storageBucket: "react-contact-form-8844f.appspot.com",
    messagingSenderId: "768483842994",
    appId: "1:768483842994:web:d8dbdb99214642e27fa2ab"
})

var db = firebaseApp.firestore();

export {db}