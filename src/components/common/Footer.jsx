import React from 'react';
import CountDownTimer from './CountDownTimer';
import facebook from './svg/facebook.png';
import instagram from './svg/instagram.png';
import twitter from './svg/twitter.png';
const Footer = () => {
  return (
    <div className="mb-10 font-minecraft z-50">
      <CountDownTimer />
      <ul className="flex justify-center items-center space-x-5 scale-50 mb-10">
        <li>
          <a href="https://www.instagram.com/bostonhacks/">
            <img
              src={instagram}
              className="hover:-translate-y-6 transition-all"
            />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/boston_hacks">
            <img
              src={twitter}
              className="hover:-translate-y-6 transition-all"
            />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/bostonhacks/">
            <img
              src={facebook}
              className="hover:-translate-y-6 transition-all"
            />
          </a>
        </li>
      </ul>
      <div className='z-50 relative'>
        <p className="text-center font-black">Made with love by BostonHacks</p>
        <p className="text-center text-sm">Forest Pixel Art by Eder Muniz</p>
      </div>
    </div>
  );
};

export default Footer;
