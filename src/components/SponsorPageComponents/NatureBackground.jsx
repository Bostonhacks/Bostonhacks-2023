import Background from '../../assets/images/SponsorPage/NatureBackground.svg';
import BackgroundMobile from '../../assets/images/SponsorPage/NatureBackgroundgMobile.svg';

import TreeSVG from '../../assets/images/SponsorPage/Tree.svg';

const NatureBackground = () => {
    return (
        <div className='z-0 absolute w-full'>
            <img
                className="min-[320px]:hidden lg:flex w-full object-fill"
                src={Background}
                alt="NatureBackground"
            />
            <img
                className="lg:hidden object-fill w-full"
                src={BackgroundMobile}
                alt="NatureBackgroundMobile"
            />
            <div className='absolute right-0 bottom-24 lg:bottom-0 w-2/5 lg:w-auto z-0'>
                <img
                className="Tree"
                src={TreeSVG}
                alt="Tree"
                onDragStart={(event)=> event.preventDefault()}
                />
            </div>
        </div>
        
      );
}

export default NatureBackground;