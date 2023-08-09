import { ReactComponent as SponsorFAQ} from '../../assets/images/faq_title.svg';

const SponsorFAQTitle = () => {
    return (
    <div className='relative justify-center flex flex-col items-center mb-16'>
      <SponsorFAQ />
      <div className='absolute inset-x-0 justify-center flex'>
        <h1 className='text-[48px]/[70px] font-misterpixel text-white'>SPONSOR</h1>
      </div>
    </div>
    );
}

export default SponsorFAQTitle;