import { useState } from 'react';
import InitialButtonState from '../../assets/images/ApplicationPage/RegisterButton1.svg';
import HoverButtonState from '../../assets/images/ApplicationPage/RegisterButton2.svg';
import ClickedButtonState from '../../assets/images/ApplicationPage/RegisterButton3.svg';

const RegisterButton = ({ handleClick }) => {
  const [image, setImage] = useState(InitialButtonState);

  return (
    <div className="justify-center flex mt-auto z-50 max-sm:scale-75">
      <button className="z-50">
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

export default RegisterButton;
