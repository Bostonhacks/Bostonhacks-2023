import { useEffect, useState } from 'react';
import { db, auth } from '../firebase/firebase-config';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { query, collection, getDocs, where } from 'firebase/firestore';

const HackerDashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [application, setApplication] = useState({});
  const navigate = useNavigate();
  // const applicationTypes = ["Submitted", "Waitlisted", "Rejected", "Declined", "Confirmed", "Accepted", "Checked In"];

  useEffect(() => {
    if (loading) return;

    if (!user) return navigate("/login");

    fetchApplications();
  }, [user, loading, navigate]);

  if (!user) return null;

  // Grabs the application and sets the variable
  const fetchApplications = async () => {
    try {
      const q = query(collection(db, "applications"), where("uid", "==", user.uid));
      const doc = await getDocs(q);

      if (doc.docs.length != 0) {
        setApplication(doc.docs[0].data())
      }

    } catch (error) {
      console.log(error);
      alert("An error has occurred fetching user data");
    }
  }

  return (
    <div className="font-misterpixel">
      <div className="text-[4rem] justify-center">
        Welcome Hacker {application ? application.name : 'Loading...'}
      </div>
      
      <div className="text-[4rem] justify-center">
        Your Status: {application.status}
      </div>

      {application.status === 'Not Started' && (
        <button onClick={() => navigate('')} 
        className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
          Start your Application
        </button> // Edit to navigate to form page
      )}

    </div>
  );
};

export default HackerDashboard;
