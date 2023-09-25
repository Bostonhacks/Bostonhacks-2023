import title from '../../assets/images/title.svg';

const Title = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center text-text-primary z-50">
      <div className="relative flex items-center justify-center">
        <img
          className="w-[60vw] md:w-[30vw] scale-75"
          src={title}
          alt="Boston Hacks"
        />
      </div>
    </section>
  );
};

export default Title;
