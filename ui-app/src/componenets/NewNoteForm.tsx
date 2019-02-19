import React, { Component } from 'react';
import { observable, computed } from 'mobx'
import { observer, inject, IStoresToProps } from 'mobx-react'
import style from '../styles/NewNoteForm.module.css';
import { IProfileStore } from '../interfaces/Profile/IProfileStore';
import { INote} from '../interfaces/Profile/INote'
import { IProfile } from '../interfaces/Profile/IProfile'


interface props {
  profileStore: IProfileStore
}

interface state {
    profile: IProfile
}


@inject("profileStore")
@observer
// TODO make the state
class NewNoteForm extends Component<props, state> {
    
  static defaultProps = {profileStore:{}}

  state = {
      profile: {
            details: {
                name: '',
                email: '',
                age: 0,
                cellNumber: 0,
            },
            address: {
                no: 0,
                road: 'string',
                street: 'string',
                place: 'string',
            },
            notes: [{
                date: 'Date | string',
                subject: 'string',
                text: 'string',
                private: true,
                archived: true,
            }]
          }
      }

    submitForm: any = (e: any) => {
        console.log(e)
        e.preventDefault();
        console.log(this.state.profile)
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
                    <div className="row">
                        <div className="col">Details</div>
                        <div className={`col ${style.inputArea}`}>
                            <input type="text" placeholder="name" onChange={(e)=> this.setState({profile:{...this.state.profile, name: e.target.value}}) } />
                            <input type="text" placeholder="email" onChange={(e)=> this.setState({profile:{...this.state.profile, email: e.target.value}}) } />
                            <input type="text" placeholder="age" onChange={(e)=> this.setState({profile:{...this.state.profile, age: e.target.value}}) } />
                            <input type="text" placeholder="cellNumber" onChange={(e)=> this.setState({profile:{...this.state.profile, cellNumber: e.target.value}}) } />
                            <input type="text" placeholder="details" onChange={(e)=> this.setState({profile:{...this.state.profile, details: e.target.value}}) } />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">address</div>
                        <div className="col">
                        
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">notes</div>
                        <div className="col">
                        
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
