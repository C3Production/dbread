import '@styles/globals.scss';
import Layout from '@components/Layout';
// import { DataProvider } from '@store/GlobalState';

function Application({ Component, pageProps }) {
  return (
    // <DataProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    // </DataProvider>
  );
}

export default Application;
