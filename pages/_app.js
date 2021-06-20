import Head from 'next/head';
import '@styles/globals.scss';
import Layout from '@components/Layout';
import { DataProvider } from '@store/GlobalState';

function Application({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <DataProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DataProvider>
    </>
  );
}

export default Application;
