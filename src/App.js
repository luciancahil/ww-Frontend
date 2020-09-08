import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./Components/login.component"
import Signup from "./Components/signup.component"
import UserInfo from "./Components/userinfo.component"
import Info from "./Components/info.component"
import Navbar from "./Components//navbar.component"

function App() {
  let homecomponent = Login

  return (
    <Router>
      <Navbar logedIn={true}/>

      <Route path="/" exact component= {homecomponent} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/users" component={UserInfo} />
      <Route path="/info" component={Info} />

    </Router>
  );
}

export default App;
