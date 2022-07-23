import React from 'react';
import Head from 'next/head';
import styles from '../styles/layout.module.scss';
import Link from 'next/link';

export const Layout: React.FC<{children: React.ReactNode, title: string}> = ({ children, title }): JSX.Element => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <header className={styles.header}>
                <Link href={'/'}><a className={styles['link-wrapper']}>
                    <div className={styles['icon-wrapper']}>
                        <img src='/icon.png' alt='icon' className={styles.icon}/>
                    </div>
                    <div className={styles.title}>Beer Search</div>
                </a></Link>
            </header>
            <main className={styles.main}>
                {children}
            </main>
            <footer className={styles.footer}></footer>
        </>
    );
}
