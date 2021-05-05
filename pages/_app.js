import '/styles/globals.css'; // 글로벌css
import React from 'react';
import withRedux from 'next-redux-wrapper';
import configureStore from 'reducers/store';


function MyApp({ Component, pageProps, store }) {
  return (
    <>
      <head>
        <title> devkor-front </title>
      </head>
      <Component {...pageProps} />
      <footer>
        footer
      </footer>
    </>
  )
}

export default withRedux(configureStore)(MyApp);
