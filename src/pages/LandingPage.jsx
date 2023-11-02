import FAQ from '../components/LandingPageComponents/FAQ';
import Feliz from '../components/LandingPageComponents/Feliz';
import ThemeBanner from '../components/LandingPageComponents/ThemeBanner';
import Title from '../components/LandingPageComponents/Title';
import Footer from '../components/common/Footer';
import LandingNav from '../components/LandingPageComponents/LandingNav';
import SponsorButton from '../components/SponsorPageComponents/SponsorButton';
import NatureBG from '../components/LandingPageComponents/NatureBG';
import TrackModals from '../components/LandingPageComponents/TrackModals';
import Schedule from '../components/LandingPageComponents/Schedule';
import Sponsor from '../components/LandingPageComponents/Sponsor';
import LoginButton from '../components/LandingPageComponents/LoginButton';
import MentorApply from '../components/LandingPageComponents/MentorApply';

const LandingPage = () => {
  return (
    <div
      className="font-misterpixel"
      style={{
        background:
          'linear-gradient(180deg, #15011F 0%, #240732 24.91%, #070C36 39.22%, #0D3166 56.01%, #1B7BD8 75.57%, #85BAEE 90.34%, #FFFFFF 98.65%)',
      }}
    >
      <a
        id="mlh-trust-badge"
        className="z-50 absolute w-[10vw] left-[75px] lg:w-[100px] lg:left-[75px] top-0"
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=white"
      >
        <img
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg"
          alt="Major League Hacking 2024 Hackathon Season"
        />
      </a>
      <MentorApply />
      <NatureBG />
      <LandingNav />
      <Title />
      <LoginButton />
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
      <Feliz>Thanks to all the sponsors for making this event possible!</Feliz>
      <Sponsor />
      <Footer />
    </div>
  );
};

export default LandingPage;
