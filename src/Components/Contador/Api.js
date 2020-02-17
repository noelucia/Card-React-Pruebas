import React from 'react';
import Axios from 'axios';

export default class Api extends React.Component {
  state = {
    data: []
  };

  componentDidMount = async () => {
    try {
      const info = await Axios.get("https://jsonplaceholder.typicode.com/todos");
      this.setState({data: info.data});
    } catch (err) {
        console.log(err)
    }
    
  };

  render() {
    return (
      <ul>
        {this.state.data.map(item => {
          return <li>{item.title}</li>;
        })}
      </ul>
    );
  }
}
