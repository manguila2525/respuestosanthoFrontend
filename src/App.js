import React, { Fragment, useState } from 'react';

import './App.css';
import { Aceites, Frenos } from './assets/js/handleSales';
import Header from './components/Header';
import FormInformation from './components/FormInformation';
import Items from './components/Items'
import Abstract from './components/Abstract';

function App() {
  const [name, setName] = useState(null);
  const [location, setLocation] = useState(null);
  const [echo3, setEcho3] = useState(0);
  const [echo4, setEcho4] = useState(0)
  const [gang1, setGang1] = useState(0)
  const [gang2, setGang2] = useState(0)
  const [gang3, setGang3] = useState(0)

  const [budget, setBudget] = useState({
    name,
    location,
    echo3,
    echo4,
    gang1,
    gang2,
    gang3
  });
  console.log(Aceites.cantidad)
  console.log(Frenos.cantidad)
  if (echo3 < 0) {
    setEcho3(0)
    setBudget({
      ...budget,
      echo3: 0
    })
  }
  if (echo4 < 0) {
    setEcho4(0)
    setBudget({
      ...budget,
      echo4: 0
    })
  }
  if (gang1 < 0) {
    setGang1(0)
    setBudget({
      ...budget,
      gang1: 0
    })
  }
  if (gang2 < 0) {
    setGang2(0)
    setBudget({
      ...budget,
      gang2: 0
    })
  }
  if (gang3 < 0) {
    setGang3(0)
    setBudget({
      ...budget,
      gang3: 0
    })
  }
  const handleName = (value) => {
    setName(value)
    setBudget({
      ...budget,
      name: value
    })
  }
  const handleLocation = (value) => {
    setLocation(value)
    setBudget({
      ...budget,
      location: value
    })
  }
  const handleEcho3 = (condition) => {
    if (condition) {
      setEcho3(echo3 + 1)
      setBudget({
        ...budget,
        echo3: (echo3 + 1)
      })
    }
    if (!condition) {
      setEcho3(echo3 - 1)
      setBudget({
        ...budget,
        echo3: (echo3 - 1)
      })
    }
  }
  const handleEcho4 = (condition) => {
    if (condition) {
      setEcho4(echo4 + 1)
      setBudget({
        ...budget,
        echo4: (echo4 + 1)
      })
    }
    if (!condition) {
      setEcho4(echo4 - 1)
      setBudget({
        ...budget,
        echo4: (echo4 - 1)
      })
    }
  }

  const handleGang1 = (condition) => {
    if (condition) {
      setGang1(gang1 + 1)
      setBudget({
        ...budget,
        gang1: (gang1 + 1)
      })
    }
    if (!condition) {
      setGang1(gang1 - 1)
      setBudget({
        ...budget,
        gang1: (gang1 - 1)
      })
    }
  }
  const handleGang2 = (condition) => {
    if (condition) {
      setGang2(gang2 + 1)
      setBudget({
        ...budget,
        gang2: (gang2 + 1)
      })
    }
    if (!condition) {
      setGang2(gang2 - 1)
      setBudget({
        ...budget,
        gang2: (gang2 - 1)
      })
    }
  }
  const handleGang3 = (condition) => {
    if (condition) {
      setGang3(gang3 + 1)
      setBudget({
        ...budget,
        gang3: (gang3 + 1)
      })
    }
    if (!condition) {
      setGang3(gang3 - 1)
      setBudget({
        ...budget,
        gang3: (gang3 - 1)
      })
    }
  }


  return (
    <Fragment>
      <Header />
      <FormInformation />
      {/* <Items handleEcho3={handleEcho3} handleEcho4={handleEcho4} handleGang1={handleGang1} handleGang2={handleGang2} handleGang3={handleGang3} /> */}

      {/* <Abstract
        name={name}
        location={location}
        echo3={echo3}
        echo4={echo4}
        gang1={gang1}
        gang2={gang2}
        gang3={gang3} /> */}
    </Fragment>
  );
}

export default App;
