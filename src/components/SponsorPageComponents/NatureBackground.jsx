import Background from '../../assets/images/SponsorPage/NatureBackground.svg';
import BackgroundWithText from '../../assets/images/SponsorPage/NatureBackgroundWithText.svg';
import BackgroundMobile from '../../assets/images/SponsorPage/NatureBackgroundgMobile.svg';
import BackgroundWithTextMobile from '../../assets/images/SponsorPage/NatureBackgroundWithTextMobile.svg';

import TitleSign from '../../components/SponsorPageComponents/BostonhacksSign';
import SponsorButton from '../../components/SponsorPageComponents/SponsorButton';

import TreeSVG from '../../assets/images/SponsorPage/Tree.svg';

const NatureBackground = () => {
    return (
        <div className='z-0 xl:w-auto w-full -mt-28 lg:-mt-[74px] relative'>
            <img
                className="min-[320px]:hidden lg:flex w-full object-fill"
                src={Background}
                alt="NatureBackground"
                onDragStart={(event)=> event.preventDefault()}
            />
            <img
                className="lg:hidden object-fill w-full"
                src={BackgroundMobile}
                alt="NatureBackgroundMobile"
                onDragStart={(event)=> event.preventDefault()}
            />
            <div className='absolute right-0 bottom-24 lg:bottom-0 w-2/5 lg:w-auto z-0'>
                <img
                className="Tree"
                src={TreeSVG}
                alt="Tree"
                onDragStart={(event)=> event.preventDefault()}
                />
            </div>
            
            <div className="z-10 absolute top-[7%] lg:top-[4%] right-0 left-0">
                <div className="flex flex-col lg:space-y-[28.2px]">
                <TitleSign />
                <div className="w-full justify-center flex mt-3.5 lg:mt-0">
                    <h1 className="text-3xl lg:text-4xl text-white font-minecraft text-center">
                    SPONSOR
                    <br />
                    INFORMATION
                    </h1>
                </div>
                </div>
                <SponsorButton />
            </div>
            <div className="absolute mt-44 lg:mt-60 items-center flex-col flex mb-[75vw] lg:mb-[30vw] z-10 lg:bottom-[16vw] bottom-[42vw] md:bottom-[50vw] right-0 left-0">
                    <h1 className="text-white font-minecraft text-center text-base/[20px] md:text-[25.6px]/[32px] tracking-[0.1em]">
                        "BOSTONHACKS IS
                        <br />
                        CONSISTENTLY ONE OF THE
                        <br />
                        BEST [HACKATHONS] THAT
                        <br />I CONTINUE TO SPONSOR
                        <br />
                        YEAR AFTER YEAR."
                    </h1>
                    <h2 className="text-white text-xs md:text-[19.2px] text-center font-ft88 text-left mt-4">
                        SAM ANGNEW, TWILIO
                    </h2>
            </div>
        </div>
        
      );
}

export default NatureBackground;