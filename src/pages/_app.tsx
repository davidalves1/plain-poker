import '../styles/globals.css';
import type { AppProps } from 'next/app';

import '../styles/globals.css';
import React from 'react';
import Header from '@components/Header';

function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Header title="PlanningPoker" />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default App;
