import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: import.meta.env.VITE_ENV_APIKEY,
    authDomain: import.meta.env.VITE_ENV_AUTHDOMAIN,
    projectId: import.meta.env.VITE_ENV_PROJECTID,
    storageBucket: import.meta.env.VITE_ENV_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_ENV_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_ENV_APPIID 

};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();