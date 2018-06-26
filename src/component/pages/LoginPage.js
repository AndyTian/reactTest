import React from 'react';
import LoginForm from '../forms/LoginForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';

class LoginPage extends React.Component{
  submit = data =>
    this.props.login(data).then(() => this.props.history.push("/"))

  render(){
    return (
      <div>
        <h2>LoginPage</h2>
        <LoginForm submit={this.submit}/>
      </div>
    );
  }
}

LoginPage.propTypes = {
  login: PropTypes.func.isRequried,
  history: PropTypes.shape({
    push: PropTypes.func.isRequried
  }).isRequried
};

export default connect(null,{ login })(LoginPage);
