import React, { Component } from 'react';
import base from '../config.js'
import { Link } from 'react-router'
import Questions from './container/questions'


class Answers extends Component {
  constructor(){
    super()
    this.state = {
      answers: 'Please wait while we load the correct answers'
    }
  }


  render(){
    return(
      <div>
      <p>Answers</p>
      </div>
    )

  }
}
 export default Answers
