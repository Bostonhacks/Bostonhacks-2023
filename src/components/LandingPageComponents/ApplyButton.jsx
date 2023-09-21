import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InitialButtonState from '../../assets/images/LandingPage/ApplyButton1.svg';
import HoverButtonState from '../../assets/images/LandingPage/ApplyButton2.svg';
import ClickedButtonState from '../../assets/images/LandingPage/ApplyButton3.svg';

const ApplyButton = () => {
  const [image, setImage] = useState(InitialButtonState);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/application');
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

export default ApplyButton;
