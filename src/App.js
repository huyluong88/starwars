import React, { Component } from 'react';
import './App.css';
import Questions from './container/questions'
import { Link } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import RaisedButton from 'material-ui/RaisedButton';
import base from './config.js'
import RefreshIndicator from 'material-ui/RefreshIndicator';

const style = {
  margin: 12,
  backgroundColor: 'black',
}
const style2 = {
  container: {
    position: 'relative',
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};
const linkStyle ={
  color: 'white',
  marginTop: 18,
  textDecoration: 'none'
}
class App extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      email: '',
      invitation: 'searching for a player'
    }
  }
  componentDidMount(){
    /*
    base.fetch('invitations', {
    context: this,
    then: (data) => {
    this.setState({
      invitation: data
    })
    }
    })
        base.syncState('invitations', {
        state: 'invitations',
        context: this,
        asArray: true
      })
    */
    base.onAuth(this.authStateChanged.bind(this))
  }
  signIn(){
    base.authWithOAuthPopup('github',
    this.authStateChanged.bind(this))
  }
  signOut(){
    base.unauth()
    this.setState({
      name: '',
      email: ''
    })
  }
  authStateChanged(user){
    console.log(user)
    this.setState({
      name: user.displayName,
      email: user.email
    })

  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
          <div className="App">
              <Link to="/question" activeStyle={{color:'red'}} style={linkStyle}>To Question</Link>
              <Link to="/answer" activeStyle={{color:'red'}} style={linkStyle}>To Answer</Link>
              <Link to="/" style={linkStyle}>Back</Link>
              <h4>You are logged as: {this.state.name}</h4>
              <h4>Your email: {this.state.email}</h4>

                  <RaisedButton label="Login to start game" style={style}
                  onClick={this.signIn.bind(this)}/>
                  <RaisedButton label="Signout" style={style}
                  onClick={this.signOut.bind(this)}/>
          </div>
          <span>
          {this.state.invitation}
            <RefreshIndicator
            size={40}
            left={10}
            top={0}
            status="loading"
            style={style2.refresh}/>

          </span>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}
export default App;
