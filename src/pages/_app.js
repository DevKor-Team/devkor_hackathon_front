import 'styles/globals.scss'; // 글로벌css
import React from 'react';
import withRedux from 'next-redux-wrapper';
import configureStore from 'reducers/store';
import PropTypes from 'prop-types';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

function MyApp({ Component, pageProps /* , store */ }) {
  return (
    <>
      <head>
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
