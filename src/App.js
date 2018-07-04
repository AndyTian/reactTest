import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomePage from './component/pages/HomePage';
import LoginPage from './component/pages/LoginPage';
import SignupPage from './component/pages/SignupPage';
import DashboardPage from './component/pages/DashboardPage';
import UserRoute from './component/routes/UserRoute';
import GuestRoute from './component/routes/GuestRoute';

const App = ({ location }) => (
  <div className="ui container">
    <Route location={location} path="/" exact component={HomePage} />
    <GuestRoute location={location} path="/login" exact component={LoginPage} />
    <GuestRoute location={location} path="/signup" exact component={SignupPage} />
    <UserRoute location={location} path="/dashboard" exact component={DashboardPage} />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequried
  }).isRequried
}

export default App;
