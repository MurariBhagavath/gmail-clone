import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDIO4inJs3gKjFMn5P_CUkS_uWr8vteFpU",
  authDomain: "clone-c7034.firebaseapp.com",
  projectId: "clone-c7034",
  storageBucket: "clone-c7034.appspot.com",
  messagingSenderId: "1033062087013",
  appId: "1:1033062087013:web:c456a5fce1d191d231098c",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
