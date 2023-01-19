import Head from 'next/head';
import styles from '../styles/HomePage.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Weather App</title>
        <meta name='description' content='Weather app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>

      </main>
    </>
  );
}
