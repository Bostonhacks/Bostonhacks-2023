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
      question: 'Question that is asking you anything',
      answer:
        'This is an answer to anything you want in the world but it just needs to go past a couple of lines so I can test how the text wraps.',
    },
    {
      question: 'Question that is asking you anything',
      answer: 'Answer 2',
    },
    {
      question: 'Question that is asking you anything',
      answer: 'Answer 3',
    },
  ],
  [
    {
      question: 'Question that is asking you anything',
      answer: 'Answer 1',
    },
    {
      question: 'Question that is asking you anything',
      answer: 'Answer 2',
    },
    {
      question: 'Question that is asking you anything',
      answer: 'Answer 3',
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
      <div className='flex justify-end md:hidden mt-10'>
        <img src={chestIsland} alt="chestIsland" className='h-64'/>
      </div>
    <section
      id="faq"
      className="w-full flex flex-col items-center justify-center text-text-primary px-5 my-[10rem]"
      >
      <div className="relative flex items-center justify-center md:h-[132px] md:w-[431px] h-[57px] w-[186px]">
        <h2 className="z-50 text-center relative md:text-5xl text-4xl pb-1">
          FAQ
        </h2>
        <img className="z-20 absolute" src={faq_title} alt="FAQ Button" />
        <img src={faqMiddleCloud} alt="clouds" className='absolute bottom-20 left-60 max-md:left-20 max-md:-top-20'/>
        <div className='overflow-hidden'>
        </div>
      </div>
      {/* <div className="mt-[5rem] w-full flex flex-1 flex-col justify-between md:flex-row"> */}
        <img src={faqLeftCloud} alt="clouds" className='absolute z-10 left-0 max-sm:hidden'/>
        <img src={faqRightCloud} alt="clouds" className='absolute z-10 right-0 max-sm:hidden'/>
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
