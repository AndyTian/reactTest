import React from 'react';
import PropTypes from 'prop-types';
import { Link }  from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth.js';

const HomePage = ({isAuthenticated, logout}) =>(
  <div>
    <h2>HomePage</h2>
    {isAuthenticated ? (<button onClick={() => logout()}>Logout</button>
    ):(
       <div><Link to="/login">Login</Link> or <Link to="/signup">Sign Up</Link></div>
    )}
  </div>
);

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequried,
  logout: PropTypes.func.isRequried
}

function mapStateToProps(state){
  return {
    isAuthenticated: !!state.user.token
  };
}

export default connect(mapStateToProps, {logout: actions.logout})(HomePage);
