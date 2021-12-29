import React, { Fragment } from 'react';
import Subtitle from './Subtitle';
import Card from './Card';

import img from '../assets/img/img.png';
import img2 from '../assets/img/img2.png';
import img3 from '../assets/img/img3.png';
const Items = ({ handleEcho3, handleEcho4, handleGang1, handleGang2, handleGang3 }) => {
  return (
    <Fragment>
      <div className="my">
        <Subtitle subtitle="Equipment by Alexa" />
      </div>
      <div className="container">
        <div className="my row">
          <Card title="Echo dot 3g" handleEcho3={handleEcho3} image={img} info="echo3" />
          <Card title="Echo dot 4g" handleEcho4={handleEcho4} image={img2} info="echo4" />
        </div>
      </div>
      <div className="my">
        <Subtitle subtitle="Switches" />
      </div>
      <div className="container">
        <div className="my row">
          <Card title="Switch 1" handleGang1={handleGang1} image={img3} info="gang1" />
          <Card title="Switch 2" handleGang2={handleGang2} image={img3} info="gang2" />
          <Card title="Switch 3" handleGang3={handleGang3} image={img3} info="gang3" />
        </div>
      </div>
    </Fragment>
  );
}

export default Items;
