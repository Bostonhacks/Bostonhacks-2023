import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  doc,
  updateDoc,
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

// Function to submit application.
export const addApplicationDoc = async (formData, uid) => {
  try {
    // Query the currently logged in user.
    const q = query(collection(db, 'applications'), where('uid', '==', uid));
    const docs = await getDocs(q);

    if (docs.docs.length === 1) {
      // If user exists, update application with form data.
      // Also change status to "Started".
      await updateDoc(docs.docs[0].ref, {
        ...formData,
        status: 'Started',
      });
    } else {
      // Otherwise, user does not exist and should not be submitting the form.
      // Throw an error.
      throw new Error('User does not exist!');
    }
  } catch (err) {
    throw err;
  }
};
