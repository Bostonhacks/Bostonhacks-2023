import React from 'react';
import Star from '../../assets/images/star.png';
import LabelBack from '../../assets/images/BannerLabel.svg';
import LabelBack2 from '../../assets/images/BannerLabel_2.svg';
import LabelBack3 from '../../assets/images/BannerLabel_3.svg';

const Word = ({ children, image }) => {
  return (
    <div className="relative flex items-center justify-center">
      <h2 className="mb-3 md:m-5 md:mb-8 p-5 z-50 text-center relative pb-1">
        {children}
      </h2>
      <img className="absolute" src={image} />
    </div>
  );
};

const ThemeBanner = () => {
  return (
    <div className="flex justify-around flex-row items-center mx-3 my-[10rem] md:mx-[15%] font-misterpixel z-50">
      <img
        alt="star"
        className="mb-[5rem] z-[100000] w-auto h-[30px] md:w-[95x] md:h-[95px]"
        src={Star}
      />

      <div className="flex flex-col items-center justify-center z-50">
        <div className="my-[35px] flex-1 px-[2rem] justify-around items-center w-full flex text-lg leading-[1.2rem] md:text-[40px] md:leading-[40px] ">
          <span className="border-y-4 border-text-primary text-text-primary">
            THEME
          </span>
          <span className="border-y-4 border-text-primary text-text-primary">
            OF
          </span>
          <span className="border-y-4 border-text-primary text-text-primary">
            THE
          </span>
          <span className="border-y-4 border-text-primary text-text-primary">
            YEAR
          </span>
        </div>

        <div className="grid grid-rows-2 grid-cols-3 text-center text-4xl gap-x-4 top-[30px] md:text-[70px] md:leading-[90px]">
          {/* replace each h1 with a small component of the image under the text */}
          <span className="row-span-1 col-span-3 text-text-primary">
            <Word image={LabelBack}>CHRONICLES</Word>
          </span>
          <span className="col-span-1 text-text-primary">
            <Word image={LabelBack2}>OF</Word>
          </span>
          <span className="col-span-2 text-text-primary">
            <Word image={LabelBack3}>CODING</Word>
          </span>
        </div>
      </div>

      <img
        alt="star"
        className="mt-[10rem] z-[100000] md:mt-[15rem] w-[30x] h-[30px] md:w-[95x] md:h-[95px]"
        src={Star}
      />
    </div>
  );
};

export default ThemeBanner;
