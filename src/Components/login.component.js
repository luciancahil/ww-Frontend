import React from 'react';
import Loginbox from './loginbox.component';


class Login extends React.Component {
  constructor(props){
    super();

  }

  render() {

    return (
      <Loginbox chageUser = {this.props.chageUser}/>
    )
    
  }
}


export default Login;