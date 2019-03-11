import React, { Component } from 'react';
import { Person, Boy, Girl } from '../LearningClasses/Person'
import CarExercise from '../LearningClasses/CarExercise'
import { To, TV, Radio } from '../LearningClasses/Machines'
import {} from '../LearnGenerics/index'
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

  runMachine = () => {
    let s = 4;
    const T = new To()
    const TVa = new TV()
    const Radioa = new Radio()

    console.log([T, TVa, Radioa])
  }

  render() {
    // {this.runCode()}
    // { this.runMachine() }
    return (<div>test</div>);
  }
}

export { LearnTypeScript };