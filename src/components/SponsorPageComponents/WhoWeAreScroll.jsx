import Scroll from '../../assets/images/SponsorPage/WhoWeAreScroll.png';

const WhoWeAreScroll = () => {
    return (
        <div className='justify-center flex relative'>
            <img
                className="WhoWeAreScroll"
                src={Scroll}
                alt="WhoWeAreScroll"
            />
            <div className='absolute w-[614px] h-[350px] text-xl text-center font-misterpixel text-[#965340] mt-[235px] mr-[114.8px] ml-[122px] mb-[187.32px]'>
                <p>BostonHacks brings together over 100 students for an exhilarating 36 hours to build awesome projects. In our past events, students had meaningful interactions with mentors, peers, and sponsors.<br />
                <br />
                A hackathon would be incomplete without new technology, advice, and ideas our sponsors offer, and we'd be eager to have you join us this coming fall!<br/>
                <br />
                BostonHacks Fall 2023 will run in-person November 18-19 2023. Now sponsors will have the opportunity to connect with talented hackers all across the world. At BostonHacks, we thrive to provide a comprehensive recruiting and branding experience to our sponsors.<br/>
                Here's what your company can do at our event.
                </p>
            </div>
            
      </div>
    );
  };
  
  export default WhoWeAreScroll;
  