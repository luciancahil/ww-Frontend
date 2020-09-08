import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./Components/login.component"
import Signup from "./Components/signup.component"
import UserInfo from "./Components/userinfo.component"
import Info from "./Components/info.component"
import Navbar from "./Components//navbar.component"
import HomePage from "./Components/homepage.component"

class MainClass extends React.Component{
    constructor(props){
        super();
        this.state = {
            username : 'nothing',
            radomSession: "es7S9"
        }

        this.changeUser = this.changeUser.bind(this);
    }

    changeUser(newUser){
        this.setState({
            username : newUser
        })
    }

    render(){
        return (
            <Router>
            <Navbar username = {this.state.username}/>

            
            <Route path="/" exact render={(props) => <Login {...props} username = {this.state.username} chageUser = {this.changeUser}/>} />
            <Route path="/login" render={(props) => <Login {...props} username = {this.state.username} chageUser = {this.changeUser} randomSession = {this.state.randomSession} />} />
            <Route path="/home" render={(props) => <HomePage {...props} username = {this.state.username} chageUser = {this.changeUser} randomSession = {this.state.randomSession}/>} />
            <Route path="/signup" component={Signup} />
            <Route path="/users" component={UserInfo} />
            <Route path="/info" component={Info} />

            </Router>
        );
    }
}

export default MainClass;
