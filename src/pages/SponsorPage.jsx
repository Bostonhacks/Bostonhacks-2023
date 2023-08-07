import TitleSign from '../components/SponsorPageComponents/BostonhacksSign';
import WhoWeAreScroll from '../components/SponsorPageComponents/WhoWeAreScroll';
import SponsorButton from '../components/SponsorPageComponents/SponsorButton';

const SponsorPage = () => {
  return <div className='w-full h-100% bg-auto bg-sponsor_background flex flex-col'>
    <div className='flex flex-col space-y-[28.2px]'>
      <TitleSign />
      <div className='w-full justify-center flex'>
        <h1 className='text-4xl text-white font-minecraft text-center'>SPONSOR<br/>INFORMATION</h1>
      </div>
    </div>
    <SponsorButton />
    <WhoWeAreScroll />
  </div>;
};

export default SponsorPage;
