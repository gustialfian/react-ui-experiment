/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory, Link, Route, Router } from 'react-router'

import App from './App'
import CommentBox from './components/CommentBox'
import FormValidation from './components/FormValidation'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/coment-box" component={CommentBox} />
      <Route path="/form-validation" component={FormValidation} />
    </Route>
  </Router>
  ), document.getElementById('root')
);
