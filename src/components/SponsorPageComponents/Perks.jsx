import CoinGif from "../../assets/images/SponsorPage/PerksAssets/Coin2Preview.gif";
import { ReactComponent as SmallScroll} from '../../assets/images/SponsorPage/PerksAssets/SmallScroll.svg';
import { ReactComponent as MediumScroll} from '../../assets/images/SponsorPage/PerksAssets/MediumScroll.svg';
import { ReactComponent as BigScroll} from '../../assets/images/SponsorPage/PerksAssets/BigScroll.svg';
import { ReactComponent as ChooseButton} from '../../assets/images/SponsorPage/PerksAssets/ChooseButton.svg';


const PerksTitle = ({perkAmount, subHeading}) => {

    return (
        <div className="justify-content-center items-center flex flex-col w-[333px]">
            <img className='h-[24px] w-[24px]' src={CoinGif} alt="coinGif" />
            {perkAmount > 500 ? <h1 className="text-[26px]/[18.2px] font-minecraft font-bold text-white mt-[15px]">${perkAmount/1000}K</h1>
            : <h1 className="text-[26px]/[18.2px] font-minecraft font-bold text-white mt-[15px]">${perkAmount}</h1>
            }
            <h2 className="text-[18.2px]/[11.7px] font-minecraft text-white mt-[11px]">{subHeading}</h2>
            {perkAmount > 500 &&
                <p className="text-white mt-[30px] text-[13px]/[17.6px] font-minecraft font-bold text-center">Everything included in<br/>Sneak Peak, and...</p>
            }
        </div>
    );
}

const ChoosePerkButton = ({link}) => {

    const handleClick = () => {
        console.log("imma do my own thing")
        //Redirection somehwere
    }

    return (
        <div>
            <button 
            onClick={handleClick}
        > 
            <ChooseButton className='transition duration-500 hover:scale-110' />
            
        </button>
        </div>
    );
}

const Perks = () => {

    return (
        <div className="flex flex-row overflow-x-scroll gap-[80px] no-scrollbar">
            
            <div className="items-center flex flex-col ml-[80px]">

                <PerksTitle perkAmount={500} subHeading={"Sneak Peak"} />

                <div className="relative mt-[30px] mb-[16px]">
                    <SmallScroll/>
                    <ul class="absolute top-1/2 left-[67px] -translate-y-1/2 space-y-4 list-image-goldKey text-[#834D29] font-minecraft text-[13px]/[13px] w-[221px]">
                        <li className="pl-3">General Email*</li>
                        <li className="pl-3">Distribute API</li>
                        <li className="pl-3">Distribute swag</li>
                        <li className="pl-3">Logo on Website & T-shirt</li>
                    </ul>
                </div>

                <ChoosePerkButton />

            </div>

            <div className="items-center flex flex-col">

                <PerksTitle perkAmount={1500} subHeading={"Novice"} />

                <div className="relative mt-[30px] mb-[16px]">
                    <SmallScroll/>
                    <ul class="absolute left-[67px] top-1/2 -translate-y-1/2 space-y-4 list-image-goldKey text-[#834D29] font-minecraft text-[13px]/[13px] w-[221px]">
                        <li className="pl-3">Give branded/API prize (less than $100 prize/person)</li>
                        <li className="pl-3">Bring <span className="font-bold">2</span> mentors</li>
                        <li className="pl-3">Emails to distribute recruiting materials for <span className="font-bold">post-event</span></li>
                    </ul>
                </div>

                <ChoosePerkButton />
            
            </div>

            <div className="items-center flex flex-col">

                <PerksTitle perkAmount={3000} subHeading={"Skilled"} />

                <div className="relative mt-[30px] mb-[16px]">
                    <MediumScroll/>
                    <ul class="absolute left-[67px] top-1/2 -translate-y-1/2 space-y-2.5 list-image-goldKey text-[#834D29] font-minecraft text-[13px]/[13px] w-[221px]">
                        <li className="pl-3">Give branded/API prize (less than $100 prize/person)</li>
                        <li className="pl-3">Bring <span className="font-bold">4</span> mentors</li>
                        <li className="pl-3">Emails to distribute recruiting materials for <span className="font-bold">post-event</span></li>
                        <li className="pl-3">Bring <span className="font-bold">1</span> recruiters</li>
                        <li className="pl-3"><span className="font-bold">2 mins</span> speak at opening ceremony (can be pre-recorded or live)</li>
                        <li className="pl-3"><span className="font-bold">1</span> table</li>
                        <li className="pl-3">Post-event access to resumes</li>
                    </ul>
                </div>

                <ChoosePerkButton />
            
            </div>
            
            <div className="items-center flex flex-col w-[333px]">

                <PerksTitle perkAmount={4500} subHeading={"Master"} />

                <div className="relative mt-[30px] mb-[16px] w-full">
                    <BigScroll className="overflow-visible"/>
                    <ul class="absolute left-[67px] top-[46%] -translate-y-1/2 space-y-2 list-image-goldKey text-[#834D29] font-minecraft text-[13px]/[13px] w-[221px]">
                        <li className="pl-3">Give branded/API prize (less than $100 prize/person)</li>
                        <li className="pl-3">Bring <span className="font-bold">unlimited</span> mentors</li>
                        <li className="pl-3">Emails to distribute recruiting materials for <span className="font-bold">Pre-event</span></li>
                        <li className="pl-3">Bring <span className="font-bold">2</span> recruiters</li>
                        <li className="pl-3"><span className="font-bold">4 mins</span> speak at opening ceremony (can be pre-recorded or live)</li>
                        <li className="pl-3"><span className="font-bold">1</span> table</li>
                        <li className="pl-3">Pre-event access to resumes</li>
                        <li className="pl-3">Host special side challenges**</li>
                        <li className="pl-3">Virtual interview rooms</li>
                        <li className="pl-3">Email hackathon attendees</li>
                        <li className="pl-3">Branded virtual events</li>
                    </ul>
                </div>

                <ChoosePerkButton/>
            
            </div>

            <div className="items-center flex flex-col w-[333px]">

                <PerksTitle perkAmount={6000} subHeading={"Legendary"} />

                <div className="relative mt-[30px] mb-[16px] w-full">
                    <BigScroll className="overflow-visible"/>
                    <ul class="absolute left-[67px] top-[48.5%] -translate-y-1/2 space-y-2 list-image-goldKey text-[#834D29] font-minecraft text-[13px]/[13px] w-[221px]">
                        <li className="pl-3">Give branded/API prize (less than $100 prize/person)</li>
                        <li className="pl-3">Bring <span className="font-bold">unlimited</span> mentors</li>
                        <li className="pl-3">Emails to distribute recruiting materials for <span className="font-bold">Pre-event</span></li>
                        <li className="pl-3">Bring <span className="font-bold">4</span> recruiters</li>
                        <li className="pl-3"><span className="font-bold">6 mins</span> speak at opening ceremony (can be pre-recorded or live)</li>
                        <li className="pl-3"><span className="font-bold">2</span> tables</li>
                        <li className="pl-3">Pre-event access to resumes</li>
                        <li className="pl-3">Host special side challenges**</li>
                        <li className="pl-3">Virtual interview rooms</li>
                        <li className="pl-3">Email hackathon attendees</li>
                        <li className="pl-3">Branded virtual events</li>
                        <li className="pl-3">Sponsor Track (contact us!)</li>
                        <li className="pl-3">Pre-event workshop</li>
                    </ul>
                </div>

                <ChoosePerkButton/>
            
            </div>

            <div className="m-0"/>

        </div>
    );
}

export default Perks;