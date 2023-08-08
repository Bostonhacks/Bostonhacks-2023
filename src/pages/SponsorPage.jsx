import TitleSign from '../components/SponsorPageComponents/BostonhacksSign';
import WhoWeAreScroll from '../components/SponsorPageComponents/WhoWeAreScroll';
import SponsorButton from '../components/SponsorPageComponents/SponsorButton';
import NatureBackground from '../components/SponsorPageComponents/NatureBackground';
import PerksMoneyTitle from '../components/SponsorPageComponents/PerksMoneyTitle';

const SponsorPage = () => {
  return (<div className='w-full h-100% bg-auto bg-sponsor_background flex flex-col relative'>
    <NatureBackground />
    <div className='left-0 right-0 absolute'>
      <div className='flex flex-col space-y-[28.2px]'>
        <TitleSign />
        <div className='w-full justify-center flex'>
          <h1 className='text-4xl text-white font-minecraft text-center'>SPONSOR<br/>INFORMATION</h1>
        </div>
      </div>
      <SponsorButton />
      <div className='mt-[209px] items-center flex-col flex'>
        <h1 className='text-white font-minecraft text-center text-[25.6px]/[32px] tracking-[0.1em]'>
          "BOSTONHACKS IS<br/>CONSISTENTLY ONE OF THE<br/>BEST [HACKATHONS] THAT<br/>I CONTINUE TO SPONSOR<br/>YEAR AFTER YEAR."
        </h1>
        <h2 className='text-white text-[19.2] text-center font-ft88 text-left mt-4'>
          SAM ANGNEW, TWILIO
        </h2>
      </div>
    </div>
    <WhoWeAreScroll />
    <PerksMoneyTitle perkAmount={1500} subHeading={"Sneak Peek"}/>
  </div>);
};

export default SponsorPage;
