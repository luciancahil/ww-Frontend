import React from 'react';

class Bars extends React.Component {
    constructor(props){
        super()

        this.state = {
            date : "",
            height : 0,
            abs : 0,
            neck : 0
        }

        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeHeight = this.onChangeHeight.bind(this);
        this.onChangeAbs = this.onChangeAbs.bind(this);
        this.onChangeNeck = this.onChangeNeck.bind(this);
    }


    onChangeDate(e){
        e.preventDefault();

        this.state.date = e.target.value
        console.log(this.state.date)
    }
    onChangeHeight(e){
        e.preventDefault();

        this.state.height = e.target.value
        console.log(this.state.height)
    }
    onChangeAbs(e){
        e.preventDefault();

        this.state.abs = e.target.value
        console.log(this.state.abs)
    }
    onChangeNeck(e){
        e.preventDefault();

        this.state.neck = e.target.value
        console.log(this.state.neck)
    }

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
                    <input id = "inputDate" type = "date" onChange = {this.onChangeDate}></input>
                </span>
                <span>
                    <input id = "inputHeight" type = "number" onChange = {this.onChangeHeight}></input>
                </span>
                <span>
                    <input id = "inputAbs" type = "number" onChange = {this.onChangeAbs}></input>
                </span>
                <span>
                    <input id = "inputNeck" type = "number" onChange = {this.onChangeNeck}></input>
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