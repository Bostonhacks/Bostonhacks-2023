import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from 'firebase/firestore';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBhN3fCW3J8o_eRzUiUZrARHtN2VBQKyC4',
  authDomain: 'bhacks-2023.firebaseapp.com',
  projectId: 'bhacks-2023',
  storageBucket: 'bhacks-2023.appspot.com',
  messagingSenderId: '664766464323',
  appId: '1:664766464323:web:5cba8a83b5544c0ed9eff6',
  measurementId: 'G-WMZDKFHLLB',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(
      collection(db, 'applications'),
      where('uid', '==', user.uid)
    );
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, 'applications'), {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google',
        email: user.email,
        status: 'Not Started',
      });
    }
  } catch (err) {
    console.error(err);
  }
};

export const logout = () => {
  signOut(auth);
};
