import React from 'react';
import Loginbox from './loginbox.component';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Login extends React.Component {
  render() {
    return (
      <Loginbox router = {Route}/>
    )
    
  }
}


export default Login;