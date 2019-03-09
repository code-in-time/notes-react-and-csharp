import React, { Component } from 'react';
import {Person, Boy} from '../LearningClasses/Person'
export interface LearnTypeScriptProps {

}

export interface LearnTypeScriptState {

}

class LearnTypeScript extends React.Component<LearnTypeScriptProps, LearnTypeScriptState> {


  runCode() {
    let s: Person = new Person();
    console.log('s', s)


    let d = new Boy()

    d.name = 'ben'
    d.tel = 88888
    d.details = 'hjhjkhjkhjkhkh'
    console.log('d', d)
    console.log('s', s)
  }






  render() {
    {this.runCode()}
    return (<div>test</div>);
  }
}

export { LearnTypeScript };