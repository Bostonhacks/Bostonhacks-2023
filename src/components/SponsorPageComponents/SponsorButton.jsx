import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InitialButtonState from '../../assets/images/SponsorPage/SponsorButtonState1.svg';
import HoverButtonState from '../../assets/images/SponsorPage/SponsorButtonState2.svg';
import ClickedButtonState from '../../assets/images/SponsorPage/SponsorButtonState3.svg';

const SponsorButton = () => {
  const [image, setImage] = useState(InitialButtonState);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/sponsor');
  };

  return (
    <div className="justify-center flex mt-auto z-50 max-sm:scale-75">
      <button className="z-50" onClick={handleClick}>
        <img
          src={image}
          onMouseOver={() => setImage(HoverButtonState)}
          onMouseLeave={() => setImage(InitialButtonState)}
          onMouseDown={() => setImage(ClickedButtonState)}
          onTouchStart={() => setImage(ClickedButtonState)}
          onMouseUp={() => setImage(HoverButtonState)}
          onTouchEnd={() => setImage(HoverButtonState)}
          onDragStart={(event) => event.preventDefault()}
        />
      </button>
    </div>
  );
};

export default SponsorButton;
