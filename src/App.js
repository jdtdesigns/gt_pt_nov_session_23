import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Note from './components/Note';

class App extends Component {
  constructor(props){
		super(props);
		this.state = {
      gif: {}
    }
  }

  updateGif = (new_gif) => {
    this.setState({gif: new_gif});
  }


  render() {
    return (
      <div>
        <Note/>
      </div>
    );
  }
}

export default App;
