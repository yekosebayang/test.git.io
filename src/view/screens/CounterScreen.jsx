import React from "react"

// const CounterScreen = () => {
//     return (
//         <div>
//             <h1>Hello</h1>
//         </div>
//     )
// }

class CounterScreen extends React.Component {
    render() {
        return(
            <div>
                <h4>{this.props.terserah}</h4>
            </div>
        )
    }
}

export default CounterScreen