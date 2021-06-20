import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta name='description' content="D' Little Bread Cafe" />
          <link rel='icon' type='image/png' href='/logo.png' />
          <link
            rel='stylesheet'
            href='https://use.fontawesome.com/releases/v5.15.3/css/all.css'
            integrity='sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk'
            crossOrigin='anonymous'
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script
            src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.slim.min.js'
            integrity='sha512-6ORWJX/LrnSjBzwefdNUyLCMTIsGoNP6NftMy2UAm1JBm6PRZCO1d7OHBStWpVFZLO+RerTvqX/Z9mBFfCJZ4A=='
            crossorigin='anonymous'
          ></Script>
          <script
            src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js'
            integrity='sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8'
            crossOrigin='anonymous'
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
