import React from "react"
class CounterScreen extends React.Component {
    state = {
        counter: 0,
        counter2: 0,
        counter3: 0,
        // namaku: ""
    }

    render(){
        return(
        <div>
            <div>
                <h1>
                    {/* {this.state.namaku} */}
                    Counter 1 = {this.state.counter}
                </h1>
                <div className="row container">
                    <input 
                    type="button" 
                    value="+"
                    className="btn btn-primary"
                    onClick={() => this.setState({ counter : this.state.counter + 1})}/>
                    <input 
                    type="button" 
                    value="-"
                    className="btn btn-danger"
                    onClick={() => this.setState({ counter : this.state.counter - 1})}/>
                {/* pemanggilan di isi ke funnction biar ga auto ke click di render pertama */}
                </div>
            </div>

            <div>
                <h1>
                    {/* {this.state.namaku} */}
                    Counter 2 = {this.state.counter2}
                </h1>
                <div className="row container">
                    <input 
                    type="button" 
                    value="+"
                    className="btn btn-primary"
                    onClick={() => this.setState({ counter2 : this.state.counter2 + 1})}/>
                    <input 
                    type="button" 
                    value="-"
                    className="btn btn-danger"
                    onClick={() => this.setState({ counter2 : this.state.counter2 - 1})}/>
                {/* pemanggilan di isi ke funnction biar ga auto ke click di render pertama */}
                </div>
            </div>

            <div>
                <h1>
                    {/* {this.state.namaku} */}
                    Counter 3 = {this.state.counter3}
                </h1>
                <div className="row container">
                    <input 
                    type="button" 
                    value="+"
                    className="btn btn-primary"
                    onClick={() => this.setState({ counter3 : this.state.counter3 + 1})}/>
                    <input 
                    type="button" 
                    value="-"
                    className="btn btn-danger"
                    onClick={() => this.setState({ counter3 : this.state.counter3 - 1})}/>
                {/* pemanggilan di isi ke funnction biar ga auto ke click di render pertama */}
                </div>
            </div>

            <div>
                <h1>
                    {/* {this.state.namaku} */}
                    Counter all
                </h1>
                <div className="row container">
                    <input 
                    type="button" 
                    value="+"
                    className="btn btn-primary"
                    onClick={() => this.setState({ counter: this.state.counter + 1, counter2: this.state.counter2 + 1,
                        counter3 : this.state.counter3 + 1})}/>
                    <input 
                    type="button" 
                    value="-"
                    className="btn btn-danger"
                    onClick={() => this.setState({ counter: this.state.counter - 1, counter2: this.state.counter2 - 1,
                        counter3 : this.state.counter3 - 1})}/>
                    <input 
                    type="button" 
                    value="reset"
                    className="btn btn-warning"
                    onClick={() => this.setState({ counter: 0, counter2: 0,
                        counter3 : 0})}/>
                    
                {/* pemanggilan di isi ke funnction biar ga auto ke click di render pertama */}
                </div>
            </div>
        </div>
            
        )
    }
}
export default CounterScreen