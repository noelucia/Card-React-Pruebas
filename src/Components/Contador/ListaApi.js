import React from 'react';
import Axios from 'axios';
import './ListaApi.scss';

export default class ListaApi extends React.Component {
  state = {
    data: []
  };

  componentDidMount = async () => {
    try {
      const info = await Axios.get("https://jsonplaceholder.typicode.com/users");
      this.setState({data: info.data});
    } catch (err) {
        console.log(err)
    }
    
  };

  render() {
    return (
      <ul>
        {this.state.data.map(item => {
          return <div className="Recuadro">
          <li className="itemName">{item.name}</li>
          <li>{item.username}</li>
          <li>{item.email}</li>
          </div>
        })}
      </ul>
    );
  }
}
