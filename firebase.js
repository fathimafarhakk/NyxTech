// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAzVxN8mJzvvDEZ3baCtTJwOx-Z3eXSZXo",
  authDomain: "queueguide.firebaseapp.com",
  projectId: "queueguide",
  storageBucket: "queueguide.firebasestorage.app",
  messagingSenderId: "318655133979",
  appId: "1:318655133979:web:26e32e5ddcfc0ba425bbbe"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
