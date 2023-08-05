import React from 'react'
import faq_title from '../../assets/faq_title.svg'

const faq = [
  [
    { 
      question: "Question that is asking you anything",
      answer: "Answer 1"
    },
    { 
      question: "Question 2",
      answer: "Answer 2"
    },
    { 
      question: "Question 3",
      answer: "Answer 3"
    },
  ],
  [
    { 
      question: "Question 1",
      answer: "Answer 1"
    },
    { 
      question: "Question 2",
      answer: "Answer 2"
    },
    { 
      question: "Question 3",
      answer: "Answer 3"
    },
  ]

]

const FAQColumn = ({ questionAnswers }) => {
  const handleClick = () => {
    console.log("clicked")
  }
  return (
    <div className="">
      <ul className="flex flex-col gap-2 text-center">
        {
          questionAnswers.map((qa, index) => (
            <li className="px-3 hover:cursor-pointer" onClick={handleClick} key={index}>
              <h3 className="text-xl">{qa.question}</h3>
              <p className="text-md">{qa.answer}</p>
            </li>
          ))
        }
      </ul>
      
    </div>
  )
}

const FAQ = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div className="relative">
        <h2 className="z-50 text-center absolute left-[8.4rem] top-[1.5rem] text-5xl">FAQ</h2>
        <img className="z-20" src={faq_title} alt="FAQ Button"/>
      </div>
      <div className="mt-[5rem] w-full flex flex-1 flex-col justify-between md:flex-row">
        <FAQColumn questionAnswers={faq[0]}/>
        <FAQColumn questionAnswers={faq[1]}/>
      </div>
    </section>
  )
}

export default FAQ