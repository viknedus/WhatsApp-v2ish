import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCFyrGu_kOEzWVeHESZftdSPhLAJu8WZrE",
  authDomain: "whatsapp-v2-ede13.firebaseapp.com",
  projectId: "whatsapp-v2-ede13",
  storageBucket: "whatsapp-v2-ede13.appspot.com",
  messagingSenderId: "837413778203",
  appId: "1:837413778203:web:8c4bbb03596b7b077359be",
};
// Initialize App
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
