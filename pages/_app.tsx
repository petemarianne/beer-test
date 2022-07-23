import '../styles/main.scss';
import React from 'react';

const MyApp: React.FC<{Component: any, pageProps: any}> = ({ Component, pageProps }): JSX.Element => {
    return (
        <Component {...pageProps} />
    );
}

export default MyApp;
