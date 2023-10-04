import CoinGif from '../../assets/images/SponsorPage/PerksAssets/Coin2Preview.gif';
import { ReactComponent as SmallScroll } from '../../assets/images/SponsorPage/PerksAssets/SmallScroll.svg';
import { ReactComponent as MediumScroll } from '../../assets/images/SponsorPage/PerksAssets/MediumScroll.svg';
import { ReactComponent as BigScroll } from '../../assets/images/SponsorPage/PerksAssets/BigScroll.svg';
import { ReactComponent as ChooseButton } from '../../assets/images/SponsorPage/PerksAssets/ChooseButton.svg';
import CowLeftBlock from '../../assets/images/SponsorPage/CowLeftBlock.svg';

const PerksTitle = ({ perkAmount, subHeading }) => {
  return (
    <div className="justify-content-center items-center flex flex-col w-[333px]">
      <img className="h-[24px] w-[24px]" src={CoinGif} alt="coinGif" />
      {perkAmount > 500 ? (
        <h1 className="text-[26px]/[18.2px] font-minecraft font-bold text-white mt-[15px]">
          ${perkAmount / 1000}K
        </h1>
      ) : (
        <h1 className="text-[26px]/[18.2px] font-minecraft font-bold text-white mt-[15px]">
          ${perkAmount}
        </h1>
      )}
      <h2 className="text-[18.2px]/[11.7px] font-minecraft text-white mt-[11px]">
        {subHeading}
      </h2>
      {perkAmount > 500 && (
        <p className="text-white mt-[30px] text-[13px]/[17.6px] font-minecraft font-bold text-center">
          Everything included in
          <br />
          Sneak Peak, and...
        </p>
      )}
    </div>
  );
};

const ChoosePerkButton = ({ link }) => {
  const handleClick = () => {
    console.log('imma do my own thing');
    //Redirection somehwere
  };

  return (
    <div>
      <button onClick={handleClick}>
        <ChooseButton className="transition duration-500 hover:scale-110" />
      </button>
    </div>
  );
};

const Perks = () => {
  return (
    <div className="z-10">
      <div className="flex flex-col lg:flex-row lg:overflow-x-scroll lg:gap-[80px] lg:no-scrollbar z-10">
        <div className="items-center flex flex-col lg:ml-[80px] z-10">
          <PerksTitle perkAmount={500} subHeading={'Sneak Peak'} />

          <div className="relative mt-[30px] mb-[16px]">
            <SmallScroll />
            <ul className="absolute top-1/2 left-[67px] -translate-y-1/2 space-y-4 list-image-goldKey text-[#834D29] font-minecraft text-[13px]/[13px] w-[221px]">
              <li className="pl-3">General Email*</li>
              <li className="pl-3">Distribute API</li>
              <li className="pl-3">Distribute swag</li>
              <li className="pl-3">Logo on Website & T-shirt</li>
            </ul>
          </div>

          {/* <ChoosePerkButton /> */}
          <div className="mb-20 lg:mb-0" />
        </div>

        <div className="items-center flex flex-col z-10">
          <PerksTitle perkAmount={1500} subHeading={'Novice'} />

          <div className="relative mt-[30px] mb-[16px]">
            <SmallScroll />
            <ul className="absolute left-[67px] top-1/2 -translate-y-1/2 space-y-4 list-image-goldKey text-[#834D29] font-minecraft text-[13px]/[13px] w-[221px]">
              <li className="pl-3">
                Give branded/API prize (less than $100 prize/person)
              </li>
              <li className="pl-3">
                Bring <span className="font-bold">2</span> mentors
              </li>
              <li className="pl-3">
                Emails to distribute recruiting materials for{' '}
                <span className="font-bold">post-event</span>
              </li>
            </ul>
          </div>

          {/* <ChoosePerkButton /> */}
          <div className="mb-20 lg:mb-0" />
        </div>

        <div className="items-center flex flex-col z-10">
          <PerksTitle perkAmount={3000} subHeading={'Skilled'} />

          <div className="relative mt-[30px] mb-[16px]">
            <MediumScroll />
            <ul className="absolute left-[67px] top-1/2 -translate-y-1/2 space-y-2.5 list-image-goldKey text-[#834D29] font-minecraft text-[13px]/[13px] w-[221px]">
              <li className="pl-3">
                Give branded/API prize (less than $100 prize/person)
              </li>
              <li className="pl-3">
                Bring <span className="font-bold">4</span> mentors
              </li>
              <li className="pl-3">
                Emails to distribute recruiting materials for{' '}
                <span className="font-bold">post-event</span>
              </li>
              <li className="pl-3">
                Bring <span className="font-bold">1</span> recruiters
              </li>
              <li className="pl-3">
                <span className="font-bold">2 mins</span> speak at opening
                ceremony (can be pre-recorded or live)
              </li>
              <li className="pl-3">
                <span className="font-bold">1</span> table
              </li>
              <li className="pl-3">Post-event access to resumes</li>
            </ul>
          </div>

          {/* <ChoosePerkButton /> */}
          <div className="mb-20 lg:mb-0" />
        </div>

        <div className="items-center flex flex-col lg:w-[333px z-10">
          <PerksTitle perkAmount={4500} subHeading={'Master'} />

          <div className="relative mt-[30px] mb-[16px]">
            <BigScroll className="lg:overflow-visible" />
            <ul className="absolute left-[67px] top-[46%] -translate-y-1/2 space-y-2 list-image-goldKey text-[#834D29] font-minecraft text-[13px]/[13px] w-[221px]">
              <li className="pl-3">
                Give branded/API prize (less than $100 prize/person)
              </li>
              <li className="pl-3">
                Bring <span className="font-bold">unlimited</span> mentors
              </li>
              <li className="pl-3">
                Emails to distribute recruiting materials for{' '}
                <span className="font-bold">Pre-event</span>
              </li>
              <li className="pl-3">
                Bring <span className="font-bold">2</span> recruiters
              </li>
              <li className="pl-3">
                <span className="font-bold">4 mins</span> speak at opening
                ceremony (can be pre-recorded or live)
              </li>
              <li className="pl-3">
                <span className="font-bold">1</span> table
              </li>
              <li className="pl-3">Pre-event access to resumes</li>
              <li className="pl-3">Host special side challenges**</li>
              <li className="pl-3">Virtual interview rooms</li>
              <li className="pl-3">Email hackathon attendees</li>
              <li className="pl-3">Branded virtual events</li>
            </ul>
          </div>

          {/* <ChoosePerkButton /> */}
          <div className="mb-20 lg:mb-0" />
        </div>

        <div className="items-center flex flex-col lg:w-[333px] z-10">
          <PerksTitle perkAmount={6000} subHeading={'Legendary'} />

          <div className="relative mt-[30px] mb-[16px]">
            <BigScroll className="lg:overflow-visible" />
            <ul className="absolute left-[67px] top-[48.5%] -translate-y-1/2 space-y-2 list-image-goldKey text-[#834D29] font-minecraft text-[13px]/[13px] w-[221px]">
              <li className="pl-3">
                Give branded/API prize (less than $100 prize/person)
              </li>
              <li className="pl-3">
                Bring <span className="font-bold">unlimited</span> mentors
              </li>
              <li className="pl-3">
                Emails to distribute recruiting materials for{' '}
                <span className="font-bold">Pre-event</span>
              </li>
              <li className="pl-3">
                Bring <span className="font-bold">4</span> recruiters
              </li>
              <li className="pl-3">
                <span className="font-bold">6 mins</span> speak at opening
                ceremony (can be pre-recorded or live)
              </li>
              <li className="pl-3">
                <span className="font-bold">2</span> tables
              </li>
              <li className="pl-3">Pre-event access to resumes</li>
              <li className="pl-3">Host special side challenges**</li>
              <li className="pl-3">Virtual interview rooms</li>
              <li className="pl-3">Email hackathon attendees</li>
              <li className="pl-3">Branded virtual events</li>
              <li className="pl-3">Sponsor Track (contact us!)</li>
              <li className="pl-3">Pre-event workshop</li>
            </ul>
          </div>

          {/* <ChoosePerkButton /> */}
        </div>

        {/* <div className="m-0" /> */}
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center mx-8 lg:space-x-12 space-y-14 lg:space-y-0 lg:mx-72 mt-24 z-10">
        <div className="flex flex-col justify-center mr-[30%] lg:mr-0">
          <h1 className="font-minecraft text-white text-xs lg:text-lg font-bold mb-2">
            *General Email:
          </h1>
          <p className="font-minecraft text-white text-xs lg:text-lg">
            Prior to the event, we’ll send out one email listing all of our
            sponsors and any prizes offered, and a short summary of each
            sponsor. If you’d like to email students directly, see the $5k and
            $7.5k tiers.
          </p>
        </div>
        <div className="flex flex-col justify-center ml-[30%] lg:ml-0 text-right lg:text-left">
          <h1 className="font-minecraft text-white text-xs lg:text-lg font-bold mb-2">
            **Special Side Event:
          </h1>
          <p className="font-minecraft text-white text-xs lg:text-lg">
            This can be a fun, non-hacking virtual challenge, e.g. giving out a
            puzzle to solve, a coding challenge, or asking attendees to send in
            a photo of themselves doing something fun. Or, you could also host a
            workshop on an API or technology you might want to present.
          </p>
        </div>
        <div className="flex flex-col justify-center mr-[30%] lg:mr-0">
          <h1 className="font-minecraft text-white text-xs lg:text-lg font-bold mb-2">
            Early Bird:
          </h1>
          <p className="font-minecraft text-white text-xs lg:text-lg">
            If your contribution is received by Aug 19th, 2022, we will display
            your company branding at public fall events such as the BU student
            activities fair (attended by thousands of BU students).
          </p>
        </div>
      </div>

      <img
        src={CowLeftBlock}
        className="lg:-mt-[60px] h-[209px] lg:h-auto mt-[55px] lg:mt-0 mb-[61px] lg:mb-0"
      />
    </div>
  );
};

export default Perks;
