import React, { Component } from 'react';
import base from '../config.js'
import axios from 'axios'
import TextField from 'material-ui/TextField';

const style ={
  width: 300,
  padding: 10
}
class Questions extends Component{
  constructor(){
    super()
    this.state={
      questions: []
    }
  }
  componentDidMount(){
    /*
    base.fetch('FirebaseGenNode/games/gamesRound/question', {
    context: this,
    then: (data) => {
    this.setState({
      questions: data
    })
    }
    })
        base.syncState('FirebaseGenNode/games/gamesRound/question', {
        state: 'FirebaseGenNode/games/gamesRound/question',
        context: this,
        asArray: true
      })
    */
    axios.get('http://tiy-orl-proxy.herokuapp.com/trivia?limit=5&category=star+wars')
    .then(response=>{
      this.setState({
        questions: response.data
      })
      console.log(response.data)

    })
  }


  render(){
    return(
      <div className='question'>
          <ol>
            {this.state.questions.map((q, index) =>{ return <li key={index}> {q.question}
            <TextField
               hintText="Answer goes here"
               floatingLabelText="Type your answer here"
               floatingLabelFixed={true}
               style={style}/>
            </li>})}
          </ol>
      </div>
    )
  }

}
export default Questions
