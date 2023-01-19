import Head from 'next/head';
import { ReactNode } from 'react';

import styles from '@/styles/Layout.module.css';

type LayoutPros = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutPros) {
  return (
    <>
      <Head>
        <title>Weather App</title>
        <meta name='description' content='Weather app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles['background-container']}>
        <main className={styles['main-container']}>{children}</main>
      </div>
    </>
  );
}
