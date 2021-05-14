import React from 'react';
import { Banner1 } from 'containers/Home/Banner1';
import { Banner2 } from 'containers/Home/Banner2';
import { Banner3 } from 'containers/Home/Banner3';

export default function Home() {
  return (
    <div className="wrapper">
      <div className="home__container">
        <Banner1 />
        <Banner2 />
        <Banner3 />
      </div>
    </div>
  );
}
