import React from 'react';

class LoginError extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            error_message : "none"
        }
    }

    //Changes after a login attempt
    componentDidUpdate(){
        const wrongPass = "Error! Your Password is Incorrect";
        const notRegistered = "Error! Your Username is not registered.";
        const shortUser = "Error! Your username must be 5 characters long";

        if(this.props.type == "Denied"){
            if(this.state.error_message != wrongPass){
                this.setState({error_message: wrongPass});
            }
        }
        
        if(this.props.type == "Unfound"){
            if(this.state.error_message != notRegistered){
                this.setState({error_message: notRegistered});
            }
        }

        if(this.props.type == "short user"){
            if(this.state.error_message != shortUser){
                this.setState({error_message: shortUser});
            }
        }
    }

    render() {
        if(this.state.error_message == "none"){
            return null;
        }

        return (
            <plaintext id = "BoxError">{this.state.error_message}</plaintext>
        )
    }
}


export default LoginError;