import React, { Component } from 'react';
import MainNote from './MainNote';
import style from '../styles/App.module.css';

class App extends Component {
  render() {
    return (
      <div className={`container-fluid w-100 h-100 ${style.background}`}>
        <MainNote/>
      </div>
    );
  }
}

export default App;
