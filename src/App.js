import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Note from './components/Note';

class App extends Component {
  constructor(props){
		super(props);
		this.state = {
      gif: ''
    }
  }


  updateGif = gif => {
    this.setState({gif})
  }


  render() {
    return (
      <div>
        <Note updateGif={this.updateGif} />
        <img src={this.state.gif} alt=""/>
      </div>
    );
  }
}

export default App;