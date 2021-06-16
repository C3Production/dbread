import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Next.js Starter!</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Header title="Welcome to D' Bread!" />
        <p className='description'>
          This page is under construction now. Please visit our{' '}
          <a href='https://www.facebook.com/D-Bread-111968957785306'>
            Facebook Page
          </a>{' '}
          for more information.
        </p>
      </main>

      <Footer />
    </div>
  );
}
