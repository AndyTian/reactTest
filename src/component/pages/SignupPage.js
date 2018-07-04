import React from 'react';
import SignupForm from '../forms/SignupForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signup } from '../../actions/users';

class SignupPage extends React.Component{
  submit = data =>
    this.props.signup(data).then(() => this.props.history.push("/dashboard"));

  render(){
    return (
      <div>
        <SignupForm submit={this.submit}/>
      </div>
    );
  }
}

SignupPage.propTypes = {
  history: PropTypes.shape({
      push:PropTypes.func.isRequried
  }).isRequried,
  signup: PropTypes.func.isRequried
}

export default connect(null,{ signup })(SignupPage);
