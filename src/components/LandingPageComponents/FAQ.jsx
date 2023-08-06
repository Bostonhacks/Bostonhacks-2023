import { React, useState } from 'react'
import faq_title from '../../assets/images/faq_title.svg'
import OpenChest from "../../assets/images/BigTreasureChest_Open.png";
import ClosedChest from "../../assets/images/BigTreasureChest_Closed.png";

const faq = [
  [
    { 
      question: "Question that is asking you anything",
      answer: "This is an answer to anything you want in the world but it just needs to go past a couple of lines so I can test how the text wraps."
    },
    { 
      question: "Question that is asking you anything",
      answer: "Answer 2"
    },
    { 
      question: "Question that is asking you anything",
      answer: "Answer 3"
    },
  ],
  [
    { 
      question: "Question that is asking you anything",
      answer: "Answer 1"
    },
    { 
      question: "Question that is asking you anything",
      answer: "Answer 2"
    },
    { 
      question: "Question that is asking you anything",
      answer: "Answer 3"
    },
  ]

]

const Question = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
    console.log("clicked")
  }
  return (
    <li className="px-3 hover:cursor-pointer border-text-primary flex flex-row py-5" onClick={handleClick}>
      <img src={expanded ? OpenChest : ClosedChest} alt="Closed Chest" className="w-[48px] h-[41px] mr-10" />
      <div className="flex flex-col mt-2">
        <h3 className="text-xl">{ question }</h3>

        <div className={`pt-0 overflow-hidden transition-all duration-300 ease-in-out ${expanded ? "max-h-screen" : "max-h-0"}`}>
          <p className='mt-3'>{ answer }</p>
        </div>
        
      </div>

      
    </li>
  )

}

const FAQColumn = ({ questionAnswers }) => {


  return (
    <div className="">
      <ul className="divide-y-4 md:border-y-4 border-t-4 border-text-primary">
        {
          questionAnswers.map((qa, index) => (
            <Question question={qa.question} answer={qa.answer} key={index}/>
          ))
        }
      </ul>
    </div>
  )
}

const FAQ = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center text-text-primary">
      <div className="relative flex items-center justify-center md:h-[132px] md:w-[431px] h-[57px] w-[186px]">
        <h2 className="z-50 text-center relative md:text-5xl text-4xl pb-1">FAQ</h2>
        <img className="z-20 absolute" src={faq_title} alt="FAQ Button"/>
      </div>
      {/* <div className="mt-[5rem] w-full flex flex-1 flex-col justify-between md:flex-row"> */}
      <div className="mt-[5rem] w-full grid md:grid-cols-2 grid-cols-1 gap-x-[5rem] lg:gap-x-[10rem] md:px-[5rem] ">
        <FAQColumn questionAnswers={faq[0]}/>
        <FAQColumn questionAnswers={faq[1]}/>

        {/* for some reason doing "hidden md:grid" doesn't work so this is the work around */}
        <div className='border-b-4 border-text-primary md:hidden' /> 
      </div>
    </section>
  )
}

export default FAQ