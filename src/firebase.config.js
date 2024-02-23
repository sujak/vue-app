import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const {
  VITE_VUE_APP_FIREBASE_API_KEY,
  VITE_VUE_APP_FIREBASE_AUTH_DOMAIN,
  VITE_VUE_APP_FIREBASE_PROJECT_ID,
  VITE_VUE_APP_FIREBASE_STORAGE_BUCKET,
  VITE_VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  VITE_VUE_APP_FIREBASE_APP_ID,
  VITE_VUE_APP_FIREBASE_MEASUREMENT_ID
} = import.meta.env;

const firebaseConfig = {
  apiKey: VITE_VUE_APP_FIREBASE_API_KEY,
  authDomain: VITE_VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: VITE_VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: VITE_VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: VITE_VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: VITE_VUE_APP_FIREBASE_APP_ID,
  measurementId: VITE_VUE_APP_FIREBASE_MEASUREMENT_ID
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };
