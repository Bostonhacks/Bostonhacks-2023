import React from 'react';
import { pinkBtnBackgroundStyle, topSparkleStyle, bottomSparkleStyle, buttonTextStyle} from '../SponsorStyles';
import sparkle from '../svgs/sparkle.png';

const PinkButton = ({ buttonText }) => {
    return (
        <div style={{ position: 'relative', width: '350px' }}>
            <img src={sparkle} alt="Image" style={topSparkleStyle} />
            <div style={pinkBtnBackgroundStyle}>
                <div style={buttonTextStyle}>
                    {buttonText}
                </div>
            </div>
            <img src={sparkle} alt="Image" style={bottomSparkleStyle} />
        </div>
    )
}

export default PinkButton;