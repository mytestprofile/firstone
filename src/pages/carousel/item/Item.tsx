import React from 'react';
import style from './Item.module.scss'


export type ProjectType = {
    image: string
    title: string
    description: string
}

export const Item: React.FC<ProjectType> = ({image, title, description}) => {


    return (
        <div className={style.proj}>
            <div className={style.card}>
                <img src={image} alt="project"/>
                <div className={style.info}>
                    <p>{description}</p>
                </div>
            </div>
        </div>

    );
};