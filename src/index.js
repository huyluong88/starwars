import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Questions from './container/questions'
import Answers from './container/answers'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/question" component={Questions} />
      <Route path="/answer" component={Answers} />
    </Route>
  </Router>,
  document.getElementById('root')
);


//<Route path={"/"} component={App}: main component, will always be present on the page
//IndexRoute is the first children to be rendered then so forth
