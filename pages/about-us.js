import Head from 'next/head';
import Header from '@components/Header';
import useTranslation from 'next-translate/useTranslation';

export default function Home(props) {
  const { t } = useTranslation();

  return (
    <div className='container'>
      <Head>
        <title>About</title>
      </Head>

      <main>
        <Header title="Welcome to D' Little Bread Cafe!" />
        <p className='description'>
          This page is under construction now.
          <br /> Please visit our{' '}
          <a href='https://www.facebook.com/D-Bread-111968957785306'>
            Facebook Page
          </a>{' '}
          for more information.
          <br />
          {t("common:We're making lots of improvements and will be back soon.")}
        </p>
      </main>
    </div>
  );
}
