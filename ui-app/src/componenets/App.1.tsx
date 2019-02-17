import React, { Component } from 'react';
import MainNote from './MainNote';
import { observer } from 'mobx-react';
import style from '../styles/App.module.css';
@observer
export class App extends Component<any> {
  render() {
    return (<div className={`container-fluid w-100 h-100 ${style.background}`}>
      <MainNote />
    </div>);
  }
}
