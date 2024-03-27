import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import { useEffect } from "react";
import "./App.css";

const firebaseConfig = {
  apikey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
  measurementId: import.meta.env.VITE_MEASUREMENTID,
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
function App() {

  return (
    <>
      <div> my game</div>
    </>
  );
}

export default App;
