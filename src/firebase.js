import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD1Pr_pG5L7WXMmI0rDxdyo40k47fuzPCU",
    authDomain: "linkedin-clone-b1cd8.firebaseapp.com",
    projectId: "linkedin-clone-b1cd8",
    storageBucket: "linkedin-clone-b1cd8.appspot.com",
    messagingSenderId: "509066453935",
    appId: "1:509066453935:web:e1fabfe7128d2cb562c55a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage(); //for storing our images somewhere


  export {auth, provider, storage};
  export default db;