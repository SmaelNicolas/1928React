import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyB4aOVTUQ6-65DBEYe0f4NKRroHhb8kfFo",
	authDomain: "react-27dca.firebaseapp.com",
	projectId: "react-27dca",
	storageBucket: "react-27dca.appspot.com",
	messagingSenderId: "505761705989",
	appId: "1:505761705989:web:a2c7b5c232de04e26cac6c",
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);

export default database;
