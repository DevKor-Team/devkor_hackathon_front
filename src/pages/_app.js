/* eslint-disable react/jsx-props-no-spreading */
import 'styles/globals.scss'; // 글로벌css
import React from 'react';
import withRedux from 'next-redux-wrapper';
import Head from 'next/head';
import configureStore from 'reducers/store';
import PropTypes from 'prop-types';
import { Navbar } from 'components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>DevKor Hackathon</title>
        <meta name="og:image" content="/static/favicon.ico" />
        <meta property="og:title" content="DevKor Hackathon Archive" />
        <meta property="og:description" content="Demo archiving service for hackathon" />
        <meta property="og:type" content="website" />
        <meta
          name="keywords"
          content="devkor, 데브코, hackathon, 해커톤, korea university, 고려대"
        />
        <link rel="icon" href="/static/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
};

export default withRedux(configureStore)(MyApp);
