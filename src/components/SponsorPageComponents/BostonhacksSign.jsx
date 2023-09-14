import Sign from '../../assets/images/SponsorPage/TitleSign.svg';

const TitleSign = () => {
  return (
    <div className='justify-center flex items-center lg:mt-28'>
        <img
            className="TitleSign mx-[25vw] md:w-auto w-[75%]"
            src={Sign}
            alt="TitleSign"
        />
    </div>
  );
};

export default TitleSign;
