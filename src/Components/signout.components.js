import React from 'react';

class SignOut extends React.Component {

    componentDidMount(){
        this.props.clearSession();
    }

    render() {
        return <h2>You are now loged out</h2>;
    }
}


export default SignOut;