import TitleSign from '../components/SponsorPageComponents/BostonhacksSign';
import WhoWeAreScroll from '../components/SponsorPageComponents/WhoWeAreScroll';

const SponsorPage = () => {
  return <div className='w-full h-100% bg-auto bg-sponsor_background flex flex-col'>
    <TitleSign />
    <div className='w-full justify-center flex'>
      <h1 className='text-4xl text-white font-misterpixel text-center'>SPONSOR<br/>INFORMATION</h1>
    </div>
    <WhoWeAreScroll />
  </div>;
};

export default SponsorPage;
