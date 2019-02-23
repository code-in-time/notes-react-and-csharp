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
  profileStore: IProfileStore
}

interface state 
{
    profile: IProfile;
}



@inject("profileStore")
@observer
// TODO make the state
class NewNoteForm extends Component<props, state> {
    
  static defaultProps = {profileStore:{}}

  state = {
      profile: {
            details: {
                name: 'sasa',
                email: '',
                age: 0,
                cellNumber: 0,
            },
            address: {
                no: 0,
                road: '',
                street: '',
                place: '',
            },
            notes: [{
                date: '',
                subject: '',
                text: '',
                private: true,
                archived: true,
            }]
          }
      }

    submitForm: any = (e: any) => {
        console.log(e)
        e.preventDefault();
        console.log('this.state.profile.details.name', this.state.profile.details.name)
        console.log(this.state.profile.notes)
    }

    setElmState = (p1: 'address' | 'details' | 'notes', p2: string, v1: string) : void=> {
        const obj: any = cloneDeep(this.state);
        if (p1 === 'address' || p1 === 'details') {
            obj.profile[p1][p2] = v1
        } else if (p1 === 'notes' ) {
            obj.profile.notes[0][p2] = v1
        }

        // console.log (s);

        // const o = 
        this.setState(obj)
        //     // {profile:{...this.state.profile, ...{details: {name: e.target.value}}}
    }

  render() {
    const { address, details, notes } = this.props.profileStore.profile;

    // console.log('s', this.props.Store.profileStore.profile.Address.No)
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
                            <input type="text" placeholder="name" onChange={(e) : void => this.setElmState('details' ,'name', e.target.value) } />
                            <input type="text" placeholder="email" onChange={(e) : void => this.setElmState('details' ,'email', e.target.value) } />
                            <input type="text" placeholder="age" onChange={(e) : void => this.setElmState('details' ,'age', e.target.value) } />
                            <input type="text" placeholder="cellNumber" onChange={(e) : void => this.setElmState('details' ,' name', e.target.value) } />
                        </div>
                    </div>
                    <div className="row pt-2 pb-2 border-top">
                        <div className="col">address</div>
                        <div className="col">
                            <input type="text" placeholder="no" onChange={(e) : void => this.setElmState('address' ,'no', e.target.value) } />
                            <input type="text" placeholder="road" onChange={(e) : void => this.setElmState('address' ,'road', e.target.value) } />
                            <input type="text" placeholder="street" onChange={(e) : void => this.setElmState('address' ,'street', e.target.value) } />
                            <input type="text" placeholder="place" onChange={(e) : void => this.setElmState('address' ,'place', e.target.value) } />
                            <input type="text" placeholder="place" onChange={(e) : void => this.setElmState('address' ,'place', e.target.value) } />
                        </div>
                    </div>
                    <div className="row pt-2 border-top">
                        <div className="col">notes</div>
                        <div className="col">
                        {/* // TODO set the notes */}
                            <input type="text" placeholder="date" onChange={(e) : void => this.setElmState('notes' ,'date', e.target.value) } />
                            <input type="text" placeholder="subject" onChange={(e) : void => this.setElmState('notes' ,'subject', e.target.value) } />
                            <input type="text" placeholder="text" onChange={(e) : void => this.setElmState('notes' ,'text', e.target.value) } />
                            <input type="text" placeholder="private" onChange={(e) : void => this.setElmState('notes' ,'private', e.target.value) } />
                            <input type="text" placeholder="archived" onChange={(e) : void => this.setElmState('notes' ,'archived', e.target.value) } />
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
