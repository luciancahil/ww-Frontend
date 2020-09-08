import React from 'react';

class Bar extends React.Component {
  render() {
    return (
        <div id = "bars">
            <div id = "bar">
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
        </div>
    )
  }
}


export default Bar;