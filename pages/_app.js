import "../styles/globals.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase.js";
import LoginPage from "./loginPage.js";
import Loading from "../components/Loading.js";
import { useEffect } from "react";
import firebase from "firebase";

function MyApp({ Component, pageProps }) {
  // React-firebase-hooks
  const [user, loading] = useAuthState(auth);
  // Capture first signIn Hook
  useEffect(() => {
    if (user) {
      db.collection("users").doc(user.uid).set(
        {
          email: user.email,
          lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
          photoURL: user.photoURL,
        },
        { merge: true }
      );
    }
  }, [user]);

  if (loading) return <Loading />;
  if (!user) return <LoginPage />;
  return <Component {...pageProps} />;
}

export default MyApp;
