import { React, useState } from 'react';
import faq_title from '../../assets/images/TitleBG.svg';
import OpenChest from '../../assets/images/BigTreasureChest_Open.png';
import ClosedChest from '../../assets/images/BigTreasureChest_Closed.png';
import faqMiddleCloud from '../../assets/images/LandingPage/Background/cloud_faq_middle.svg';
import faqLeftCloud from '../../assets/images/LandingPage/Background/cloud_faq_left.svg';
import faqRightCloud from '../../assets/images/LandingPage/Background/cloud_faq_right.svg';
import chestIsland from '../../assets/images/LandingPage/Background/chestIsland.svg';
const faq = [
  [
    {
      question: 'What is BostonHacks',
      answer:
        'BostonHacks is a 24-hour event where students from different backgrounds gather together to use technology to create cool projects. Come to BostonHacks to expand your knowledge and skills, make new friends, win prizes and network with recruiters from our corporate sponsors!',
    },
    {
      question: 'When and where is BostonHacks?',
      answer:
        'BostonHacks is an in-person 24-hour hackathon on November 18-19th, 2023. It takes place in the Boston University George Sherman Union (GSU)',
    },
    {
      question: 'Who can attend?',
      answer:
        'All college students including undergraduate and graduate students with any background, all across the world are welcome!',
    },
    {
      question: 'Are there any rules?',
      answer:
        'We want to ensure a positive experience for all participants. We encourage you to read the MLH Code of Conduct.',
    },
  ],
  [
    {
      question: 'Do I need experience?',
      answer:
        'No experience is necessary. We will have plenty of mentros and resources available, along with several workshops targeted for beginners. Come learn and experience your first hackathon at BostonHacks!',
    },
    {
      question: 'Does it cost anything?',
      answer:
        "BostonHacks is 100% free. You don't have to spend a dime! Unfortunately, we won' be providing any travel reimbursements this year.",
    },
    {
      question: 'Can we form teams?',
      answer:
        "Of course you can! We encourage people to work in teams of up to four people. You may opt-in to team formation through our Discord Server which will match you with an ideal team. You can work along, but it won't be as fun :(",
    },
    {
      question: 'When does registration close?',
      answer: 'Registration closes on October 29th, 2023. Apply ASAP!',
    },
  ],
];

const Question = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    //setExpanded(!expanded);
    setAnimate(true);
    console.log('clicked');
  };
  return (
    <li
      className="px-3 hover:cursor-pointer border-text-primary flex flex-row py-5 group justify-between"
      onClick={handleClick}
    >
      <div className="flex flex-col mt-2">
        <h3 className="text-lg md:text-xl">{question}</h3>

        <div
          className={`pt-0 overflow-hidden transition-all duration-500 ease-in-out ${
            expanded ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <p className="mt-3">{answer}</p>
        </div>
      </div>
      <img
        src={expanded ? OpenChest : ClosedChest}
        alt="Closed Chest"
        className={`w-[48px] h-[41px] ${animate && 'animate-wiggle'}`}
        onAnimationEnd={() => {
          setExpanded(!expanded);
          setAnimate(false);
        }}
      />
    </li>
  );
};

const FAQColumn = ({ questionAnswers }) => {
  return (
    <div className="">
      <ul className="divide-y-4 md:border-y-4 border-t-4 border-text-primary">
        {questionAnswers.map((qa, index) => (
          <Question question={qa.question} answer={qa.answer} key={index} />
        ))}
      </ul>
    </div>
  );
};

const FAQ = () => {
  return (
    <div>
      <div className="flex justify-end md:hidden mt-10">
        <img src={chestIsland} alt="chestIsland" className="h-64" />
      </div>
      <section
        id="faq"
        className="w-full flex flex-col items-center justify-center text-text-primary px-5 my-[10rem] mt-80 max-sm:mt-0"
      >
        <div className="relative flex items-center justify-center md:h-[132px] md:w-[431px] h-[57px] w-[186px]">
          <h2 className="z-50 text-center relative md:text-5xl text-3xl pb-1">
            FAQ
          </h2>
          <img className="z-20 absolute" src={faq_title} alt="FAQ Button" />
          <img
            src={faqMiddleCloud}
            alt="clouds"
            className="absolute bottom-20 left-60 max-md:left-20 max-md:-top-20"
          />
          <div className="overflow-hidden"></div>
        </div>
        {/* <div className="mt-[5rem] w-full flex flex-1 flex-col justify-between md:flex-row"> */}

        <img
          src={faqLeftCloud}
          alt="clouds"
          className="absolute z-10 left-0 max-sm:hidden"
        />
        <img
          src={faqRightCloud}
          alt="clouds"
          className="absolute z-10 right-0 max-sm:hidden"
        />

        <div className="mt-[5rem] w-full grid md:grid-cols-2 grid-cols-1 gap-x-[5rem] z-20 lg:gap-x-[10rem] md:px-[5rem]">
          <FAQColumn questionAnswers={faq[0]} />
          <FAQColumn questionAnswers={faq[1]} />

          {/* for some reason doing "hidden md:grid" doesn't work so this is the work around */}
          <div className="border-b-4 border-text-primary md:hidden" />
        </div>
      </section>
    </div>
  );
};

export default FAQ;
