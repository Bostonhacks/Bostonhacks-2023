import { useState } from 'react';

import WhyUsSign from '../../assets/images/SponsorPage/WhyUsSign.svg';
import FelizPlatformPNG from '../../assets/images/SponsorPage/FelizPlatform.png';
import OpenChest from '../../assets/images/BigTreasureChest_Open.png';

const whyUs = [
  [
    {
      title: 'Connect',
      description:
        'Give your API or product a test run before sending it out into the world. Show off a great framework or platform before it hits the market. Students are the ideal target for new tech. They will eagerly push your product to its limits, as well as offer suggestions on it and look to you for support.',
    },
    {
      title: 'Recruit',
      description:
        'Resumes are two-dimensional (literally). Interviews give only a small snapshot of an individual’s abilities. By watching a project evolve over a hackathon, you can get a much better picture of a candidate. Plus, you’ll have access to a group of students that are extraordinarily passionate about what they do, and a friendly environment to interact with them in.',
    },
    {
      title: 'Get Live Feedback',
      description:
        'Reach out to future customers, leaders and innovators. Test waters and get a sense of emergent technologies. Collaborate with students on a more intimate level at our comfortably mid-sized hackathon. Offer students advice and/or tech to help them through their projects. Whether you’re looking for brand awareness, technical expertise or personal development, you’ll find it here—with 100 motivated hackers and dozens of skilled mentors.',
    },
  ],
];

const WhySection = ({ data }) => {
  return (
    <div className="flex flex-col lg:space-y-8 lg:mx-20 lg:px-10 lg:py-20 font-minecraft">
      
      {data.map((item, index) => (
        <div
          key={index}
          className={`flex items-center mx-6 lg:mx-0 lg:p-4 ${
            index % 2 === 1 ? 'lg:flex-row-reverse lg:text-left' : ''
          }`}
        >
          <div className={`lg:flex-shrink-0 lg:w-3/5 text-xl`}>
            {index == 0 && <hr className="w-75 h-1 mx-auto bg-[#3D3C6A] border-0 rounded lg:hidden mb-0.5" />}
            <div className={`mx-4 flex items-center mb-2.5 lg:mb-2 ${index % 2 == 1 ? 'justify-end' : ''}`}>
              <img
                src={OpenChest}
                alt="Open Chest"
                className={`w-[26px] mt-2 lg:mt-0 lg:w-[48px] lg:h-[41px] ${index % 2 == 1 ? 'order-last ml-4' : ''}`}
              />
              <h2 className="text-[11px] lg:text-2xl font-bold ml-3 lg:ml-4 pt-1">{item.title}</h2>
            </div>
            <hr className="min-[320px]:hidden lg:block w-75 h-1 mx-auto my-5 bg-[#3D3C6A] border-0 rounded" />
            <hr className="w-75 h-1 mx-auto mb-4 bg-[#736DAB] opacity-20 border-0 rounded lg:hidden" /> {/* Mobile Border */}
            <p className='mx-4 text-[10px]/[10px] lg:text-[24px]/[24px]'>{item.description}</p>
            <hr className="w-75 h-1 mx-auto bg-[#3D3C6A] mt-5 border-0 rounded lg:hidden mb-0.5" /> {/* Mobile Border */}
          </div>
        </div>
      ))}
    </div>
  );
};

const WhyUs = () => {
  return (
    <div className="items-center flex flex-col text-white font-minecraft py-20 z-10">
      {/* <img src={WhyUsSign} alt="WhyUsSign" className="max-w-md" /> */}

      <WhySection data={whyUs[0]} reverse={true} />

      <img src={FelizPlatformPNG} alt="FelizPlatformPNG" className="max-w-md mt-12 w-[127px] lg:w-auto lg:mt-0" />
      <div className="lg:mb-20 items-center flex flex-col">
        <h1 className="text-xs lg:text-2xl mb-3 lg:6">Questions?</h1>
        <p className="text-xs lg:text-2xl">We welcome any questions or</p>
        <p className="text-xs lg:text-2xl">special requests. Please email us at</p>
        <h1 className="font-misterpixel font-normal pt-2 lg:py-10 text-sm lg:text-3xl">
          contact@bostonhacks.io
        </h1>
      </div>
    </div>
  );
};

export default WhyUs;
// import treasureChest from '../../assets/images/BigTreasureChest_Open.png'

// const WhyUs = () => {
//     return (
//         <div className='flex items-center mt-[100px] flex-col mb-[100px]'>
//             <div className="flex space-x-3 w-[930px] flex-col">
//                 <div className="flex items-center space-x-8 pb-4 border-b-4 border-[#3D3C6A] w-[550px]">
//                     <img src={treasureChest} alt="Image" className="ml-4 w-15 h-12" />
//                     <h1 className="text-[28px] font-minecraft font-bold text-white">
//                         Connect
//                     </h1>
//                 </div>

//                 <div className="mt-8 w-full">
//                     <h1 className="text-[24px] leading-[1] font-minecraft text-white">
//                         Give your API or product a test run before send ing it out into the world. Show off a great framework or platform before it hits the market. Students are the ideal target for new tech. They will eagerly push your product to its limits, as well as offer suggestions on it and look to you for support.
//                     </h1>
//                 </div>
//             </div>

//             <div>
//                 <div className="flex space-x-3 w-[930px] mt-[100px] justify-end">
//                     <div className="flex items-center space-x-8 pb-4 border-b-4 border-[#3D3C6A] w-[550px] justify-end">
//                         <h1 className="text-[28px] font-minecraft font-bold text-white">
//                             Recruit
//                         </h1>
//                         <img src={treasureChest} alt="Image" className="pr-4 w-15 h-12" />
//                     </div>
//                 </div>

//                 <div className="mt-8 text-right flex space-x-3 w-[930px] ">
//                     <h1 className="text-[24px] leading-[1] font-minecraft text-white pr-[10px] pl-[50px]">
//                         Resumes are two-dimensional (literally). Interviews give only a small snapshot of an individual’s abilities. By watching a project evolve over a hackathon, you can get a much better picture of a candidate. Plus, you’ll have access to a group of students that are extraordinarily passionate about what they do, and a friendly environment to interact with them in.
//                     </h1>
//                 </div>
//             </div>

//             <div className="flex space-x-3 w-[930px] flex-col mt-[100px]">
//                 <div className="flex items-center space-x-8 pb-4 border-b-4 border-[#3D3C6A] w-[550px]">
//                 <img src={treasureChest} alt="Image" className="ml-4 w-15 h-12" />
//                     <h1 className="text-[28px] font-minecraft font-bold text-white">
//                         Get Live Feedback
//                     </h1>
//                 </div>

//                 <div className="mt-8 w-full">
//                     <h1 className="text-[24px] leading-[1] font-minecraft text-white">
//                         Reach out to future customers, leaders and innovators. Test waters and get a sense of emergent technologies. Collaborate with students on a more intimate level at our comfortably mid-sized hackathon. Offer students advice and/or tech to help them through their projects. Whether you’re looking for brand awareness, technical expertise or personal development, you’ll find it here—with 100 motivated hackers and dozens of skilled mentors.
//                     </h1>
//                 </div>
//             </div>
//         </div>
//     );
//   };

// export default WhyUs;
