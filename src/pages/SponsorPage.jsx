import TitleSign from '../components/SponsorPageComponents/BostonhacksSign';
import WhoWeAreScroll from '../components/SponsorPageComponents/WhoWeAreScroll';
import SponsorButton from '../components/SponsorPageComponents/SponsorButton';
import NatureBackground from '../components/SponsorPageComponents/NatureBackground';
import Perks from '../components/SponsorPageComponents/Perks';
import SectionTitle from '../components/SponsorPageComponents/SectionTitle';
import Stats from '../components/SponsorPageComponents/Stats';
import Footer from '../components/common/Footer';
import SponsorNav from '../components/SponsorPageComponents/SponsorNav';
import PinkButton from '../components/SponsorPageComponents/SponsorButtons/PinkButton';
import WhyUs from '../components/SponsorPageComponents/WhyUs';
import Reviews from '../components/SponsorPageComponents/Reviews';

const SponsorPage = () => {
  return (
    <div
      className="w-full h-100% bg-auto bg-sponsor_background flex flex-col relative overflow-x-hidden"
      style={{
        background:
          'linear-gradient(180deg, #15011F 0%, #240732 24.91%, #070C36 39.22%, #0D3166 56.01%, #1B7BD8 75.57%, #85BAEE 90.34%, #FFFFFF 98.65%)',
      }}
    >
      <SponsorNav />
      <NatureBackground />
      <div className="z-10">
        <div className="flex flex-col lg:space-y-[28.2px]">
          <TitleSign />
          <div className="w-full justify-center flex mt-3.5 lg:mt-0">
            <h1 className="text-3xl lg:text-4xl text-white font-minecraft text-center">
              SPONSOR
              <br />
              INFORMATION
            </h1>
          </div>
        </div>
        <SponsorButton />
        <div className="mt-44 lg:mt-60 items-center flex-col flex mb-80 lg:mb-[426px]">
          <h1 className="text-white font-minecraft text-center text-base/[20px] lg:text-[25.6px]/[32px] tracking-[0.1em]">
            "BOSTONHACKS IS
            <br />
            CONSISTENTLY ONE OF THE
            <br />
            BEST [HACKATHONS] THAT
            <br />I CONTINUE TO SPONSOR
            <br />
            YEAR AFTER YEAR."
          </h1>
          <h2 className="text-white text-xs lg:text-[19.2px] text-center font-ft88 text-left mt-4">
            SAM ANGNEW, TWILIO
          </h2>
        </div>
      </div>
      <PinkButton buttonText="WHO ARE WE?" extraStyling="mb-12 lg:mb-0" />
      <WhoWeAreScroll />
      <PinkButton buttonText="WHY US?" extraStyling="mt-[105px] lg:mt-[200px]" />
      <WhyUs />
      <SectionTitle extraStyling={'mb-16 mt-14 lg:mt-0'} text={'SPONSOR'} ID="Sponsor"/>
      <Perks />
      <SectionTitle extraStyling={'mb-16 lg:-mt-4'} text={'STATS'} ID="Stats" />
      <Stats />
      <SectionTitle extraStyling={'mb-16 lg:mb-48'} text={'REVIEWS'} ID="Reviews" />
      <Reviews />
      <Footer />
    </div>
  );
};

export default SponsorPage;
