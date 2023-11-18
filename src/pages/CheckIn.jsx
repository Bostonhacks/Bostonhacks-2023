import React, { useState } from 'react';
import {
  query,
  collection,
  getDocs,
  where,
  updateDoc,
  doc,
} from 'firebase/firestore';
import { db } from '../firebase/firebase-config';

const CheckIn = () => {
  const [email, setEmail] = useState('');
  const [application, setApplication] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    setApplication({ status: 'Checking in' });
    // Call the fetchApplications function when the form is submitted
    fetchApplications();
  };

  const updateApplicationStatus = async (docId, newStatus) => {
    const applicationRef = doc(db, 'applications', docId);

    try {
      // Update the status in Firestore
      await updateDoc(applicationRef, { status: newStatus });

      // Update the status in the application state
      setApplication({ status: newStatus });
    } catch (error) {
      console.log(error);
      alert('An error has occurred updating the application status');
    }
  };

  const fetchApplications = async () => {
    try {
      const q = query(
        collection(db, 'applications'),
        where('email', '==', email)
      );
      const querySnapshot = await getDocs(q);

      // Check if there are any documents
      if (!querySnapshot.empty) {
        const applicationDoc = querySnapshot.docs[0];
        const status = applicationDoc.data().status;

        if (status === 'Confirmed' || status == 'Checked In') {
          // If the status is "confirmed," update it to "Checked In"
          await updateApplicationStatus(applicationDoc.id, 'Checked In');
        } else {
          setApplication({
            status:
              'You are not confirmed. Please speak to one of the BostonHacks Organizers',
          });
        }
      } else {
        // If there isn't any application, display a message
        setApplication({ status: 'No application found' });
      }
    } catch (error) {
      console.log(error);
      alert('An error has occurred fetching user data');
    }
  };

  return (
    <div
      className={`${
        application.status === 'Checked In' && 'bg-green-700'
      } flex flex-col xl:mt-12 items-center font-minecraft mx-2`}
    >
      <p className="text-black lg:text-5xl m:text-4xl sm:text-3xl text-center mt-4 pb-7">
        BostonHacks 2023 Check-In
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 text-xl py-5">
        <label>Email</label>
        <input
          type="email"
          placeholder="Please enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          type="submit"
          value="Submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
        />
      </form>

      {/* Display application status */}
      <div className="mt-4">
        <p className=" text-2xl font-semibold">Status: {application.status}</p>
      </div>
    </div>
  );
};

export default CheckIn;
