import React from 'react';
import scheduleTimeLine from '../../assets/images/schedule.svg';
import TitleBG from '../../assets/images/TitleBG.svg';
import cloudleft from '../../assets/images/LandingPage/Background/cloud_schedule_left.svg';
import cloudright from '../../assets/images/LandingPage/Background/cloud_schedule_right.svg';
import cloudbottom from '../../assets/images/LandingPage/Background/cloud_schedule_top.svg';
import cloudtop from '../../assets/images/LandingPage/Background/cloud_schedule_bottom.svg';
import felixPlatform from '../../assets/images/LandingPage/felixPlatform.svg';
import schedule from '../../assets/images/LandingPage/schedule.svg';
import mobileSchedule from '../../assets/images/LandingPage/mobileSchedule.svg';
import ScheduleComponent from './ScheduleComponent';
export default function Schedule() {
  const saturday = [
    { time: '9:00 AM', tableEntry: 'CHECK - IN', location: 'METCALF LOBBY' },
    {
      time: '10:00 AM',
      tableEntry: 'OPENING CEREMONY',
      location: 'METCALF BALLROOM',
    },
    {
      time: '10:30 AM',
      tableEntry: 'BEGIN HACKING / FINDING TEAMS',
      location: 'METCALF BALLROOM',
    },
    {
      time: '11:20 AM',
      tableEntry: 'HACKATHON 101',
      location: 'GSU BACKCOURT',
    },
    { time: '11:50 PM', tableEntry: 'INTRO TO GITHUB', location: 'TERRANCE' },
    { time: '12:00 PM', tableEntry: 'LUNCH', location: 'ZISKAND LOUNGE' },
    { time: '1:00 PM', tableEntry: 'POSTMAN WORKSHOP', location: 'TERRANCE' },
    {
      time: '',
      tableEntry: 'INTRO TO FULL-STACK DEV',
      location: 'TERRANCE',
    },
    { time: '2:00 PM', tableEntry: 'FIGMA WORKSHOP', location: 'TERRANCE' },
    {
      time: '',
      tableEntry: 'INTRO TO DA WORKSHOP',
      location: 'GSU BACKCOURT',
    },
    {
      time: '3:00 PM',
      tableEntry: 'INTERMEDIATE WEB DEV WORKSHOP',
      location: 'TERRANCE',
    },
    { time: '4:00 PM', tableEntry: 'UNITY WORKSHOP', location: 'TERRANCE' },
    {
      time: '',
      tableEntry: 'INTRO TO AI/ML',
      location: 'GSU BACKCOURT',
    },
    { time: '5:00 PM', tableEntry: 'RESUME WORKSHOP', location: 'TERRANCE' },
    { time: '', tableEntry: 'MLH WORKSHOP', location: 'GSU BACKCOURT' },
    { time: '6:30 PM', tableEntry: 'DINNER', location: 'ZISKAND LOUNGE' },
    { time: '7:30 PM', tableEntry: 'ECHO 3D WORKSHOP', location: 'TBD' },
    {
      time: '8:30 PM',
      tableEntry: 'INTRO TO TECHNICAL INTERVIEWS WORKSHOP',
      location: 'TERRANCE',
    },
    { time: '', tableEntry: 'JEOPARDY', location: 'GSU BACKCOURT' },
    { time: '9:30 PM', tableEntry: 'MARIO KART/SMASH', location: 'TERRANCE' },
    {
      time: '10:00 PM',
      tableEntry: 'SLEEP SPACES OPEN',
      location: 'GSU BASEMENT',
    },
    { time: '10:30 PM', tableEntry: 'KAREOKE', location: 'TERRANCE' },
    {
      time: '',
      tableEntry: 'BALLOON ANIMALS',
      location: 'GSU BACKCOURT',
    },
  ];

  const sunday = [
    { time: '9:00 AM', tableEntry: 'CHECK - IN', location: 'METCALF LOBBY' },
    {
      time: '10:00 AM',
      tableEntry: 'OPENING CEREMONY',
      location: 'METCALF BALLROOM',
    },
    {
      time: '10:30 AM',
      tableEntry: 'BEGIN HACKING / FINDING TEAMS',
      location: 'METCALF BALLROOM',
    },
    {
      time: '11:20 AM',
      tableEntry: 'HACKATHON 101',
      location: 'GSU BACKCOURT',
    },
    { time: '11:50 PM', tableEntry: 'INTRO TO GITHUB', location: 'TERRANCE' },
    { time: '12:00 PM', tableEntry: 'LUNCH', location: 'ZISKAND LOUNGE' },
    { time: '1:00 PM', tableEntry: 'POSTMAN WORKSHOP', location: 'TERRANCE' },
    {
      time: '',
      tableEntry: 'INTRO TO FULL-STACK DEV',
      location: 'TERRANCE',
    },
    { time: '2:00 PM', tableEntry: 'FIGMA WORKSHOP', location: 'TERRANCE' },
    {
      time: '',
      tableEntry: 'INTRO TO DA WORKSHOP',
      location: 'GSU BACKCOURT',
    },
    {
      time: '3:00 PM',
      tableEntry: 'INTERMEDIATE WEB DEV WORKSHOP',
      location: 'TERRANCE',
    },
    { time: '4:00 PM', tableEntry: 'UNITY WORKSHOP', location: 'TERRANCE' },
    {
      time: '',
      tableEntry: 'INTRO TO AI/ML',
      location: 'GSU BACKCOURT',
    },
    { time: '5:00 PM', tableEntry: 'RESUME WORKSHOP', location: 'TERRANCE' },
    { time: '', tableEntry: 'MLH WORKSHOP', location: 'GSU BACKCOURT' },
    { time: '6:30 PM', tableEntry: 'DINNER', location: 'ZISKAND LOUNGE' },
    { time: '7:30 PM', tableEntry: 'ECHO 3D WORKSHOP', location: 'TBD' },
    {
      time: '8:30 PM',
      tableEntry: 'INTRO TO TECHNICAL INTERVIEWS WORKSHOP',
      location: 'TERRANCE',
    },
    { time: '', tableEntry: 'JEOPARDY', location: 'GSU BACKCOURT' },
    { time: '9:30 PM', tableEntry: 'MARIO KART/SMASH', location: 'TERRANCE' },
    {
      time: '10:00 PM',
      tableEntry: 'SLEEP SPACES OPEN',
      location: 'GSU BASEMENT',
    },
    { time: '10:30 PM', tableEntry: 'KAREOKE', location: 'TERRANCE' },
    {
      time: '',
      tableEntry: 'BALLOON ANIMALS',
      location: 'GSU BACKCOURT',
    },
  ];
  return (
    <div className="flex justify-center items-center flex-col w-full -mb-80 max-sm:mb-auto overflow-clip">
      <img src={felixPlatform} className="mb-20 mt-20 max-sm:hidden" />
      <div
        className="relative flex items-center justify-center md:h-[132px] md:w-[431px] h-[57px] w-[186px] mt-20 mb-20"
        id="schedule"
      >
        <h2 className="z-50 text-center relative md:text-5xl text-3xl pb-1 text-text-primary">
          SCHEDULE
        </h2>
        <img className="z-20 absolute" src={TitleBG} alt="TitleBG" />
        <img
          src={cloudbottom}
          className="absolute -left-20 -top-20"
          alt="cloudleft"
        />
      </div>
      <img
        src={schedule}
        className="max-sm:hidden my-[2vh]"
        alt="schedule"
        draggable={false}
      />
      <img
        src={mobileSchedule}
        className="sm:hidden max-sm:scale-125 p-10 my-[100px] "
        alt="mobile schedule"
      />

      {/* <div className="w-full flex flex-row justify-around">
        <ScheduleComponent title="Saturday" data={saturday} />
        <ScheduleComponent title="Sunday" data={data} /> 
      </div> */}

      <img
        src={cloudtop}
        className="relative max-md:hidden left-96"
        alt="cloudtop"
      />
      {/* <img
        src={cloudleft}
        className="absolute left-0 max-md:scale-75 max-md:-left-4 max-sm:hidden"
        alt="cloudleft"
      /> */}
      {/* <img
        src={cloudright}
        className="absolute max-md:scale-75 max-md:-right-6 right-0 max-sm:hidden"
        alt="cloudright"
      /> */}
    </div>
  );
}
