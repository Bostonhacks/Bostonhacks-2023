import { useEffect, useState } from 'react';
import { db, auth } from '../firebase/firebase-config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { query, collection, getDocs, where } from 'firebase/firestore';

import PinkPurpleBaloons from '../assets/images/HackerDashboard/PinkPurpleBalloons.svg';
import OrangeBalloon from '../assets/images/HackerDashboard/orange balloon.svg';
import Llama from '../assets/images/HackerDashboard/Llama  (Traced).svg';
import Clouds from '../assets/images/HackerDashboard/Red cloud.png';
import CounterDownTimer from '../components/common/CountDownTimer';
import Bush from '../assets/images/HackerDashboard/bush 1.svg';
import Stars from '../assets/images/HackerDashboard/Stars.svg';
import NotStarted from '../assets/images/HackerDashboard/NotStarted.png';
import Submitted from '../assets/images/HackerDashboard/Submitted.png';
import Waitlisted from '../assets/images/HackerDashboard/Waitlisted.png';
import Rejected from '../assets/images/HackerDashboard/Rejected.png';
import Accepted from '../assets/images/HackerDashboard/Accepted.png';
import Confirmed from '../assets/images/HackerDashboard/Confirmed.png';
import CheckedIn from '../assets/images/HackerDashboard/CheckedIn.png';
import Declined from '../assets/images/HackerDashboard/Declined.png';
import Logo from '../assets/images/bhacks-logo.svg';
import Application from './Application';

const HackerDashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [application, setApplication] = useState(null);
  const navigate = useNavigate();
  // const applicationTypes = ["Submitted", "Waitlisted", "Rejected", "Declined", "Confirmed", "Accepted", "Checked In"];

  useEffect(() => {
    if (loading) return;

    if (!user) return navigate('/login');

    var intervalId = window.setInterval(function () {
      fetchApplication(intervalId);
    }, 1000);
  }, [user, loading, navigate]);

  if (!user) return null;

  // Grabs the application and sets the variable
  const fetchApplication = async (intervalId) => {
    try {
      const q = query(
        collection(db, 'applications'),
        where('uid', '==', user?.uid)
      );
      const doc = await getDocs(q);
      if (doc.docs.length !== 0) {
        setApplication({ ...doc.docs[0].data(), id: doc.docs[0].id });
        clearInterval(intervalId);
      }
    } catch (err) {
      console.error(err);
      alert('An error occured while fetching user data');
    }
  };
  // Function to sign the user out and redirect to the landing page
  const signOutAndRedirect = async () => {
    try {
      await auth.signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const ImageSelect = (status) => {
    switch (status) {
      case 'Not Started':
        return NotStarted;
      case 'Submitted':
        return Submitted;
      case 'Rejected':
        return Rejected;
      case 'Accepted':
        return Accepted;
      case 'Waitlisted':
        return Waitlisted;
      case 'Declined':
        return Declined;
      case 'Confirmed':
        return Confirmed;
      case 'CheckedIn':
        return CheckedIn;
    }
  };

  return !application ? (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center font-minecraft font-3xl">
      Loading...
    </div>
  ) : application.status === 'Not Started' ? (
    <Application applicationId={application.id} />
  ) : (
    <div
      className=""
      style={{
        background: 'linear-gradient(180deg, #2787E4, #64A6E7, #070C36)', //Not the correct gradient yet
      }}
    >
      <nav className="p-5 md:p-10 w-[100vw] h-[100px] flex flex-row justify-between items-center">
        <button
          onClick={() => {
            navigate('/');
          }}
        >
          <img src={Logo} alt="" className="w-10 h-10" />
        </button>
        <div className="font-minecraft text-lg lg:text-xl text-white">
          <p>Signed in as: {user.email}</p>
          <div className="w-full text-right">
            <button
              onClick={signOutAndRedirect}
              className="hover:text-gray-300 "
            >
              Sign Out
            </button>
          </div>
        </div>
      </nav>
      {/* Sign-out button */}

      <img src={PinkPurpleBaloons} className="ml-[5vw] w-[20vw] lg:w-auto" />
      <div className="font-O4b">
        <div className="text-xl lg:leading-normal lg:text-[4rem] text-center text-white">
          WELCOME HACKER {application ? application.firstName : 'Loading...'}!
          <div>YOUR STATUS: {application.status}</div>
        </div>

        <div className="font-minecraft flex flex-row justify-center">
          <CounterDownTimer />
          <div className="absolute right-[8vw]">
            <img src={OrangeBalloon} className="w-[7vw] lg:w-auto" />
          </div>
        </div>
        <div className="text-center text-xl lg:leading-normal lg:text-[4rem]">
          UNTIL BOSTONHACKS!
        </div>
      </div>
      <img src={Llama} className="absolute left-[5vw] w-[20vw] lg:w-auto" />
      <img src={Clouds} className="w-[100vw] z-10" />

      <div
        className="relative items-center w-[100vw]"
        style={{
          background: 'linear-gradient(180deg, #421778, #231963, #041C4D)', //Not the correct gradient yet
        }}
      >
        <div className="flex justify-center w-[100vw]">
          <img
            src={ImageSelect(application.status)}
            className="my-[50px] lg:my-[100px]  w-[70vw]"
          />
        </div>
        <img src={Stars} className="absolute bottom-0 w-[100vw]" />
        <img src={Bush} className="absolute bottom-0 w-[100vw]" />
      </div>
    </div>
  );
};

export default HackerDashboard;
