import React from 'react';
import { useNavigate } from 'react-router-dom';
import ApplyButtonSVG from "../../assets/images/applyButton.svg";

const ApplyButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/application');
  };

  return (
    <div className="justify-center flex mt-[27.8px] z-50">
        <button onClick={handleClick}>
            <img
                width="121px"
                height="63px"
                src={ApplyButtonSVG}
            />
        </button>
    </div>
  );
};

export default ApplyButton;
