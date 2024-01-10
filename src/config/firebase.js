import { initializeApp } from "firebase/app";
import { setPersistence, getAuth, inMemoryPersistence } from 'firebase/auth';

// que feos nombres tiene el config jasdja
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPID,
    measurementId: import.meta.env.VITE_MEASUREMENTID
  };

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();
// Esto esta sujeto a revisión y la verdad es que no hay una mala
// o una buena

// esto nos permite que las authentificaciones en firebase no sean persistentes
// es decir que del lado del cliente no persistan.

// la verdad es que no cambia en nada que lo hagan o no pero cuando estaba
// haciendo las pruebas de backend para authenticar usuarios de firebase

// usar esta config era clave, si no se quiere usar(queda en elección de ustedes)
// simplemente se puede borrar

// que texto más largo jasdjas
setPersistence(auth, inMemoryPersistence);

export default auth;