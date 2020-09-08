import React from 'react';

class Bars extends React.Component {
  render() {
    return (
        <div id = "bars">
            <div class = "bar">
                <span>
                    <h2>Date</h2>
                </span>
                <span>
                    <h2>Height</h2>
                </span>
                <span>
                    <h2>Abdomen</h2>
                </span>
                <span>
                    <h2>Neck</h2>
                </span>
                <span>
                    <h2>Body Fat %</h2>
                </span>
                <span>
                    <h2>Daily Change</h2>
                </span>
                <span>
                    <h2>7-Day Change</h2>
                </span>
            </div>
            <div class = "bar">
                <span>
                    <input type = "date"></input>
                </span>
                <span>
                    <input type = "number"></input>
                </span>
                <span>
                    <input type = "number"></input>
                </span>
                <span>
                    <input type = "number"></input>
                </span>
                <span>
                    <h2>N/A</h2>
                </span>
                <span>
                    <h2>N/A</h2>
                </span>
                <span>
                    <h2><button>Submit</button></h2>
                </span>
            </div>
        </div>
    )
  }
}


export default Bars;