import React from 'react';
import Loginbox from './loginbox.component';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Login extends React.Component {
  constructor(props){
    super();

    console.log(props.username);
  }

  render() {
    console.log(this.props);

    return (
      <Loginbox router = {Route}/>
    )
    
  }
}


export default Login;