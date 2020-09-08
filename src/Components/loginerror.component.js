import React from 'react';
import WrongPass from './PasswordErrors/wrongpass.component'

class LoginError extends React.Component {
    monkey = {}

    constructor(props){
        super(props)
        this.state = {
            error_message : "none"
        }
        console.log(props.type)
        if(props.type == "Denied"){
            this.setState({error_message: WrongPass});
        }
    }

    componentDidUpdate(){
        if(this.props.type == "Denied"){
            if(this.state.error_message != "Error! Your Password is Incorrect"){
                this.setState({error_message: "Error! Your Password is Incorrect"});
            }
        }
        
        if(this.props.type == "Unfound"){
            if(this.state.error_message != "Error! Your Username is not registered."){
                this.setState({error_message: "Error! Your Username is not registered."});
            }
        }
    }

    render() {
        if(this.state.error_message == "none"){
            return null;
        }

        return (
            <plaintext id = "LoginError">{this.state.error_message}</plaintext>
        )
    }
}


export default LoginError;