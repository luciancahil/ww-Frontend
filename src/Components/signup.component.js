import React from 'react';
import LoginError from './loginerror.component'


class SignUp extends React.Component {
  constructor(props){
    super(props);

    //this.onSubmit = this.onSubmit.bind(this);
    //this.onChangeUsername = this.onChangeUsername.bind(this);
    //this.onChangePassword = this.onChangePassword.bind(this);
    this.state = {
        signup_username: "" ,
        signup_password: "",
        signup_status: "Hello"
    };
    if(sessionStorage.getItem(this.props.randomSession + "username") !== null){
        props.quickStart(sessionStorage.getItem(this.props.randomSession + "username"))
    }
  }

  render() {
    return(
        <div class = "BoxBoxOuter">
            <div class = "Box">
                <div class = "BoxTop"><h2>Login</h2></div>

                <div class = "BoxBottom">
                    <div class = "BoxForms">
                        <plaintext>Username:</plaintext><input type = "text" value = {this.state.signup_username} onChange = {this.onChangeUsername}></input><br></br>
                        <plaintext>Password:</plaintext><input type = "password" value = {this.state.signup_password} onChange = {this.onChangePassword}></input><br></br>
                        <LoginError type = {this.state.signup_status}/>
                    </div>

                    <div className = "LoginButtonOuter">
                        <div className = "LoginButtonInner">
                            <button onClick = {this.onSubmit}>Sign in</button>
                        </div>
                    </div>
                    <div className = "LoginButtonOuter">
                        <div className = "LoginButtonInner">
                            <a href = "/signup"><button>Sign up</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}


export default SignUp;