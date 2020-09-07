import React from 'react';

class Navbar extends React.Component {

    constructor(props){
        super();
        //console.log(props);
        console.log(props.logedIn)
    }

    render() {

        return (
            <div className="topnav">
                <a className="active">Home</a>
                <a className="#news">Signup</a>
                <a className="#contact">Information</a>
                <a className="#about">Signout</a>
            </div>
        )
    }
}


export default Navbar;