import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./Components/login.component"
import Signup from "./Components/signup.component"
import UserInfo from "./Components/userinfo.component"
import Info from "./Components/info.component"
import Navbar from "./Components//navbar.component"
import HomePage from "./Components/homepage.component"
import SignOut from "./Components/signout.components"
import SignedUp from "./Components/signedup.component"

class MainClass extends React.Component{
    constructor(props){
        super();
        this.state = {
            username : 'nothing',
            password : "",
            radomSession: "es7S9"
        }

        this.changeUser = this.changeUser.bind(this);
        this.quickStart = this.quickStart.bind(this);
        this.clearSession = this.clearSession.bind(this);

        if(sessionStorage.getItem(this.state.randomSession + "username") !== null){
            this.quickStart(sessionStorage.getItem(this.state.randomSession + "username") !== null)
        }
    }

    changeUser(newUser, newPass){
        this.setState({
            username : newUser,
            password : newPass
        })

        sessionStorage.setItem(this.state.randomSession + "username", newUser);
        sessionStorage.setItem(this.state.randomSession + "password", newPass);
        console.log(sessionStorage.getItem(this.state.randomSession + "username", newUser))
    }

    quickStart(newUser){
        this.setState({
            username : newUser
        })
    }

    clearSession(){
        sessionStorage.clear();
        this.setState({
            username : "nothing",
            password : ""
        })
    }

    render(){
        return (
            <Router>
            <Navbar username = {this.state.username}/>

            
            <Route path="/" exact render={(props) => <HomePage {...props} username = {this.state.username} chageUser = {this.changeUser} randomSession = {this.state.randomSession} quickStart = {this.quickStart}/>} />
            <Route path="/login" render={(props) => <Login {...props} username = {this.state.username} chageUser = {this.changeUser} randomSession = {this.state.randomSession} quickStart = {this.quickStart}/>} />
            <Route path="/home" render={(props) => <HomePage {...props} username = {this.state.username} chageUser = {this.changeUser} randomSession = {this.state.randomSession} quickStart = {this.quickStart}/>} />
            <Route path="/signOut" render={(props) => <SignOut {...props} clearSession = {this.clearSession}/>} />
            <Route path="/signup" component={Signup} />
            <Route path="/users" component={UserInfo} />
            <Route path="/signedup" component={SignedUp} />

            </Router>
        );
    }
}

export default MainClass;
