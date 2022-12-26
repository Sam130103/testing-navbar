import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import { Background } from '../components';

const MyApp = ({ Component, pageProps: { session, ...pageProps } }, AppProps) => (

  <SessionProvider session={session}>
  {/* <Background /> */}
    <Head>
      <title>Technovanza VJTI 2022-23 | Revamping the Technical Cosmos</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="favicons/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />eventsList
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    </Head>
    <Component {...pageProps} />
  </SessionProvider>
);

export default MyApp;
