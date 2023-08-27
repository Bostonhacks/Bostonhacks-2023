import { useState } from 'react';

import WhyUsSign from '../../assets/images/SponsorPage/WhyUsSign.svg'
import OpenChest from '../../assets/images/BigTreasureChest_Open.png';
import ClosedChest from '../../assets/images/BigTreasureChest_Closed.png';
const whyUs = [
    [
        {
            title: 'Connect',
            description:
            'Give your API or product a test run before sending it out into the world. Show off a great framework or platform before it hits the market. Students are the ideal target for new tech. They will eagerly push your product to its limits, as well as offer suggestions on it and look to you for support.',
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

    const [expanded, setExpanded] = useState(false);
    const [animate, setAnimate] = useState(false);

    const handleClick = () => {
        //setExpanded(!expanded);
        setAnimate(true);
        console.log('clicked');
    };
    return (
        <div className="flex flex-col space-y-4 py-5 font-minecraft">
        {data.map((item, index) => (
            <div
            key={index} 
            className={`flex items-center p-4 ${ index % 2 === 1 ? 'flex-row-reverse' : ''}`}
            >
            <div className={`flex-shrink-0 w-1/2`}>
                <img
                    src={expanded ? OpenChest : ClosedChest}
                    alt="Closed Chest"
                    className={`w-[48px] h-[41px] ${animate && 'animate-wiggle'}`}
                    onAnimationEnd={() => {
                    setExpanded(!expanded);
                    setAnimate(false);
                    }}
                />
                <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                <p>{item.description}</p>
            </div>
            </div>
        ))}
        </div>
    );
};

const WhyUs = () => {
    return(
        <div className = "items-center flex flex-col text-white">
            <img 
                src={WhyUsSign} 
                alt='WhyUsSign'
                className = "max-w-md"
            />

            <WhySection data={whyUs[0]} reverse = {true}/>
            
        </div>
    )
}

export default WhyUs