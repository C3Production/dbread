import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta name='description' content="D' Little Bread Cafe" />
          <link rel='icon' type='image/png' href='/logo.png' />
          {/* <link
            href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css'
            rel='stylesheet'
            integrity='sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0'
            crossorigin='anonymous'
          ></link> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <script
            src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.slim.min.js'
            integrity='sha512-6ORWJX/LrnSjBzwefdNUyLCMTIsGoNP6NftMy2UAm1JBm6PRZCO1d7OHBStWpVFZLO+RerTvqX/Z9mBFfCJZ4A=='
            crossorigin='anonymous'
          ></script>
          <script
            src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js'
            integrity='sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8'
            crossorigin='anonymous'
          ></script> */}
          {/* <script
            src='https://kit.fontawesome.com/9c12752ffd.js'
            crossorigin='anonymous'
          ></script> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
