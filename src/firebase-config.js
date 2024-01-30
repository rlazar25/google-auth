// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtuNRoVBjOBcd5V7Hxf6jN8WZJq-sO0Ks",
  authDomain: "auth-93a5a.firebaseapp.com",
  projectId: "auth-93a5a",
  storageBucket: "auth-93a5a.appspot.com",
  messagingSenderId: "1037853778922",
  appId: "1:1037853778922:web:1d40f9552d98ec175e0893"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoUrl

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);

    }).catch((error) => {
        console.log(error)
    })
}