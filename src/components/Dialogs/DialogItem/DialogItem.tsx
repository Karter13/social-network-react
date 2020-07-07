import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogPropsType = {
    id: number
    name: string
    img: string
}
export const DialogItem: React.FC<DialogPropsType> = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <div className={s.item}>
                <img
                    src={props.img}
                    alt="avatar"/>
            </div>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
};


