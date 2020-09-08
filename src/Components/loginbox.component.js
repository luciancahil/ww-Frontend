import React from 'react';
//tortilla
class Login extends React.Component {
  render() {
    return(
        <div id = "LoginBoxOuter">
            <div id = "Loginbox">
                <div id = "LoginTop"><h2>Login</h2></div>

                <div id = "LoginBottom">
                    <div id = "LoginForms">
                        <plaintext>Username:</plaintext><input type = "text"></input><br></br>
                        <plaintext>Password:</plaintext><input type = "text"></input><br></br>
                    </div>

                    <div className = "LoginButtonOuter">
                        <div className = "LoginButtonInner">
                            <button>Sign in</button>
                        </div>
                    </div>
                    <div className = "LoginButtonOuter">
                        <div className = "LoginButtonInner">
                            <button>Sign up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}


export default Login;