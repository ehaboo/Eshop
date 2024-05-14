import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB2zNwERY7gabIy_qSLA3bOKpec7rocF8Y",
    authDomain: "eshop-607c7.firebaseapp.com",
    projectId: "eshop-607c7",
    storageBucket: "eshop-607c7.appspot.com",
    messagingSenderId: "391844214026",
    appId: "1:391844214026:web:3f9d7ac0786678e32e76f3",
    measurementId: "G-2HFHMDEJ1T"
  };


  const firebaseApp = initializeApp(firebaseConfig); 

  const db = getFirestore(firebaseApp);

  const auth = getAuth(firebaseApp); 

  export {db , auth}; 