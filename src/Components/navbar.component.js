import React from 'react';
import NavLink from './navlink.component'

class Navbar extends React.Component {
    constructor(props){
        super();

        this.state = {
            rightTitle : "Log In",
            rightLink : "login"
        }
        //checks if a user is logged in
        if(props.username !== "nothing"){  //right button shold be a logged out button
            this.rightTitle = "Log Out"
            this.rightLink = "signOut"
        }else{                      //right button should be a login button
            this.rightTitle = "Log In";
            this.rightLink = "login"
        }
    }

    componentDidUpdate(){
        if(this.props.username !== "nothing"){  //right button shold be a logged out button
            if(this.state.rightTitle !== "Log Out")
                this.setState({
                    rightTitle : "Log Out",
                    rightLink : "signOut"
                })
        }else{                      //right button should be a login button
            if(this.state.rightTitle !== "Log In")
                this.setState({
                    rightTitle : "Log In",
                    rightLink : "login"
                })
        }
    }

    render() {
        return (
            <nav className = "topnav">
                <NavLink link = "/" title = "Home"/>
                <NavLink link = "info" title = "Info"/>
                <NavLink classes = "right" link = {this.state.rightLink} title = {this.state.rightTitle}/>
            </nav>
        )
    }
}


export default Navbar;