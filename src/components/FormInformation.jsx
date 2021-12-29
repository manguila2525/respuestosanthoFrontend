import React, { Fragment } from 'react';
import Subtitle from './Subtitle';
const Forminformation = ({ handleName, handleLocation }) => {
  const handleInput = (e) => {
    if (e.target.name === "name") {
      handleName(e.target.value)
    }
    if (e.target.name === "location") {
      handleLocation(e.target.value)
    }
  }
  return (
    <Fragment>
      <Subtitle subtitle="Customer information" />
      <div className="formInformation">
        <div className="formInformation__group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Write name" onChange={handleInput} name="name" />
        </div>
        <div className="formInformation__group">
          <label htmlFor="location">Location</label>
          <input type="text" id="location" placeholder="Write location" onChange={handleInput} name="location" />
        </div>
      </div>
    </Fragment>
  );
}

export default Forminformation;
