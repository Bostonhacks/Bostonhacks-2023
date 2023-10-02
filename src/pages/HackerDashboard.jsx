import { useEffect, useState } from 'react';
import { db, auth } from '../firebase/firebase-config';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { query, collection, getDocs, where } from 'firebase/firestore';

import PinkPurpleBaloons from '../assets/images/HackerDashboard/PinkPurpleBalloons.svg';
import OrangeBalloon from '../assets/images/HackerDashboard/orange balloon.svg';
import Llama from '../assets/images/HackerDashboard/Llama  (Traced).svg';
import Clouds from '../assets/images/HackerDashboard/Red cloud.png';
import CounterDownTimer from '../components/common/CountDownTimer';
import Bush from '../assets/images/HackerDashboard/bush 1.svg';
import Stars from '../assets/images/HackerDashboard/stars.svg';
import LlamaPlatformer from '../assets/images/HackerDashboard/Group 10417.svg';


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
  // Function to sign the user out and redirect to the landing page
  const signOutAndRedirect = async () => {
    try {
      await auth.signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div 
    className=''
    style={{
      background:
        'linear-gradient(180deg, #2787E4, #64A6E7, #070C36)', //Not the correct gradient yet
    }}>
      {/* Sign-out button */}
      <div className="flex justify-center">
        <button
          onClick={signOutAndRedirect}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign Out
        </button>
      </div>

      <img src={PinkPurpleBaloons} className='pl-[5vw]'/>
      <div className="font-misterpixel"> 
      <div className="text-[4rem] text-center text-white">
        WELCOME HACKER {application ? application.firstName : 'Loading...'}!
        <div>YOUR STATUS: {application.status}</div>
      </div>
      
      <div className='flex flex-row justify-center'>
        <CounterDownTimer/>
        <div className='absolute right-[8vw]'>
          <img src={OrangeBalloon} />
        </div>
      </div>
      <div className='text-center text-[3rem]'>UNTIL BOSTONHACKS!</div>
      </div>
      <img src={Llama} className='absolute left-[5vw]'/>
      <img src={Clouds} className='' />

    <div
    className='relative items-center'
    style={{
      background:
        'linear-gradient(180deg, #421778, #231963, #041C4D)', //Not the correct gradient yet
    }}>
      <div className='justify-center'>
        <img src={LlamaPlatformer} className='p-[5vw]'/>
      </div>
      <img src={Stars} className='absolute object-cover bottom-0'/>
      <img src={Bush} className='absolute object-cover bottom-0'/>
    </div>

          {/* If application is not finished we navigate them to the form page */}
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
