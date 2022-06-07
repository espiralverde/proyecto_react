// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyAcSGpVVoNDDdcFbDmiYtERzRKKmrMs6AE",
authDomain: "steelbit-63b52.firebaseapp.com",
projectId: "steelbit-63b52",
storageBucket: "steelbit-63b52.appspot.com",
messagingSenderId: "271513656988",
appId: "1:271513656988:web:3b82f9c9dfdd4f78fed759"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
}