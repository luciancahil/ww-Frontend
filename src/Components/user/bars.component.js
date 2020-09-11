import React from 'react';

class Bars extends React.Component {
    constructor(props){
        super()

        

        this.state = {
            date : "",
            height : 0,
            abs : 0,
            neck : 0,
            entries: null
        }

        this.getEntries = this.getEntries.bind(this);
        this.getEntries();

        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeHeight = this.onChangeHeight.bind(this);
        this.onChangeAbs = this.onChangeAbs.bind(this);
        this.onChangeNeck = this.onChangeNeck.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
        this.getEntries();
    }

    getEntries(){
        var getURL = "https://weight.wwtbe.nl/retrieve?username=" + sessionStorage.getItem(this.state.randomSession + "username")
        fetch(getURL)
            .then(response => response.json())
            .then(({data}) => {
                console.log(data[0])
            })
            .catch(err => console.log(err))
        
        /*
        fetch(getURL).then(response => response.text())
        .then((data) => JSON.parse(data))
        .then(data => console.log(data));*/
    }


    onChangeDate(e){
        e.preventDefault();

        this.state.date = e.target.value
    }
    onChangeHeight(e){
        e.preventDefault();

        this.state.height = e.target.value
    }
    onChangeAbs(e){
        e.preventDefault();

        this.state.abs = e.target.value
    }
    onChangeNeck(e){
        e.preventDefault();

        this.state.neck = e.target.value
    }

    onSubmit(e){
        const fetchURL = "https://weight.wwtbe.nl/addEntry?username=" + sessionStorage.getItem(this.state.randomSession + "username") 
        + "&entrydate='" + this.state.date + "'&height=" + this.state.height + "&abdomen=" + this.state.abs + "&neck=" + this.state.neck

        fetch(fetchURL).then(response => console.log(response)).catch(err => console.log(err))
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
                    <h2><button onClick = {this.onSubmit}>Submit</button></h2>
                </span>
            </div>
        </div>
    )
  }
}


export default Bars;