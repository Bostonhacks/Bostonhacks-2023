import { useState } from 'react';

import WhyUsSign from '../../assets/images/SponsorPage/WhyUsSign.svg';
import FelizPlatformPNG from '../../assets/images/SponsorPage/FelizPlatform.png';
import OpenChest from '../../assets/images/BigTreasureChest_Open.png';

const whyUs = [
    [
        {
            title: 'Connect',
            description:'Give your API or product a test run before sending it out into the world. Show off a great framework or platform before it hits the market. Students are the ideal target for new tech. They will eagerly push your product to its limits, as well as offer suggestions on it and look to you for support.',
        },
        {
            title: 'Recruit',
            description: 'Resumes are two-dimensional (literally). Interviews give only a small snapshot of an individual’s abilities. By watching a project evolve over a hackathon, you can get a much better picture of a candidate. Plus, you’ll have access to a group of students that are extraordinarily passionate about what they do, and a friendly environment to interact with them in.',
        },
        {
            title: 'Get Live Feedback',
            description: 'Reach out to future customers, leaders and innovators. Test waters and get a sense of emergent technologies. Collaborate with students on a more intimate level at our comfortably mid-sized hackathon. Offer students advice and/or tech to help them through their projects. Whether you’re looking for brand awareness, technical expertise or personal development, you’ll find it here—with 100 motivated hackers and dozens of skilled mentors.',
        },
    ],
];



const WhySection = ({ data }) => {
    return (
        <div className="flex flex-col space-y-8 mx-20 px-10 py-20 font-minecraft">
        {data.map((item, index) => (
            <div
            key={index} 
            className={`flex items-center p-4 ${ index % 2 === 1 ? 'flex-row-reverse text-left' : ''}`}
            >
                <div className={`flex-shrink-0 w-3/5 text-xl`}>
                    <div className='flex items-center mb-2'>
                        <img
                            src={OpenChest}
                            alt="Closed Chest"
                            className={`w-[48px] h-[41px]`}
                        />
                        <h2 className="text-2xl font-bold ml-4 pt-1">{item.title}</h2>
                    </div>
                    <hr className="w-75 h-1 mx-auto my-5 bg-[#3D3C6A] border-0 rounded"/>
                    <p>{item.description}</p>
                </div>
            </div>
        ))}
        </div>
    );
};

const WhyUs = () => {
    return(
        <div className = "items-center flex flex-col text-white font-minecraft py-20">
            <img 
                src={WhyUsSign} 
                alt='WhyUsSign'
                className = "max-w-md"
            />

            <WhySection data={whyUs[0]} reverse = {true}/>

            <img 
                src={FelizPlatformPNG} 
                alt='FelizPlatformPNG'
                className = "max-w-md"
            />
            <div className = "mb-20 items-center flex flex-col">
                <h1 className = "text-2xl">Questions?</h1>
                <br/>
                <p className = "text-2xl">We welcome any questions or</p>
                <p className = "text-2xl">special requests. Please email us at</p>
                <h1 className = "font-misterpixel font-normal py-10 text-3xl">contact@bostonhacks.io</h1>
                <br/>
            </div>
            
        </div>
    )
}

export default WhyUs