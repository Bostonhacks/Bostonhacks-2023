import React from 'react';
import sponsorFaceBox from '../../assets/images/sponsorFaceBox.svg';
import sponsorHeartGroup from '../../assets/images/sponsorHeartGroup.svg';
import TitleBG from '../../assets/images/TitleBG.svg';
import sparkSponsor from '../../assets/images/LandingPage/sparkSponsor.png';
import sargentSponsor from '../../assets/images/LandingPage/sargentSponsor.png';
import wolframSponsor from '../../assets/images/LandingPage/wolframSponsor.png';
import capitalOneSponsor from '../../assets/images/LandingPage/capitalOneSponsor.png';
import xyzSponsor from '../../assets/images/LandingPage/xyzSponsor.png';
import cakeSponsor from '../../assets/images/LandingPage/cakeSponsor.png';
import sponsorBackground from '../../assets/images/LandingPage/sponsors-white.svg';
import postmanSponsor from '../../assets/images/LandingPage/postmanSponsor.png';
import echoSponsor from '../../assets/images/LandingPage/echoSponsor.png';
import bucsSponsor from '../../assets/images/LandingPage/bucsSponsor.png';
import sublimeSponsor from '../../assets/images/LandingPage/sublimeSponsor.png';

export default function Sponsor() {
  const sponsors = [
    {
      id: 1,
      image: echoSponsor,
    },
    {
      id: 2,
      image: wolframSponsor,
    },
    {
      id: 3,
      image: capitalOneSponsor,
    },
    {
      id: 4,
      image: xyzSponsor,
    },
    {
      id: 5,
      image: sparkSponsor,
    },
    {
      id: 6,
      image: cakeSponsor,
    },
    {
      id: 7,
      image: sargentSponsor,
    },
    {
      id: 8,
      image: postmanSponsor,
    },
    {
      id: 9,
      image: bucsSponsor,
    },
    {
      id: 10,
      image: sublimeSponsor,
    },
  ];
  return (
    <div className="flex justify-center items-center flex-col mb-40">
      <div
        className="relative flex items-center justify-center md:h-[132px] md:w-[431px] h-[57px] w-[186px] mt-20"
        id="sponsors"
      >
        <h2 className="z-50 text-center relative max-sm:scale-75 md:text-5xl text-4xl pb-1 text-text-primary">
          SPONSORS
        </h2>
        <img className="z-20 absolute" src={TitleBG} alt="TitleBG" />
      </div>
      <div className="grid z-10 grid-cols-2 lg:grid-cols-5 gap-14 lg:gap-20 mt-20 mx-[5vw]">
        {sponsors.map((sponsor) => (
          <div key={sponsor.id} className="relative">
            <img
              src={sponsorBackground}
              alt="sponsor"
              className="w-32 h-32 mx-auto"
            />
            <img
              src={sponsor.image}
              alt={`Sponsor ${sponsor.id}`}
              className="absolute w-auto h-auto top-0 left-0 object-cover scale-75"
            />
            <img
              src={sponsorHeartGroup}
              alt="sponsor"
              className="absolute top-20 w-32 h-32"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
