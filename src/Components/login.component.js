import React from 'react';
import Loginbox from './loginbox.component';


class Login extends React.Component {
  constructor(props){
    super();

  }

  render() {

    if(this.props.username != "nothing"){
      return (<h1>You are already loged in.</h1>)
    }


    return (
      <Loginbox chageUser = {this.props.chageUser}/>
    )
    
  }
}


export default Login;