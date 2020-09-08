import React from 'react';

class Login extends React.Component {
  render() {
    return(
        <div id = "LoginBoxOuter">
            <div id = "Loginbox">
                <h3>Login</h3>
                <plaintext>Username:</plaintext><input type = "text"></input>
                <plaintext>Password:</plaintext><input type = "text"></input><br></br>
                <button>Sign In</button>
                <button>Sign Up</button>
            </div>
        </div>
    )
  }
}


export default Login;