import Scroll from '../../assets/images/SponsorPage/WhoWeAreScroll.png';
import ScrollMobile from '../../assets/images/SponsorPage/WhoWeAreScrollMobile.svg'

const WhoWeAreScroll = () => {
    return (
    <div className='lg:scale-100 md:scale-[80%]'>
        <div className='justify-center flex relative z-10'>
            <img
                className="min-[320px]:hidden md:flex z-10"
                src={Scroll}
                alt="WhoWeAreScroll"
            />
            <img
            className="flex md:hidden z-10"
            src={ScrollMobile}
            alt="WhoWeAreScrollMobile"
            />
            <div className='absolute text-center font-minecraft text-[#965340] text-[10px] text-[#965340] w-[214px] mt-[115px] leading-3 md:w-[614px] md:h-[350px] md:text-xl/[24px] md:mt-[26vw] lg:mt-[235px] md:mr-[114.8px] md:ml-[122px] md:mb-[187.32px] md:leading-[24px] z-10'>
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
  