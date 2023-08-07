import React, { useState } from "react";

import InitialButtonState from '../../assets/images/SponsorPage/SponsorButtonState1.svg'
import HoverButtonState from '../../assets/images/SponsorPage/SponsorButtonState2.svg'
import ClickedButtonState from '../../assets/images/SponsorPage/SponsorButtonState3.svg'


const SponsorButton = () => {

    const [image, setImage] = useState(InitialButtonState);

    const handleClick = () => {
        console.log('hi');
    }

    return (
      <div className='justify-center flex mt-[27.8px]'>
        <button 
            onClick={handleClick}
        > 
            <img
            src={image}
            onMouseOver={() => setImage(HoverButtonState)}
            onMouseLeave={() => setImage(InitialButtonState)}
            onMouseDown={() => setImage(ClickedButtonState)}
            onMouseUp={() => setImage(HoverButtonState)}
            onDragStart={(event)=> event.preventDefault()}
        />
        </button>
      </div>
    );
  };
  
  export default SponsorButton;