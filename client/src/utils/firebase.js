import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ai-interview-agent-343f6.firebaseapp.com",
  projectId: "ai-interview-agent-343f6",
  storageBucket: "ai-interview-agent-343f6.firebasestorage.app",
  messagingSenderId: "1046328892309",
  appId: "1:1046328892309:web:1b1a2a10bdcb9ffc19b49c",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
