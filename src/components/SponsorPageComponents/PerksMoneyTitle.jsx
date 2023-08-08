import CoinGif from "../../assets/images/SponsorPage/PerksAssets/Coin2Preview.gif";
import { ReactComponent as SmallScroll} from '../../assets/images/SponsorPage/PerksAssets/SmallScroll.svg';
import { ReactComponent as MediumScroll} from '../../assets/images/SponsorPage/PerksAssets/MediumScroll.svg';
import { ReactComponent as BigScroll} from '../../assets/images/SponsorPage/PerksAssets/BigScroll.svg';
import GoldKey from '../../assets/images/SponsorPage/PerksAssets/GoldKey.svg';
import { ReactComponent as ChooseButton} from '../../assets/images/SponsorPage/PerksAssets/ChooseButton.svg';

const GoldKeyBulletPoint = ({text, paddingAmount}) => {
    return (    
    <div className={`flex flex-row pb-${paddingAmount}`}>
        <img className='mt-[1.5px] mr-[15.6px]' src={GoldKey} alt="coinGif" onDragStart={(event)=> event.preventDefault()}/>
        <p className="text-[#834D29] font-minecraft text-[13px]/[13px]">{text}</p>
    </div>
    );
}


const PerksMoneyTitle = ({perkAmount, subHeading}) => {

    const handleClick = () => {
        console.log("imma do my own thing")
    }

    return (
        <div className="justify-center items-center flex flex-col">
            <img className='h-[24px] w-[24px]' src={CoinGif} alt="coinGif" />
            {perkAmount > 500 ? <h1 className="text-[26px]/[18.2px] font-minecraft font-bold text-white mt-[15px]">${perkAmount/1000}K</h1>
            : <h1 className="text-[26px]/[18.2px] font-minecraft font-bold text-white mt-[15px]">${perkAmount}</h1>
            }
            <h2 className="text-[18.2px]/[11.7px] font-minecraft text-white mt-[11px]">{subHeading}</h2>
            {perkAmount > 500 &&
                <p className="text-white mt-[10px] text-[13px]/[17.6px] font-minecraft font-bold text-center">Everything included in<br/>Sneak Peak, and...</p>
            }

            <div className="relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <GoldKeyBulletPoint text="General Email*" paddingAmount={4} />
                    <GoldKeyBulletPoint text="Distribute API" paddingAmount={4}/>
                    <GoldKeyBulletPoint text="Distribute swag" paddingAmount={4}/>
                    <GoldKeyBulletPoint text="Logo on Website & T-shirt" paddingAmount={4}/>
                </div>
                <SmallScroll/>
            </div>

        <button 
            onClick={handleClick}
        > 
            <ChooseButton className='transition duration-500 hover:scale-110' />
            
        </button>
        </div>
    );
}

export default PerksMoneyTitle;