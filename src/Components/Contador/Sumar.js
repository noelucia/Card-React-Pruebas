import React , { useState }from 'react';
import './Sumar.scss';

const Sumar = () => {
        const [numero, setCounter] = useState(10);
        const SumarAll = event => {
          setCounter(numero+1);
        };  
  return (
    <div className="input-sumar">
      <span>{numero}</span>
      <button onClick={SumarAll}>SUMAR</button>
    </div>
  );
};

export default Sumar;
