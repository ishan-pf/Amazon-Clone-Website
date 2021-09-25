import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCE3Ffrt1YcZL-HDcw_trh3UiJi8JeAgE8",
    authDomain: "clone-58509.firebaseapp.com",
    projectId: "clone-58509",
    storageBucket: "clone-58509.appspot.com",
    messagingSenderId: "996562839000",
    appId: "1:996562839000:web:65f50afef46eb5d5593ead",
    measurementId: "G-4NJK8CT2PV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export { db , auth };