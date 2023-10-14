// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyCpvw1wv98GVQ0CcOxP1ia0bfrkrXprT_g',
    authDomain: 'pensieve-3ca06.firebaseapp.com',
    projectId: 'pensieve-3ca06',
    storageBucket: 'pensieve-3ca06.appspot.com',
    messagingSenderId: '911480071407',
    appId: '1:911480071407:web:03f537cec535491aa9271a',
    measurementId: 'G-V5J54XMWZP',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
