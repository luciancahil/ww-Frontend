import React from 'react';
import LoginError from './loginerror.component'


class SignUp extends React.Component {
  constructor(props){
    super(props);

    //this.onSubmit = this.onSubmit.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePasswordOne = this.onChangePasswordOne.bind(this);
    this.onChangePasswordTwo = this.onChangePasswordTwo.bind(this);
    this.state = {
        signup_username: "" ,
        signup_password_one: "",
        signup_password_two: "",
        signup_status: "Hello"
    };
    if(sessionStorage.getItem(this.props.randomSession + "username") !== null){
        props.quickStart(sessionStorage.getItem(this.props.randomSession + "username"))
    }
  }

  onChangeUsername(e){
      this.setState({
        signup_username : e.target.value
      })
  }

  onChangePasswordOne(e){
    this.setState({
        signup_password_one : e.target.value
    })
  }

  onChangePasswordTwo(e){
    this.setState({
        signup_password_two : e.target.value
    })
  }

  render() {
    return(
        <div class = "BoxBoxOuter">
            <div class = "Box">
                <div class = "BoxTop"><h2>Signup</h2></div>

                <div class = "BoxBottom">
                    <div class = "BoxForms">
                        <plaintext>Username:</plaintext><input type = "text" value = {this.state.signup_username} onChange = {this.onChangeUsername}></input><br></br>
                        <plaintext>Password:</plaintext><input type = "password" value = {this.state.signup_password_one} onChange = {this.onChangePasswordOne}></input><br></br>
                        <plaintext>Retype Password:</plaintext><input type = "password" value = {this.state.signup_password_two} onChange = {this.onChangePasswordTwo}></input><br></br>
                        <LoginError type = {this.state.signup_status}/>
                    </div>

                    
                    <div className = "SignupButtonOuter">
                        <div className = "SignupButtonInner">
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