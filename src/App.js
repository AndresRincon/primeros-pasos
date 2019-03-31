import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import userinputs from './UserInput/UserInput';

class App extends Component {
  state = {
    userName:'UchiAndres'
  }
  cambiarUsuarioHandler = (event) =>{
    //console.log('funciona papu');
    this.setState({
      userName: event.target.value
    })
  }
  render() {
    const style = {
      border:'1px solid #000',
      background: '#000',
      color:'#FFF',
      padding : '8px'
    };
    return (
      <div className="App">
        <UserOutput style={style} user={this.state.userName} />
        <UserInput user={this.state.userName} evento={this.cambiarUsuarioHandler} />
      </div>
    );
  }
}

export default App;
