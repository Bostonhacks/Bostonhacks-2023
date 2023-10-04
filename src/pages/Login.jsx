import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, signInWithGoogle } from '../firebase/firebase-config';
import { useAuthState } from 'react-firebase-hooks/auth';
import GoogleIcon from '../components/common/svg/GoogleIcon';
import Footer from '../components/common/Footer';
// Login page
export default function Login() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;

    if (user) navigate('/dashboard');
  }, [user, loading, navigate]);

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={signInWithGoogle}
        className="font-bold flex flex-col items-center space-x-2 px-4 py-6 rounded-lg"
      >
        <GoogleIcon />
        <p className="text-[#453119] text-[60px] font-bold font-minecraft">
          Click me to login with Google
        </p>
      </button>

      {/* <Footer /> */}
    </div>
  );
}
