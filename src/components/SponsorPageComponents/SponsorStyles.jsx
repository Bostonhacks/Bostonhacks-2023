import btnBackground from './svgs/sponsor_pink_btn.svg';
import background from "./svgs/bg_gradient.svg"

export const sponsorPageContainerStyle = {
    display: 'flex', 
    backgroundImage: `url(${background})`, 
    height: '2000px', 
    justifyContent: 'center'
}

export const pinkBtnBackgroundStyle = {
    backgroundImage: `url(${btnBackground})`,
    backgroundSize: 'contain', 
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '8px',
    display: 'flex',
    justifyContent: 'center'
};

export const buttonTextStyle = {
    fontFamily: 'misterpixel',
    fontSize: '2rem',
    color: 'white',
    textAlign: 'center',
};

export const topSparkleStyle = {
    width: '50px'
};

export const bottomSparkleStyle = {
    width: '50px',
    position: 'absolute',
    right: 0
};