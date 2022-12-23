import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Technovanza VJTI 2022-23 | Revamping the Technical Cosmos</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="favicons/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    </Head>

    <Component {...pageProps} />
  </>
);

export default MyApp;
