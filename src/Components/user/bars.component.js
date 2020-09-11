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
        this.operateData = this.operateData.bind(this);
        this.getBodyFatPercent = this.getBodyFatPercent.bind(this);
        this.getDailyChange = this.getDailyChange.bind(this);
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
                this.operateData(data)
            })
            .catch(err => console.log(err))
        
        /*
        fetch(getURL).then(response => response.text())
        .then((data) => JSON.parse(data))
        .then(data => console.log(data));*/
    }


    //works to calculate body fat percentage, daily change, and weekly change
    operateData(array){
        console.log(array);
        let length = array.length;

        //adds fat percentage to all entries
        for(let i = 0; i < length; i++){
            this.getBodyFatPercent(array[i]);
        }


        //add value for daily change
        array[length -1].change = 0;

        for(let i = 0; i < length - 1; i ++){
            this.getDailyChange(array[i], array[i + 1])
        }


        console.log(array)
    }

    getBodyFatPercent(entry){
        const abWidth = entry.abdomen;
        const neckWidth = entry.neck;
        const h = entry.height;

        const fatPercent = 0 
            + 86.010 * Math.log(abWidth - neckWidth)/Math.log(10)
            - 70.041 * Math.log(h)/Math.log(10)
            + 36.76;
        
        entry.fatPer = fatPercent.toFixed(1);
    }

    getDailyChange(entry1, entry0){
        let per1 = entry1.fatPer;
        let per0 = entry0.fatPer;

        let perChange = (per1 - per0)/per0;

        entry1.change = perChange*100;
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