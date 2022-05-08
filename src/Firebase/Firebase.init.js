import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAIi0trLaqdBh2AT8prCBddRYJ4HOVbtG4",
    authDomain: "hashtag-school.firebaseapp.com",
    projectId: "hashtag-school",
    storageBucket: "hashtag-school.appspot.com",
    messagingSenderId: "242700768898",
    appId: "1:242700768898:web:d74caa3a3b87c61ccdc69b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;