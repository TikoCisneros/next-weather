
import WeatherForm from '@/components/WeatherForm';
import Head from 'next/head';

import styles from '../styles/HomePage.module.css';

export default function Home() {
  const handleGetWeatherClick = (cityName: string) => console.log('Get Weather', cityName);

  return (
    <>
      <Head>
        <title>Weather App</title>
        <meta name='description' content='Weather app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles['background-container']}>
        <main className={styles['main-container']}>
          <WeatherForm onGetWeatherClick={handleGetWeatherClick}/>
        </main>
      </div>
    </>
  );
}
