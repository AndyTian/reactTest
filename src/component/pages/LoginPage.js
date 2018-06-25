import React from 'react';
import LoginForm from "../forms/LoginForm";

class LoginPage extends React.Component{
  submit = data => {
    console.log(data);
  };

  render(){
    return (
      <div>
        <h2>LoginPage</h2>
        <LoginForm submit={this.submit}/>
      </div>
    );
  }
}

export default LoginPage;
