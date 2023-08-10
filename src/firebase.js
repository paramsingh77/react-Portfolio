
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
	apiKey: "AIzaSyDJho7R-WFFnBBvpDEi1bw1h17dMFRdY3g",
	authDomain: "param-portfolio-react.firebaseapp.com",
	projectId: "param-portfolio-react",
	storageBucket: "param-portfolio-react.appspot.com",
	messagingSenderId: "1084305272631",
	appId: "1:1084305272631:web:a6d98a74cef83bd67af4b2",
	measurementId: "G-B3RQWF8LWG",
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore();