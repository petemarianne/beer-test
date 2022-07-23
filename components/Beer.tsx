import React from 'react';
import { BeerType } from '../interfaces/Beer'
import styles from '../styles/beer.module.scss';

export const Beer: React.FC<{beer: BeerType}> = ({ beer }): JSX.Element => {

    const cutTextWithDots = (line: string): string => {
        if (line.length > 140) line = line.substring(0, 140) + '...';
        return line;
    }

    return (
        <div className={styles['beer-wrapper']}>
            <div className={styles['image-wrapper']}><img src={beer.image_url} alt='beer image' className={styles.image}/></div>
            <div className={styles['info-wrapper']}>
                <div className={styles.name}>{beer.name}</div>
                <div className={styles.description}>{cutTextWithDots(beer.description)}</div>
            </div>
        </div>
    );
}
