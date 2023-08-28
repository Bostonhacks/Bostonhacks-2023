import FAQ from '../components/LandingPageComponents/FAQ';
import Feliz from '../components/LandingPageComponents/Feliz';
import ThemeBanner from '../components/LandingPageComponents/ThemeBanner';
import Title from '../components/LandingPageComponents/Title';
import Footer from '../components/common/Footer';
import LandingNav from '../components/LandingPageComponents/LandingNav';
import ApplyButton from "../components/LandingPageComponents/ApplyButton";
import SponsorButton from '../components/SponsorPageComponents/SponsorButton';
import NatureBG from '../components/LandingPageComponents/NatureBG';
import TrackModals from '../components/LandingPageComponents/TrackModals';
import Schedule from '../components/LandingPageComponents/Schedule';
import Sponsor from '../components/LandingPageComponents/Sponsor';

const LandingPage = () => {
  return (
    <div
      className="font-misterpixel"
      style={{
        background:
          'linear-gradient(180deg, #15011F 0%, #240732 24.91%, #070C36 39.22%, #0D3166 56.01%, #1B7BD8 75.57%, #85BAEE 90.34%, #FFFFFF 98.65%)',
      }}
    >
      <NatureBG />
      <LandingNav />
      <Title />
      <ApplyButton />
      <SponsorButton />
      <Feliz>
        Hi! Welcome to the BostonHacks Land! Let me walk you through as you
        scroll!
      </Feliz>
      <ThemeBanner />
      <Feliz>
        We have <span className="font-ft88b">three</span> special tracks this
        year waiting for you and your team to explore!
      </Feliz>
      <TrackModals />
      <FAQ />
      <Schedule />
      <Sponsor />
      <Footer />
    </div>
  );
};

export default LandingPage;
