// import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { useUserAuth } from '../store/userAuth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API_KEY,
  authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FB_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FB_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FB_APP_ID,
  measurementId: import.meta.env.VITE_FB_MEASUREMENT_ID,
};

const firebaseClient = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Auth settings
export const auth = getAuth(firebaseClient);
export const googleProvider = new GoogleAuthProvider();

onAuthStateChanged(auth, (user) => {
  if (user) {
    useUserAuth.setState({ currentUser: user });
  } else {
    useUserAuth.setState({ currentUser: null });
  }
});

// DB settings
export const db = getFirestore(firebaseClient);
