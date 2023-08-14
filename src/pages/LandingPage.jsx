import FAQ from '../components/LandingPageComponents/FAQ';
import Feliz from '../components/LandingPageComponents/Feliz';
import ThemeBanner from '../components/LandingPageComponents/ThemeBanner';

const LandingPage = () => {
  return (
    <div className="font-misterpixel">
      <div className="text-[4rem]">Landing Page</div>
      <Feliz />
      <ThemeBanner />
      <div>
        <FAQ />
      </div>

    </div>
  );
};

export default LandingPage;
