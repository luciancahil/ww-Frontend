import React from 'react';

class Bar extends React.Component {
  render() {
        let date = this.props.thisDate
        date = date.substring(0, 10)
        return (<div className = "bar">
            <span>
                <h2>{date}</h2>
            </span>
            <span>
                <h2>{this.props.thisHeight}</h2>
            </span>
            <span>
                <h2>{this.props.thisAb}</h2>
            </span>
            <span>
                <h2>{this.props.thisNeck}</h2>
            </span>
            <span>
                <h2>{this.props.thisPer + "%"}</h2>
            </span>
            <span>
                <h2>{this.props.thisChange + "%"}</h2>
            </span>
            <span>
                <h2>{this.props.thisWeek + "%"}</h2>
            </span>
        </div>)
  }
}


export default Bar;