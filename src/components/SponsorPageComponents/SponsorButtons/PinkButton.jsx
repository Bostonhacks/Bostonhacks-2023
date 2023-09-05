import React from 'react';
import sparkle from '../../../assets/images/SponsorPage/sparkle.png';
import btnBackground from '../../../assets/images/SponsorPage/sponsor_pink_btn.svg';

const PinkButton = ({ buttonText, extraStyling }) => {

    const pinkBtnBackgroundStyle = {
        backgroundImage: `url(${btnBackground})`,
        backgroundSize: 'contain', 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        padding: '16px',
        display: 'flex',
        justifyContent: 'center'
    };
    
    return (
        <div className={`relative w-full justify-center items-center ${extraStyling}`} id='WhoWeAre'>                
            <div className="relative w-[73%] lg:w-1/3 mx-auto">
                <img src={sparkle} alt="Image" className="w-[42px] lg:w-auto absolute -top-10 left-0" />
                <div style={pinkBtnBackgroundStyle} className='h-[58px] lg:h-auto items-center'>
                    <h1 className='font-misterpixel text-white text-[30px]/[70px] lg:text-[3vw] leading-[4.2vw]'>
                        {buttonText}
                    </h1>
                </div>
            <img src={sparkle} alt="Image" className="w-[42px] lg:w-auto absolute right-0 -bottom-10"  />
            </div>
        </div>
    )
}

export default PinkButton;