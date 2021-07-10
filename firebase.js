import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCxw6dNfI-1Pl-aXYc7ZWa3wAhOalSGx8Q",
  authDomain: "whatsapp-v2-1d33b.firebaseapp.com",
  projectId: "whatsapp-v2-1d33b",
  storageBucket: "whatsapp-v2-1d33b.appspot.com",
  messagingSenderId: "870298307913",
  appId: "1:870298307913:web:30bc33c87fd5fb8ef81e98",
};

// Initialize App
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
