import React from 'react';
import scheduleTimeLine from '../../assets/images/schedule.svg';
import TitleBG from '../../assets/images/TitleBG.svg';
import cloudleft from '../../assets/images/LandingPage/Background/cloud_schedule_left.svg';
import cloudright from '../../assets/images/LandingPage/Background/cloud_schedule_right.svg';
import cloudbottom from '../../assets/images/LandingPage/Background/cloud_schedule_top.svg';
import cloudtop from '../../assets/images/LandingPage/Background/cloud_schedule_bottom.svg';
import felixPlatform from '../../assets/images/LandingPage/felixPlatform.svg';
import mobileSchedule from '../../assets/images/LandingPage/mobileSchedule.svg';
export default function Schedule() {
  return (
    <div className="flex justify-center items-center flex-col w-full -mb-80 max-sm:mb-auto overflow-clip">
      <img src={felixPlatform} className='mb-20 mt-20 max-sm:hidden'/>
      <div
        className="relative flex items-center justify-center md:h-[132px] md:w-[431px] h-[57px] w-[186px] mt-20 mb-20"
        id="schedule"
      >
        <h2 className="z-50 text-center relative md:text-5xl text-3xl pb-1 text-text-primary">
          SCHEDULE
        </h2>
        <img className="z-20 absolute" src={TitleBG} alt="TitleBG" />
        <img src={cloudbottom} className="absolute -left-20 -top-20" alt="cloudleft"/>
      </div>
        <img src={scheduleTimeLine} className='max-sm:hidden' alt="schedule"/>
        <img src={mobileSchedule} className='sm:hidden max-sm:scale-125 p-10 max-sm:mb-20' alt="mobile schedule"/>
        <img src={cloudtop} className="relative max-md:hidden left-96" alt="cloudtop"/>
        <img src={cloudleft} className="absolute left-0 max-md:scale-75 max-md:-left-4 max-sm:hidden" alt="cloudleft"/>
        <img src={cloudright} className="absolute max-md:scale-75 max-md:-right-6 right-0 max-sm:hidden" alt="cloudright"/>
    </div>
  );
}
