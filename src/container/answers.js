import React, { Component } from 'react';
import base from '../config.js'
import axios from 'axios'


class Answers extends Component {
  constructor(){
    super()
    this.state = {
      answers: []
    }
  }
  componentDidMount(){
    axios.get('http://tiy-orl-proxy.herokuapp.com/trivia?limit=5&category=star+wars')
    .then(response=>{
      this.setState({
        answers: response.data
      })
      console.log(response.data)
    })
  }



  render(){
    return(
      <div>
      <h1>Here are the correct answers</h1>
      <ol>
      {this.state.answers.map((answer,index) =>{ return <li key={index}> {answer.answer} </li>})}
      </ol>
      <p>The winner is: {this.state.name}</p>
      </div>
    )

  }
}
 export default Answers
