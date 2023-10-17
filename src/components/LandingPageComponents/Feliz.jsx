import React from 'react';
import FelizPic from '../../assets/images/FelizBox.png';
import DialogBox from '../../assets/images/DialogBoxFull.png';

const Feliz = ({ children }) => {
  return (
    <div className="flex px-10 lg:px-[20%] xl:px-[25%] w-full h-full place-content-center max-sm:mt-0 max-sm:p-10 mt-80 p-40">
      <div className="relative flex items-end justify-center">
        <img className="object-cover" src={FelizPic} />
      </div>

      <div className="relative font-ft88">
        {/* <p className="z-50 text-text-primary leading-[1rem] text-xs md:text-2xl left-[35px] absolute">
          FELIZ
        </p> */}
        <p className="md:pl-2 text-text-secondary pb-2 pr-2 z-50 leading-[0.7rem] text-[10px] md:text-lg left-[2.3rem] top-[27%] break-normal absolute">
          {children}
        </p>
        <img className="z-20 block object-cover ml-5" src={DialogBox} />
      </div>
    </div>
  );
};

export default Feliz;
