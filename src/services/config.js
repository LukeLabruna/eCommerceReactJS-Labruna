import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC1aMhlhW5lScC9NFAB0w9pn5IMU_FIWJ8",
  authDomain: "ecommerce-tolkien.firebaseapp.com",
  projectId: "ecommerce-tolkien",
  storageBucket: "ecommerce-tolkien.appspot.com",
  messagingSenderId: "131519328821",
  appId: "1:131519328821:web:14027c58585e720455b77c"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)