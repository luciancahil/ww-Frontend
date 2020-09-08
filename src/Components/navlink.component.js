import React from 'react';

class Info extends React.Component {
    link = "";
    title = "";
    navClass = "";
    

    constructor(props){
        super();

        this.link = props.link;
        this.title = props.title;
        this.navClass = "nav"  + " " + props.classes;
    }

    render() {
        return (
            <a href = {this.props.link} className={this.navClass} >{this.props.title}</a>
        );
    }
}


export default Info;