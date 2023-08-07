import FAQ from "../components/LandingPageComponents/FAQ"
import CountDownTimer from "../components/CountdownTimerComponent/CountDownTimer"

const LandingPage = () => {
  return (
    <div className="font-misterpixel">
      <div className="text-[10rem]">
        LandingPage
      </div>

      <div>
        <FAQ />
        <CountDownTimer/>
      </div>
    </div>
    
  )
};

export default LandingPage