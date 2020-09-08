import React from 'react';

class SignOut extends React.Component {

    componentDidMount(){
        this.props.changeUser('nothing')
        window.history.pushState('page2', 'Title', '/home');
    }

    render() {
        console.log("HI")
        return null;
    }
}


export default SignOut;