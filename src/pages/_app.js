import 'src/styles/globals.css'; // 글로벌css
import React from 'react';
import withRedux from 'next-redux-wrapper';
import configureStore from 'src/reducers/store';
import PropTypes from 'prop-types';

function MyApp({ Component, pageProps /* , store */ }) {
  return (
    <>
      <head>
        <title> devkor-front </title>
      </head>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
      <footer>footer</footer>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
  cache: PropTypes.object,
};

export default withRedux(configureStore)(MyApp);
