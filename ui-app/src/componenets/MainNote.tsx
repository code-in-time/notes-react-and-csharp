import React, { Component } from 'react';
import { observable, computed } from 'mobx'
import { observer, inject, IStoresToProps } from 'mobx-react'
import style from '../styles/MainNote.module.css'
import { IProfileStore } from '../interfaces/Profile/IProfileStore';
import { INote} from '../interfaces/Profile/INote'
import { IStore } from '../interfaces/store/IStore'
import { IProfile } from '../interfaces/Profile/IProfile';


interface props {
  ProfileStore: IProfileStore
}

// TODOD set state type
// interface state {

// }


@inject("ProfileStore")
@observer
class MainNote extends Component<props, any > {

  static defaultProps = {ProfileStore:{}}

  componentDidMount() {
    this.props.ProfileStore.loadProfile();
  }

  render() {
    const { Address, Details, Notes } = this.props.ProfileStore.Profile;

    // console.log('s', this.props.Store.ProfileStore.Profile.Address.No)
    return (
      <div className={style.makeLookCool}>
        <ul className="list-group">
          <li className="list-group-item">{Address.No} {Address.Place} {Address.Road} {Address.Road}</li>
          <li className="list-group-item">{Details.Age} {Details.CellNumber} {Details.Email} {Details.Name}</li>
          <li className="list-group-item">
            <ul className="list-group">
              {
                Notes.map((v:INote) => <li className="list-group-item">{String(v.Archived)} - {v.Date} - {String(v.Private)} - {v.Subject} - {v.Text}</li>)
              }
            </ul>
          </li>
        </ul>

      </div>
    );
  }
}

export default MainNote;
