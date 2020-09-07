import React from 'react';

class Info extends React.Component {
    link = "";
    title = "";
    navClass = "";

    constructor(props){
        super();

        this.link = props.link;
        this.title = props.title;
        this.navClass = "nav" + this.title;
    }

    render() {
        return (
            <a href = {this.link} className={this.navClass} >{this.title}</a>
        );
    }
}


export default Info;