import React from 'react';
import NavLink from './navlink.component'

class Navbar extends React.Component {

    constructor(props){
        super();
        //console.log(props);
        console.log(props.logedIn)
    }

    render() {

        return (
            <NavLink link = "youtube.com" title = "YouTube"/>
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