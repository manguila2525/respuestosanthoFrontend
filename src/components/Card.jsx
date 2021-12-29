import React from 'react';


const Card = ({ title, handleEcho3, handleEcho4, info, image, handleGang1, handleGang2, handleGang3 }) => {
  const handleAdd = (e) => {
    e.preventDefault();
    if (e.target.name === "echo3") {
      handleEcho3(true)
    }
    if (e.target.name === "echo4") {
      handleEcho4(true)
    }
    if (e.target.name === "gang1") {
      handleGang1(true)
    }
    if (e.target.name === "gang2") {
      handleGang2(true)
    }
    if (e.target.name === "gang3") {
      handleGang3(true)
    }
  }
  const handleRemove = (e) => {
    e.preventDefault();
    if (e.target.name === "echo3") {
      handleEcho3(false)
    }
    if (e.target.name === "echo4") {
      handleEcho4(false)
    }
    if (e.target.name === "gang1") {
      handleGang1(false)
    }
    if (e.target.name === "gang2") {
      handleGang2(false)
    }
    if (e.target.name === "gang3") {
      handleGang3(false)
    }
  }
  return (
    <div className="card">
      <div className="card__header">{title}</div>
      <div className="card__body">
        <img src={image} alt="" />
        <div className="btn__group">
          <button onClick={handleAdd} name={info}>+</button>
          <button onClick={handleRemove} name={info}>-</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
