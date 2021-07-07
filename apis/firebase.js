import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyCq8K1Ter4ta_1i9aX-jKuM4jHMMrNKOFY",
    authDomain: "loginregister-d8979.firebaseapp.com",
    projectId: "loginregister-d8979",
    storageBucket: "loginregister-d8979.appspot.com",
    messagingSenderId: "613944684132",
    appId: "1:613944684132:web:70544985b783d9ddde3971",
    measurementId: "G-ZFS20Y2R74"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();