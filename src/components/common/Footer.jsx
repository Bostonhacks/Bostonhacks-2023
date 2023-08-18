import React from "react";
import CountDownTimer from "./CountDownTimer";
import facebook from "./svg/facebook.png";
import instagram from "./svg/instagram.png";
import twitter from "./svg/twitter.png";
const Footer = () => {
  return (
    <div class="mb-10 font-minecraft">
      <CountDownTimer />
      <ul class="flex justify-center items-center space-x-5 scale-50 mb-10">
        <li>
          <a href="https://www.instagram.com/bostonhacks/">
          <img src={instagram} class="hover:-translate-y-6 transition-all"/>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/boston_hacks">
          <img src={twitter} class="hover:-translate-y-6 transition-all"/>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/bostonhacks/">
          <img src={facebook} class="hover:-translate-y-6 transition-all"/>
          </a>
        </li>
      </ul>
      <p class="text-center font-black">Made with love by BostonHacks</p>
      <p class="text-center text-sm">Forest Pixel Art by Eder Muniz</p>
    </div>
  );
};

export default Footer;
