import { initializeApp } from 'firebase/app';
import { getDatabase, ref } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'curso-next-cod3r.firebaseapp.com',
  databaseURL: 'https://curso-next-cod3r-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'curso-next-cod3r',
  storageBucket: 'curso-next-cod3r.appspot.com',
  messagingSenderId: '308477732680',
  appId: '1:308477732680:web:424344ce2b0f0e7e30f57d',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);

export const getRef = path => ref(database, `/${path}`);
