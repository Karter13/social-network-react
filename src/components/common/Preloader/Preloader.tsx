import styles from '../../Users/Users.module.css';
import preloader from '../../../assets/images/loader.svg';
import React from 'react';

export type PreloaderPropsType = {}

export const Preloader: React.FC<PreloaderPropsType> = (props) => {
    return (
        <div className={styles.loader}>
            <img src={preloader}/>
        </div>
    )
};
