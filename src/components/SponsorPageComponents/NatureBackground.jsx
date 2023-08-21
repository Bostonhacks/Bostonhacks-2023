import Background from '../../assets/images/SponsorPage/NatureBackground.svg';
import TreeSVG from '../../assets/images/SponsorPage/Tree.svg';

const NatureBackground = () => {
    return (
        <div className='relative'>
            <img
                className="NatureBackground"
                src={Background}
                alt="NatureBackground"
            />
            <div className='absolute right-0 bottom-0'>
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