import {getApp,getApps, initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getFunctions} from "firebase/functions";
import {getStorage} from "firebase/storage";

//Now, we have imported the required functions which are related to the firebase

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAGW0vpGOKDvAtjL5FvewMBdN8tlVAO6CM",
    authDomain: "dropbox-clone-fms.firebaseapp.com",
    projectId: "dropbox-clone-fms",
    storageBucket: "dropbox-clone-fms.appspot.com",
    messagingSenderId: "833320183913",
    appId: "1:833320183913:web:5ae2b2575ca70200d45af8"
  };



const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
//Now, using this app we will get access to the other information in the database and so forth

const db = getFirestore(app);
//const auth = getAuth(app);
//const functions = getFunctions(app);
const storage = getStorage(app);


export {db, storage};


