import React, { useState, useEffect } from "react";
import Axios from "axios";
import './ListaApiFuncional.scss';

const ListaApiFuncional = props => {
  const [data, setData] = useState([]); // es una variable constante que no se puede editar a mano, se edita con setData y en el useState se determina el valor 
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    console.log("Se ejecuta useEffect");
  }, [flag]);
  const handleClick = props => {
    setFlag(!flag); //Cuando se clickea cambia el valor del flag
  };
  useEffect(() => { // se ejecuta una accion cada vez que algo cambia de valor
    getFromApi();
  }, []);// esta vacio para que se ejecute primero

  const getFromApi = async () => {
    try {
      const res = await Axios.get("https://jsonplaceholder.typicode.com/users");
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Change!</button> {flag ? "true" : "false"}
      <ul className={props.prop1}>
        {data.map(item => {
          return <div className="Recuadro-Funcional">
            <li className="items"><span className="negrita">Name: </span>{item.name}</li>
            <li className="items"><span className="negrita">Username: </span>{item.username}</li>
            <li className="items"> <span className="negrita">Email: </span>{item.email}</li>
          </div>;
        })}
      </ul>
    </div>
  );
};

export default ListaApiFuncional;
