import React from 'react'
import FaceBox from "../../assets/images/FacesetBox.png";
import FelizPic from "../../assets/images/felix.png"
import DialogBox from "../../assets/images/DialogBoxFull.png"

const Feliz = () => {
  return (
    <div className="flex flex-wrap justify-center items-center">
        <div className="relative">
            <img className="z-10 absolute top-[30px] left-[15px]" src={FelizPic} />
            <img className="object-cover" src={FaceBox}/>
        </div>

        <div className="relative mb-[40px]">
            <p className="z-50 top-[5%] left-[50px] absolute">The rest of the text</p>
            <img className="z-20 block object-cover ml-5" src={DialogBox} />
            <p className="z-50 left-[50px] bottom-[10%] absolute">A lot more text goes here and stuff</p>
        </div>

    </div>
  )
}

export default Feliz