import style from './About.module.scss'
import aboutImg from 'assets/img/giphy.gif'
import {Tilt} from 'react-tilt'
import {Button} from "@mui/material";
import React from "react";


const defaultOptions = {
    reverse: false,  // reverse the tilt direction
    max: 35,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

export const About = () => {
    return (
        <div className={style.aboutContainer} id={'about'}>
            <div className={style.aboutInfo}>
                <Tilt options={defaultOptions}>
                    <h1>About some information</h1>
                </Tilt>
                <hr/>
                <ul>
                    <li>
                        You’ve probably heard of Mach3 Razor Blades already – they’ve been around a while, so your dad
                        or other guys you know might use them. Mach3 razor cartridges consist of three blades and are
                        designed to bring you a precise, classic shave.
                    </li>
                    <li>
                        Mach3 razor blades also have an advanced microfin guard, which stretches your skin to create a
                        flat shaving surface ahead of the blades.
                    </li>
                    <li>
                        If you find you have awkward to shave areas of your face, such as the jawline, try Mach3 Turbo
                        3D, designed to adapt to your face for a close and efficient shave, even on contours.
                    </li>
                </ul>
                <Button variant={'outlined'} color={'inherit'}>
                    SOME TEXT
                </Button>
            </div>

            <div className={style.aboutImg}>
                <Tilt options={defaultOptions}>
                    <img src={aboutImg} alt="aboutImg"/>
                </Tilt>
            </div>
        </div>
    );
};