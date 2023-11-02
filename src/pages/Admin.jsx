import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase-config';
import {
  updateDoc,
  doc,
  getDoc,
  deleteDoc,
  query,
  collection,
  where,
  getDocs,
} from 'firebase/firestore';
import { db } from '../firebase/firebase-config';
// import { acceptlist, rejectList, waitList } from './acceptListR1';

export default function Admin() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  // Must match list in firestore rules
  const admins = [
    'dfc@bu.edu',
    'dxu0117@bu.edu',
    'dlaboy@bu.edu',
    'declanyg@bu.edu',
    'simran27@bu.edu',
    'danyu@bu.edu',
    'minpark@bu.edu',
    'jamesw03@bu.edu',
    'kbbtan@bu.edu',
    'rongc@bu.edu',
    'eschoi@bu.edu',
    'jaketlee@bu.edu',
    'yangi@bu.edu',
  ];

  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);

  const acceptUsers = async (users) => {
    for (var i = 0; i < users.length; i++) {
      var userId = users[i];
      const q = query(
        collection(db, 'applications'),
        where('uid', '==', userId)
      );
      const doc = await getDocs(q);
      const userDoc = doc.docs[0];

      try {
        await updateDoc(userDoc.ref, { status: 'Accepted' });
      } catch {
        alert('No user found!');
      }
    }
    console.log('accepted');
  };

  const rejectUsers = async (users) => {
    for (var i = 0; i < users.length; i++) {
      var userId = users[i];
      const q = query(
        collection(db, 'applications'),
        where('uid', '==', userId)
      );
      const doc = await getDocs(q);
      const userDoc = doc.docs[0];

      try {
        await updateDoc(userDoc.ref, { status: 'Rejected' });
      } catch {
        alert('No user found!');
      }
    }
    console.log('Rejected');
  };

  const waitlistUsers = async (users) => {
    for (var i = 0; i < users.length; i++) {
      var userId = users[i];
      const q = query(
        collection(db, 'applications'),
        where('uid', '==', userId)
      );
      const doc = await getDocs(q);
      const userDoc = doc.docs[0];

      try {
        await updateDoc(userDoc.ref, { status: 'Waitlisted' });
      } catch {
        alert('No user found!');
      }
    }
    console.log('Waitlisted');
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate('/login');

    if (!admins.includes(user.email)) return navigate('/');
    console.log(user);
  }, [user, loading, navigate]);

  return (
    <div>
      {/* Check user's email, if admin show application
      {admins.includes(user?.email) && (
        <div>
          <button
            onClick={() => {
              acceptUsers(acceptlist);
            }}
            className="p-10 bg-green-600"
          >
            Accept
          </button>
          <button
            onClick={() => {
              rejectUsers(rejectList);
            }}
            className="p-10 bg-red-700"
          >
            Reject
          </button>
          <button
            onClick={() => {
              waitlistUsers(waitList);
            }}
            className="p-10 bg-yellow-600"
          >
            Waitlist
          </button>
        </div>
      )} */}
    </div>
  );
}
