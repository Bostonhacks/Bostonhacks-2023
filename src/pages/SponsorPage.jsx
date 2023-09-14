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
      className="bg-auto bg-sponsor_background bg-no-repeat lg:bg-cover flex flex-col relative overflow-x-hidden"
      // style={{
      //   background:
      //     'linear-gradient(180deg, #15011F 0%, #240732 24.91%, #070C36 39.22%, #0D3166 56.01%, #1B7BD8 75.57%, #85BAEE 90.34%, #FFFFFF 98.65%)',
      // }}
    >
      <SponsorNav />
      <NatureBackground />
      <PinkButton buttonText="WHO ARE WE?" extraStyling="mb-12 lg:mb-0 z-10" />
      <WhoWeAreScroll />
      <PinkButton buttonText="WHY US?" extraStyling="mt-[105px] lg:mt-[200px] z-10" doubleStarStyling={'lg:hidden'}/>
      <WhyUs />
      <SectionTitle extraStyling={'mb-16 mt-14 lg:mt-0 z-10'} text={'SPONSOR'} ID="Sponsor"/>
      <Perks />
      <SectionTitle extraStyling={'mb-16 lg:-mt-4 z-10'} text={'STATS'} ID="Stats" />
      <Stats />
      <SectionTitle extraStyling={'mb-16 lg:mb-48 z-10'} text={'REVIEWS'} ID="Reviews" showSparkle={true}/>
      <Reviews />
      <SponsorButton />
      <Footer />
    </div>
  );
};

export default SponsorPage;
