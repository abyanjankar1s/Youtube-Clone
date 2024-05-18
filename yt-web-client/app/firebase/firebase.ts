// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    User    
} from "firebase/auth";
import { getFunctions } from "firebase/functions";


const firebaseConfig = {
  apiKey: "AIzaSyAE88bVg0G7I2QIdV9FaBH4070s8zxKCoM",
  authDomain: "clone-e1a54.firebaseapp.com",
  projectId: "clone-e1a54",
  appId: "1:318190705129:web:f4f1af0b1b573b44695378",
  measurementId: "G-FPQTXG8DCH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export const functions = getFunctions();


/**
 * Signs the user in with a Google popup.
 * @returns A promise that resolves with the user's credentials. 
 */

export function signInWithGoogle() {
    return signInWithPopup(auth, new GoogleAuthProvider());
}

/**
 * Signs the user out.
 * @returns A promise that resolves when the user is signed out.
 */

export function signOut(){
    return auth.signOut(); 
}

/**
 * Trigger a callback when user auth state changes.
 * @returns A function to unsubscribe callback.
 */

export function onAuthStateChangedHelper(callback: (user: User | null) => void){
    return onAuthStateChanged(auth, callback);
}