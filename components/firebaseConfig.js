// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "//Indsæt API Key fra rapport",
    authDomain: "cringeyikes123-864fe.firebaseapp.com",
    databaseURL: "https://cringeyikes123-864fe-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "cringeyikes123-864fe",
    storageBucket: "cringeyikes123-864fe.appspot.com",
    messagingSenderId: "358809932976",
    appId: "1:358809932976:web:f5e710e6ca7f1292d35775"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
