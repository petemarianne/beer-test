import type { NextPage } from 'next';
import { Layout } from '../components/Layout';
import styles from '../styles/index.module.scss';
import { useEffect, useState } from 'react';
import { BeerType } from '../interfaces/Beer';
import { Beer } from '../components/Beer';
import Link from 'next/link';
import { Pagination } from '../components/Pagination';
import { useDelay } from '../hooks/useDelay';

const Home: NextPage<{beers: [BeerType]}> = ({ beers }): JSX.Element => {
    const [first, setFirst] = useState(1);
    const [isNext, setIsNext] = useState(true);
    const [data, setData] = useState<[BeerType]>(beers);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [search, setSearch] = useState('');
    const delayed = useDelay(search);

    useEffect(() => {
        const fetchBeers = async () => {
            const res = await fetch(delayed ? `https://api.punkapi.com/v2/beers?page=${currentPage}&beer_name=${delayed}` : `https://api.punkapi.com/v2/beers?page=${currentPage}`);
            const data = await res.json();
            setData(data);
            const res2 = await fetch(delayed ? `https://api.punkapi.com/v2/beers?page=${currentPage + 1}&beer_name=${delayed}` : `https://api.punkapi.com/v2/beers?page=${currentPage + 1}`);
            const data2 = await res2.json();
            setIsNext(data2.length !== 0);
        };

        fetchBeers();
    }, [currentPage]);

    useEffect(() => {
        const fetchBeers = async () => {
            const res = await fetch(delayed ? `https://api.punkapi.com/v2/beers?page=1&beer_name=${delayed}` : `https://api.punkapi.com/v2/beers?page=1`);
            const data = await res.json();
            setData(data);
            if (delayed) {
                const res = await fetch(`https://api.punkapi.com/v2/beers?page=2&beer_name=${delayed}`);
                const data = await res.json();
                if (data.length !== 0) setIsNext(true);
            }
        };

        fetchBeers();
        setCurrentPage(1);
        setFirst(1);
    }, [delayed]);


    const next = (): void => {
        setFirst(prevState => prevState + 25);
        setCurrentPage(prevState => prevState + 1);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
    const previous = (): void => {
        setCurrentPage(prevState => prevState - 1);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    const saveBeer = (id: number): void => {
        localStorage.setItem('beer', JSON.stringify(data[id]));
    }

    return (
        <Layout title={'Beer Search | Main'}>
            <div className={styles['input-wrapper']}>
                <input type='text' className={styles.input} value={search} onChange={event => setSearch(event.target.value)}/>
            </div>
            <ul className={styles.beers}>
                {data.map(item => <Link key={item.id} href={'/beer/[id]'} as={`/beer/${item.id}`}><a target='_blank' style={{textDecoration: 'none'}} onClick={() => saveBeer(item.id)}><Beer beer={item}/></a></Link>)}
            </ul>
            {!isNext || (first === 1 && data.length < 25) ? null :
                <Pagination
                next={next}
                isNext={data.length >= 25}
                isPrevious={first !== 1}
                previous={previous}
                first={first}
                last={first + data.length - 1}
                />
            }
        </Layout>
      )
}

Home.getInitialProps = async () => {
    const response = await fetch('https://api.punkapi.com/v2/beers?page=1');
    const beers = await response.json();
    return { beers };
}

export default Home
