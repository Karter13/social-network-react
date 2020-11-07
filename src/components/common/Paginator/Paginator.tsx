import React, {useState} from 'react';
import styles from './Paginator.module.css';
import cn from 'classnames'

export type PaginatorPropsType = {
    pageSize: number
    totalItemsCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize: number
}

export const Paginator: React.FC<PaginatorPropsType> = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize, ...props}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState<number>(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;


    return (
        <div className={styles.paginator}>
            {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>PREV</button>}

            {pages
                .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                .map((page, i) => {
                    return <span className={cn({
                        [styles.selectedPage]: currentPage === page
                    }, styles.pageNumber)}
                                 key={i}
                                 onClick={() => {
                                     onPageChanged(page);
                                 }}>{page}</span>
                })}


            {portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>NEXT</button>}
        </div>
    )

};
