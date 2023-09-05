import {ReactComponent as HybridEventsStats} from '../../assets/images/SponsorPage/HybridEventsStats.svg';
import {ReactComponent as GrandingSection} from '../../assets/images/SponsorPage/GrandingSection.svg';
import {ReactComponent as InPersonEventStats} from '../../assets/images/SponsorPage/InPersonEventStats.svg';



const Stats = () => {
    return (
        <div className='justify-center items-center flex flex-col mb-24 lg:mb-80'>
            <h1 className="font-minecraft text-white text-sm lg:text-2xl mb-20">Our 2021 Hybrid Events Had...</h1>
            <HybridEventsStats className="w-4/5 lg:w-auto"/>
            <GrandingSection className='my-[90px] w-4/5 lg:w-auto'/>
            <h1 className="font-minecraft text-white text-sm lg:text-2xl mb-20">Our 2022 In-Person Event Had...</h1>
            <InPersonEventStats className="w-4/5 lg:w-auto"/>
        </div>
    );
}

export default Stats;