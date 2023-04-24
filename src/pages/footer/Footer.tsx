import React from 'react';
import style from './Footer.module.scss'
import {GrLinkedinOption} from 'react-icons/gr'
import {FaTelegramPlane} from 'react-icons/fa'
import {TbBrandGithub} from 'react-icons/tb'


export const Footer: React.FC = () => {

    return (
        <footer>
            <div className={style.footerContainer}>

                    <div className={style.info}>
                        <span>Copyright © 2021. All rights reserved.</span>
                        <ul>
                            <li><a href="xxx" target={'_blank'} rel="noopener noreferrer"><GrLinkedinOption/></a></li>
                            <li><a href="xxx" target={'_blank'} rel="noopener noreferrer"><FaTelegramPlane/></a></li>
                            <li><a href="xxx" target={'_blank'} rel="noopener noreferrer"><TbBrandGithub/></a></li>
                        </ul>
                    </div>

            </div>
        </footer>
    );
};