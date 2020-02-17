import React, { useState } from 'react';
import './Contador.scss';

const Text = () => {
  const [counter, setCounter] = useState(140);
  const max = 140;
  const HandleChange = event => {
    const chars = event.target.value.length;
    setCounter(max - chars);
  };
  return (
    <section className="contenedor-area">
      <h1 className="titulo">Contador de caracteres</h1>
      <textarea onChange={HandleChange} rows="15" cols="35"></textarea>
      <span id="counter" className="contadores">Faltantes{counter}</span>
    </section>
  );
};

export default Text;
