import { ReactComponent as SponsorFAQ } from '../../assets/images/TitleBG.svg';

const SectionTitle = ({ extraStyling, text, ID }) => {
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
    </div>
  );
};

export default SectionTitle;
