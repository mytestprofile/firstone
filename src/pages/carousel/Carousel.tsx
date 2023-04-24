import React from 'react';
import style from './Carousel.module.scss'
import {Item} from "./item/Item";
import {slide} from 'assets/carouselPhotos'
import {Tilt} from "react-tilt";
import {Button} from "@mui/material";

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


export const Carousel = () => {


    const myProjects = slide.map(el =>
        <Item
            key={el.id}
            image={el.pic}
            title={el.title}
            description={el.description}
        />)


    return (
        <div className={style.carouselContainer} id={'carousel'}>
            <div className={style.slider}>
                {myProjects}
            </div>

            <div className={style.info}>
                <Tilt options={defaultOptions}>
                    <h1>Don`t think, Just try</h1>
                </Tilt>
                    <hr/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi deleniti error maiores? A accusantium
                        amet, architecto atque, dignissimos dolore expedita hic nobis officia omnis quasi ratione, saepe
                        sapiente vel voluptas!
                    </p>

                <Button variant={'outlined'} color={'inherit'}>
                    Lets rock
                </Button>
            </div>
        </div>

    );
};

