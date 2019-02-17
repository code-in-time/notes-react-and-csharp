import React, { Component } from 'react';
// import MainNote from './MainNote';
import { observable, computed } from 'mobx'
import { observer, inject, IStoresToProps } from 'mobx-react'
import { IStore } from '../interfaces/store/IStore'
import style from '../styles/App.module.css';
import { IProfileStore } from '../interfaces/Profile/IProfileStore';


interface AppProps {
  profileStore?: IProfileStore
}

@inject("profileStore")
@observer
class App extends Component<AppProps> {
  static defaultProps = { profileStore: {counter: 0}};
  render() {
    return (
      <div className={`container-fluid w-100 h-100 ${style.background}`}>
        {/* <MainNote/> */}
        {console.log('props', this.props.profileStore.counter)}
      </div>
    );
  }
}

export default App;
