import WeatherForm from '@/components/WeatherForm';
import { WeatherData } from '@/models/weather';
import Head from 'next/head';
import { useState } from 'react';

import styles from '../styles/HomePage.module.css';

export default function Home() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const handleGetWeatherClick = async (cityName: string) => {
    try {
      const resp = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}weather?q=${cityName}&appid=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      const data: WeatherData = await resp.json();
      console.log(data);
      if (data.cod !== 200) throw data;
      setWeatherData(data);
    } catch (error) {
      console.log(error);
    }
  };

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
          <WeatherForm onGetWeatherClick={handleGetWeatherClick} />
        </main>
      </div>
    </>
  );
}
