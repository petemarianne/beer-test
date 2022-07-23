import React from 'react';
import { Layout } from '../components/Layout';
import styles from '../styles/error.module.scss';
import Link from 'next/link';

const ErrorPage: React.FC = (): JSX.Element => {

    return (
        <Layout title='Error Page | Beer Search'>
            <>
                <div className={styles['logo404-wrapper']}>
                    <div className={styles.four}>404</div>
                </div>
                <div className={styles['message-wrapper']}>
                    <div>Oops, this page was not found!</div>
                    <div>Either something went wrong or the page doesn&apos;t exist anymore.</div>
                </div>
                <Link href={'/'}>
                    <a className={styles['button-wrapper']}><button className={styles['go-home-button']}>GO HOME</button></a>
                </Link>
            </>
        </Layout>
    )
}

export default ErrorPage;
