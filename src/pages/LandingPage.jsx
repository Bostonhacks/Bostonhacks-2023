import FAQ from '../components/LandingPageComponents/FAQ';
import Title from '../components/LandingPageComponents/Title';

const LandingPage = () => {
  return (
    <div className="font-misterpixel">
      <div className="text-[10rem]">Landing Page</div>

      <div>
        <Title />
        <FAQ />
      </div>
    </div>
  );
};

export default LandingPage;
