import styles from '../styles/pagination.module.scss';
import React from 'react';

interface PaginationProps {
    next: () => void,
    previous: () => void,
    first: number,
    last: number,
    isNext: boolean,
    isPrevious: boolean
}

export const Pagination: React.FC<PaginationProps> = ({ next, previous, first, last, isNext, isPrevious }): JSX.Element => {
    return (
        <div className={styles.pagination}>
            {isPrevious ? <div className={styles.previous} onClick={previous}>{'<'}</div> : null}
            <div className={styles.count}>{`${first}-${last}`}</div>
            {isNext ? <div className={styles.next} onClick={next}>{'>'}</div> : null}
        </div>
    );
};
