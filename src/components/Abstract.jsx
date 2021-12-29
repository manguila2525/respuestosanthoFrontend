import React, { Fragment } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer'
import DocumentPdf from './DocumentPdf';
const Abstract = ({ name, location, echo3, echo4, gang1, gang2, gang3 }) => {
  return (
    <Fragment>
      <div className={name || location || echo3 || echo4 || gang1 || gang2 || gang3 ? 'd-block container abstract' : 'd-none'}>
        <h2 className="m0 text-muted">Abstract</h2>
        <div className={name ? 'd-block abstract__group' : 'd-none'}>
          <p>Name:</p>
          <h3 className="abstract__description">{name}</h3>
        </div>
        <div className={location ? 'd-block abstract__group' : 'd-none'}>
          <p>Location:</p>
          <h3 className="abstract__description">{location}</h3>
        </div>
        <div className={echo3 || echo4 ? 'd-block' : 'd-none'} >
          <p>Echos:</p>
          <div className={echo3 ? 'd-block abstract__group' : 'd-none'}>
            <h3 className="abstract__description"><div className="line"></div>Echo dot 3g: {echo3}</h3>
          </div>
          <div className={echo4 ? 'd-block abstract__group' : 'd-none'}>
            <h3 className="abstract__description"><div className="line"></div>Echo dot 4g: {echo4}</h3>
          </div>
        </div>
        <div className={gang1 || gang2 || gang3 ? 'd-block' : 'd-none'}>
          <p>Switch:</p>
          <div className={gang1 ? 'd-block abstract__group' : 'd-none'}>
            <h3 className="abstract__description"><div className="line"></div>Switch 1: {gang1}</h3>
          </div>
          <div className={gang2 ? 'd-block abstract__group' : 'd-none'}>
            <h3 className="abstract__description"><div className="line"></div>Switch 2: {gang2}</h3>
          </div>
          <div className={gang3 ? 'd-block abstract__group' : 'd-none'}>
            <h3 className="abstract__description"><div className="line"></div>Switch 3: {gang3}</h3>
          </div>
        </div>
        <div className="my">
          <PDFDownloadLink fileName="alexa.pdf" document={<DocumentPdf name={name} location={location} echo3={echo3} echo4={echo4} gang1={gang1} gang2={gang2} gang3={gang3} />}>
            <button className="container btn--submit">Create budget</button>
          </PDFDownloadLink>
        </div>
      </div>
    </Fragment>
  );
}

export default Abstract;
