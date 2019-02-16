import React, { Component } from 'react';
import { observable, computed } from 'mobx'
import { observer, inject } from 'mobx-react'
import style from '../styles/MainNote.module.css'

@inject("Store")
@observer
class MainNote extends Component<any> {
  componentDidMount() {

  }

  render() {
    const { Address } = this.props.Store.profileStore.profile;

    console.log('s', this.props.Store.profileStore.profile.Address.No)
    return (
      <div className={style.makeLookCool}>
        <ul className="list-group">
          <li className="list-group-item">{Address.No} {Address.Place} {Address.Road} {Address.Street}</li>
        </ul>

      </div>
    );
  }
}

export default MainNote;
