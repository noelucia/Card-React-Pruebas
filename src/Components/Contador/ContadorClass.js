import React from 'react';
import './Contador.scss';

const max=140;
export default class ContadorClass extends React.Component{
    state={
        counter: 140
    }


HandleChange =(event)=>{
    const chars=event.target.value.length
    this.setState({counter: max - chars})
}

render(){
    const {counter}= this.state;
    return (
        <section className="contenedor-area">
          <h1 className="titulo">Contador de caracteres</h1>
          <textarea onChange={this.HandleChange} rows="15" cols="35"></textarea>
          <span>{this.state.counter} Caracteres que faltan</span>
        </section>
      );
    }
}