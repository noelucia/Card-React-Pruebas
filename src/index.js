import React from 'react'; //Importo un modulo  que se llama react 
import ReactDOM from 'react-dom';
import './index.css'; //importo un archivo css el ./ significa en la misma carpeta buscame ../ es para volver hacia atras
import App from './App';  //es un componente de
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
