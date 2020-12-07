import React from 'react';
import '../stylesheets/HYLButton.scss';

const colors = {
    blue: "#92E0EE",
    green: "#C9D9B2",
    yellow: "#FFD275",
    orange: "#F9AA84",
    red: "#F28193",
    purple: "#320A28",
}

const HYLButton = ({text, color, onClick}) => {
    return (
        <div className="button__container" style={{
            background: colors[color],
        }}>
            <div className="button__inner"><a className="button__text">{text}</a></div>
        </div>
    )
}

export default HYLButton;