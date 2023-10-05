import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAtoLk09aFuGfiHtRL7N82uv9UVizRc4GQ",
    authDomain: "authentication-9833c.firebaseapp.com",
    projectId: "authentication-9833c",
    storageBucket: "authentication-9833c.appspot.com",
    messagingSenderId: "930673136848",
    appId: "1:930673136848:web:a781260bafa68554e43ad5"
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app)