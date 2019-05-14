import firebase from 'firebase';
//import firestore from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBtL0suc3H0NTQ4XPvRRQY4aMiGKIRbeBE",
    authDomain: "profilbejgla.firebaseapp.com",
    databaseURL: "https://profilbejgla.firebaseio.com",
    projectId: "profilbejgla",
    storageBucket: "profilbejgla.appspot.com",
    messagingSenderId: "100226604502",
    appId: "1:100226604502:web:5b5457d7a58bf577"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp

//const auth = firebase.auth();
//const db = firestore.firestore();

