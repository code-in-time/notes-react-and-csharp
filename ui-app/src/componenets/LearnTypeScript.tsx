import React, { Component } from 'react';
import {Person, Boy,Girl} from '../LearningClasses/Person'
import CarExercise from '../LearningClasses/CarExercise'
export interface LearnTypeScriptProps {

}

export interface LearnTypeScriptState {

}

class LearnTypeScript extends React.Component<LearnTypeScriptProps, LearnTypeScriptState> {


  runCode() {
    let s: Person = new Person();
    console.log('s', s)
    let b = new Boy()
    console.log('b', b)
    let g = new Girl()
    console.log('g', g)
    console.log(CarExercise)
  }








  render() {
    // {this.runCode()}
    return (<div>test</div>);
  }
}

export { LearnTypeScript };