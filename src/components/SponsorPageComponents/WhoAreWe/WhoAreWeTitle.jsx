import React from 'react';
import { pinkBtnBackgroundStyle, topSparkleStyle, bottomSparkleStyle, buttonTextStyle} from '../SponsorStyles';
import sparkle from '../sparkle.png'

const WhoAreWe = () => {
    return (
        <div style={{position: 'relative', width: '350px' }}>
            <img src={sparkle} alt="Image" style={topSparkleStyle} />
            <div style={pinkBtnBackgroundStyle}>
                <div style={buttonTextStyle}>
                    WHO ARE WE?
                </div>
            </div>
            <img src={sparkle} alt="Image" style={bottomSparkleStyle} />
        </div>
    )
}

export default WhoAreWe;