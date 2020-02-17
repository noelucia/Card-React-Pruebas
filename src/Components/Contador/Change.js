import React, { useState } from 'react';
const ChangeAll = () => {
  const [char, setCounter] = useState();
  const NewChange = event => {
    let caracter = event.target.value;
    setCounter(caracter);
  };
  const [colorb, setColor] = useState();
  const NewColor = event => {
    let colores = event.target.value;
    setColor(colores);
  };
  return (
    <div className="input-new">
      <input type="text" onChange={NewChange}></input>
      <span id="char">{char}</span>
      <input type="color" onChange={NewColor}></input>
      <span id="colorb">{colorb}</span>
    </div>
  );
};
export default ChangeAll;
