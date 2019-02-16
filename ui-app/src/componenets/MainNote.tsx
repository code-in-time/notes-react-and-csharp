import React, { Component } from 'react';
import { observable, computed } from 'mobx'
import { observer } from 'mobx-react'

@observer
class MainNote extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div>
          MainNote
      </div>
    );
  }
}

export default MainNote;
