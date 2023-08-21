import { ReactComponent as SponsorFAQ} from '../../assets/images/faq_title.svg';

const SectionTitle = ({extraStyling, text}) => {
    return (
    <div className={`relative justify-center flex flex-col items-center ${extraStyling}`}>
      <SponsorFAQ />
      <div className='absolute inset-x-0 justify-center flex'>
        <h1 className='text-[48px]/[70px] font-misterpixel text-white'>{text}</h1>
      </div>
    </div>
    );
}

export default SectionTitle;