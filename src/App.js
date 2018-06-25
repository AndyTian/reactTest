import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './component/HomePage'
import LoginPage from './component/LoginPage'

const App = () => (
  <div>
    <Route path="/" exact component={HomePage} />
    <Route path="/login" exact component={LoginPage} />
  </div>
);

export default App;
