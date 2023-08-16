import FAQ from '../components/LandingPageComponents/FAQ';
import Feliz from '../components/LandingPageComponents/Feliz';
import ThemeBanner from '../components/LandingPageComponents/ThemeBanner';
import Title from '../components/LandingPageComponents/Title';
import Footer from '../components/common/Footer';
const LandingPage = () => {
  return (
    <div className="font-misterpixel">
      <div className="text-[4rem]">Landing Page</div>
      <Feliz>
        Hi! Welcome to the BostonHacks Land! Let me walk you through as you
        scroll!
      </Feliz>
      <ThemeBanner />
      <Feliz>
        We have <span className="font-ft88b">three</span> special tracks this
        year waiting for you and your team to explore!
      </Feliz>
      <div>
        <Title />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
