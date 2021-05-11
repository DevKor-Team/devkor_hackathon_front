import 'styles/globals.scss'; // 글로벌css
import React from 'react';
import withRedux from 'next-redux-wrapper';
import configureStore from 'reducers/store';
import PropTypes from 'prop-types';
import Navbar from 'containers/Navbar';
import Footer from 'containers/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title> devkor-front </title>
      </head>
      <Navbar />
      <div class="wrapper">
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
  cache: PropTypes.object,
};

export default withRedux(configureStore)(MyApp);
