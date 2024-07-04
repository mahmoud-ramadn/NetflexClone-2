import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCK5qXEqvRdoNqRnGycsummGt_8cqzuAKY",
  authDomain: "nettfilxclone.firebaseapp.com",
  projectId: "nettfilxclone",
  storageBucket: "nettfilxclone.appspot.com",
  messagingSenderId: "18448558263",
  appId: "1:18448558263:web:204435ceb039b6e8b28532"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code)
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
     toast.error(error.code.split("/")[1].split("-").join(" "))
  }
};

const logout = () => {
  signOut(auth);
  };

    
  
  // Get the current user
  


export { auth, login, logout, signup, db };
