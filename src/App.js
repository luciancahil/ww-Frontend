import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./Components/login.component"
import Signup from "./Components/signup.component"
import UserInfo from "./Components/userinfo.component"
import Info from "./Components/info.component"

function App() {
  return (
    <Router>
      <h1>Navbar</h1>

      <Route path="/" exact component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/users" component={UserInfo} />
      <Route path="/info" component={Info} />

    </Router>
  );
}

export default App;
