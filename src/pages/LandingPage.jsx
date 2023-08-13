
import Title from '../components/LandingPageComponents/Title';
import FAQ from '../components/LandingPageComponents/FAQ';
import Footer from '../components/common/Footer';
const LandingPage = () => {
  return (
    <div className="font-misterpixel">
      <div className="text-[10rem]">Landing Page</div>
      <div>
        <Title />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
