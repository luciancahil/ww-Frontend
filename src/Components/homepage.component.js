import React from 'react';
import LoginBox from './loginbox.component'

class HomePage extends React.Component {
  render() {
      if(this.props.username != "nothing"){
        return <h2>Hello {this.props.username}</h2>
      }else{
        return <LoginBox chageUser = {this.props.chageUser} randomSession = {this.props.randomSession} quickStart = {this.props.quickStart}/>
      }
  }
}


export default HomePage;