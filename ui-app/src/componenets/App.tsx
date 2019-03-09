import React, { Component } from 'react';
import MainNote from './MainNote';
import { observable, computed } from 'mobx'
import { observer, inject, IStoresToProps } from 'mobx-react'
import style from '../styles/App.module.css';
import { IProfileStore } from '../interfaces/Profile/IProfileStore';
import NewNoteForm from './NewNoteForm';
import { LearnTypeScript } from "./LearnTypeScript";


interface props {
  ProfileStore: IProfileStore
}

@inject("ProfileStore")
@observer
class App extends Component<props> {

  static defaultProps = { ProfileStore: {} }

  render() {
    return (
      <div className={`container-fluid w-100 h-100 ${style.background}`}>
        <MainNote />
        <NewNoteForm />
        {/* {console.log('props', this.props.ProfileStore.Counter)} */}
        <LearnTypeScript />
      </div>
    );
  }
}

export default App;
