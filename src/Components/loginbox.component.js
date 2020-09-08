import React from 'react';
//tortilla
class Login extends React.Component {


    constructor(props){
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.state = {
            login_username: "" ,
            login_password: ""
        };
    }

    onChangeUsername(e){
        e.preventDefault();

        this.setState({
            login_username: e.target.value
        })
    }

    onChangePassword(e){
        e.preventDefault();

        this.setState({
            login_password: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        console.log(this.state.login_username)
        console.log(this.state.login_password)
    }

    render() {
        return(
            <div id = "LoginBoxOuter">
                <div id = "Loginbox">
                    <div id = "LoginTop"><h2>Login</h2></div>

                    <div id = "LoginBottom">
                        <div id = "LoginForms">
                            <plaintext>username:</plaintext><input type = "text" onChange = {this.onChangeUsername}></input><br></br>
                            <plaintext>Password:</plaintext><input type = "text" onChange = {this.onChangePassword}></input><br></br>
                        </div>

                        <div className = "LoginButtonOuter">
                            <div className = "LoginButtonInner">
                                <button onClick = {this.onSubmit}>Sign in</button>
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