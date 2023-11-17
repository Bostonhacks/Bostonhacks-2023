import { useState } from 'react';
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
import { db } from '../firebase/firebase-config';

const CheckInCount = () => {
  const [checkedInCount, setCheckedInCount] = useState();

  const update = async () => {
    const q1 = query(
      collection(db, 'applications'),
      where('status', '==', 'Checked In')
    );

    const checkedIn = await getDocs(q1);

    setCheckedInCount(checkedIn.size);
  };
  return (
    <div>
      <div>Checked In: {checkedInCount}</div>
      <button onClick={update}>UPDATE</button>
    </div>
  );
};

export default CheckInCount;
