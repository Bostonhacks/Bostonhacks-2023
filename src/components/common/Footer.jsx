import React from 'react';
import CountDownTimer from './CountDownTimer';
import facebook from './svg/facebook.png';
import instagram from './svg/instagram.png';
import twitter from './svg/twitter.png';
// import cloudBG from '../../assets/images/LandingPage/Background/footerCloudBG.svg';
import FooterCloudImage from '../../assets/images/SponsorPage/FooterCloud.png';
const Footer = () => {
  return (
    <div className="mb-10 font-minecraft">
      <CountDownTimer />
      <div className=' relative z-50'>
        <ul className="flex justify-center items-center space-x-5 scale-50 mb-10">
          <li className=''>
            <a href="https://www.instagram.com/bostonhacks/" className='z-'>
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
      </div>
      <div className='z-50 relative'>
        <p className="text-center font-black">Made with love by BostonHacks</p>
        <p className="text-center text-sm">Forest Pixel Art by Eder Muniz</p>
      </div>
      <div className='relative'>
        <img src={FooterCloudImage} className='absolute bottom-20 z-0 object-cover w-full h-auto lg:h-[865px] 2xl:h-auto 2xl:w-full' onDragStart={(event)=> event.preventDefault()}/>
      </div>
    </div>
  );
};

export default Footer;
