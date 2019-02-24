import React, { Component } from 'react';
import { observable, computed } from 'mobx'
import { observer, inject, IStoresToProps } from 'mobx-react'
import style from '../styles/NewNoteForm.module.css';
import { IProfileStore } from '../interfaces/Profile/IProfileStore';
import { INote} from '../interfaces/Profile/INote'
import { IProfile } from '../interfaces/Profile/IProfile'
import { IDetails } from '../interfaces/Profile/IDetails';
import { IAddress } from '../interfaces/Profile/IAddress';
import { cloneDeep } from 'lodash';


interface props {
  ProfileStore: IProfileStore
}

interface state 
{
    Profile: IProfile;
}



@inject("ProfileStore")
@observer
// TODO make the state
class NewNoteForm extends Component<props, state> {
    
  static defaultProps = {ProfileStore:{}}

  state = {
      Profile: {
            Details: {
                Name: 'sasa',
                Email: '',
                Age: 0,
                CellNumber: 0,
            },
            Address: {
                No: 0,
                Road: '',
                Street: '',
                Place: '',
            },
            Notes: [{
                Date: '',
                Subject: '',
                Text: '',
                Private: true,
                Archived: true,
            }]
          }
      }

    submitForm: any = (e: any) => {
        console.log(e)
        e.preventDefault();
        console.log('this.state.profile.details.name', this.state.Profile.Details.Name)
        console.log(this.state.Profile.Notes)
        this.props.ProfileStore.updateProfile(this.state.Profile)
    }

    setElmState = (p1: 'Address' | 'Details' | 'Notes', p2: string, v1: string) : void=> {
        const obj: any = cloneDeep(this.state);
        if (p1 === 'Address' || p1 === 'Details') {
            obj.Profile[p1][p2] = v1
        } else if (p1 === 'Notes' ) {
            obj.Profile.Notes[0][p2] = v1
        }

        // console.log (s);

        // const o = 
        this.setState(obj)
        //     // {profile:{...this.state.profile, ...{details: {name: e.target.value}}}
    }

  render() {
    const { Address, Details, Notes } = this.props.ProfileStore.Profile;

    // console.log('s', this.props.Store.ProfileStore.Profile.Address.No)
    return (
      <div className={`${style.c} ${style.cBorder}`}>
        <form onSubmit={this.submitForm}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Profile</h5>
                    <div className="row pb-2">
                        <div className="col">Details</div>
                        {/* e: React.FormEvent<HTMLInputElement></HTMLInputElement> */}
                        <div className={`col ${style.inputArea}`}>
                            <input type="text" placeholder="name" onChange={(e) : void => this.setElmState('Details' ,'Name', e.target.value) } />
                            <input type="text" placeholder="email" onChange={(e) : void => this.setElmState('Details' ,'Email', e.target.value) } />
                            <input type="text" placeholder="age" onChange={(e) : void => this.setElmState('Details' ,'Age', e.target.value) } />
                            <input type="text" placeholder="cellNumber" onChange={(e) : void => this.setElmState('Details' ,' CellNumber', e.target.value) } />
                        </div>
                    </div>
                    <div className="row pt-2 pb-2 border-top">
                        <div className="col">address</div>
                        <div className="col">
                            <input type="text" placeholder="no" onChange={(e) : void => this.setElmState('Address' ,'No', e.target.value) } />
                            <input type="text" placeholder="road" onChange={(e) : void => this.setElmState('Address' ,'Road', e.target.value) } />
                            <input type="text" placeholder="street" onChange={(e) : void => this.setElmState('Address' ,'Street', e.target.value) } />
                            <input type="text" placeholder="place" onChange={(e) : void => this.setElmState('Address' ,'Place', e.target.value) } />
                        </div>
                    </div>
                    <div className="row pt-2 border-top">
                        <div className="col">notes</div>
                        <div className="col">
                        {/* // TODO set the notes */}
                            <input type="text" placeholder="date" onChange={(e) : void => this.setElmState('Notes' ,'Date', e.target.value) } />
                            <input type="text" placeholder="subject" onChange={(e) : void => this.setElmState('Notes' ,'Subject', e.target.value) } />
                            <input type="text" placeholder="text" onChange={(e) : void => this.setElmState('Notes' ,'Text', e.target.value) } />
                            <input type="text" placeholder="private" onChange={(e) : void => this.setElmState('Notes' ,'Private', e.target.value) } />
                            <input type="text" placeholder="archived" onChange={(e) : void => this.setElmState('Notes' ,'Archived', e.target.value) } />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col"><button type="submit">submit</button></div>
                    </div>
                </div>
            </div>
        </form>
      </div>
    );
  }
}

export default NewNoteForm;
