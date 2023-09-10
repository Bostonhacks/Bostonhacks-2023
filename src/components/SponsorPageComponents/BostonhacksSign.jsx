import Sign from '../../assets/images/SponsorPage/TitleSign.svg';

const TitleSign = () => {
  return (
    <div className='justify-center flex items-center lg:mt-28'>
        <img
            className="TitleSign mx-[25vw] w-3/4 lg:w-auto"
            src={Sign}
            alt="TitleSign"
        />
    </div>
  );
};

export default TitleSign;
