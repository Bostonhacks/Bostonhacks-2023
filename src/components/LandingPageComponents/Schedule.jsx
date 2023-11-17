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
      tableEntry: 'TEAM FORMATION',
      location: 'GSU BACKCOURT',
    },
    {
      time: '11:20 AM',
      tableEntry: 'HACKATHON 101',
      location: 'GSU BACKCOURT',
    },
    { time: '11:50 PM', tableEntry: 'INTRO TO GITHUB', location: 'TERRACE' },
    { time: '12:00 PM', tableEntry: 'LUNCH BREAK', location: 'ZISKAND LOUNGE' },
    { time: '1:00 PM', tableEntry: 'API 101 BY POSTMAN', location: 'TERRACE' },
    {
      time: '',
      tableEntry: 'INTRO TO WEB DEV',
      location: 'GSU BACKCOURT',
    },
    { time: '2:00 PM', tableEntry: 'FIGMA WORKSHOP', location: 'TERRACE' },
    {
      time: '',
      tableEntry: 'ALGORITHMIC FAIRNESS & ETHICAL AI',
      location: 'GSU BACKCOURT',
    },
    {
      time: '3:00 PM',
      tableEntry: 'WEB DEV (INTERMEDIATE)',
      location: 'GSU BACKCOURT',
    },
    {
      time: '4:00 PM',
      tableEntry: 'DISCOVER THE WORLD OF UNITY',
      location: 'TERRACE',
    },
    {
      time: '',
      tableEntry: 'WEBSCRAPING WORKSHOP',
      location: 'GSU BACKCOURT',
    },
    { time: '5:00 PM', tableEntry: 'RESUME WORKSHOP', location: 'TERRACE' },
    {
      time: '',
      tableEntry: 'MLH: MS PAINT BOB ROSS',
      location: 'GSU BACKCOURT',
    },
    { time: '6:30 PM', tableEntry: 'DINNER', location: 'ZISKAND LOUNGE' },
    { time: '7:30 PM', tableEntry: 'ECHO 3D WORKSHOP', location: 'TERRACE' },
    {
      time: '8:30 PM',
      tableEntry: 'INTRO TO LEETCODE',
      location: 'TERRACE',
    },
    { time: '', tableEntry: 'JEOPARDY', location: 'GSU BACKCOURT' },
    { time: '9:30 PM', tableEntry: 'VIDEO GAMES', location: 'TERRACE' },
    { time: '10:30 PM', tableEntry: 'KAREOKE', location: 'TERRACE' },
    {
      time: '',
      tableEntry: 'BALLOON ANIMAL WORKSHOP',
      location: 'GSU BACKCOURT',
    },
  ];

  const sunday = [
    {
      time: '12:00 AM',
      tableEntry: 'MIDNIGHT SNACK',
      location: 'METCALF BALLROOM',
    },
    {
      time: '1:00 AM',
      tableEntry: 'SLEEP',
      location: 'GSU BASEMENT',
    },
    {
      time: '10:30 AM',
      tableEntry: 'SUBMISSIONS DUE',
      location: '',
    },
    {
      time: '',
      tableEntry: 'SURPRISE WORKSHOP',
      location: 'METCALF BALROOM',
    },
    { time: '11:00 AM', tableEntry: 'JUDGING STARTS', location: '' },
    {
      time: '2:00 PM',
      tableEntry: 'CLOSING CEREMONY',
      location: 'METCALF BALLROOM',
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
      {/* <img
        src={schedule}
        className="max-sm:hidden my-[2vh]"
        alt="schedule"
        draggable={false}
      />
      <img
        src={mobileSchedule}
        className="sm:hidden max-sm:scale-125 p-10 my-[100px] "
        alt="mobile schedule"
      /> */}

      <div className="w-full flex flex-col md:flex-row justify-around">
        <ScheduleComponent title="Saturday" data={saturday} />
        <ScheduleComponent title="Sunday" data={sunday} />
      </div>

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
