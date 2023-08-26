import React from 'react';
import felizSponsor from '../../assets/images/felizSponsor.svg';
import sponsorHeader from '../../assets/images/sponsorHeader.svg';
import sponsorFaceBox from '../../assets/images/sponsorFaceBox.svg';
import sponsorHeartGroup from '../../assets/images/sponsorHeartGroup.svg';
import applyButton from '../../assets/images/applyButton.svg';
import TitleBG from '../../assets/images/TitleBG.svg';

export default function Sponsor() {
  const sponsors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 14];
  return (
    <div class="flex justify-center items-center flex-col">
      <img src={felizSponsor} alt="schedule" class="mt-20" />
      <div className="relative flex items-center justify-center md:h-[132px] md:w-[431px] h-[57px] w-[186px] mt-20">
        <h2 className="z-50 text-center relative md:text-5xl text-4xl pb-1 text-text-primary">
          SPONSORS
        </h2>
        <img className="z-20 absolute" src={TitleBG} alt="TitleBG" />
      </div>
      <div class="grid md:grid-cols-3 lg:grid-cols-6 gap-20 mt-20">
        {sponsors.map(() => (
          <div>
            <img src={sponsorFaceBox} alt="" />
            <img src={sponsorHeartGroup} alt="" />
          </div>
        ))}
      </div>
      <button>
        <img src={applyButton} alt="" class="mt-20" />
      </button>
    </div>
  );
}
