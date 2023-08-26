import React from 'react';
import scheduleTimeLine from '../../assets/images/schedule.svg';
import scheduleHeader from '../../assets/images/scheduleHeader.svg';
import TitleBG from '../../assets/images/TitleBG.svg';

export default function Schedule() {
  return (
    <div class="flex justify-center items-center flex-col">
      <div className="relative flex items-center justify-center md:h-[132px] md:w-[431px] h-[57px] w-[186px]">
        <h2 className="z-50 text-center relative md:text-5xl text-4xl pb-1 text-text-primary">
          SCHEDULE
        </h2>
        <img className="z-20 absolute" src={TitleBG} alt="TitleBG" />
      </div>
      <img src={scheduleTimeLine} alt="schedule" />
    </div>
  );
}
