import { useEffect, useState } from 'react';
import {db, auth} from '../firebase/firebase-config';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { data } from 'autoprefixer';

const HackerDashboard = () => {

  const [user, loading] = useAuthState(auth);
  const [info, setInfo] = useState([]);
  const navigate = useNavigate();
  const applicationTypes = [ "Submitted", "Waitlisted", "Rejected", "Declined", "Confirmed", "Accepted", "Checked In" ];
 
    // Start the fetch operation as soon as
    // the page loads
    window.addEventListener('load', () => {
        Fetchdata();
    });
 
    // Fetch the required data using the get() method
    const Fetchdata = () => {
        db.collection("applications").get().then((querySnapshot) => {
 
            // Loop through the data and store
            // it in array to display
            querySnapshot.forEach(element => {
                var data = element.data();
                setInfo(arr => [...arr, data]);
 
            });
        })
    }
    useEffect(() => {
      // if (!user) return navigate("/login");

  }, [user]);

  return (
    <div className="font-misterpixel">
      <div className = "text-[4rem] justify-center">
        Welcome Hacker {data.name}
      </div>
    </div>
    
  );
};

export default HackerDashboard;