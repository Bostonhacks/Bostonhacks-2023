import React from 'react';
import sparkle from '../../../assets/images/SponsorPage/sparkle.png';
import btnBackground from '../../../assets/images/SponsorPage/sponsor_pink_btn.svg';
import DoubleSparkleImage from '../../../assets/images/SponsorPage/DoubleSparkle.svg';

const PinkButton = ({ buttonText, extraStyling, doubleStarStyling}) => {

    const pinkBtnBackgroundStyle = {
        backgroundImage: `url(${btnBackground})`,
        backgroundSize: 'contain', 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        padding: '20px',
        display: 'flex',
        justifyContent: 'center'
    };
    
    return (
        <div className={`relative w-full justify-center items-center ${extraStyling}`} id='WhoWeAre'> 
            <img src={DoubleSparkleImage} className={`absolute right-0 -top-14 lg:top-28 transform scale-x-[-1] lg:scale-x-[1] w-[18vw] lg:w-auto ml-auto mr-[2vw] lg:mr-[3vw] ${doubleStarStyling}`}/>
            <div className="relative w-[73%] lg:w-1/3 mx-auto">
                <img src={sparkle} alt="Image" className="w-[42px] lg:w-auto absolute -top-10 left-0" />
                <div style={pinkBtnBackgroundStyle} className='h-[58px] lg:h-auto items-center'>
                    <h1 className='font-misterpixel text-white text-[30px]/[70px] lg:text-[3.5vw] leading-[4.2vw]'>
                        {buttonText}
                    </h1>
                </div>
            <img src={sparkle} alt="Image" className="w-[42px] lg:w-auto absolute right-0 -bottom-10"  />
            </div>
            <img src={DoubleSparkleImage} className={`absolute left-0 -bottom-10 lg:bottom-14 transform scale-x-[-1] lg:scale-x-[1] w-[18vw] lg:w-auto ml-[2vw] lg:ml-[9vw] mr-auto ${doubleStarStyling}`}/>
        </div>
    )
}

export default PinkButton;