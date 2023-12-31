import { useState } from 'react';
import Logo from '../../assets/images/bhacks-logo.svg';
import OpenBurger from '../../assets/images/openBurger.svg';
import ClosedBurger from '../../assets/images/closedBurger.svg';
const LandingNav = () => {
  const [openBurger, setOpenBurger] = useState(false);

  return (
    <div className="p-5 sticky top-0 z-[100000] w-full ">
      <div className="flex flex-row align-center  justify-between ">
        <a href="/">
          <img src={Logo} alt="Bostonhacks Logo" height={34} width={39} />
        </a>
        <ul className="invisible sm:visible flex flex-row justify-around w-[45vw]">
          <li>
            <a
              className="text-white font-minecraft cursor-pointer hover:text-gray-400"
              href="#tracks"
            >
              TRACKS
            </a>
          </li>
          <li>
            <a
              className="text-white font-minecraft cursor-pointer hover:text-gray-400"
              href="#faq"
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              className="text-white font-minecraft cursor-pointer hover:text-gray-400"
              href="#schedule"
            >
              SCHEDULE
            </a>
          </li>
          <li>
            <a
              className="text-white font-minecraft cursor-pointer hover:text-gray-400"
              href="#sponsors"
            >
              SPONSORS
            </a>
          </li>
        </ul>
        <img
          className="cursor-pointer sm:hidden"
          src={openBurger ? OpenBurger : ClosedBurger}
          alt="burger"
          onClick={() => {
            setOpenBurger(!openBurger);
          }}
        />
      </div>

      {openBurger && (
        <ul
          className="sm:hidden rounded-md bg-[#DCC7AF] w-[25vw] p-2 absolute right-2"
          onClick={() => {
            setOpenBurger(false);
          }}
        >
          <li className="w-full flex justify-center items-center">
            <a
              className="text-[#5A4123] text-lg font-minecraft cursor-pointer hover:text-gray-400"
              href="#tracks"
            >
              TRACKS
            </a>
          </li>
          <li className="w-full flex justify-center items-center">
            <a
              className="text-[#5A4123] text-lg font-minecraft cursor-pointer hover:text-gray-400 "
              href="#faq"
            >
              FAQ
            </a>
          </li>
          <li className="w-full flex justify-center items-center">
            <a
              className="text-[#5A4123] text-lg font-minecraft cursor-pointer hover:text-gray-400"
              href="#schedule"
            >
              SCHEDULE
            </a>
          </li>
          <li className="w-full flex justify-center items-center">
            <a
              className="text-[#5A4123] text-lg font-minecraft cursor-pointer hover:text-gray-400"
              href="#sponsors"
            >
              SPONSORS
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default LandingNav;
