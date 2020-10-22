import React from 'react';
import styles from './Paginator.module.css'
import {UserType} from '../../../redux/users-reducer';

export type UsersPropsType = {
    pageSize: number
    totalUserCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator: React.FC<UsersPropsType> = ({totalUserCount, pageSize, currentPage, onPageChanged, ...props}) => {

    let pagesCount = Math.ceil(totalUserCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map((page, i) => {
                return <span key={i}
                             className={currentPage === page ? styles.selectedPage : undefined}
                             onClick={() => {
                                 onPageChanged(page);
                             }}>{page}</span>
            })}
        </div>
    )

};
