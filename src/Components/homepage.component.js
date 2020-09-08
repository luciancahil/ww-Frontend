import React from 'react';
import LoginBox from './loginbox.component'
import User from './user/user.component'

class HomePage extends React.Component {
  render() {
      if(this.props.username != "nothing"){
        return <User/>
      }else{
        return <LoginBox chageUser = {this.props.chageUser} randomSession = {this.props.randomSession} quickStart = {this.props.quickStart}/>
      }
  }
}


export default HomePage;