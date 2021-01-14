import React from 'react'
import schulich from '../assets/schulich.png'   //Import schulich logo
import HSBC from '../assets/HSBC.png'
import zoo from '../assets/zoo.png'
import '../stylesheets/Sponsor.scss'

const Sponsor = () => (
    <>
        <p>Our 2021 Sponsor</p>
        <div class="zoom">
            <a href="https://www.hsbc.ca/" target="_blank" rel="noopener noreferrer">
                <img src={HSBC} alt="Schulich logo" width="500" height="300"></img>
            </a>
        </div>


        <p>Our Partners</p>

        <div class>
            <div class="zoom imgContainer">
                <a href="https://schulich.ucalgary.ca/" target="_blank" rel="noopener noreferrer">
                    <img src={schulich} alt="Schulich logo" width="400" height="300"></img>
                </a>
            </div>

            <div class="zoom imgContainer">
                <a href="https://www.facebook.com/zooengg/" target="_blank" rel="noopener noreferrer">
                    <img src={zoo} alt="Schulich logo" width="400" height="300"></img>
                </a>
            </div>
        </div>



    </>
);

export default Sponsor;