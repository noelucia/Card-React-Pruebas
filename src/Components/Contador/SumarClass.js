import React , { useState }from 'react';
import './Sumar.scss';


export default class SumarClass extends React.Component{
    state={
        counter: 10
    }
    SumarAll = (event) => {
        this.setState({counter: this.state.counter +1});
      }; 

      render(){
        const {counter}= this.state;
        return (
            <div className="input-sumar">
              <span>{this.state.counter}</span>
              <button onClick={this.SumarAll}>SUMAR</button>
            </div>
          );
      }
}