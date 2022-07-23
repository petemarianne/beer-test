import type { NextPage } from 'next';
import { Layout } from '../../components/Layout';
import styles from '../../styles/beerPage.module.scss';
import { useRouter } from 'next/router';
import { BeerType } from '../../interfaces/Beer';

const BeerPage: NextPage<{beer: BeerType}> = ({ beer }): JSX.Element  => {
    const id = useRouter().query.id;

    return (
        <Layout title={`Beer ${id} | Beer Search`}>
             <div className={styles['image-info_wrapper']}>
                 <div className={styles['image-wrapper']}><img src={beer.image_url} alt='beer' className={styles.image}/></div>
                 <div className={styles.info}>
                     <div className={styles.name}>{beer.name}</div>
                     <div className={styles.tagline}>{`"${beer.tagline}"`}</div>
                     <div className={styles.abv}>ABV: {beer.abv}</div>
                     <div className={styles.foods}>Food to eat with:</div>
                     <ul className={styles.food}>{beer.food_pairing.map((item, index) => <li key={`food${index}`}>{item}</li>)}</ul>
                 </div>
             </div>
             <div className={styles.description}>{beer.description}</div>
        </Layout>
    );
}

BeerPage.getInitialProps = async (ctx) => {
    const response = await fetch('https://api.punkapi.com/v2/beers/' + ctx.query.id);
    const beers = await response.json();
    return { beer: beers[0] };
}

export default BeerPage;
