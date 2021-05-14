import React from 'react';
import { ProjectItem } from 'components/ProjectItem';

export const Banner3 = () => {
  return (
    <div className="home__banner3">
      <div className="home__banner3__projectwrapper">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
      <div className="home__banner3__projectwrapper">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
      <div className="home__banner3__projectwrapper">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </div>
  );
};

export default Banner3;
