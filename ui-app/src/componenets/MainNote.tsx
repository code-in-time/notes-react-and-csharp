import React, { Component } from 'react';
import { observable, computed } from 'mobx'
import { observer, inject } from 'mobx-react'

@inject("Store")
@observer
class MainNote extends Component<any> {
  componentDidMount() {

  }

  render() {

    console.log('s', this.props.Store.profileStore.profile)
    return (
      <div>
          MainNote
          {this.props.Store.profileStore.counter}
      </div>
    );
  }
}

export default MainNote;
