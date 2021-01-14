import React from 'react'
import schulich from '../assets/schulich.png'   //Import schulich logo
import HSBC from '../assets/HSBC.png'
import zoo from '../assets/zoo.png'

const Sponsor = () => (
    <>
        <p>Our 2021 Sponsor</p>

        <a href="https://www.hsbc.ca/" target="_blank" rel="noopener noreferrer">
            <img src={HSBC} alt="Schulich logo" width="500" height="300"></img>
        </a>

        <a href="https://schulich.ucalgary.ca/" target="_blank" rel="noopener noreferrer">
            <img src={schulich} alt="Schulich logo" width="400" height="300"></img>
        </a>

        <a href="https://www.facebook.com/zooengg/" target="_blank" rel="noopener noreferrer">
            <img src={zoo} alt="Schulich logo" width="400" height="300"></img>
        </a>

        <p>Our Partners</p>

    </>
);

export default Sponsor;