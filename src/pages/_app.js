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
