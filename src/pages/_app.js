/* eslint-disable react/jsx-props-no-spreading */
import 'styles/globals.scss'; // 글로벌css
import React from 'react';
import withRedux from 'next-redux-wrapper';
import configureStore from 'reducers/store';
import PropTypes from 'prop-types';
import { Navbar } from 'components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <head>
        <title> devkor-front </title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <Navbar />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
};

export default withRedux(configureStore)(MyApp);
