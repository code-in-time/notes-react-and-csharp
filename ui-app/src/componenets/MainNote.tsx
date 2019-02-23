import React, { Component } from 'react';
import { observable, computed } from 'mobx'
import { observer, inject, IStoresToProps } from 'mobx-react'
import style from '../styles/MainNote.module.css'
import { IProfileStore } from '../interfaces/Profile/IProfileStore';
import { INote} from '../interfaces/Profile/INote'
import { IStore } from '../interfaces/store/IStore'
import { IProfile } from '../interfaces/Profile/IProfile';


interface props {
  profileStore: IProfileStore
}

// TODOD set state type
// interface state {

// }


@inject("profileStore")
@observer
class MainNote extends Component<props, any > {

  static defaultProps = {profileStore:{}}

  componentDidMount() {
    this.props.profileStore.loadProfile();
  }

  render() {
    const { address, details, notes } = this.props.profileStore.profile;

    // console.log('s', this.props.Store.profileStore.profile.Address.No)
    return (
      <div className={style.makeLookCool}>
        <ul className="list-group">
          <li className="list-group-item">{address.no} {address.place} {address.road} {address.street}</li>
          <li className="list-group-item">{details.age} {details.cellNumber} {details.email} {details.name}</li>
          <li className="list-group-item">
            <ul className="list-group">
              {
                notes.map((v:INote) => <li className="list-group-item">{String(v.archived)} - {v.date} - {String(v.private)} - {v.subject} - {v.text}</li>)
              }
            </ul>
          </li>
        </ul>

      </div>
    );
  }
}

export default MainNote;
