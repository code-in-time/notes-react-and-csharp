import React, { Component } from 'react';
import { observable, computed } from 'mobx'
import { observer, inject } from 'mobx-react'

@inject("Store")
@observer
class MainNote extends Component {
  componentDidMount() {
    console.log(this.props)
  }

  render() {
    console.log(this.props)
    return (
      <div>
          MainNote
      </div>
    );
  }
}

export default MainNote;
