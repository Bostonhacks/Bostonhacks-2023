import Scroll from '../../assets/images/SponsorPage/WhoWeAreScroll.png';
import ScrollMobile from '../../assets/images/SponsorPage/WhoWeAreScrollMobile.svg'

const WhoWeAreScroll = () => {
    return (
    <div className=''>
        <div className='justify-center flex relative'>
            <img
                className="min-[320px]:hidden lg:flex"
                src={Scroll}
                alt="WhoWeAreScroll"
            />
            <img
            className="flex lg:hidden"
            src={ScrollMobile}
            alt="WhoWeAreScrollMobile"
            />
            <div className='absolute text-center font-minecraft text-[#965340] text-[10px] text-[#965340] w-[214px] mt-[115px] leading-3 lg:w-[614px] lg:h-[350px] lg:text-xl/[24px] lg:mt-[235px] lg:mr-[114.8px] lg:ml-[122px] lg:mb-[187.32px] lg:leading-[24px]'>
                <p>BostonHacks brings together over 100 students for an exhilarating 36 hours to build awesome projects. In our past events, students had meaningful interactions with mentors, peers, and sponsors.<br />
                    <br />
                    A hackathon would be incomplete without new technology, advice, and ideas our sponsors offer, and we'd be eager to have you join us this coming fall!<br/>
                    <br />
                    BostonHacks Fall 2023 will run in-person November 18-19 2023. Now sponsors will have the opportunity to connect with talented hackers all across the world. At BostonHacks, we thrive to provide a comprehensive recruiting and branding experience to our sponsors.<br/>
                    Here's what your company can do at our event.
                </p>
            </div>  
         </div>
    </div>
    );
  };
  
  export default WhoWeAreScroll;
  