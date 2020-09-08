import React from 'react';
import NavLink from './navlink.component'

class Navbar extends React.Component {
    rightTitle = "";
    rightLink = "";


    constructor(props){
        super();

        //checks if a user is logged in
        if(props.username != "nothing"){  //right button shold be a logged out button
            this.rightTitle = "Log Out"
            this.rightLink = "#/signOut"
        }else{                      //right button should be a login button
            this.rightTitle = "Log In";
            this.rightLink = "#/login"
        }
    }

    render() {

        return (
            <nav className = "topnav">
                <NavLink link = "#/" title = "Home"/>
                <NavLink link = "#/info" title = "Info"/>
                <NavLink classes = "right" link = {this.rightLink} title = {this.rightTitle}/>
            </nav>
        )
    }
}


export default Navbar;

/*

<div className="topnav">
                <a className="active">Home</a>
                <a className="#news">Signup</a>
                <a className="#contact">Information</a>
                <a className="#about">Signout</a>
            </div>

            */