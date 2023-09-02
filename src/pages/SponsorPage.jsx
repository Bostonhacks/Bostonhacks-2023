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

const SponsorPage = () => {
  return (
    <div
      className="w-full h-100% bg-auto bg-sponsor_background flex flex-col relative"
      style={{
        background:
          'linear-gradient(180deg, #15011F 0%, #240732 24.91%, #070C36 39.22%, #0D3166 56.01%, #1B7BD8 75.57%, #85BAEE 90.34%, #FFFFFF 98.65%)',
      }}
    >
      <SponsorNav />
      <NatureBackground />
      <div className="left-0 right-0 absolute">
        <div className="flex flex-col space-y-[28.2px]">
          <TitleSign />
          <div className="w-full justify-center flex">
            <h1 className="text-4xl text-white font-minecraft text-center">
              SPONSOR
              <br />
              INFORMATION
            </h1>
          </div>
        </div>
        <SponsorButton />
        <div className="mt-60 items-center flex-col flex">
          <h1 className="text-white font-minecraft text-center text-[25.6px]/[32px] tracking-[0.1em]">
            "BOSTONHACKS IS
            <br />
            CONSISTENTLY ONE OF THE
            <br />
            BEST [HACKATHONS] THAT
            <br />I CONTINUE TO SPONSOR
            <br />
            YEAR AFTER YEAR."
          </h1>
          <h2 className="text-white text-[19.2] text-center font-ft88 text-left mt-4">
            SAM ANGNEW, TWILIO
          </h2>
        </div>
      </div>
      <PinkButton buttonText="WHO ARE WE" extraStyling="mt-[-180px]" />
      <WhoWeAreScroll />
      <PinkButton buttonText="WHY US?" extraStyling="mt-[200px]" />
      <WhyUs />
      <SectionTitle extraStyling={'mb-16'} text={'SPONSOR'} />
      <Perks />
      <div className="flex justify-center items-center space-x-12 mx-72 mt-24">
        <div className="flex flex-col justify-center">
          <h1 className="font-minecraft text-white text-lg font-bold mb-2">
            *General Email:
          </h1>
          <p className="font-minecraft text-white text-lg">
            Prior to the event, we’ll send out one email listing all of our
            sponsors and any prizes offered, and a short summary of each
            sponsor. If you’d like to email students directly, see the $5k and
            $7.5k tiers.
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="font-minecraft text-white text-lg font-bold mb-2">
            **Special Side Event:
          </h1>
          <p className="font-minecraft text-white text-lg">
            This can be a fun, non-hacking virtual challenge, e.g. giving out a
            puzzle to solve, a coding challenge, or asking attendees to send in
            a photo of themselves doing something fun. Or, you could also host a
            workshop on an API or technology you might want to present.
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="font-minecraft text-white text-lg font-bold mb-2">
            Early Bird:
          </h1>
          <p className="font-minecraft text-white text-lg">
            If your contribution is received by Aug 19th, 2022, we will display
            your company branding at public fall events such as the BU student
            activities fair (attended by thousands of BU students).
          </p>
        </div>
      </div>
      <SectionTitle extraStyling={'mb-16 mt-64'} text={'STATS'} />
      <Stats />
      <SectionTitle extraStyling={'mb-48'} text={'REVIEWS'} />
      <div className="mx-52">
        <div className="mb-56 pr-72">
          <h1 className="font-minecraft font-bold text-[22px] mb-[18px] text-white">
            Twilio: Sam Agnew
          </h1>
          <p className="font-minecraft text-[24px] text-white">
            “I go to a ton of hackathons and BostonHacks is consistently one of
            the best that I continue to sponsor year after year. At BostonHacks,
            you get the best hackers in both Boston and the Northeast at large.
            Without fail, the projects that come from these student developers
            are unique and awe-inspiring. I’m not really sure how the organizers
            manage to attract such talent, but it might be that good hackers
            flock to events that are well-run. But never mind all of that. The
            great food is the real reason to go to BostonHacks!”
          </p>
        </div>
        <div className="mb-56 pl-72 text-right">
          <h1 className="font-minecraft font-bold text-[22px] mb-[18px] text-white">
            ITG: Candace Mariso
          </h1>
          <p className="font-minecraft text-[24px] text-white">
            “ITG’s technical mentors had a great time at BostonHacks 2017. The
            organizers were responsive and accommodating, allowing us to focus
            on what really mattered—exchanging ideas, providing guidance and
            tackling challenges. We met dozens of talented students, resulting
            in several intern hires and top prospects for future programs. The
            high quality and innovative hacks made this a can’t-miss event for
            us.”
          </p>
        </div>
        <div className="mb-56 pr-72">
          <h1 className="font-minecraft font-bold text-[22px] mb-[18px] text-white">
            Cadence: Apurva Kalia
          </h1>
          <p className="font-minecraft text-[24px] text-white">
            “The energy was very infectious! It was great to see the young kids
            wrapping their minds around the given problems and come up with
            solutions by the end of the event. I was amazed at the talent.”
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SponsorPage;
