import React from 'react';
import LoginError from './loginerror.component'


class LoginBox extends React.Component {
    constructor(props){
        super(props);
        
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.state = {
            login_username: "" ,
            login_password: "",
            login_status: "Hello"
        };
        if(sessionStorage.getItem(this.props.randomSession + "username") !== null){
            props.quickStart(sessionStorage.getItem(this.props.randomSession + "username"))
        }
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
        let userN = this.state.login_username;
        let passW = this.state.login_password;
        let fetchURL = "http://weightwatchbackend-env.eba-jkqtmzzk.us-east-2.elasticbeanstalk.com/login?username=" + userN + "&password=" + passW;


        fetch(fetchURL)
            .then((response) => response.text())
            .then((text) => {
                this.setState({
                    login_status: text
                })
                if(this.state.login_status == "Granted"){
                    this.props.chageUser(userN, passW);
                    window.history.pushState('page2', 'Title', '/home');
                    

                    console.log(sessionStorage.getItem(this.props.randomSession + "username"))
                }
            })
    }


    render() {
        return(
            <div id = "LoginBoxOuter">
                <div id = "Loginbox">
                    <div id = "LoginTop"><h2>Login</h2></div>

                    <div id = "LoginBottom">
                        <div id = "LoginForms">
                            <plaintext>Username:</plaintext><input type = "text" value = {this.state.login_username} onChange = {this.onChangeUsername}></input><br></br>
                            <plaintext>Password:</plaintext><input type = "password" value = {this.state.login_password} onChange = {this.onChangePassword}></input><br></br>
                            <LoginError type = {this.state.login_status}/>
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


export default LoginBox;