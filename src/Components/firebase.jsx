import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyDX2_WmBUBP_p-TrRWI2dCtmGLhkDvjC7A",
    authDomain: "webmessage-4c135.firebaseapp.com",
    projectId: "webmessage-4c135",
    storageBucket: "webmessage-4c135.appspot.com",
    messagingSenderId: "663393241515",
    appId: "1:663393241515:web:946a79e6f0dc05d67f6aee",
    measurementId: "G-ZVFCTZSZ09"
  };

  const fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();