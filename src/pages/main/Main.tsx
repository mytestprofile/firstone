import mainPhoto from 'assets/img/Rotating_globe.gif'
import {Tilt} from "react-tilt";
import { useForm, SubmitHandler } from "react-hook-form";
import { Box, Button, Modal } from '@mui/material';
import React, { useState } from 'react';
import style from './Main.module.scss'



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

type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
};


const sty = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#d9d5d5',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const Main = () => {

    const { register, handleSubmit } = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = data => console.log(data);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);




    return (
        <div className={style.mainContainer} id={'main'}>
            <div className={style.mainImg}>
                <img src={mainPhoto} alt="main"/>
            </div>
            <div className={style.mainInfo}>
                <Tilt options={defaultOptions} >
                    <h1>It’s okay to be sensitive.</h1>
                </Tilt>
                <hr/>
                <p>
                    Some guys are softies. Actually, most guys are softies. If you ask them, most guys will tell you
                    their skin is sensitive. That's why we've created a range of dermatologist-tested shaving products
                    for those sensitive types. You're safe with Schick.
                </p>
                <Button variant={'outlined'} color={'inherit'} onClick={handleOpen}>
                    Связаться для заказа
                </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={sty}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("firstName")} placeholder={'имя'}/>
                            <input {...register("lastName")} placeholder={'телефон'}/>
                            <input type="email" {...register("email")} placeholder={'почта'}/>

                            <div>
                                <Button variant={'outlined'} color={'inherit'} onClick={handleOpen} type={'submit'}>
                                    Связаться для заказа
                                </Button>
                            </div>
                        </form>
                    </Box>
                </Modal>
            </div>
        </div>
    );
};