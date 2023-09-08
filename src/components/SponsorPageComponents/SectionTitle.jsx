import { ReactComponent as SponsorFAQ } from '../../assets/images/TitleBG.svg';
import ReviewSparkle from '../../assets/images/SponsorPage/ReviewSparkle.svg';


const SectionTitle = ({ extraStyling, text, ID, showSparkle }) => {
  return (
    <div
      className={`relative justify-center flex flex-col items-center ${extraStyling}`}
      id={ID}
    >
      <SponsorFAQ className="w-3/5 lg:w-auto"/>
      <div className="absolute inset-x-0 justify-center flex">
        <h1 className="text-[30px]/[70px] lg:text-[48px]/[70px] font-misterpixel text-white">
          {text}
        </h1>
      </div>
      {showSparkle ? <img src={ReviewSparkle} className='absolute w-[14vw] lg:w-auto mr-[70vw] lg:mr-[30vw] ml-auto -bottom-4 lg:-bottom-12'/> : <div/> }
    </div>
  );
};

export default SectionTitle;
