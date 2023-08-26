import React, { useState } from 'react';
import TrackPage from '../../assets/images/LandingPage/TrackModalPage.png';
import MobileTrackPage from '../../assets/images/LandingPage/TrackModalPageMobile.svg';
import { useMediaQuery } from 'react-responsive';

const TrackModal = ({ title1, title2, description, guiding }) => {
  const [showDescription, setShowDescription] = useState(true);
  const smallScreen = useMediaQuery({ maxWidth: 640 });

  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: smallScreen ? '80%' : 'auto',
      }}
    >
      <img
        src={smallScreen ? MobileTrackPage : TrackPage}
        alt="test"
        width={smallScreen ? '100%' : 'auto'}
      />
      <div className="w-full absolute top-[12vw] md:top-[10vw] font-misterpixel flex flex-col items-center ">
        <h1 className="text-[#965340] text-xl lg:text-3xl">
          <span className=" border-y-4 border-y-[#965340]">{title1}</span>
          {'   '}
          <span className="border-y-4 border-y-[#965340]">{title2}</span>
        </h1>
        <h2 className="mt-[.5vw] text-[#965340] text-[2.7vw] sm:text-[1.35vw] border-b-4 border-b-[#965340]">
          <span
            className={`cursor-pointer ${
              showDescription ? 'font-ft88b' : 'font-ft88'
            }`}
            onClick={() => {
              setShowDescription(true);
            }}
          >
            DESCRIPTION{' '}
          </span>
          <span className="font-ft88b">|</span>
          <span
            className={`cursor-pointer ${
              showDescription ? 'font-ft88' : 'font-ft88b'
            }`}
            onClick={() => {
              setShowDescription(false);
            }}
          >
            {' '}
            GUIDING QUESTIONS
          </span>
        </h2>
        {showDescription ? (
          <p className="mt-[1.5vh] w-[77%] font-ft88 h-[50vh] sm:h-[30vh] overflow-scroll text-[2.4vw] sm:text-[.87vw] text-[#965340] ">
            {description}
          </p>
        ) : (
          <ul className="mt-[1.5vh] w-[77%] font-ft88 h-[70vw] sm:h-[15vw] overflow-scroll text-[2.4vw] sm:text-[.9vw] text-[#965340] marker:[#965340] list-disc">
            {guiding.map((question) => {
              return <li className="ml-[2vw]">{question}</li>;
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TrackModal;
