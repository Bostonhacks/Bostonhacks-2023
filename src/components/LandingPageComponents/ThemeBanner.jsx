import React from 'react'
import Star from '../../assets/images/star.png';

const ThemeBanner = () => {
  return (
    <div className="flex justify-around flex-row items-center mx-5 my-[10rem] lg:mx-[20%] font-misterpixel">
        <img alt="star" className="mb-[5rem] w-[45x] h-[45px] lg:w-[95x] lg:h-[95px]" src={Star}/>

        <div className="flex flex-col items-center justify-center">

            <div className="my-[35px] justify-around items-center w-full flex text-lg leading-[1.2rem] lg:text-[40px] lg:leading-[40px]">
                <span className="border-y-4 border-text-primary">THEME</span>
                <span className="border-y-4 border-text-primary">OF</span>
                <span className="border-y-4 border-text-primary">THE</span>
                <span className="border-y-4 border-text-primary">YEAR</span>
            </div>

            <div className="grid grid-rows-2 grid-cols-3 text-5xl text-center gap-x-4 lg:text-[80px] lg:leading-[90px]">
                {/* replace each h1 with a small component of the image under the text */}
                <h1 className="row-span-1 col-span-3">CHRONICLES</h1>
                <h1 className="col-span-1">OF</h1>
                <h1 className="col-span-2">CODING</h1>      
            </div>

            </div>
 
        <img alt="star" className="mt-[5rem] w-[45x] h-[45px] lg:w-[95x] lg:h-[95px]" src={Star}  />
    </div>
  )
}

export default ThemeBanner