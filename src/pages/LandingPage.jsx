import Title from '../components/LandingPageComponents/Title';
import FAQ from '../components/LandingPageComponents/FAQ';
import CountDownTimer from '../components/CountdownTimerComponent/CountDownTimer';

const LandingPage = () => {
  return (
    <div className="font-misterpixel">
      <div className="text-[10rem]">Landing Page</div>

      <div>
        <Title />
        <FAQ />
        <CountDownTimer />
      </div>
    </div>
  );
};

export default LandingPage;
