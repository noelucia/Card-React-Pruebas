import React from "react"; // exportar react desde un modulo
import "./App.css";
import Card from "./Components/Card/Card";
import HeaderImg from "./Components/Card/foto.jpg";
import Text from "./Components/Contador/Contador";
import Sumar from "./Components/Contador/SumarClass";
import ListaApi from "./Components/Contador/ListaApi";
import ListaApiFuncional from "./Components/Contador/ListaFuncional";



function App() {
  //importa una funcion
  const imagenes = [HeaderImg];
  return (
    <div>
      {imagenes.map(img => {
        //hicimos un map para que loope y repita el headerImg
        return <Card title="REACT!" headerImg={img}></Card>; // {img} porque quiero que me devuelva la imagen de ese HeaderImg
      })}
      <div>
        <Text></Text>
      </div>
      <div>
        <Sumar></Sumar>
      </div>
      <div>
        <ListaApi></ListaApi>
      </div>
      <div>
        <ListaApiFuncional></ListaApiFuncional>
      </div>
    </div>
  );
}

export default App;
