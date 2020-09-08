import React from 'react';
import NavLink from './navlink.component'

class Navbar extends React.Component {
    rightTitle = "";
    rightLink = "";


    constructor(props){
        super();
        //console.log(props);
        console.log(props.logedIn);
        if(props.logedIn){  //right button shold be a logged out button
            this.rightTitle = "Log Out"
            this.rightLink = "/signOut"
        }else{
            this.rightTitle = "Log In";
            this.rightLink = "/login"
        }
    }

    render() {

        return (
            <nav className = "topnav">
                <NavLink link = "/" title = "Home"/>
                <NavLink link = "/info" title = "info"/>
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