import firebase from "firebase/compat/app"
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyA8xSzChqmG4lmn7r8VowHaYGD6sAqqFbQ",
  authDomain: "momentproject-26beb.firebaseapp.com",
  databaseURL: "https://momentproject-26beb-default-rtdb.firebaseio.com",
  projectId: "momentproject-26beb",
  storageBucket: "momentproject-26beb.appspot.com",
  messagingSenderId: "975537821931",
  appId: "1:975537821931:web:ec8806ab764fdb8be686ae",
  measurementId: "G-RDPNBR3BSY"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const authentication = getAuth(app);
let currentUser = undefined;
const storage = getStorage(app);

onAuthStateChanged(authentication, (user) => {
  currentUser= user;
});


export{
  authentication,
  currentUser,
  db,
  app,
  firebase,
  storage

}


//======================= Comments / Reserved Codes ==========================
// Initialize Firebase 
/*let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}
else{
    app = firebase.app()
}

const auth = firebase.auth();
*/


