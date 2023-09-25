import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import InitialButtonState from '../../assets/images/SponsorPage/SponsorButtonState1.svg';
import HoverButtonState from '../../assets/images/SponsorPage/SponsorButtonState2.svg';
import ClickedButtonState from '../../assets/images/SponsorPage/SponsorButtonState3.svg';

const SponsorButton = () => {
  const [image, setImage] = useState(InitialButtonState);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname === '/sponsor') {
      window.location.href =
        'https://drive.google.com/file/d/1QXGi1T9DDUsQ0gbiHKvN5lo3pR0fJw2f/view?usp=sharing';
    } else {
      navigate('/sponsor');
    }
  };

  return (
    <div className="justify-center relative flex mt-auto z-50 max-sm:scale-75">
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
