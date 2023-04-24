import style from './Contact.module.scss'
import {Tilt} from "react-tilt";
import React from "react";
import {Button} from '@mui/material';

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

export const Contact = () => {
    return (
        <div id={'contact'} className={style.contactContainer}>
            <div className={style.info}>
                <Tilt options={defaultOptions}>
                    <h1>Contact me</h1>
                </Tilt>
                <hr/>
                <p>
                    Some guys are softies. Actually, most guys are softies. If you ask them, most guys will tell you
                    their skin is sensitive. That's why we've created a range of dermatologist-tested shaving products
                    for those sensitive types. You're safe with Schick.
                </p>
            </div>

            <div className={style.form}>
                <div className={style.input}><input type="text" placeholder={'Name'}/></div>
                <div><input type="text" placeholder={'Email'}/></div>
                <div><textarea cols={1} rows={3} placeholder={'Message'}></textarea></div>
                <Button variant={'outlined'} color={'inherit'}>
                   Связаться для заказа
                </Button>
            </div>
        </div>
    );
};


